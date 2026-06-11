'use client';

import { Suspense, lazy } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { ArrowRight, Target, Search, ShoppingBag,
  Zap, BarChart3, TrendingUp, Users, Globe,
  CheckCircle, MousePointerClick
} from 'lucide-react';
import styles from './page.module.css';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import StatsCounter from '@/components/StatsCounter/StatsCounter';
import CTASection from '@/components/CTASection/CTASection';
import TestimonialSlider from '@/components/TestimonialSlider/TestimonialSlider';
import LogoWall from '@/components/LogoWall/LogoWall';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import TiltCard from '@/components/TiltCard/TiltCard';
import FAQBlock from '@/components/FAQBlock/FAQBlock';

import HeroAnimation from '@/components/HeroAnimation/HeroAnimation';
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
    tag: 'D2C Food Brand',
    title: 'Scaling D2C Growth',
    desc: 'Anonymized D2C Food Brand achieved massive scale through precision targeting and marketplace optimization.',
    metrics: [{ value: '₹1.2Cr', label: 'Revenue in 90 Days' }, { value: '45%', label: 'ROAS Improvement' }],
  }
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is ClickRevenue different from a standard digital marketing agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are a full-funnel growth partner. Instead of just running ads and sending traffic, we manage your entire revenue engine—from Meta/Google acquisition to organic SEO, and deep distribution across marketplaces (Amazon/Flipkart) and Quick Commerce (Blinkit/Instamart)."
        }
      },
      {
        "@type": "Question",
        "name": "Do you guarantee ROAS or specific revenue targets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While we cannot guarantee a specific ROAS before an initial audit due to market variables, our strategies are deeply data-driven. We work with brands on a revenue-first approach, setting clear KPIs in month 1 and scaling aggressively once unit economics are proven."
        }
      },
      {
        "@type": "Question",
        "name": "What is your typical onboarding process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our onboarding takes 7-14 days. It involves a deep-dive technical audit of your existing accounts, setting up attribution tracking, analyzing competitor gaps, and delivering a 90-day growth roadmap before any campaigns go live."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle creative production as well as media buying?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our growth strategies integrate tightly with creative execution. We produce performance-focused static and video assets designed specifically for conversion, rather than just brand aesthetics."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ========== HERO ========== */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Click that Converts.<br />
              <span className={styles.heroTitleRed}>Revenue</span> that Grows.
            </h1>

            <p className={styles.heroSubtitle}>
              India's performance-first growth partner for Ads, Marketplaces & Quick Commerce.
            </p>

            <div className={styles.heroButtons}>
              <Link href="/contact" className="btn btn-primary">
                Book a Free Audit <ArrowRight size={18} />
              </Link>
              <Link href="#case-studies" className="btn btn-outline">
                See Our Work
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual} style={{ height: '500px', position: 'relative' }}>
            <HeroAnimation />
          </div>
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
              title="One Click."
              titleHighlight="Full-Funnel Growth."
              subtitle="From performance marketing to quick commerce, we provide end-to-end growth solutions for brands at every stage."
            />
          </ScrollReveal>

          <div className={styles.linearContainer}>
            <div className={styles.verticalTrack} />
            
            {/* Service 1 */}
            <TiltCard className={styles.linearRow}>
              <ScrollReveal direction="left">
                <div className={styles.linearContent}>
                  <h2 className={styles.heroTitle} style={{ fontSize: 'var(--fs-3xl)', marginBottom: 'var(--space-md)' }}>
                    Scale with Precision
                  </h2>
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
            </TiltCard>

            {/* Service 2 */}
            <TiltCard className={`${styles.linearRow} ${styles.reverse}`}>
              <ScrollReveal direction="left">
                <div className={styles.linearVisual}>
                  <PlatformUI />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className={styles.linearContent}>
                  <h2 className={styles.heroTitle} style={{ fontSize: 'var(--fs-3xl)', marginBottom: 'var(--space-md)' }}>
                    Dominate Marketplaces
                  </h2>
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
            </TiltCard>

            {/* Service 3 */}
            <TiltCard className={styles.linearRow}>
              <ScrollReveal direction="left">
                <div className={styles.linearContent}>
                  <h2 className={styles.heroTitle} style={{ fontSize: 'var(--fs-3xl)', marginBottom: 'var(--space-md)' }}>
                    Master Quick Commerce
                  </h2>
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
            </TiltCard>
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
                <TiltCard className={styles.whyCard}>
                  <div className={styles.whyCardInner}>
                    <MousePointerClick size={48} style={{ color: 'var(--accent-primary)', marginBottom: '16px' }} />
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
                          background: 'rgba(227, 27, 35, 0.08)',
                          border: '1px solid rgba(227, 27, 35, 0.2)',
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
                </TiltCard>
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
                <TiltCard className={styles.caseCard}>
                  <div className={styles.caseImage}>
                    <div className="neon-icon" style={{ width: 80, height: 80, borderRadius: 'var(--radius-full)' }}>
                      <cs.icon size={36} />
                    </div>
                  </div>
                  <div className={styles.caseBody}>
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
                </TiltCard>
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

      {/* ========== CLIENT WORK ========== */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              label="Our Network"
              title="Brands We"
              titleHighlight="Accelerate"
              subtitle="Partnering with ambitious brands across D2C, FMCG, and Retail."
            />
          </ScrollReveal>
        </div>
        <LogoWall />
      </section>

      {/* ========== FAQ ========== */}
      <FAQBlock />

      {/* ========== CTA ========== */}
      <CTASection />
    </>
  );
}
