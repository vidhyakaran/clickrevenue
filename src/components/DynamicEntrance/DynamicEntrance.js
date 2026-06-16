'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo/Logo';
import PreloaderAnim from './PreloaderAnim';
import styles from './DynamicEntrance.module.css';

const EntranceContext = createContext({
  stage: 'settled',
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
    const played = sessionStorage.getItem('cr_preloader_v2');
    if (!played && !prefersReducedMotion) {
      setHasPlayed(false);
      setStage('loading');
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (hasPlayed || !mounted) return;

    const timers = [];

    // Progress bar fills over 1.5s, then fade out
    timers.push(setTimeout(() => setStage('revealing'), 1500));

    timers.push(setTimeout(() => {
      setStage('settled');
      setHasPlayed(true);
      sessionStorage.setItem('cr_preloader_v2', 'true');
    }, 2200));

    const handleSkip = () => {
      timers.forEach(clearTimeout);
      setStage('settled');
      setHasPlayed(true);
      sessionStorage.setItem('cr_preloader_v2', 'true');
    };

    window.addEventListener('keydown', handleSkip);
    window.addEventListener('click', handleSkip, { once: true });
    window.addEventListener('scroll', handleSkip, { once: true });

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('keydown', handleSkip);
      window.removeEventListener('click', handleSkip);
      window.removeEventListener('scroll', handleSkip);
    };
  }, [hasPlayed, mounted]);

  // SSR / reduced-motion / already-played → static
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

        {/* Preloader Overlay */}
        <AnimatePresence>
          {stage === 'loading' && (
            <motion.div
              initial={{ opacity: 1, backgroundColor: 'var(--bg-primary, #08080C)' }}
              exit={{ opacity: 0, backgroundColor: 'transparent' }}
              transition={{ duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] }}
              className={styles.overlay}
            >
              {/* Centered Logo — Blasts (scales up massively) on exit */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 50 }}
                transition={{ 
                  opacity: { duration: 0.8, ease: "linear" },
                  scale: { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] } 
                }}
                className={styles.logoWrapper}
              >
                <PreloaderAnim size={100} />
              </motion.div>

              {/* Progress Bar — Fades out quickly before the blast */}
              <motion.div 
                exit={{ opacity: 0 }} 
                transition={{ duration: 0.3 }}
                className={styles.progressTrack}
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                  className={styles.progressBar}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content — fades in after preloader */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: stage === 'revealing' || stage === 'settled' ? 1 : 0,
            y: stage === 'revealing' || stage === 'settled' ? 0 : 20,
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={styles.contentWrapper}
        >
          {children}
        </motion.div>

        {/* Skip hint */}
        {stage === 'loading' && (
          <button
            onClick={() => {
              setStage('settled');
              setHasPlayed(true);
              sessionStorage.setItem('cr_preloader_v2', 'true');
            }}
            className={styles.skipBtn}
            aria-label="Skip intro"
          >
            Press any key to skip
          </button>
        )}
      </div>
    </EntranceContext.Provider>
  );
}
