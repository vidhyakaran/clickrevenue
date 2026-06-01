import Link from 'next/link';
import { ArrowRight, TrendingUp, ShoppingBag, Zap, Target, Search, Smartphone, Store } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import CTASection from '@/components/CTASection/CTASection';

export const metadata = {
  title: 'Case Studies — Growth Results | ClickRevenue',
  description: 'See how ClickRevenue has helped 500+ brands achieve transformative growth across performance marketing, marketplaces, and quick commerce.',
};

const caseStudies = [
  {
    icon: ShoppingBag,
    tag: 'Marketplace',
    title: 'NatureFresh Foods',
    industry: 'FMCG',
    desc: 'Scaled Amazon & Flipkart sales by 340% through optimized A+ content, keyword targeting, and strategic ad campaigns during festive seasons.',
    challenge: 'Low marketplace visibility with poor listing quality and no ad strategy.',
    solution: 'Complete listing revamp, automated bidding, and festival campaign calendar.',
    metrics: [
      { value: '340%', label: 'Sales Growth' },
      { value: '5.2x', label: 'ROAS' },
      { value: '60%', label: 'Organic Rank Improvement' },
    ],
  },
  {
    icon: Zap,
    tag: 'Quick Commerce',
    title: 'StyleCraft D2C',
    industry: 'Fashion & Lifestyle',
    desc: 'Launched on Blinkit & Instamart and achieved ₹2Cr monthly GMV within 90 days through strategic city-wise rollout.',
    challenge: 'Zero quick commerce presence with no understanding of dark store dynamics.',
    solution: 'City-by-city launch strategy with optimized catalog and demand acceleration.',
    metrics: [
      { value: '₹2Cr', label: 'Monthly GMV' },
      { value: '90', label: 'Days to Scale' },
      { value: '12', label: 'Cities Launched' },
    ],
  },
  {
    icon: Target,
    tag: 'Performance Marketing',
    title: 'FitLife Nutrition',
    industry: 'Health & Wellness',
    desc: 'Reduced CAC by 45% while scaling ad spend 3x through advanced audience segmentation and creative optimization.',
    challenge: 'High customer acquisition cost with diminishing returns on ad spend.',
    solution: 'Lookalike audience refinement, dynamic creative testing, and funnel optimization.',
    metrics: [
      { value: '45%', label: 'CAC Reduction' },
      { value: '8x', label: 'ROAS' },
      { value: '3x', label: 'Ad Spend Scaled' },
    ],
  },
  {
    icon: Search,
    tag: 'SEO',
    title: 'MedPlus Healthcare',
    industry: 'Healthcare',
    desc: 'Grew organic traffic by 520% in 8 months through technical SEO overhaul and a content-first strategy.',
    challenge: 'Website had critical technical SEO issues and no content strategy.',
    solution: 'Complete technical audit, site restructuring, and 60-article content calendar.',
    metrics: [
      { value: '520%', label: 'Traffic Growth' },
      { value: '150+', label: 'Keywords Ranked' },
      { value: '8', label: 'Months Timeline' },
    ],
  },
  {
    icon: Smartphone,
    tag: 'Performance Marketing',
    title: 'UrbanTech Electronics',
    industry: 'Consumer Electronics',
    desc: 'Drove ₹15Cr in revenue through integrated Meta + Google ad campaigns with precision audience targeting.',
    challenge: 'Fragmented ad strategy with no cross-platform attribution.',
    solution: 'Unified campaign strategy, cross-platform attribution, and automated bidding.',
    metrics: [
      { value: '₹15Cr', label: 'Revenue Generated' },
      { value: '6.8x', label: 'ROAS' },
      { value: '120%', label: 'YoY Growth' },
    ],
  },
  {
    icon: Store,
    tag: 'Marketplace + Quick Commerce',
    title: 'PureBlend Beverages',
    industry: 'F&B',
    desc: 'Multi-channel launch across Amazon, Flipkart, Blinkit and Instamart — achieving pan-India distribution in 6 months.',
    challenge: 'New brand with no digital distribution and limited budgets.',
    solution: 'Phased multi-platform launch with city-level demand mapping.',
    metrics: [
      { value: '4', label: 'Platforms Launched' },
      { value: '25+', label: 'Cities Covered' },
      { value: '₹5Cr', label: 'First Year Revenue' },
    ],
  },
];

