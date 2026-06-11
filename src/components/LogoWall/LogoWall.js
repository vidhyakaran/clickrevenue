'use client';
import styles from './LogoWall.module.css';

const logos = [
  "D2C Brand", "Retail Tech", "Fintech Pro", "HealthPlus", "Foodify", "StyleCraft"
];

export default function LogoWall() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {logos.map((logo, i) => (
          <div key={i} className={styles.logoBox}>
            {logo}
          </div>
        ))}
        {/* Duplicate for infinite scroll effect */}
        {logos.map((logo, i) => (
          <div key={`dup-${i}`} className={styles.logoBox}>
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
