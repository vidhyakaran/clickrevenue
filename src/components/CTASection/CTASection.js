'use client';

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import styles from './CTASection.module.css';

export default function CTASection({
  title = "Ready to Scale Your Brand?",
  subtitle = "Let's build a growth engine for your brand across Ads, Marketplaces and Quick Commerce.",
  primaryText = "Get Started",
  primaryHref = "/contact",
  secondaryText = "Book a Call",
  secondaryHref = "/contact",
}) {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaBg} />
      <div className={`container ${styles.ctaContent}`}>
        <h2 className={styles.ctaTitle}>{title}</h2>
        <p className={styles.ctaSubtitle}>{subtitle}</p>
        <div className={styles.ctaButtons}>
          <Link href={primaryHref} className={styles.ctaBtnPrimary}>
            {primaryText} <ArrowRight size={18} />
          </Link>
          <Link href={secondaryHref} className={styles.ctaBtnSecondary}>
            <Phone size={18} /> {secondaryText}
          </Link>
        </div>
      </div>
    </section>
  );
}
