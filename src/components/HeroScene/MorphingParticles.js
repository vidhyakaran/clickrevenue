'use client';

import React, { useMemo, useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 6000;
const DURATION = 2.0; // Morph duration in seconds

// --- Shape Generators ---
function getRandomPointInSphere(radius) {
  const u = Math.random();
  const v = Math.random();
  const theta = u * 2.0 * Math.PI;
  const phi = Math.acos(2.0 * v - 1.0);
  const r = Math.cbrt(Math.random()) * radius;
  const sinPhi = Math.sin(phi);
  return [
    r * sinPhi * Math.cos(theta),
    r * sinPhi * Math.sin(theta),
    r * Math.cos(phi)
  ];
}

function getPointOnSphere(radius) {
  const u = Math.random();
  const v = Math.random();
  const theta = u * 2.0 * Math.PI;
  const phi = Math.acos(2.0 * v - 1.0);
  const sinPhi = Math.sin(phi);
  return [
    radius * sinPhi * Math.cos(theta),
    radius * sinPhi * Math.sin(theta),
    radius * Math.cos(phi)
  ];
}

function getPointInCube(size) {
  return [
    (Math.random() - 0.5) * size,
    (Math.random() - 0.5) * size,
    (Math.random() - 0.5) * size
  ];
}

function getPointOnTorus(radius, tube) {
  const u = Math.random() * Math.PI * 2;
  const v = Math.random() * Math.PI * 2;
  return [
    (radius + tube * Math.cos(v)) * Math.cos(u),
    (radius + tube * Math.cos(v)) * Math.sin(u),
    tube * Math.sin(v)
  ];
}

function getPointOnHelix(radius, height, turns) {
  const t = Math.random();
  const angle = t * Math.PI * 2 * turns;
  const h = (t - 0.5) * height;
  // Add some thickness to the helix
  const thickness = 0.5;
  const dx = (Math.random() - 0.5) * thickness;
  const dy = (Math.random() - 0.5) * thickness;
  const dz = (Math.random() - 0.5) * thickness;
  return [
    radius * Math.cos(angle) + dx,
    h + dy,
    radius * Math.sin(angle) + dz
  ];
}

export default function MorphingParticles({ currentShapeIndex = 0 }) {
  const meshRef = useRef();
  const { clock, pointer } = useThree();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Pre-calculate target arrays for different shapes
  const shapes = useMemo(() => {
    const randomArray = new Float32Array(PARTICLE_COUNT * 3);
    const sphereArray = new Float32Array(PARTICLE_COUNT * 3);
    const cubeArray = new Float32Array(PARTICLE_COUNT * 3);
    const torusArray = new Float32Array(PARTICLE_COUNT * 3);
    const helixArray = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      
      const rand = getRandomPointInSphere(15);
      randomArray[i3] = rand[0]; randomArray[i3+1] = rand[1]; randomArray[i3+2] = rand[2];

      const sph = getPointOnSphere(6);
      sphereArray[i3] = sph[0]; sphereArray[i3+1] = sph[1]; sphereArray[i3+2] = sph[2];

      const cub = getPointInCube(8);
      cubeArray[i3] = cub[0]; cubeArray[i3+1] = cub[1]; cubeArray[i3+2] = cub[2];

      const tor = getPointOnTorus(5, 2);
      torusArray[i3] = tor[0]; torusArray[i3+1] = tor[1]; torusArray[i3+2] = tor[2];

      const hel = getPointOnHelix(4, 12, 3);
      helixArray[i3] = hel[0]; helixArray[i3+1] = hel[1]; helixArray[i3+2] = hel[2];
    }
    return [sphereArray, torusArray, helixArray, cubeArray, randomArray];
  }, []);

  // The active array being rendered
  const positions = useMemo(() => new Float32Array(shapes[0]), [shapes]);

  // Keep track of morph progress
  const morphState = useRef({
    sourceShape: shapes[0],
    targetShape: shapes[0],
    startTime: 0,
    morphing: false
  });

  // When shape index changes, trigger morph
  useEffect(() => {
    morphState.current = {
      sourceShape: new Float32Array(positions), // snapshot of current position
      targetShape: shapes[currentShapeIndex % shapes.length],
      startTime: clock.elapsedTime,
      morphing: true
    };
  }, [currentShapeIndex, shapes, clock, positions]);

  // Interpolation logic
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    const time = state.clock.elapsedTime;
    
    // Morphing
    if (morphState.current.morphing && !prefersReducedMotion) {
      const progress = (time - morphState.current.startTime) / DURATION;
      
      // Easing function (cubic in-out)
      let ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      if (progress >= 1) {
        ease = 1;
        morphState.current.morphing = false;
      }

      for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
        const start = morphState.current.sourceShape[i];
        const end = morphState.current.targetShape[i];
        positions[i] = start + (end - start) * ease;
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Overall slow rotation and interactive tilt
    if (!prefersReducedMotion) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;

      // Subtle parallax reaction to mouse
      const targetX = (pointer.y * Math.PI) / 8;
      const targetY = (pointer.x * Math.PI) / 8;
      meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.05;
    } else {
      // If reduced motion, snap to target directly
      if (morphState.current.morphing) {
        for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
          positions[i] = morphState.current.targetShape[i];
        }
        meshRef.current.geometry.attributes.position.needsUpdate = true;
        morphState.current.morphing = false;
      }
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
          usage={THREE.DynamicDrawUsage}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#E31B23"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