const filters = ['All', 'Performance Marketing', 'SEO', 'Marketplace', 'Quick Commerce'];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 'calc(var(--nav-height) + var(--space-4xl))',
        paddingBottom: 'var(--space-3xl)',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(0, 245, 212, 0.1)', border: '1px solid rgba(0, 245, 212, 0.3)',
            borderRadius: 'var(--radius-full)', padding: '8px 20px',
            fontSize: 'var(--fs-sm)', color: 'var(--neon-cyan)', fontWeight: 600,
            marginBottom: 'var(--space-xl)',
          }}>
            Results That Matter
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'var(--fs-hero)',
            fontWeight: 900, color: 'var(--cr-white)', lineHeight: 1.1,
            marginBottom: 'var(--space-lg)',
          }}>
            Our <span className="text-gradient">Case Studies</span>
          </h1>
          <p style={{
            color: 'var(--cr-grey-300)', fontSize: 'var(--fs-lg)',
            maxWidth: '600px', margin: '0 auto', lineHeight: 1.7,
          }}>
            Real results for real brands. See how we&apos;ve helped 500+ businesses achieve transformative growth.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            {caseStudies.map((cs, i) => (
              <div key={i} className="glow-card" style={{
                padding: 0,
                overflow: 'hidden',
              }}>
                {/* Header */}
                <div style={{
                  padding: 'var(--space-2xl)',
                  borderBottom: '1px solid var(--cr-border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-md)',
                }}>
                  <div className="neon-icon" style={{ width: 48, height: 48, flexShrink: 0 }}>
                    <cs.icon size={24} />
                  </div>
                  <div>
                    <span style={{
                      background: 'rgba(0, 245, 212, 0.1)', color: 'var(--neon-cyan)',
                      fontSize: 'var(--fs-xs)', fontWeight: 600,
                      padding: '3px 10px', borderRadius: 'var(--radius-full)',
                    }}>{cs.tag}</span>
                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontSize: 'var(--fs-xl)',
                      fontWeight: 700, color: 'var(--cr-white)', marginTop: '6px',
                    }}>{cs.title}</h3>
                    <span style={{ color: 'var(--cr-grey-500)', fontSize: 'var(--fs-xs)' }}>{cs.industry}</span>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: 'var(--space-2xl)' }}>
                  <p style={{
                    color: 'var(--cr-grey-300)', fontSize: 'var(--fs-sm)',
                    lineHeight: 1.7, marginBottom: 'var(--space-lg)',
                  }}>{cs.desc}</p>

                  <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--cr-grey-500)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Challenge</p>
                    <p style={{ color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)' }}>{cs.challenge}</p>
                  </div>

                  <div style={{ marginBottom: 'var(--space-xl)' }}>
                    <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--cr-grey-500)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Solution</p>
                    <p style={{ color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)' }}>{cs.solution}</p>
                  </div>

                  {/* Metrics */}
                  <div style={{
                    display: 'flex',
                    gap: 'var(--space-lg)',
                    paddingTop: 'var(--space-lg)',
                    borderTop: '1px solid var(--cr-border)',
                  }}>
                    {cs.metrics.map((m, j) => (
                      <div key={j}>
                        <div style={{
                          fontFamily: 'var(--font-display)', fontSize: 'var(--fs-xl)',
                          fontWeight: 800, color: 'var(--neon-cyan)',
                        }}>{m.value}</div>
                        <div style={{
                          color: 'var(--cr-grey-500)', fontSize: 'var(--fs-xs)',
                        }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want Results Like These?"
        subtitle="Let's discuss how we can drive similar growth for your brand."
      />
    </>
  );
}
