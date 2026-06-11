'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import styles from './Footer.module.css';
import Logo from '@/components/Logo/Logo';

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo} style={{ display: 'inline-block', marginBottom: 'var(--space-md)' }}>
              <Logo height={32} />
            </Link>
            <p className={styles.tagline}>
              Click that converts and Revenue that grows. Your growth-focused marketing and commerce partner.
            </p>
            <div className={styles.partnerBadges} style={{ display: 'flex', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
              <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)', fontWeight: 600, border: '1px solid var(--border-default)', padding: '4px 8px', borderRadius: '4px' }}>Meta Business Partner</span>
              <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)', fontWeight: 600, border: '1px solid var(--border-default)', padding: '4px 8px', borderRadius: '4px' }}>Google Partner</span>
            </div>
            <div className={styles.socials}>
              <a href="https://linkedin.com/company/clickrevenue" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://twitter.com/clickrevenue" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                <TwitterIcon size={18} />
              </a>
              <a href="https://instagram.com/clickrevenue" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="mailto:hello@clickrevenue.in" className={styles.socialLink} aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h4>Services</h4>
            <ul className={styles.colLinks}>
              <li><Link href="/services#performance-marketing">Performance Marketing</Link></li>
              <li><Link href="/services#seo">SEO & Organic Growth</Link></li>
              <li><Link href="/marketplace-growth">Marketplace Growth</Link></li>
              <li><Link href="/quick-commerce">Quick Commerce</Link></li>
              <li><Link href="/services#growth-support">Growth & Creative Support</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.col}>
            <h4>Company</h4>
            <ul className={styles.colLinks}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className={styles.col}>
            <h4>Stay Updated</h4>
            <p style={{ color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)', marginBottom: 'var(--space-md)' }}>
              Get the latest growth insights delivered to your inbox.
            </p>
            <div className={styles.newsletter}>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className={styles.newsletterInput}
                  id="footer-newsletter-email"
                />
                <button type="submit" className={styles.newsletterBtn}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} ClickRevenue. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
