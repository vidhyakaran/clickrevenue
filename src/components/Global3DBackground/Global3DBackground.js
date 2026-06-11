'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

function ParticleField(props) {
  const ref = useRef();
  
  // Generate random particles spread across a wide area to fill the screen
  const count = 4000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spread X and Y wide across the viewport, Z gives depth
      pos[i3] = (Math.random() - 0.5) * 25;     // x
      pos[i3 + 1] = (Math.random() - 0.5) * 25; // y
      pos[i3 + 2] = (Math.random() - 0.5) * 15; // z
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    
    // Slow, cinematic drift upward and rotating slightly
    ref.current.rotation.x -= delta * 0.01;
    ref.current.rotation.y -= delta * 0.015;
    
    // Make the particles slowly drift upwards (simulating rising embers/data)
    ref.current.position.y += delta * 0.1;
    // Reset position to loop the flow
    if (ref.current.position.y > 5) {
      ref.current.position.y = -5;
    }

    // Subtle parallax reaction to mouse
    const mouseX = (state.pointer.x * Math.PI) / 20;
    const mouseY = (state.pointer.y * Math.PI) / 20;
    
    // Smooth interpolation towards mouse target for parallax
    ref.current.rotation.x += (mouseY - ref.current.rotation.x) * 0.02;
    ref.current.rotation.y += (mouseX - ref.current.rotation.y) * 0.02;
  });

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#E31B23" // Brand Red
          size={0.035} // Slightly larger dots so they are visible across the screen
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export default function Global3DBackground() {
  return (
    <div style={{ 
      position: 'fixed', // Fixed to cover entire viewport regardless of scroll
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      zIndex: -1, // Keep it completely behind everything
      pointerEvents: 'none' // Don't block clicks on the actual website
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        {/* Subtle ambient light just in case */}
        <ambientLight intensity={0.5} />
        <ParticleField />
        <EffectComposer disableNormalPass>
          <Bloom
            luminanceThreshold={0.1}
            mipmapBlur
            intensity={2.0} // Stronger cinematic glow
          />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL}
            offset={[0.001, 0.001]} // Subtle lens distortion
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
