'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import styles from './DynamicEntrance.module.css';

const EntranceContext = createContext({
  stage: 'settled', // 'initial', 'moving', 'clicked', 'revealed', 'counting', 'settled'
  hasPlayed: true,
});

export const useEntrance = () => useContext(EntranceContext);

export default function DynamicEntrance({ children }) {
  const prefersReducedMotion = useReducedMotion();
  const [hasPlayed, setHasPlayed] = useState(true);
  const [stage, setStage] = useState('settled');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const played = sessionStorage.getItem('clickRevenueEntrancePlayed');
    if (!played && !prefersReducedMotion) {
      setHasPlayed(false);
      setStage('initial');
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (hasPlayed || !mounted) return;

    // Sequence timing
    const timers = [];
    
    // 1. Move cursor in
    timers.push(setTimeout(() => setStage('moving'), 100));
    
    // 2. Click
    timers.push(setTimeout(() => setStage('clicked'), 800));
    
    // 3. Reveal Text
    timers.push(setTimeout(() => setStage('revealed'), 1000));
    
    // 4. Start Counting
    timers.push(setTimeout(() => setStage('counting'), 1400));
    
    // 5. Settle
    timers.push(setTimeout(() => {
      setStage('settled');
      setHasPlayed(true);
      sessionStorage.setItem('clickRevenueEntrancePlayed', 'true');
    }, 2500));

    // Handle skip
    const handleSkip = () => {
      timers.forEach(clearTimeout);
      setStage('settled');
      setHasPlayed(true);
      sessionStorage.setItem('clickRevenueEntrancePlayed', 'true');
    };

    window.addEventListener('keydown', handleSkip);
    window.addEventListener('scroll', handleSkip, { once: true });

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('keydown', handleSkip);
      window.removeEventListener('scroll', handleSkip);
    };
  }, [hasPlayed, mounted]);

  // If SSR or prefers reduced motion or already played, render statically immediately
  if (!mounted || hasPlayed) {
    return (
      <EntranceContext.Provider value={{ stage: 'settled', hasPlayed: true }}>
        {children}
      </EntranceContext.Provider>
    );
  }

  return (
    <EntranceContext.Provider value={{ stage, hasPlayed }}>
      <div className={styles.container}>
        {/* The Animated Cursor */}
        <AnimatePresence>
          {stage !== 'settled' && stage !== 'counting' && (
            <motion.div
              initial={{ x: 100, y: 150, opacity: 0 }}
              animate={
                stage === 'initial' ? { x: 100, y: 150, opacity: 0 } :
                stage === 'moving' ? { x: 0, y: 0, opacity: 1 } :
                { x: 0, y: 0, opacity: 0, scale: 0.8 } // clicked
              }
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={styles.cursorWrapper}
              aria-hidden="true"
            >
              <MousePointer2 size={40} fill="#00FF88" stroke="#0A0A0F" strokeWidth={2} />
              
              {/* Ripple on Click */}
              {stage === 'clicked' && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 1 }}
                  animate={{ scale: 4, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={styles.ripple}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Content (Children) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: stage === 'revealed' || stage === 'counting' || stage === 'settled' ? 1 : 0,
            y: stage === 'revealed' || stage === 'counting' || stage === 'settled' ? 0 : 20
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={styles.contentWrapper}
        >
          {children}
        </motion.div>

        {/* Skip button for accessibility */}
        <button
          onClick={() => {
            setStage('settled');
            setHasPlayed(true);
            sessionStorage.setItem('clickRevenueEntrancePlayed', 'true');
          }}
          className={styles.skipBtn}
          aria-label="Skip entrance animation"
        >
          Skip Intro
        </button>
      </div>
    </EntranceContext.Provider>
  );
}
