'use client';

import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "[TODO: Insert real client testimonial here. Ensure it highlights measurable results.]",
    name: "[TODO: Insert Name]",
    role: "[TODO: Insert Role]",
    company: "[TODO: Insert Company]",
  },
  {
    quote: "[TODO: Insert real client testimonial here. Ensure it highlights measurable results.]",
    name: "[TODO: Insert Name]",
    role: "[TODO: Insert Role]",
    company: "[TODO: Insert Company]",
  },
  {
    quote: "[TODO: Insert real client testimonial here. Ensure it highlights measurable results.]",
    name: "[TODO: Insert Name]",
    role: "[TODO: Insert Role]",
    company: "[TODO: Insert Company]",
  },
  {
    quote: "[TODO: Insert real client testimonial here. Ensure it highlights measurable results.]",
    name: "[TODO: Insert Name]",
    role: "[TODO: Insert Role]",
    company: "[TODO: Insert Company]",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  
  const hasRealData = testimonials.some(t => !t.quote.includes('[TODO'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!hasRealData) return null;

  return (
    <div style={{
      maxWidth: '700px',
      margin: '0 auto',
      textAlign: 'center',
      padding: 'var(--space-2xl) 0',
    }}>
      {/* Glassmorphic testimonial card */}
      <div style={{
        position: 'relative',
        minHeight: '240px',
        background: 'rgba(18, 18, 28, 0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-2xl) var(--space-xl)',
      }}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              position: i === current ? 'relative' : 'absolute',
              top: i === current ? 'auto' : 0,
              left: i === current ? 'auto' : 0,
              width: '100%',
              opacity: i === current ? 1 : 0,
              transform: i === current ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease',
              pointerEvents: i === current ? 'auto' : 'none',
              padding: i === current ? 0 : 'var(--space-2xl) var(--space-xl)',
            }}
          >
            <Quote
              size={36}
              style={{
                background: 'linear-gradient(135deg, #E31B23, #FF3A42)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                opacity: 0.6,
                marginBottom: 'var(--space-md)',
              }}
            />
            <p style={{
              color: 'var(--cr-grey-200)',
              fontSize: 'var(--fs-md)',
              lineHeight: 1.8,
              fontStyle: 'italic',
              marginBottom: 'var(--space-xl)',
            }}>
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p style={{
                color: 'var(--cr-white)',
                fontWeight: 700,
                fontSize: 'var(--fs-base)',
                fontFamily: 'var(--font-display)',
              }}>
                {t.name}
              </p>
              <p style={{
                color: 'var(--cr-grey-400)',
                fontSize: 'var(--fs-sm)',
              }}>
                {t.role} — {t.company}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots — neon gradient active */}
      <div style={{
        display: 'flex',
        gap: '8px',
        justifyContent: 'center',
        marginTop: 'var(--space-xl)',
      }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i === current ? 'linear-gradient(90deg, #E31B23, #FF3A42)' : 'var(--cr-border-light)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: i === current ? '0 0 10px rgba(227, 27, 35, 0.4)' : 'none',
            }}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
