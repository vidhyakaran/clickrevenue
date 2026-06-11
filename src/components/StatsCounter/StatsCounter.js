'use client';
import React, { useState, useEffect, useRef } from 'react';

const defaultStats = [
  { value: 50, prefix: '', suffix: '+', label: 'Brands Scaled' },
  { value: 4.2, prefix: '', suffix: 'x', label: 'Average ROAS', decimals: 1 },
  { value: 25, prefix: '₹', suffix: 'Cr+', label: 'Revenue Generated' },
  { value: 12, prefix: '', suffix: '+', label: 'Industry Verticals' },
];

export default function StatsCounter({ customStats }) {
  const data = customStats || defaultStats;
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Unobserve once triggered to only animate once
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  if (!data || data.length === 0) return null;

  return (
    <div ref={sectionRef} style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${data.length}, 1fr)`,
      gap: 'var(--space-xl)',
      textAlign: 'center',
      padding: 'var(--space-3xl) 0',
    }}>
      {data.map((stat, i) => (
        <CounterCard key={i} stat={stat} inView={inView} />
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

function CounterCard({ stat, inView }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    const increment = stat.value / steps;

    const counter = setInterval(() => {
      setCurrent((prev) => {
        const next = prev + increment;
        if (next >= stat.value) {
          clearInterval(counter);
          return stat.value;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(counter);
  }, [inView, stat.value]);

  const displayValue = stat.decimals 
    ? current.toFixed(stat.decimals) 
    : Math.floor(current);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      padding: 'var(--space-lg)',
      background: 'var(--bg-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-xl)',
      transition: 'all var(--transition-spring)',
      transformStyle: 'preserve-3d',
    }}
    className="stat-card"
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 800,
        color: 'var(--text-primary)',
        textShadow: '0 0 15px var(--accent-glow)',
        lineHeight: 1.2,
      }}>
        <span className="text-accent">{stat.prefix || ''}</span>
        {displayValue}
        <span className="text-accent">{stat.suffix || ''}</span>
      </span>
      <span style={{
        color: 'var(--text-secondary)',
        fontSize: 'var(--fs-sm)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '1px',
      }}>
        {stat.label}
      </span>
      <style jsx>{`
        .stat-card:hover {
          transform: perspective(1000px) rotateX(10deg) rotateY(-10deg) rotateZ(2deg) scale(1.05) translateY(-10px);
          box-shadow: var(--shadow-accent-strong);
          border-color: var(--accent-primary);
          z-index: 10;
        }
      `}</style>
    </div>

  );
}
