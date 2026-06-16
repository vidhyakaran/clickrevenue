'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo/Logo';
import styles from './DynamicEntrance.module.css';

const EntranceContext = createContext({
  stage: 'settled', // 'initial', 'pulsing', 'opening', 'revealed', 'counting', 'settled'
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
    
    // 1. Logo glows/pulses for a moment
    timers.push(setTimeout(() => setStage('pulsing'), 200));
    
    // 2. Gate starts opening
    timers.push(setTimeout(() => setStage('opening'), 1200));
    
    // 3. Hero content reveals
    timers.push(setTimeout(() => setStage('revealed'), 1800));
    
    // 4. Start Counting
    timers.push(setTimeout(() => setStage('counting'), 2200));
    
    // 5. Settle state (cleanup)
    timers.push(setTimeout(() => {
      setStage('settled');
      setHasPlayed(true);
      sessionStorage.setItem('clickRevenueEntrancePlayed', 'true');
    }, 3200));

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

  const isGateVisible = stage === 'initial' || stage === 'pulsing' || stage === 'opening';

  return (
    <EntranceContext.Provider value={{ stage, hasPlayed }}>
      <div className={styles.container}>
        
        {/* Full Screen Shutter Gate */}
        <AnimatePresence>
          {isGateVisible && (
            <div className={styles.shutterWrapper}>
              
              {/* Top Panel */}
              <motion.div
                initial={{ y: 0 }}
                animate={stage === 'opening' ? { y: '-100%' } : { y: 0 }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className={styles.shutterPanel}
              >
                <div className={styles.logoTop}>
                  <motion.div
                    animate={stage === 'pulsing' ? { scale: 1.05, textShadow: '0 0 20px rgba(0,255,136,0.5)' } : { scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{ pointerEvents: 'none', position: 'relative', top: '16px' }} // 16px to align exactly at the cut
                  >
                     <Logo forceDarkMode={true} />
                  </motion.div>
                </div>
              </motion.div>

              {/* Bottom Panel */}
              <motion.div
                initial={{ y: 0 }}
                animate={stage === 'opening' ? { y: '100%' } : { y: 0 }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className={`${styles.shutterPanel} ${styles.shutterPanelBottom}`}
              >
                <div className={styles.logoBottom}>
                  <motion.div
                    animate={stage === 'pulsing' ? { scale: 1.05, textShadow: '0 0 20px rgba(0,255,136,0.5)' } : { scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{ pointerEvents: 'none', position: 'relative', top: '-16px' }} // offset matching top
                  >
                    <Logo forceDarkMode={true} />
                  </motion.div>
                </div>
              </motion.div>

            </div>
          )}
        </AnimatePresence>

        {/* Hero Content Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{
            opacity: stage === 'revealed' || stage === 'counting' || stage === 'settled' ? 1 : 0,
            y: stage === 'revealed' || stage === 'counting' || stage === 'settled' ? 0 : 30,
            scale: stage === 'revealed' || stage === 'counting' || stage === 'settled' ? 1 : 0.98
          }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={styles.contentWrapper}
        >
          {children}
        </motion.div>

        {/* Skip Button */}
        {isGateVisible && (
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
