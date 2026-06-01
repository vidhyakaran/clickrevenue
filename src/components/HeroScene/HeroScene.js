'use client';

export default function HeroScene() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      overflow: 'hidden',
    }}>
      {/* Neon Gradient Orb 1 — Cyan (top-left) */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 245, 212, 0.15) 0%, rgba(0, 245, 212, 0.05) 40%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'orbFloat1 12s ease-in-out infinite',
        pointerEvents: 'none',
      }} />

      {/* Neon Gradient Orb 2 — Purple (center-right) */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '5%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123, 47, 255, 0.12) 0%, rgba(123, 47, 255, 0.04) 40%, transparent 70%)',
        filter: 'blur(80px)',
        animation: 'orbFloat2 15s ease-in-out infinite',
        pointerEvents: 'none',
      }} />

      {/* Neon Gradient Orb 3 — Pink (bottom) */}
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '30%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 0, 110, 0.1) 0%, rgba(255, 0, 110, 0.03) 40%, transparent 70%)',
        filter: 'blur(70px)',
        animation: 'orbFloat3 18s ease-in-out infinite',
        pointerEvents: 'none',
      }} />

      {/* Neon Gradient Orb 4 — Blue (center) */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '45%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 180, 216, 0.1) 0%, rgba(0, 180, 216, 0.03) 40%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'orbFloat1 20s ease-in-out infinite reverse',
        pointerEvents: 'none',
      }} />

      {/* Subtle grid pattern overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
        opacity: 0.5,
      }} />
    </div>
  );
}
