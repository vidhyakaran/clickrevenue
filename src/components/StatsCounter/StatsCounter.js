'use client';
import React from 'react';

const defaultStats = [
  { value: '[TODO: Insert Brands Scaled]', suffix: '', label: 'Brands Scaled' },
  { value: '[TODO: Insert Avg ROI]', suffix: '', label: 'Average ROI' },
  { value: '[TODO: Insert Revenue]', suffix: '', label: 'Revenue Generated' },
  { value: '[TODO: Insert Verticals]', suffix: '', label: 'Industry Verticals' },
];

export default function StatsCounter({ customStats }) {
  const data = customStats || defaultStats;
  
  if (!data || data.length === 0) return null;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${data.length}, 1fr)`,
      gap: 'var(--space-xl)',
      textAlign: 'center',
      padding: 'var(--space-3xl) 0',
    }}>
      {data.map((stat, i) => (
        <div key={i} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          padding: 'var(--space-lg)',
          background: 'rgba(18, 18, 28, 0.4)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 'var(--radius-xl)',
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transformStyle: 'preserve-3d',
        }}
        className="stat-card"
        >
          {/* Static rendering - no "0" state before hydration */}
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', /* slightly smaller for TODO text */
            fontWeight: 800,
            background: 'linear-gradient(135deg, #00F5D4, #7B2FFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.2,
          }}>
            {stat.prefix || ''}{stat.value}{stat.suffix || ''}
          </span>
          <span style={{
            color: 'var(--cr-grey-400)',
            fontSize: 'var(--fs-sm)',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}>
            {stat.label}
          </span>
        </div>
      ))}

      <style jsx>{`
        .stat-card:hover {
          transform: perspective(1000px) rotateX(10deg) rotateY(-10deg) rotateZ(2deg) scale(1.05) translateY(-10px);
          box-shadow: -15px 25px 50px rgba(0, 0, 0, 0.4), 0 8px 40px rgba(0, 245, 212, 0.1), 0 4px 60px rgba(123, 47, 255, 0.08);
          border-color: transparent;
          z-index: 10;
        }
        @media (max-width: 768px) {
          div:first-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
