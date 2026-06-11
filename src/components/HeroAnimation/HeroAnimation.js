'use client';
import { useEffect, useState, useRef } from 'react';
import { MousePointer2, TrendingUp, DollarSign } from 'lucide-react';
import styles from './HeroAnimation.module.css';

export default function HeroAnimation() {
  const [stage, setStage] = useState('initial'); // initial, moving, clicking, revealing, counting
  const [count, setCount] = useState(0);
  
  const targetRevenue = 250; // representing millions/crores

  useEffect(() => {
    // Animation Sequence
    const timer1 = setTimeout(() => setStage('moving'), 500);
    const timer2 = setTimeout(() => setStage('clicking'), 2000);
    const timer3 = setTimeout(() => setStage('revealing'), 2600);
    const timer4 = setTimeout(() => setStage('counting'), 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  useEffect(() => {
    if (stage === 'counting') {
      let current = 0;
      const duration = 2000;
      const interval = 20;
      const steps = duration / interval;
      const increment = targetRevenue / steps;

      const counter = setInterval(() => {
        current += increment;
        if (current >= targetRevenue) {
          setCount(targetRevenue);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, interval);

      return () => clearInterval(counter);
    }
  }, [stage]);

  return (
    <div className={styles.container}>
      {/* Dynamic Background Grid */}
      <div className={styles.gridOverlay} />

      {/* The Revenue Dashboard (Hidden initially, revealed after click) */}
      <div className={`${styles.dashboard} ${stage === 'revealing' || stage === 'counting' ? styles.dashboardVisible : ''}`}>
        <div className={styles.dashboardHeader}>
          <TrendingUp className="text-accent" size={24} />
          <div className={styles.dashboardTitle}>Live Revenue Impact</div>
        </div>
        <div className={styles.revenueDisplay}>
          <span className={styles.currency}>₹</span>
          <span className={styles.count}>{count}</span>
          <span className={styles.suffix}>Cr+</span>
        </div>
        
        {/* Animated Bar Chart */}
        <div className={styles.chartContainer}>
          {[40, 60, 30, 80, 50, 100].map((height, i) => (
            <div key={i} className={styles.barWrapper}>
              <div 
                className={styles.bar} 
                style={{ 
                  height: stage === 'counting' ? `${height}%` : '0%',
                  transitionDelay: `${i * 100}ms`
                }} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Ripple Effect */}
      {stage === 'clicking' && <div className={styles.ripple} />}

      {/* Animated Cursor */}
      <div className={`${styles.cursor} ${styles['cursor-' + stage]}`}>
        <MousePointer2 size={32} fill="#F0F0F5" stroke="#0A0A0F" strokeWidth={2} />
      </div>
    </div>
  );
}
