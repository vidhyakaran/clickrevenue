'use client';

import React, { useRef, useMemo, useLayoutEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SHARD_COUNT = 300;

// Helper to check if a point is inside a basic 2D arrow shape (pointing up-left)
function isPointInCursor(x, y) {
  // Rotate point slightly so the arrow points top-left (-x, +y)
  const angle = -Math.PI / 6; 
  const rx = x * Math.cos(angle) - y * Math.sin(angle);
  const ry = x * Math.sin(angle) + y * Math.cos(angle);

  // Main triangle body (tip at 0,10, base at -6,-2 to 6,-2)
  if (ry > -2 && ry < 10) {
    const widthAtY = ((10 - ry) / 12) * 6;
    if (Math.abs(rx) < widthAtY) return true;
  }
  // Stem
  if (ry <= -2 && ry > -10) {
    if (Math.abs(rx) < 2) return true;
  }
  return false;
}

// Helper to check if a point is inside a computer mouse shape
function isPointInMouse(x, y, z) {
  // Ellipsoid: width 5, length 8, height 4 (top) / 1 (bottom)
  const normX = x / 5;
  const normZ = z / 8;
  const normY = y > 0 ? (y / 4) : (y / 1);
  return (normX * normX + normY * normY + normZ * normZ) <= 1;
}

export default function GlassShards() {
  const meshRef = useRef();
  const progressRef = useRef(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);

    const st = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        // SMOOTHER GSAP: Use a longer duration and a heavier ease to simulate buttery "scrubbing"
        gsap.to(progressRef, {
          current: self.progress,
          duration: 1.2,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      }
    });

    return () => {
      mq.removeEventListener('change', handler);
      st.kill();
    };
  }, []);

  // Pre-calculate target matrices for all 4 chapters for every shard
  const states = useMemo(() => {
    const s1 = []; // Chapter 1: Cursor
    const s2 = []; // Chapter 2: Shattered & Scattered
    const s3 = []; // Chapter 3: Computer Mouse
    const s4 = []; // Chapter 4: Explosion towards camera

    const dummy = new THREE.Object3D();

    for (let i = 0; i < SHARD_COUNT; i++) {
      // Common random scales for the shards
      const scale = 0.4 + Math.random() * 0.8;

      // --- STATE 1: Cursor (Arrow) ---
      let cx, cy, cz;
      let foundCursor = false;
      while (!foundCursor) {
        cx = (Math.random() - 0.5) * 20;
        cy = (Math.random() - 0.5) * 20;
        cz = (Math.random() - 0.5) * 4; // Flat depth
        if (isPointInCursor(cx, cy)) foundCursor = true;
      }
      dummy.position.set(cx, cy, cz);
      dummy.rotation.set(0, 0, Math.random() * 0.2); // slight random tilt
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      s1.push(dummy.matrix.clone());

      // --- STATE 2: Scattered / Shattered ---
      dummy.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 30
      );
      dummy.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );
      dummy.scale.set(scale * 0.6, scale * 0.6, scale * 0.6);
      dummy.updateMatrix();
      s2.push(dummy.matrix.clone());

      // --- STATE 3: Computer Mouse ---
      let mx, my, mz;
      let foundMouse = false;
      while (!foundMouse) {
        mx = (Math.random() - 0.5) * 12;
        my = (Math.random() - 0.5) * 10;
        mz = (Math.random() - 0.5) * 20;
        if (isPointInMouse(mx, my, mz)) foundMouse = true;
      }
      dummy.position.set(mx, my, mz);
      
      // Point shards roughly along the surface normal for a sleek look
      const normal = new THREE.Vector3(mx/5, my > 0 ? my/4 : my/1, mz/8).normalize();
      dummy.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0), normal);
      
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      s3.push(dummy.matrix.clone());

      // --- STATE 4: Explosion (Past Camera) ---
      const dir = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        1 // mostly forward towards camera
      ).normalize();
      
      dummy.position.copy(dir.multiplyScalar(40 + Math.random() * 30));
      dummy.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );
      dummy.scale.set(scale * 1.5, scale * 1.5, scale * 1.5);
      dummy.updateMatrix();
      s4.push(dummy.matrix.clone());
    }

    return [s1, s2, s3, s4];
  }, []);

  const tempMatrix = new THREE.Matrix4();
  const m1 = new THREE.Matrix4();
  const m2 = new THREE.Matrix4();
  const p1 = new THREE.Vector3();
  const p2 = new THREE.Vector3();
  const q1 = new THREE.Quaternion();
  const q2 = new THREE.Quaternion();
  const s1 = new THREE.Vector3();
  const s2 = new THREE.Vector3();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // map 0.0-1.0 to 3 transition segments
    let p = progressRef.current * 3;
    let index1 = Math.floor(p);
    let index2 = Math.min(index1 + 1, 3);
    let lerpFactor = p - index1;

    // Use a smoothstep or power ease on the lerp factor to make assembly "snap" into place nicer
    const easeLerp = Math.pow(lerpFactor, 2) * (3 - 2 * lerpFactor); // smoothstep

    if (prefersReducedMotion) {
      index1 = index2;
      lerpFactor = 1;
    }

    // Slowly rotate the entire structure so it looks 3D
    if (!prefersReducedMotion) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }

    for (let i = 0; i < SHARD_COUNT; i++) {
      m1.copy(states[index1][i]);
      m2.copy(states[index2][i]);

      m1.decompose(p1, q1, s1);
      m2.decompose(p2, q2, s2);

      p1.lerp(p2, easeLerp);
      q1.slerp(q2, easeLerp);
      s1.lerp(s2, easeLerp);

      // Add floating animation (jitter) to make shards look alive
      if (!prefersReducedMotion) {
        const floatOffset = Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.3;
        // Less jitter when fully assembled (easeLerp near 0 or 1)
        const jitterMultiplier = 1 - Math.abs(easeLerp - 0.5) * 2; // peaks at 0.5
        p1.y += floatOffset * (0.2 + jitterMultiplier);
        
        q1.rotateTowards(
          new THREE.Quaternion().setFromEuler(new THREE.Euler(floatOffset*0.1, floatOffset*0.2, 0)),
          0.05
        );
      }

      tempMatrix.compose(p1, q1, s1);
      meshRef.current.setMatrixAt(i, tempMatrix);
    }
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      {/* A subtle red neon point light inside the shards to tie into the brand */}
      <pointLight position={[0, 0, 0]} intensity={20} color="#E31B23" distance={15} />

      <instancedMesh ref={meshRef} args={[null, null, SHARD_COUNT]}>
        <octahedronGeometry args={[1, 0]} />
        
        {/* High-end physical glass material with a slight red tint on the edges */}
        <meshPhysicalMaterial 
          color="#ffffff"
          emissive="#2a0000"
          emissiveIntensity={0.2}
          transmission={1}
          opacity={1}
          metalness={0.1}
          roughness={0.1}
          ior={1.5}
          thickness={3}
          envMapIntensity={2.0}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </instancedMesh>
    </>
  );
}
