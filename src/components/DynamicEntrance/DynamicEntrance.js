'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Rocket } from 'lucide-react';
import styles from './DynamicEntrance.module.css';

const EntranceContext = createContext({
  stage: 'settled', // 'initial', 'launching', 'shockwave', 'revealed', 'counting', 'settled'
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

    const timers = [];
    
    // 1. Rocket launches upwards
    timers.push(setTimeout(() => setStage('launching'), 200));
    
    // 2. Shockwave triggers as rocket hits center
    timers.push(setTimeout(() => setStage('shockwave'), 700));
    
    // 3. Hero content reveals
    timers.push(setTimeout(() => setStage('revealed'), 1000));
    
    // 4. Start Counting
    timers.push(setTimeout(() => setStage('counting'), 1400));
    
    // 5. Settle state (cleanup)
    timers.push(setTimeout(() => {
      setStage('settled');
      setHasPlayed(true);
      sessionStorage.setItem('clickRevenueEntrancePlayed', 'true');
    }, 2400));

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

  if (!mounted || hasPlayed) {
    return (
      <EntranceContext.Provider value={{ stage: 'settled', hasPlayed: true }}>
        {children}
      </EntranceContext.Provider>
    );
  }

  const isIntroActive = stage !== 'settled' && stage !== 'counting' && stage !== 'revealed';

  return (
    <EntranceContext.Provider value={{ stage, hasPlayed }}>
      <div className={styles.container}>
        
        {/* Dark Overlay that clears via shockwave */}
        <AnimatePresence>
          {isIntroActive && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={stage === 'shockwave' ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={styles.darkOverlay}
            />
          )}
        </AnimatePresence>

        {/* Shockwave Burst */}
        <AnimatePresence>
          {stage === 'shockwave' && (
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 50, opacity: 0, borderWidth: '20px' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={styles.shockwave}
            />
          )}
        </AnimatePresence>

        {/* Rocket Animation */}
        <AnimatePresence>
          {(stage === 'initial' || stage === 'launching') && (
            <motion.div
              initial={{ y: '100vh', scale: 1 }}
              animate={stage === 'launching' ? { y: '-100vh', scale: 0.8 } : { y: '100vh', scale: 1 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
              className={styles.rocketWrapper}
            >
              <div style={{ filter: 'drop-shadow(0 0 20px #00FF88)' }}>
                <Rocket size={64} fill="#00FF88" stroke="#00FF88" strokeWidth={1.5} />
              </div>
              {/* Exhaust trail */}
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={stage === 'launching' ? { opacity: 1, height: 300 } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={styles.exhaustTrail} 
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{
            opacity: stage === 'revealed' || stage === 'counting' || stage === 'settled' ? 1 : 0,
            y: stage === 'revealed' || stage === 'counting' || stage === 'settled' ? 0 : 50,
            scale: stage === 'revealed' || stage === 'counting' || stage === 'settled' ? 1 : 0.95
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={styles.contentWrapper}
        >
          {children}
        </motion.div>

        {/* Skip Button */}
        {isIntroActive && (
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
        )}
      </div>
    </EntranceContext.Provider>
  );
}
