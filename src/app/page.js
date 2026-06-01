'use client';

import { Suspense, lazy } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Target, Search, ShoppingBag,
  Zap, BarChart3, TrendingUp, Users, Globe,
  CheckCircle, MousePointerClick
} from 'lucide-react';
import styles from './page.module.css';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import StatsCounter from '@/components/StatsCounter/StatsCounter';
import CTASection from '@/components/CTASection/CTASection';
import TestimonialSlider from '@/components/TestimonialSlider/TestimonialSlider';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

import HeroScene from '@/components/HeroScene/HeroScene';
import GrowthChart from '@/components/SleekGraphics/GrowthChart';
import PlatformUI from '@/components/SleekGraphics/PlatformUI';
import MetricCard from '@/components/SleekGraphics/MetricCard';

const services = [
  {
    icon: Target,
    title: 'Performance Marketing',
    description: 'Drive measurable growth with data-driven ad campaigns across Meta & Google.',
    items: ['Meta Ads', 'Google Ads', 'Lead Generation', 'Conversion Optimization'],
    href: '/services#performance-marketing',
  },
  {
    icon: Search,
    title: 'SEO & Organic Growth',
    description: 'Dominate search rankings with technical SEO and content-driven strategies.',
    items: ['Technical SEO', 'Content Strategy', 'Organic Traffic Growth'],
    href: '/services#seo',
  },
  {
    icon: ShoppingBag,
    title: 'Marketplace Growth',
    description: 'Scale your presence on Amazon, Flipkart and other major marketplaces.',
    items: ['Amazon Management', 'Flipkart Management', 'Product Optimization'],
    href: '/marketplace-growth',
  },
  {
    icon: Zap,
    title: 'Quick Commerce',
    description: 'Launch and scale on Blinkit, Instamart and other quick commerce platforms.',
    items: ['Blinkit Management', 'Instamart Management', 'Demand Acceleration'],
    href: '/quick-commerce',
  },
  {
    icon: BarChart3,
    title: 'Growth & Creative Support',
    description: 'Full-funnel campaign planning with deep analytics and creative optimization.',
    items: ['Campaign Planning', 'Analytics & Reporting', 'Performance Insights'],
    href: '/services#growth-support',
  },
];

const whyReasons = [
  { icon: TrendingUp, title: 'Revenue-First Approach', desc: 'Every strategy is designed to directly impact your bottom line.' },
  { icon: Users, title: 'One Team, All Channels', desc: 'Performance + Commerce execution under a single, unified team.' },
  { icon: Globe, title: 'Multi-Platform Growth', desc: 'Ads, Marketplaces, Quick Commerce — we cover every channel.' },
  { icon: Zap, title: 'Faster Go-To-Market', desc: 'Launch faster with our proven frameworks and playbooks.' },
  { icon: BarChart3, title: 'Data-Driven Decisions', desc: 'Every move backed by real-time data and performance insights.' },
  { icon: CheckCircle, title: 'End-to-End Support', desc: 'From strategy to execution, we handle the entire growth journey.' },
];

const caseStudies = [
  {
    icon: ShoppingBag,
    tag: 'Marketplace',
    title: 'NatureFresh Foods',
    desc: 'Scaled Amazon & Flipkart sales by 340% with optimized listings and strategic ad campaigns.',
    metrics: [{ value: '340%', label: 'Sales Growth' }, { value: '5.2x', label: 'ROAS' }],
  },
  {
    icon: Zap,
    tag: 'Quick Commerce',
    title: 'StyleCraft D2C',
    desc: 'Launched on Blinkit & Instamart, achieving ₹2Cr monthly run rate within 90 days.',
    metrics: [{ value: '₹2Cr', label: 'Monthly GMV' }, { value: '90', label: 'Days to Scale' }],
  },
  {
    icon: Target,
    tag: 'Performance Marketing',
    title: 'FitLife Nutrition',
    desc: 'Reduced CAC by 45% while scaling ad spend 3x through advanced audience optimization.',
    metrics: [{ value: '45%', label: 'CAC Reduction' }, { value: '8x', label: 'ROAS' }],
  },
];

