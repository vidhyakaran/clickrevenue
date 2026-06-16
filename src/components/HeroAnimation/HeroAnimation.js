'use client';
import { TrendingUp } from 'lucide-react';
import styles from './HeroAnimation.module.css';

export default function HeroAnimation() {
  // Now just a static visual representation of the dashboard to complement the Hero text,
  // since DynamicEntrance handles the global click sequence and StatsCounter handles the real numbers.
  
  return (
    <div className={styles.container} style={{ pointerEvents: 'none' }}>
      <div className={`${styles.dashboard} ${styles.dashboardVisible}`} style={{ transform: 'none', opacity: 1 }}>
        <div className={styles.dashboardHeader}>
          <TrendingUp className="text-accent" size={24} />
          <div className={styles.dashboardTitle}>Live Performance Dashboard</div>
        </div>
        
        {/* Animated Bar Chart Loop */}
        <div className={styles.chartContainer}>
          {[40, 60, 30, 80, 50, 100].map((height, i) => (
            <div key={i} className={styles.barWrapper}>
              <div 
                className={styles.bar} 
                style={{ 
                  height: `${height}%`,
                  animation: `pulseHeight 3s infinite alternate ease-in-out`,
                  animationDelay: `${i * 0.2}s`
                }} 
              />
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes pulseHeight {
            0% { transform: scaleY(0.8); }
            100% { transform: scaleY(1); }
          }
        `}</style>
      </div>
    </div>
  );
}
