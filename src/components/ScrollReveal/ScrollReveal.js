'use client';

import { motion } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }) {
  const getVariants = () => {
    let x = 0;
    let y = 0;

    switch (direction) {
      case 'left': x = -40; break;
      case 'right': x = 40; break;
      case 'down': y = -30; break;
      case 'up': y = 30; break;
      default: break;
    }

    return {
      hidden: { opacity: 0, x, y },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          cubicBezier: [0.16, 1, 0.3, 1],
          delay: delay / 1000,
        },
      },
    };
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
}
