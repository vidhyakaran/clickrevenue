'use client';
import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function GrowthChart() {
  return (
    <div style={{
      background: 'rgba(18, 18, 28, 0.4)',
      backdropFilter: 'blur(24px)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: 'var(--radius-2xl)',
      padding: 'var(--space-2xl)',
      width: '100%',
      aspectRatio: '16/10',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%',
        background: 'radial-gradient(circle at 50% 50%, rgba(0, 245, 212, 0.1), transparent 60%)',
        animation: 'rotate 20s linear infinite',
        pointerEvents: 'none'
      }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
        <div>
          <div style={{ color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Revenue Growth</div>
          <div style={{ color: 'var(--cr-white)', fontSize: 'var(--fs-lg)', fontFamily: 'var(--font-display)', fontWeight: 800, marginTop: '4px' }}>
            [TODO: Insert Metric]
          </div>
        </div>
        <div className="neon-icon" style={{ width: 48, height: 48, borderRadius: 'var(--radius-full)' }}>
          <TrendingUp size={24} />
        </div>
      </div>

      {/* CSS Bar Chart */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '50%', gap: '12px', zIndex: 1 }}>
        {[20, 35, 25, 45, 60, 85, 100].map((height, i) => (
          <div key={i} style={{
            width: '100%',
            height: `${height}%`,
            background: i === 6 ? 'var(--gradient-neon)' : 'rgba(255, 255, 255, 0.05)',
            borderRadius: '4px 4px 0 0',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {i === 6 && (
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)',
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