export default function Home() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className={styles.hero}>
        <HeroScene />

        <div className={styles.heroOverlay} />

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            Growth-Focused Marketing Partner
          </div>

          <h1 className={styles.heroTitle}>
            Click that Converts.<br />
            <span className={styles.heroTitleRed}>Revenue</span> that Grows.
          </h1>

          <p className={styles.heroSubtitle}>
            Scale customer acquisition, revenue, and digital distribution across Ads,
            Marketplaces, and Quick Commerce with India&apos;s fastest-growing growth partner.
          </p>

          <div className={styles.heroButtons}>
            <Link href="/contact" className="btn btn-primary">
              Start Growing <ArrowRight size={18} />
            </Link>
            <Link href="/case-studies" className="btn btn-outline">
              View Case Studies
            </Link>
          </div>
        </div>

        <div className={styles.heroScroll}>
          <span>Scroll to explore</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className={styles.statsSection}>
        <div className="container">
          <StatsCounter />
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className={styles.servicesSection}>
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              label="What We Do"
              title="Comprehensive Growth"
              titleHighlight="Services"
              subtitle="From performance marketing to quick commerce, we provide end-to-end growth solutions for brands at every stage."
            />
          </ScrollReveal>

          <div className={styles.linearContainer}>
            <div className={styles.verticalTrack} />
            
            {/* Service 1 */}
            <div className={styles.linearRow}>
              <ScrollReveal direction="left">
                <div className={styles.linearContent}>
                  <div className="neon-badge" style={{ alignSelf: 'flex-start' }}>Performance Marketing</div>
                  <h3 style={{ fontSize: 'var(--fs-2xl)', color: 'var(--cr-white)', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
                    Drive Measurable <span className="text-gradient">Growth</span>
                  </h3>
                  <p style={{ color: 'var(--cr-grey-300)', fontSize: 'var(--fs-md)', lineHeight: 1.6 }}>
                    We build data-driven ad campaigns across Meta, Google, and programmatic channels that consistently lower CAC and multiply ROAS for high-growth brands.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'var(--space-md)' }}>
                    {['Meta & Google Ads', 'Lead Generation & CRO', 'Advanced Audience Modeling'].map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--cr-grey-200)', fontSize: 'var(--fs-sm)' }}>
                        <CheckCircle size={16} color="var(--neon-cyan)" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/services#performance-marketing" className="btn btn-ghost" style={{ alignSelf: 'flex-start', marginTop: 'var(--space-md)' }}>
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className={styles.linearVisual}>
                  <GrowthChart />
                </div>
              </ScrollReveal>
            </div>

            {/* Service 2 */}
            <div className={`${styles.linearRow} ${styles.reverse}`}>
              <ScrollReveal direction="left">
                <div className={styles.linearVisual}>
                  <PlatformUI />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className={styles.linearContent}>
                  <div className="neon-badge" style={{ alignSelf: 'flex-start' }}>Marketplace Growth</div>
                  <h3 style={{ fontSize: 'var(--fs-2xl)', color: 'var(--cr-white)', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
                    Dominate <span className="text-gradient">Amazon & Flipkart</span>
                  </h3>
                  <p style={{ color: 'var(--cr-grey-300)', fontSize: 'var(--fs-md)', lineHeight: 1.6 }}>
                    Scale your digital footprint where shoppers actually buy. We manage organic rankings, inventory SEO, and aggressive paid campaigns on major retail networks.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'var(--space-md)' }}>
                    {['Amazon PPC & SEO', 'Flipkart Ads Management', 'Listing Optimization & A+ Content'].map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--cr-grey-200)', fontSize: 'var(--fs-sm)' }}>
                        <CheckCircle size={16} color="var(--neon-purple)" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/marketplace-growth" className="btn btn-ghost" style={{ alignSelf: 'flex-start', marginTop: 'var(--space-md)' }}>
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Service 3 */}
            <div className={styles.linearRow}>
              <ScrollReveal direction="left">
                <div className={styles.linearContent}>
                  <div className="neon-badge" style={{ alignSelf: 'flex-start' }}>Quick Commerce</div>
                  <h3 style={{ fontSize: 'var(--fs-2xl)', color: 'var(--cr-white)', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
                    10-Minute <span className="text-gradient">Delivery</span> Scale
                  </h3>
                  <p style={{ color: 'var(--cr-grey-300)', fontSize: 'var(--fs-md)', lineHeight: 1.6 }}>
                    Launch and scale faster on ultra-fast delivery platforms. Capture impulse buyers and dominate local search velocity on Blinkit, Instamart, and Zepto.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'var(--space-md)' }}>
                    {['Blinkit & Instamart Strategy', 'Dark Store Distribution', 'Hyper-local Ad Campaigns'].map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--cr-grey-200)', fontSize: 'var(--fs-sm)' }}>
                        <CheckCircle size={16} color="var(--neon-cyan)" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/quick-commerce" className="btn btn-ghost" style={{ alignSelf: 'flex-start', marginTop: 'var(--space-md)' }}>
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className={styles.linearVisual}>
                  <MetricCard />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* ========== WHY CLICKREVENUE ========== */}
      <section className={styles.whySection}>
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              label="Why Choose Us"
              title="Why"
              titleHighlight="ClickRevenue?"
              subtitle="We combine performance marketing expertise with commerce execution under one roof."
            />
          </ScrollReveal>

          <div className={styles.whyGrid}>
            <ScrollReveal direction="left">
              <div className={styles.whyContent}>
                {whyReasons.map((reason, i) => (
                  <div key={i} className={styles.whyItem}>
                    <div className={styles.whyIcon}>
                      <reason.icon size={20} />
                    </div>
                    <div>
                      <h4 className={styles.whyItemTitle}>{reason.title}</h4>
                      <p className={styles.whyItemDesc}>{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className={styles.whyVisual}>
                <div className={styles.whyCard}>
                  <div className={styles.whyCardInner}>
                    <MousePointerClick size={48} style={{ color: 'var(--neon-cyan)', marginBottom: '16px' }} />
                    <h3 className={styles.whyCardTitle}>
                      <span style={{ color: 'var(--cr-white)' }}>Click</span>
                      <span style={{ 
                        background: 'var(--gradient-neon)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>Revenue</span>
                    </h3>
                    <p className={styles.whyCardSub}>
                      Performance + Commerce<br />Under One Roof
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: 'var(--space-md)',
                      justifyContent: 'center',
                      marginTop: 'var(--space-2xl)',
                      flexWrap: 'wrap',
                    }}>
                      {['Ads', 'SEO', 'Marketplaces', 'Quick Commerce'].map((item) => (
                        <span key={item} style={{
                          padding: '6px 16px',
                          background: 'rgba(0, 245, 212, 0.08)',
                          border: '1px solid rgba(0, 245, 212, 0.2)',
                          borderRadius: 'var(--radius-full)',
                          color: 'var(--neon-cyan)',
                          fontSize: 'var(--fs-xs)',
                          fontWeight: 600,
                        }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== CASE STUDIES PREVIEW ========== */}
      <section className={styles.caseStudiesPreview}>
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              label="Results That Speak"
              title="Featured"
              titleHighlight="Case Studies"
              subtitle="See how we've helped brands achieve transformative growth across channels."
            />
          </ScrollReveal>

          <div className={styles.caseGrid}>
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className={styles.caseCard}>
                  <div className={styles.caseImage}>
                    <div className="neon-icon" style={{ width: 80, height: 80, borderRadius: 'var(--radius-full)' }}>
                      <cs.icon size={36} />
                    </div>
                  </div>
                  <div className={styles.caseBody}>
                    <span className={styles.caseTag}>{cs.tag}</span>
                    <h3 className={styles.caseTitle}>{cs.title}</h3>
                    <p className={styles.caseDesc}>{cs.desc}</p>
                    <div className={styles.caseMetrics}>
                      {cs.metrics.map((m, j) => (
                        <div key={j} className={styles.caseMetric}>
                          <div className={styles.caseMetricValue}>{m.value}</div>
                          <div className={styles.caseMetricLabel}>{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
            <Link href="/case-studies" className="btn btn-outline">
              View All Case Studies <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              label="Client Love"
              title="What Our Clients"
              titleHighlight="Say"
              subtitle="Trusted by 500+ brands across industries."
            />
          </ScrollReveal>
          <TestimonialSlider />
        </div>
      </section>

      {/* ========== CTA ========== */}
      <CTASection />
    </>
  );
}
