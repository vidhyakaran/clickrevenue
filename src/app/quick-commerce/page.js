import Link from 'next/link';
import {
  Zap, Package, BarChart3, MapPin,
  TrendingUp, ArrowRight, Truck, Clock,
  Layers, Megaphone, Target, Rocket, ShoppingCart
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import CTASection from '@/components/CTASection/CTASection';

export const metadata = {
  title: 'Quick Commerce Growth — Blinkit & Instamart | ClickRevenue',
  description: 'Launch and scale on Blinkit, Instamart, and other quick commerce platforms with ClickRevenue\'s expert management services.',
};

const services = [
  { icon: Zap, title: 'Blinkit Management', desc: 'End-to-end Blinkit onboarding, listing optimization, and demand generation to maximize orders.' },
  { icon: Truck, title: 'Instamart Management', desc: 'Full-service Swiggy Instamart management from catalog setup to promotional campaigns.' },
  { icon: Rocket, title: 'Quick Commerce Launch Support', desc: 'City-wise launch planning, dark store mapping, and go-live execution framework.' },
  { icon: Layers, title: 'Catalog & Inventory Coordination', desc: 'Real-time inventory sync, catalog updates, and assortment planning for multiple cities.' },
  { icon: Megaphone, title: 'Demand Acceleration', desc: 'Promotional campaigns, visibility boosting, and seasonal offer management.' },
  { icon: TrendingUp, title: 'Scale & Expansion Strategy', desc: 'Multi-city expansion playbooks and growth strategies to 10x your quick commerce presence.' },
];

const platforms = [
  { name: 'Blinkit', icon: Zap, desc: 'India\'s fastest 10-minute delivery platform', color: '#F5C518' },
  { name: 'Instamart', icon: Truck, desc: 'Swiggy\'s instant grocery delivery service', color: '#FC8019' },
  { name: 'Zepto', icon: Rocket, desc: 'Ultra-fast grocery delivery in major metros', color: '#7B2FF7' },
  { name: 'BigBasket Now', icon: ShoppingCart, desc: 'Quick delivery from India\'s largest online grocer', color: '#84C225' },
];

export default function QuickCommercePage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 'calc(var(--nav-height) + var(--space-4xl))',
        paddingBottom: 'var(--space-4xl)',
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
            <Zap size={16} /> Quick Commerce Growth
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'var(--fs-hero)',
            fontWeight: 900, color: 'var(--cr-white)', lineHeight: 1.1,
            marginBottom: 'var(--space-lg)', maxWidth: '800px', margin: '0 auto var(--space-lg)',
          }}>
            Win on <span className="text-gradient">Quick Commerce</span>
          </h1>
          <p style={{
            color: 'var(--cr-grey-300)', fontSize: 'var(--fs-lg)',
            lineHeight: 1.7, marginBottom: 'var(--space-2xl)',
            maxWidth: '600px', margin: '0 auto var(--space-2xl)',
          }}>
            Launch and scale on Blinkit, Instamart, and every major quick commerce platform. We manage the entire growth lifecycle from onboarding to expansion.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Get Started <ArrowRight size={16} />
            </Link>
            <Link href="/case-studies" className="btn btn-outline">
              View Results
            </Link>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section" style={{
        background: 'rgba(16, 16, 24, 0.3)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.04)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.04)'
      }}>
        <div className="container">
          <SectionHeading
            label="Platforms We Cover"
            title="Quick Commerce"
            titleHighlight="Platforms"
            subtitle="We manage your presence across all major quick commerce platforms in India."
          />
          <div className="grid-4">
            {platforms.map((p, i) => (
              <div key={i} className="glow-card" style={{
                padding: 'var(--space-2xl)',
                textAlign: 'center',
              }}>
                <div className="neon-icon" style={{ margin: '0 auto var(--space-md)' }}>
                  <p.icon size={28} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)',
                  fontWeight: 700, color: 'var(--cr-white)', marginBottom: '8px',
                }}>{p.name}</h3>
                <p style={{
                  color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)', lineHeight: 1.5,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="What We Offer"
            title="Quick Commerce"
            titleHighlight="Services"
            subtitle="End-to-end management for brands looking to win on quick commerce platforms."
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

      {/* Key Metrics */}
      <section className="section" style={{
        background: 'rgba(16, 16, 24, 0.3)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.04)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.04)'
      }}>
        <div className="container">
          <div className="grid-4" style={{ textAlign: 'center' }}>
            {[
              { value: '50+', label: 'Brands Launched' },
              { value: '15+', label: 'Cities Covered' },
              { value: '3x', label: 'Avg. Order Growth' },
              { value: '45', label: 'Days to Scale' },
            ].map((m, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 800, color: 'var(--neon-cyan)',
                }}>{m.value}</div>
                <div style={{
                  color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)',
                  textTransform: 'uppercase', letterSpacing: '1px',
                }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Launch on Quick Commerce?"
        subtitle="Get your products on Blinkit, Instamart and more in record time."
      />
    </>
  );
}
