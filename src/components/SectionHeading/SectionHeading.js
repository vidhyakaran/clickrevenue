'use client';

import styles from './SectionHeading.module.css';

export default function SectionHeading({ label, title, titleHighlight, subtitle, align = 'center' }) {
  return (
    <div className={`${styles.heading} ${align === 'left' ? styles.left : ''}`}>
      {label && (
        <div className={styles.label}>
          <span className={styles.labelDot} />
          {label}
        </div>
      )}
      <h2 className={styles.title}>
        {title}{' '}
        {titleHighlight && <span className={styles.titleRed}>{titleHighlight}</span>}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.underline} />
    </div>
  );
}
