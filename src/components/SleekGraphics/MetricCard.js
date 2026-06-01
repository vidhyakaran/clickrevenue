'use client';
import React from 'react';
import { Zap } from 'lucide-react';

export default function MetricCard() {
  return (
    <div style={{
      background: 'rgba(18, 18, 28, 0.4)',
      backdropFilter: 'blur(24px)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: 'var(--radius-2xl)',
      padding: 'var(--space-2xl)',
      width: '100%',
      aspectRatio: '16/10',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    }}>
      {/* Background Pulse */}
      <div style={{
        position: 'absolute',
        width: '150px',
        height: '150px',
        background: 'var(--neon-purple)',
        filter: 'blur(80px)',
        opacity: 0.4,
        animation: 'glowPulse 4s ease-in-out infinite',
      }} />

      {/* Content */}
      <div style={{ zIndex: 1, textAlign: 'center' }}>
        <div className="neon-icon" style={{ margin: '0 auto var(--space-lg)', width: 64, height: 64, borderRadius: 'var(--radius-full)' }}>
          <Zap size={32} />
        </div>
        <div style={{ color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>
          Delivery Speed
        </div>
        <div style={{ color: 'var(--cr-white)', fontSize: 'var(--fs-4xl)', fontFamily: 'var(--font-display)', fontWeight: 900 }}>
          <span className="text-gradient">10</span> MINS
        </div>
        <div style={{ marginTop: 'var(--space-md)', display: 'inline-block', background: 'rgba(0, 245, 212, 0.1)', border: '1px solid rgba(0, 245, 212, 0.2)', padding: '4px 12px', borderRadius: 'var(--radius-full)', color: 'var(--neon-cyan)', fontSize: 'var(--fs-xs)', fontWeight: 600 }}>
          Industry Leading
        </div>
      </div>
    </div>
  );
}
