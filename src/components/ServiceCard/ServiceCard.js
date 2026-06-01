'use client';

import { ArrowRight } from 'lucide-react';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ icon: Icon, title, description, items, href }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon size={24} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {items && items.length > 0 && (
        <ul className={styles.list}>
          {items.map((item, i) => (
            <li key={i} className={styles.listItem}>
              <span className={styles.bullet} />
              {item}
            </li>
          ))}
        </ul>
      )}
      {href && (
        <div className={styles.arrow}>
          Learn More <ArrowRight size={16} />
        </div>
      )}
    </div>
  );
}
