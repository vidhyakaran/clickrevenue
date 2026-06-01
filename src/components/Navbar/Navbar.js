'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import styles from './Navbar.module.css';
import Logo from '@/components/Logo/Logo';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Performance Marketing', href: '/services#performance-marketing' },
      { label: 'SEO & Organic Growth', href: '/services#seo' },
      { label: 'Marketplace Growth', href: '/marketplace-growth' },
      { label: 'Quick Commerce', href: '/quick-commerce' },
      { label: 'Growth & Creative Support', href: '/services#growth-support' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Industries', href: '/industries' },
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navInner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} style={{ gap: 0 }}>
          <Logo height={38} />
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.href} className={item.children ? styles.dropdown : ''}>
              {item.children ? (
                <>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${styles.dropdownTrigger} ${pathname === item.href ? styles.active : ''}`}
                  >
                    {item.label}
                    <ChevronDown className={styles.dropdownIcon} />
                  </Link>
                  <div className={styles.dropdownMenu}>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className={styles.dropdownItem}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link href="/contact" className={styles.ctaButton}>
              Get Started
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className={`${styles.menuToggle} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.open : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
        <ul className={styles.mobileNavLinks}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.mobileNavLink}>
                {item.label}
              </Link>
              {item.children && (
                <ul style={{ paddingLeft: '16px', marginTop: '4px' }}>
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} className={styles.mobileNavLink} style={{ fontSize: '0.9rem', borderBottom: 'none', padding: '8px 0' }}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className={styles.mobileCta}>
          <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
