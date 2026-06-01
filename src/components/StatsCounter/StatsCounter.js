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
        }}>
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
        @media (max-width: 768px) {
          div:first-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
