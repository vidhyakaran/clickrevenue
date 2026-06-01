'use client';

import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'left': return 'translateX(-40px)';
      case 'right': return 'translateX(40px)';
      case 'down': return 'translateY(-30px)';
      default: return 'translateY(30px)';
    }
  };

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transform: getInitialTransform() }}
    >
      {children}
    </div>
  );
}
