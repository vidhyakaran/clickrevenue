import Link from 'next/link';
import { ArrowRight, ShoppingCart, Target, Heart, Shirt, MonitorSmartphone, Coffee, Smile, Home, Leaf } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import CTASection from '@/components/CTASection/CTASection';

export const metadata = {
  title: 'Industries We Serve | ClickRevenue',
  description: 'ClickRevenue helps brands across FMCG, D2C, Healthcare, Fashion, Electronics, F&B, Beauty, and more scale their digital presence.',
};

const industries = [
  { icon: ShoppingCart, name: 'FMCG', desc: 'Fast-moving consumer goods brands scaling across retail and digital channels.', clients: '120+' },
  { icon: Target, name: 'D2C Brands', desc: 'Direct-to-consumer brands building scalable customer acquisition engines.', clients: '80+' },
  { icon: Heart, name: 'Healthcare', desc: 'Healthcare and wellness brands reaching patients through digital-first strategies.', clients: '45+' },
  { icon: Shirt, name: 'Fashion & Lifestyle', desc: 'Fashion brands building omnichannel presence across marketplaces and ads.', clients: '65+' },
  { icon: MonitorSmartphone, name: 'Consumer Electronics', desc: 'Electronics brands driving online sales with performance marketing and marketplace management.', clients: '35+' },
  { icon: Coffee, name: 'Food & Beverages', desc: 'F&B brands launching on quick commerce and scaling marketplace distribution.', clients: '50+' },
  { icon: Smile, name: 'Beauty & Personal Care', desc: 'Beauty brands building community-driven growth with social commerce and ads.', clients: '55+' },
  { icon: Home, name: 'Home & Living', desc: 'Home décor and furnishing brands scaling on Amazon, Flipkart, and through paid campaigns.', clients: '30+' },
  { icon: Smile, name: 'Baby & Kids', desc: 'Baby care and kids brands reaching parents through targeted marketing campaigns.', clients: '25+' },
  { icon: Heart, name: 'Pet Care', desc: 'Pet care brands building digital-first distribution across quick commerce and marketplaces.', clients: '20+' },
  { icon: Target, name: 'Sports & Fitness', desc: 'Fitness brands scaling through performance marketing and marketplace growth.', clients: '30+' },
  { icon: Leaf, name: 'Organic & Natural', desc: 'Organic and natural product brands reaching health-conscious consumers at scale.', clients: '40+' },
];

export default function IndustriesPage() {
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
            background: 'rgba(227, 27, 35, 0.08)', border: '1px solid rgba(227, 27, 35, 0.2)',
            borderRadius: 'var(--radius-full)', padding: '8px 20px',
            fontSize: 'var(--fs-sm)', color: 'var(--neon-cyan)', fontWeight: 600,
            marginBottom: 'var(--space-xl)',
          }}>
            Industries We Serve
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'var(--fs-hero)',
            fontWeight: 900, color: 'var(--cr-white)', lineHeight: 1.1,
            marginBottom: 'var(--space-lg)',
          }}>
            Growth Across <span className="text-gradient">Industries</span>
          </h1>
          <p style={{
            color: 'var(--cr-grey-300)', fontSize: 'var(--fs-lg)',
            maxWidth: '600px', margin: '0 auto', lineHeight: 1.7,
          }}>
            We bring deep expertise across 15+ industry verticals, understanding the unique challenges and growth levers for each sector.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-4">
            {industries.map((ind, i) => (
              <div key={i} className="glow-card" style={{
                padding: 'var(--space-2xl)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                <div className="neon-icon" style={{ margin: '0 auto var(--space-md)' }}>
                  <ind.icon size={28} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)',
                  fontWeight: 700, color: 'var(--cr-white)', marginBottom: '8px',
                }}>{ind.name}</h3>
                <p style={{
                  color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)',
                  lineHeight: 1.6, marginBottom: 'var(--space-md)', flex: 1,
                }}>{ind.desc}</p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '4px',
                  color: 'var(--neon-cyan)', fontSize: 'var(--fs-sm)', fontWeight: 600,
                }}>
                  {ind.clients} Brands
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See Your Industry?"
        subtitle="We work with brands across all sectors. Let's discuss your specific growth needs."
      />
    </>
  );
}
