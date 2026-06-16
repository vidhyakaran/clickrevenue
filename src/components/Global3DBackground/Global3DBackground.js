'use client';

import { useEffect, useState } from 'react';

/**
 * Ambient mesh background — replaces the heavy Three.js particle canvas.
 * Pure CSS radial gradients that drift slowly. GPU-cheap, lazy, reduced-motion aware.
 */
export default function Global3DBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Blob 1 — Deep red, top-right */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '60vw',
        height: '60vw',
        maxWidth: '800px',
        maxHeight: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(227, 27, 35, 0.08) 0%, transparent 70%)',
        filter: 'blur(80px)',
        animation: reducedMotion ? 'none' : 'ambientDrift1 25s ease-in-out infinite',
        willChange: reducedMotion ? 'auto' : 'transform',
      }} />

      {/* Blob 2 — Deep purple/blue, bottom-left */}
      <div style={{
        position: 'absolute',
        bottom: '-15%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        maxWidth: '700px',
        maxHeight: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100, 20, 60, 0.06) 0%, transparent 70%)',
        filter: 'blur(100px)',
        animation: reducedMotion ? 'none' : 'ambientDrift2 30s ease-in-out infinite',
        willChange: reducedMotion ? 'auto' : 'transform',
      }} />

      {/* Blob 3 — Subtle warm center glow */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '40%',
        width: '40vw',
        height: '40vw',
        maxWidth: '600px',
        maxHeight: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(227, 27, 35, 0.04) 0%, transparent 60%)',
        filter: 'blur(120px)',
        animation: reducedMotion ? 'none' : 'ambientDrift1 35s ease-in-out infinite reverse',
        willChange: reducedMotion ? 'auto' : 'transform',
      }} />
    </div>
  );
}
