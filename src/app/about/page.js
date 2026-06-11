import Link from 'next/link';
import {
  Target, Users, Award, Globe, TrendingUp,
  Heart, Lightbulb, ArrowRight, CheckCircle,
  Briefcase, ShoppingBag, Zap, Search, PenTool
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import StatsCounter from '@/components/StatsCounter/StatsCounter';
import CTASection from '@/components/CTASection/CTASection';
import Logo from '@/components/Logo/Logo';

export const metadata = {
  description: 'Learn about ClickRevenue — India\'s growth-focused marketing and commerce partner helping brands scale across ads, marketplaces, and quick commerce.',
};

const values = [
  { icon: Target, title: 'Revenue First', desc: 'Every strategy, campaign, and decision is oriented towards driving real revenue growth.' },
  { icon: TrendingUp, title: 'Growth Obsessed', desc: 'We are obsessed with finding new growth levers and scaling what works.' },
  { icon: Users, title: 'Client Partners', desc: 'We don\'t just execute — we partner with brands as an extension of their team.' },
  { icon: Lightbulb, title: 'Innovation Driven', desc: 'We stay ahead of platform changes, new channels, and emerging opportunities.' },
  { icon: Heart, title: 'Transparency', desc: 'Honest reporting, clear communication, and no hidden metrics. Ever.' },
  { icon: Globe, title: 'Multi-Platform', desc: 'One team managing your growth across every major digital channel and platform.' },
];

const timeline = [
  { year: '2020', title: 'Founded', desc: 'Started with a vision to build a revenue-first growth agency.' },
  { year: '2021', title: 'Marketplace Launch', desc: 'Expanded into Amazon & Flipkart marketplace management.' },
  { year: '2022', title: '100+ Brands', desc: 'Crossed 100 active brand partnerships across industries.' },
  { year: '2023', title: 'Quick Commerce', desc: 'Pioneered quick commerce growth services for Blinkit & Instamart.' },
  { year: '2024', title: '500+ Brands', desc: 'Scaled to 500+ brands with a 50-member growth team.' },
  { year: '2025', title: 'Full-Stack Growth', desc: 'Became a full-stack growth partner: Ads + Marketplaces + Quick Commerce.' },
];

const team = [
  { name: 'Arjun Verma', role: 'Founder & CEO', icon: Briefcase },
  { name: 'Priya Sharma', role: 'Head of Performance', icon: Target },
  { name: 'Vikram Singh', role: 'Head of Marketplaces', icon: ShoppingBag },
  { name: 'Neha Kapoor', role: 'Head of Quick Commerce', icon: Zap },
  { name: 'Rohit Mehta', role: 'Head of SEO', icon: Search },
  { name: 'Ananya Das', role: 'Head of Creative', icon: PenTool },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 'calc(var(--nav-height) + var(--space-4xl))',
        paddingBottom: 'var(--space-3xl)',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="container">
          <div className="about-hero-grid">
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(227, 27, 35, 0.08)', border: '1px solid rgba(227, 27, 35, 0.2)',
                borderRadius: 'var(--radius-full)', padding: '8px 20px',
                fontSize: 'var(--fs-sm)', color: 'var(--neon-cyan)', fontWeight: 600,
                marginBottom: 'var(--space-xl)',
              }}>
                About Us
              </div>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontSize: 'var(--fs-hero)',
                fontWeight: 900, color: 'var(--cr-white)', lineHeight: 1.1,
                marginBottom: 'var(--space-lg)',
              }}>
                We Build <span className="text-gradient">Growth Engines</span>
              </h1>
              <p style={{
                color: 'var(--cr-grey-300)', fontSize: 'var(--fs-lg)',
                lineHeight: 1.7, marginBottom: 'var(--space-xl)',
              }}>
                ClickRevenue is a growth-focused marketing and commerce partner helping brands scale customer acquisition, revenue, and digital distribution across multiple channels.
              </p>
              <p style={{
                color: 'var(--cr-grey-400)', fontSize: 'var(--fs-base)',
                lineHeight: 1.7,
              }}>
                Founded with the belief that every click should convert and every strategy should grow revenue, we combine performance marketing expertise with commerce execution under one roof.
              </p>
            </div>
            <div style={{
              background: 'var(--cr-surface)',
              border: '1px solid var(--cr-border)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--space-3xl)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: '-50%', left: '-50%',
                width: '200%', height: '200%',
                background: 'conic-gradient(from 0deg, transparent, rgba(227, 27, 35, 0.1), transparent, transparent)',
                animation: 'rotate 10s linear infinite',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-md)' }}>
                  <div className="neon-icon" style={{ width: 80, height: 80, borderRadius: 'var(--radius-full)' }}>
                    <TrendingUp size={36} />
                  </div>
                </div>
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                  <Logo height={34} />
                </div>
                <p style={{ color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)', marginTop: '8px' }}>
                  Click that Converts.<br />Revenue that Grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{
        borderTop: '1px solid var(--cr-border)',
        borderBottom: '1px solid var(--cr-border)',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="container">
          <StatsCounter customStats={[
            { value: 500, suffix: '+', label: 'Brands Scaled' },
            { value: 50, suffix: '+', label: 'Team Members' },
            { value: 15, suffix: '+', label: 'Industry Verticals' },
            { value: 50, suffix: 'M+', prefix: '₹', label: 'Revenue Generated' },
          ]} />
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Our Values"
            title="What Drives"
            titleHighlight="Us"
            subtitle="The principles that guide every decision and strategy at ClickRevenue."
          />
          <div className="grid-3">
            {values.map((v, i) => (
              <div key={i} className="glow-card" style={{ padding: 'var(--space-2xl)' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 'var(--radius-md)',
                  background: 'rgba(227, 27, 35, 0.08)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  color: 'var(--neon-cyan)', marginBottom: 'var(--space-md)',
                }}>
                  <v.icon size={22} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)',
                  fontWeight: 700, color: 'var(--cr-white)', marginBottom: '8px',
                }}>{v.title}</h3>
                <p style={{
                  color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)', lineHeight: 1.6,
                }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'var(--cr-surface)' }}>
        <div className="container">
          <SectionHeading
            label="Our Journey"
            title="The"
            titleHighlight="ClickRevenue Story"
            subtitle="From a small team with a big vision to India's fastest-growing growth partner."
          />
          <div className="grid-3">
            {timeline.map((t, i) => (
              <div key={i} style={{
                padding: 'var(--space-2xl)',
                borderLeft: '3px solid var(--neon-cyan)',
                background: 'var(--cr-surface-lighter)',
                borderRadius: '0 var(--radius-lg) var(--radius-lg) 0',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 'var(--fs-2xl)',
                  fontWeight: 800, color: 'var(--neon-cyan)', marginBottom: '4px',
                }}>{t.year}</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)',
                  fontWeight: 700, color: 'var(--cr-white)', marginBottom: '8px',
                }}>{t.title}</h3>
                <p style={{
                  color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)', lineHeight: 1.6,
                }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Our Team"
            title="Meet the"
            titleHighlight="Growth Team"
            subtitle="A passionate team of growth marketers, marketplace experts, and commerce specialists."
          />
          <div className="grid-3">
            {team.map((t, i) => (
              <div key={i} className="glow-card" style={{
                padding: 'var(--space-2xl)',
                textAlign: 'center',
              }}>
                <div style={{
                  width: 80, height: 80, borderRadius: 'var(--radius-full)',
                  background: 'var(--cr-surface-lighter)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto var(--space-md)',
                  fontSize: '2.5rem',
                }}>
                  <t.icon size={32} style={{ color: 'var(--cr-white)' }} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)',
                  fontWeight: 700, color: 'var(--cr-white)', marginBottom: '4px',
                }}>{t.name}</h3>
                <p style={{
                  color: 'var(--neon-cyan)', fontSize: 'var(--fs-sm)', fontWeight: 500,
                }}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Growth Story"
        subtitle="Partner with us to scale your brand or join our team to build the future of growth."
        primaryText="Partner With Us"
        secondaryText="View Careers"
        secondaryHref="/careers"
      />
    </>
  );
}
