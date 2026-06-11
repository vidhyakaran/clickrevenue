import Link from 'next/link';
import {
  ShoppingBag, Package, BarChart3, Tag,
  Layers, TrendingUp, ArrowRight, CheckCircle,
  Star, Award, Target
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import CTASection from '@/components/CTASection/CTASection';

export const metadata = {
  title: 'Marketplace Growth — Amazon & Flipkart Management | ClickRevenue',
  description: 'Scale your brand on Amazon and Flipkart with expert marketplace management, advertising, and catalog optimization by ClickRevenue.',
};

const services = [
  { icon: ShoppingBag, title: 'Amazon Management', desc: 'Full Seller Central management — from account health to advertising to A+ content.' },
  { icon: Package, title: 'Flipkart Management', desc: 'End-to-end Flipkart growth with listing optimization, ads, and sales strategy.' },
  { icon: Tag, title: 'Product Listing & Optimization', desc: 'SEO-optimized titles, keywords, bullet points, and backend search terms.' },
  { icon: Target, title: 'Marketplace Advertising', desc: 'Sponsored Products, Brands & Display campaigns with ROAS-focused bidding.' },
  { icon: Layers, title: 'Catalog Management', desc: 'SKU rationalization, pricing strategy, and real-time inventory coordination.' },
  { icon: TrendingUp, title: 'Sales Growth Execution', desc: 'Festival strategy, Lightning Deals, coupons, and promotional calendar planning.' },
];

const process = [
  { step: '01', title: 'Audit & Analysis', desc: 'Deep dive into your current marketplace presence, competition, and opportunity gaps.' },
  { step: '02', title: 'Strategy & Roadmap', desc: 'Custom growth strategy with clear KPIs, timelines, and resource allocation.' },
  { step: '03', title: 'Optimize & Launch', desc: 'Listing optimization, A+ content, keyword research, and ad campaign setup.' },
  { step: '04', title: 'Scale & Grow', desc: 'Continuous optimization, expansion into new categories, and revenue acceleration.' },
];

export default function MarketplaceGrowthPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 'calc(var(--nav-height) + var(--space-4xl))',
        paddingBottom: 'var(--space-4xl)',
        position: 'relative',
        zIndex: 1,
        background: 'linear-gradient(180deg, rgba(227, 27, 35, 0.05) 0%, transparent 100%)',
      }}>
        <div className="container">
          <div className="marketplace-pipeline-grid">
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(227, 27, 35, 0.1)', border: '1px solid rgba(227, 27, 35, 0.3)',
                borderRadius: 'var(--radius-full)', padding: '8px 20px',
                fontSize: 'var(--fs-sm)', color: 'var(--neon-cyan)', fontWeight: 600,
                marginBottom: 'var(--space-xl)',
              }}>
                <ShoppingBag size={16} /> Marketplace Growth
              </div>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontSize: 'var(--fs-hero)',
                fontWeight: 900, color: 'var(--cr-white)', lineHeight: 1.1,
                marginBottom: 'var(--space-lg)',
              }}>
                Dominate <span className="text-gradient">Amazon</span> & <span className="text-gradient">Flipkart</span>
              </h1>
              <p style={{
                color: 'var(--cr-grey-300)', fontSize: 'var(--fs-lg)',
                lineHeight: 1.7, marginBottom: 'var(--space-2xl)', maxWidth: '520px',
              }}>
                End-to-end marketplace management to scale your brand&apos;s digital distribution, visibility, and sales on India&apos;s biggest e-commerce platforms.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">
                  Get Started <ArrowRight size={16} />
                </Link>
                <Link href="/case-studies" className="btn btn-outline">
                  View Results
                </Link>
              </div>
            </div>
            <div style={{
              background: 'var(--cr-surface)',
              border: '1px solid var(--cr-border)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--space-3xl)',
              textAlign: 'center',
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-lg)' }}>
                <div className="neon-icon" style={{ width: 80, height: 80, borderRadius: 'var(--radius-full)' }}>
                  <TrendingUp size={36} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-lg)', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  { label: 'Brands Managed', value: '200+' },
                  { label: 'Avg. Sales Growth', value: '280%' },
                  { label: 'ROAS Achieved', value: '6.5x' },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{
                      fontFamily: 'var(--font-display)', fontSize: 'var(--fs-2xl)',
                      fontWeight: 800, color: 'var(--neon-cyan)',
                    }}>{s.value}</div>
                    <div style={{ color: 'var(--cr-grey-400)', fontSize: 'var(--fs-xs)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Our Expertise"
            title="Marketplace"
            titleHighlight="Services"
            subtitle="Complete marketplace management for brands looking to win on e-commerce platforms."
          />
          <div className="grid-3">
            {services.map((s, i) => (
              <div key={i} className="glow-card" style={{ padding: 'var(--space-2xl)' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 'var(--radius-md)',
                  background: 'rgba(227, 27, 35, 0.1)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  color: 'var(--neon-cyan)', marginBottom: 'var(--space-md)',
                }}>
                  <s.icon size={22} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)',
                  fontWeight: 700, color: 'var(--cr-white)', marginBottom: '8px',
                }}>{s.title}</h3>
                <p style={{
                  color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)', lineHeight: 1.6,
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'var(--cr-surface)' }}>
        <div className="container">
          <SectionHeading
            label="Our Process"
            title="How We"
            titleHighlight="Work"
            subtitle="A proven 4-step framework to accelerate your marketplace growth."
          />
          <div className="grid-4" style={{ position: 'relative' }}>
            {process.map((p, i) => (
              <div key={i} style={{
                textAlign: 'center',
                position: 'relative',
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 'var(--radius-full)',
                  background: 'rgba(227, 27, 35, 0.15)', border: '2px solid var(--neon-cyan)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: 'var(--fs-xl)',
                  fontWeight: 800, color: 'var(--neon-cyan)',
                  margin: '0 auto var(--space-lg)',
                }}>
                  {p.step}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)',
                  fontWeight: 700, color: 'var(--cr-white)', marginBottom: '8px',
                }}>{p.title}</h3>
                <p style={{
                  color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)', lineHeight: 1.6,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Scale on Marketplaces?"
        subtitle="Let's build a marketplace growth engine for your brand on Amazon, Flipkart and beyond."
      />
    </>
  );
}
