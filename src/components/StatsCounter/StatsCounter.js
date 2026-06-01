'use client';

import { useEffect, useRef, useState } from 'react';

function Counter({ end, suffix = '', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const stats = [
  { value: 500, suffix: '+', label: 'Brands Scaled' },
  { value: 10, suffix: 'x', label: 'Average ROI' },
  { value: 50, suffix: 'M+', label: 'Revenue Generated' },
  { value: 15, suffix: '+', label: 'Industry Verticals' },
];

export default function StatsCounter({ customStats }) {
  const data = customStats || stats;
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
          {/* ★ Gradient number values ★ */}
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #00F5D4, #7B2FFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
          }}>
            <Counter end={stat.value} suffix={stat.suffix} prefix={stat.prefix || ''} />
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
