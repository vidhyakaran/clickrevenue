'use client';

import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import MorphingParticles from './MorphingParticles';

export default function HeroScene() {
  const [shapeIndex, setShapeIndex] = useState(0);

  // Automatically cycle through shapes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShapeIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, right: 0 }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <MorphingParticles currentShapeIndex={shapeIndex} />
        
        <EffectComposer disableNormalPass>
          <Bloom
            luminanceThreshold={0.15}
            mipmapBlur
            intensity={2.5}
          />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL}
            offset={[0.0015, 0.0015]}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
