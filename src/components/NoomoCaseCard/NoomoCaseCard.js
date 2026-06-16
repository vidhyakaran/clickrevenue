import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './NoomoCaseCard.module.css';

export default function NoomoCaseCard({ 
  title, 
  tags, 
  imageSrc, 
  href, 
  variant = 'full' // 'full' or 'half'
}) {
  return (
    <div className={`${styles.cardWrapper} ${styles[variant]}`}>
      <Link href={href} className={styles.coverBlock}>
        <div className={styles.caseLabel}>Case Study</div>
        
        <div className={styles.imageContainer}>
          <img 
            src={imageSrc} 
            alt={`Cover for ${title}`} 
            className={styles.coverImage} 
            loading="lazy"
          />
          <div className={styles.overlay} />
        </div>
      </Link>
      
      <div className={styles.infoBlock}>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.tags}>{tags.join(', ')}</p>
        </div>
        
        <Link href={href} className={styles.hoverIcon} aria-label={`View ${title}`}>
          <div className={styles.iconContainer}>
            <ArrowRight className={styles.arrowMain} size={24} />
            <ArrowRight className={styles.arrowHover} size={24} />
          </div>
        </Link>
      </div>
    </div>
  );
}
