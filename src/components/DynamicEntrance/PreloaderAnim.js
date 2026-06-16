'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PreloaderAnim({ size = 100 }) {
  const [phase, setPhase] = useState('mouse'); // 'mouse', 'dot', 'cursor'

  useEffect(() => {
    // Sequence the phases
    const t1 = setTimeout(() => setPhase('dot'), 800);
    const t2 = setTimeout(() => setPhase('cursor'), 1100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div style={{ width: size, height: size, position: 'relative' }}>
      <AnimatePresence mode="wait">
        
        {phase === 'mouse' && (
          <motion.svg
            key="mouse"
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'backIn' }}
            style={{ position: 'absolute', top: 0, left: 0 }}
          >
            {/* Mouse Body */}
            <motion.rect
              x="25" y="15" width="50" height="70" rx="25"
              stroke="#FFFFFF" strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
            {/* Mouse Scroll Wheel */}
            <motion.rect
              x="47" y="25" width="6" height="16" rx="3"
              stroke="#E31B23" strokeWidth="4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            />
          </motion.svg>
        )}

        {phase === 'dot' && (
          <motion.div
            key="dot"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 5, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 20,
              height: 20,
              marginTop: -10,
              marginLeft: -10,
              borderRadius: '50%',
              background: '#E31B23',
              boxShadow: '0 0 20px #E31B23'
            }}
          />
        )}

        {phase === 'cursor' && (
          <motion.svg
            key="cursor"
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            style={{ position: 'absolute', top: 0, left: 0 }}
          >
            {/* Cursor Arrow SVG Path */}
            <path
              d="M30,20 L75,65 L55,65 L65,85 L52,90 L42,70 L25,85 Z"
              fill="#E31B23"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </motion.svg>
        )}

      </AnimatePresence>
    </div>
  );
}
