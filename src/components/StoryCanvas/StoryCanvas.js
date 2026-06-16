'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Noise } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import GlassShards from './GlassShards';

export default function StoryCanvas() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none',
      background: 'var(--bg-primary)'
    }}>
      <Canvas camera={{ position: [0, 0, 30], fov: 60 }} dpr={[1, 2]}>
        {/* Soft lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        
        {/* Environment mapping is crucial for the Glass Material to reflect something */}
        <Environment preset="city" />
        
        {/* The GSAP Scroll-bound Glass Physics Engine */}
        <GlassShards />

        <EffectComposer disableNormalPass>
          <Bloom
            luminanceThreshold={0.5}
            mipmapBlur
            intensity={1.0}
          />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL}
            offset={[0.003, 0.003]}
          />
          <Noise opacity={0.04} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
