import Link from 'next/link';
import { ArrowRight, TrendingUp, ShoppingBag, Zap, Target, Search, Smartphone, Store } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import CTASection from '@/components/CTASection/CTASection';
import { caseStudiesConfig } from '@/config/stats';

export const metadata = {
  title: 'Case Studies — Growth Results | ClickRevenue',
  description: 'See how ClickRevenue has helped 500+ brands achieve transformative growth across performance marketing, marketplaces, and quick commerce.',
};

const iconMap = {
  ShoppingBag,
  Zap,
  Target,
  Search,
  Smartphone,
  Store,
  TrendingUp
};

const filters = ['All', 'Performance Marketing', 'SEO', 'Marketplace', 'Quick Commerce'];

export default function CaseStudiesPage() {
  const activeCases = caseStudiesConfig.filter(cs => cs.title !== null);

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
            background: 'rgba(227, 27, 35, 0.1)', border: '1px solid rgba(227, 27, 35, 0.3)',
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
            Real results for real brands. See how we&apos;ve helped ambitious businesses achieve transformative growth.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            {activeCases.map((cs, i) => {
              const IconComponent = iconMap[cs.iconType] || TrendingUp;
              return (
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
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <span style={{
                      background: 'rgba(227, 27, 35, 0.1)', color: 'var(--neon-cyan)',
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
            )})}
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
