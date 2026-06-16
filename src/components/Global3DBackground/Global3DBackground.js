'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

/* ── Particle Layer 1: Dense floating embers ── */
function Embers() {
  const ref = useRef();
  const count = 3000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 60;  // tall so scroll doesn't outrun
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    // slow upward drift
    ref.current.position.y += delta * 0.15;
    if (ref.current.position.y > 10) ref.current.position.y = -10;
    // subtle mouse parallax
    ref.current.rotation.x += (state.pointer.y * 0.02 - ref.current.rotation.x) * 0.02;
    ref.current.rotation.y += (state.pointer.x * 0.02 - ref.current.rotation.y) * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#E31B23"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.9}
      />
    </Points>
  );
}

/* ── Particle Layer 2: Tiny white stars (depth) ── */
function Stars() {
  const ref = useRef();
  const count = 1500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y -= delta * 0.008;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FFFFFF"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.35}
      />
    </Points>
  );
}

/* ── Particle Layer 3: Slow-orbiting accent ring ── */
function AccentRing() {
  const ref = useRef();
  const count = 500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
      const radius = 6 + (Math.random() - 0.5) * 2;
      pos[i * 3]     = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.05;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.15;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FF3A42"
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
}

export default function Global3DBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 55 }}>
        <Embers />
        <Stars />
        <AccentRing />
        <EffectComposer disableNormalPass>
          <Bloom
            luminanceThreshold={0.15}
            mipmapBlur
            intensity={2.5}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
