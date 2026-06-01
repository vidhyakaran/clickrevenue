import {
  Target, Search, ShoppingBag, Zap, BarChart3,
  ArrowRight, TrendingUp, MousePointerClick,
  MonitorSmartphone, Globe, FileText, Users,
  Megaphone, LineChart, Layout, Lightbulb
} from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import CTASection from '@/components/CTASection/CTASection';

export const metadata = {
  title: 'Our Services — ClickRevenue',
  description: 'Explore our full range of growth services: Performance Marketing, SEO, Marketplace Growth, Quick Commerce, and Creative Support.',
};

const services = [
  {
    id: 'performance-marketing',
    icon: Target,
    title: 'Performance Marketing',
    description: 'Drive measurable business growth with precision-targeted ad campaigns across Meta, Google, and beyond. Our data-driven approach ensures every rupee spent delivers maximum returns.',
    items: [
      { name: 'Meta Ads', desc: 'Instagram & Facebook campaigns that convert at scale' },
      { name: 'Google Ads', desc: 'Search, Display, Shopping & YouTube ad mastery' },
      { name: 'Lead Generation', desc: 'Quality lead funnels tailored to your ICP' },
      { name: 'Conversion Optimization', desc: 'A/B testing, landing pages & funnel optimization' },
      { name: 'Customer Acquisition', desc: 'CAC reduction strategies with advanced targeting' },
      { name: 'Revenue Growth Strategy', desc: 'Full-funnel revenue planning & execution' },
    ],
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO & Organic Growth',
    description: 'Dominate search results with a comprehensive SEO strategy that drives sustainable organic traffic and positions your brand as an industry authority.',
    items: [
      { name: 'Technical SEO', desc: 'Site architecture, speed optimization & crawlability' },
      { name: 'Content Strategy', desc: 'Research-driven content that ranks and converts' },
      { name: 'Organic Traffic Growth', desc: 'Keyword strategy & SERP domination roadmap' },
      { name: 'Website Performance', desc: 'Core Web Vitals & UX optimization' },
    ],
  },
  {
    id: 'marketplace-growth',
    icon: ShoppingBag,
    title: 'Marketplace Growth',
    description: 'Scale your brand on India\'s largest e-commerce marketplaces with expert listing optimization, advertising, and catalog management.',
    items: [
      { name: 'Amazon Management', desc: 'End-to-end Amazon Seller Central management' },
      { name: 'Flipkart Management', desc: 'Flipkart seller strategy & growth execution' },
      { name: 'Product Optimization', desc: 'A+ content, enhanced brand content & SEO' },
      { name: 'Marketplace Advertising', desc: 'Sponsored Products, Brands & Display campaigns' },
      { name: 'Catalog Management', desc: 'SKU management, pricing & inventory coordination' },
      { name: 'Sales Growth Execution', desc: 'Festival strategy, deals & promotional planning' },
    ],
    link: '/marketplace-growth',
  },
  {
    id: 'quick-commerce',
    icon: Zap,
    title: 'Quick Commerce Growth',
    description: 'Launch and scale on India\'s fastest-growing quick commerce platforms. From Blinkit to Instamart, we manage the entire growth lifecycle.',
    items: [
      { name: 'Blinkit Management', desc: 'Full-service Blinkit onboarding & growth' },
      { name: 'Instamart Management', desc: 'Swiggy Instamart listing & performance optimization' },
      { name: 'Launch Support', desc: 'City-wise launch planning & dark store mapping' },
      { name: 'Catalog & Inventory', desc: 'Real-time inventory sync & catalog updates' },
      { name: 'Demand Acceleration', desc: 'Promotional campaigns & visibility boosting' },
      { name: 'Scale & Expansion', desc: 'Multi-city expansion & growth playbooks' },
    ],
    link: '/quick-commerce',
  },
  {
    id: 'growth-support',
    icon: BarChart3,
    title: 'Growth & Creative Support',
    description: 'Complete growth operations support including campaign planning, deep analytics, landing page recommendations, and performance insights.',
    items: [
      { name: 'Campaign Planning', desc: 'Strategic campaign calendars & execution plans' },
      { name: 'Analytics & Reporting', desc: 'Custom dashboards & weekly performance reports' },
      { name: 'Landing Page Recommendations', desc: 'Conversion-focused page audits & suggestions' },
      { name: 'Performance Insights', desc: 'Actionable insights from cross-channel data' },
    ],
  },
];

export default function ServicesPage() {
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
            background: 'rgba(0, 245, 212, 0.08)', border: '1px solid rgba(0, 245, 212, 0.2)',
            borderRadius: 'var(--radius-full)', padding: '8px 20px',
            fontSize: 'var(--fs-sm)', color: 'var(--neon-cyan)', fontWeight: 600,
            marginBottom: 'var(--space-xl)',
          }}>
            Our Services
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'var(--fs-hero)',
            fontWeight: 900, color: 'var(--cr-white)', lineHeight: 1.1,
            marginBottom: 'var(--space-lg)',
          }}>
            End-to-End <span className="text-gradient">Growth</span> Solutions
          </h1>
          <p style={{
            color: 'var(--cr-grey-300)', fontSize: 'var(--fs-lg)',
            maxWidth: '640px', margin: '0 auto', lineHeight: 1.7,
          }}>
            From performance ads to quick commerce, we provide a full spectrum of growth services to scale your brand across every digital channel.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          style={{
            padding: 'var(--space-4xl) 0',
            background: idx % 2 === 1 ? 'var(--cr-surface)' : 'transparent',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div className="container">
            <div className={`services-section-grid ${idx % 2 === 1 ? 'reverse' : ''}`}>
              {/* Info side */}
              <div className="services-info">
                <div style={{
                  width: 56, height: 56, borderRadius: 'var(--radius-lg)',
                  background: 'rgba(0, 245, 212, 0.08)', border: '1px solid rgba(0, 245, 212, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--neon-cyan)', marginBottom: 'var(--space-lg)',
                }}>
                  <service.icon size={24} />
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'var(--fs-3xl)',
                  fontWeight: 800, color: 'var(--cr-white)', marginBottom: 'var(--space-md)',
                }}>
                  {service.title}
                </h2>
                <p style={{
                  color: 'var(--cr-grey-300)', fontSize: 'var(--fs-md)',
                  lineHeight: 1.7, marginBottom: 'var(--space-xl)',
                }}>
                  {service.description}
                </p>
                {service.link && (
                  <Link href={service.link} className="btn btn-primary" style={{ marginTop: 'var(--space-md)' }}>
                    Learn More <ArrowRight size={16} />
                  </Link>
                )}
              </div>

              {/* Items side */}
              <div className="services-items">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 'var(--space-md)',
                }}>
                  {service.items.map((item, i) => (
                    <div key={i} style={{
                      background: idx % 2 === 1 ? 'var(--cr-surface-lighter)' : 'var(--cr-surface)',
                      border: '1px solid var(--cr-border)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--space-lg)',
                      transition: 'all 0.3s ease',
                    }}>
                      <h4 style={{
                        fontFamily: 'var(--font-display)', fontSize: 'var(--fs-base)',
                        fontWeight: 700, color: 'var(--cr-white)', marginBottom: '4px',
                      }}>
                        {item.name}
                      </h4>
                      <p style={{
                        color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)', lineHeight: 1.5,
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="Need a Custom Growth Strategy?"
        subtitle="Let's discuss your unique challenges and build a tailored growth plan for your brand."
      />
    </>
  );
}
