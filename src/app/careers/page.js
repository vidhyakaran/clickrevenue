'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Briefcase, MapPin, Clock, ArrowRight, Users,
  TrendingUp, Heart, Zap, Star, Globe, CheckCircle,
  ChevronDown, Send
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import CTASection from '@/components/CTASection/CTASection';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

const openings = [
  {
    title: 'Marketplace Ads Specialist',
    department: 'Marketplace Growth',
    location: 'Delhi / Remote',
    type: 'Full-Time',
    experience: '2–4 years',
    description: 'Manage and scale Amazon Sponsored Products, Brands & Display campaigns for our brand portfolio. You\'ll drive ROAS optimization and marketplace advertising strategy.',
    skills: ['Amazon PPC', 'Flipkart Ads', 'Campaign Optimization', 'Data Analysis', 'Excel/Sheets'],
  },
  {
    title: 'Marketplace Operations Manager',
    department: 'Marketplace Growth',
    location: 'Delhi / Remote',
    type: 'Full-Time',
    experience: '3–5 years',
    description: 'Lead day-to-day marketplace operations across Amazon & Flipkart — catalog management, inventory coordination, and account health.',
    skills: ['Amazon Seller Central', 'Flipkart Seller Hub', 'Catalog Management', 'Inventory Planning'],
  },
  {
    title: 'Quick Commerce Growth Executive',
    department: 'Quick Commerce',
    location: 'Delhi / Mumbai',
    type: 'Full-Time',
    experience: '1–3 years',
    description: 'Manage brand presence on Blinkit and Instamart. Handle onboarding, catalog listing, visibility campaigns, and growth tracking.',
    skills: ['Blinkit', 'Instamart', 'Quick Commerce', 'FMCG Brands', 'Data-Driven Thinking'],
  },
  {
    title: 'Performance Marketing Manager',
    department: 'Performance Marketing',
    location: 'Delhi / Remote',
    type: 'Full-Time',
    experience: '3–6 years',
    description: 'Own end-to-end Meta and Google Ads campaigns for D2C brands. Drive customer acquisition with sharp targeting, creative testing, and conversion optimization.',
    skills: ['Meta Ads', 'Google Ads', 'Funnel Strategy', 'A/B Testing', 'ROAS Optimization'],
  },
  {
    title: 'Account Manager — Growth',
    department: 'Client Success',
    location: 'Delhi',
    type: 'Full-Time',
    experience: '2–4 years',
    description: 'Be the primary growth partner for a portfolio of 8–12 brands. Own client relationships, growth planning, and cross-channel execution coordination.',
    skills: ['Client Management', 'Growth Strategy', 'E-Commerce', 'Reporting', 'Communication'],
  },
  {
    title: 'SEO & Content Specialist',
    department: 'SEO & Organic',
    location: 'Remote',
    type: 'Full-Time',
    experience: '2–4 years',
    description: 'Build and execute SEO strategies for D2C brands. Drive organic traffic growth through technical SEO, content strategy, and link building.',
    skills: ['Technical SEO', 'Content Strategy', 'Ahrefs/SEMrush', 'On-Page Optimization', 'CMS'],
  },
];

const perks = [
  { icon: TrendingUp, title: 'High-Growth Environment', desc: 'Work with 500+ brands and see the direct impact of your work on revenue.' },
  { icon: Globe, title: 'Remote-Friendly', desc: 'Flexible work arrangements — work from home or our Delhi office.' },
  { icon: Heart, title: 'Health Benefits', desc: 'Comprehensive health insurance for you and your family.' },
  { icon: Star, title: 'Performance Bonuses', desc: 'Quarterly bonuses tied to individual and team performance.' },
  { icon: Users, title: 'Learning Budget', desc: '₹15,000/year for courses, certifications, and conferences.' },
  { icon: Zap, title: 'Fast Career Growth', desc: 'Rapid promotions based on impact, not tenure. Many leads promoted within 12 months.' },
];

const values = [
  'We move fast and learn faster',
  'Revenue is our North Star',
  'Transparency in everything we do',
  'Data drives every decision',
  'We celebrate wins together',
  'Growth mindset — always',
];

function JobCard({ job, index }) {
  const [expanded, setExpanded] = useState(false);
  const [applied, setApplied] = useState(false);

  return (
    <ScrollReveal delay={index * 80}>
      <div style={{
        background: 'var(--cr-surface)',
        border: '1px solid var(--cr-border)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-2xl)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
        className="glow-card"
        onClick={() => setExpanded(!expanded)}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-md)' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: 'var(--space-sm)' }}>
              <span style={{
                background: 'rgba(227, 27, 35, 0.1)', border: '1px solid rgba(227, 27, 35, 0.2)',
                borderRadius: 'var(--radius-full)', padding: '4px 12px',
                fontSize: 'var(--fs-xs)', color: 'var(--neon-cyan)', fontWeight: 600,
              }}>{job.department}</span>
              <span style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid var(--cr-border)',
                borderRadius: 'var(--radius-full)', padding: '4px 12px',
                fontSize: 'var(--fs-xs)', color: 'var(--cr-grey-300)',
                display: 'flex', alignItems: 'center', gap: '4px',
              }}>
                <Clock size={10} /> {job.type}
              </span>
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: 'var(--fs-xl)',
              fontWeight: 700, color: 'var(--cr-white)', marginBottom: '8px',
            }}>{job.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', fontSize: 'var(--fs-sm)', color: 'var(--cr-grey-400)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={13} /> {job.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Briefcase size={13} /> {job.experience}
              </span>
            </div>
          </div>
          <ChevronDown
            size={20}
            style={{
              color: 'var(--cr-grey-400)',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
              flexShrink: 0,
            }}
          />
        </div>

        {expanded && (
          <div style={{ marginTop: 'var(--space-xl)', borderTop: '1px solid var(--cr-border)', paddingTop: 'var(--space-xl)' }}>
            <p style={{ color: 'var(--cr-grey-300)', fontSize: 'var(--fs-base)', lineHeight: 1.7, marginBottom: 'var(--space-lg)' }}>
              {job.description}
            </p>
            <div style={{ marginBottom: 'var(--space-lg)' }}>
              <p style={{ color: 'var(--cr-white)', fontWeight: 600, marginBottom: '10px', fontSize: 'var(--fs-sm)' }}>Key Skills</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {job.skills.map((skill) => (
                  <span key={skill} style={{
                    background: 'var(--cr-surface-lighter)',
                    border: '1px solid var(--cr-border-light)',
                    borderRadius: 'var(--radius-full)',
                    padding: '4px 12px',
                    fontSize: 'var(--fs-xs)',
                    color: 'var(--cr-grey-200)',
                  }}>{skill}</span>
                ))}
              </div>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setApplied(true); }}
              className="btn btn-primary"
              style={{ fontSize: 'var(--fs-sm)', padding: '10px 24px' }}
            >
              {applied ? <><CheckCircle size={14} /> Applied!</> : <>Apply Now <ArrowRight size={14} /></>}
            </button>
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}

export default function CareersPage() {
  const [formData, setFormData] = useState({ name: '', email: '', role: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 'calc(var(--nav-height) + var(--space-4xl))',
        paddingBottom: 'var(--space-3xl)',
        position: 'relative', zIndex: 1,
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '300px',
          background: 'radial-gradient(ellipse, rgba(227, 27, 35, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
          <ScrollReveal>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(227, 27, 35, 0.1)', border: '1px solid rgba(227, 27, 35, 0.3)',
              borderRadius: 'var(--radius-full)', padding: '8px 20px',
              fontSize: 'var(--fs-sm)', color: 'var(--neon-cyan)', fontWeight: 600,
              marginBottom: 'var(--space-xl)',
            }}>
              We're Hiring
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'var(--fs-hero)',
              fontWeight: 900, color: 'var(--cr-white)', lineHeight: 1.1,
              marginBottom: 'var(--space-lg)',
            }}>
              Build the Future of <span className="text-gradient">Growth</span>
            </h1>
            <p style={{
              color: 'var(--cr-grey-300)', fontSize: 'var(--fs-lg)',
              maxWidth: '640px', margin: '0 auto var(--space-2xl)', lineHeight: 1.7,
            }}>
              Join a team that&apos;s scaling 500+ brands across India. We&apos;re looking for passionate growth experts who thrive on impact.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#openings" className="btn btn-primary">See Open Roles <ArrowRight size={18} /></a>
              <a href="#culture" className="btn btn-outline">Our Culture</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Perks */}
      <section className="section" style={{ borderTop: '1px solid var(--cr-border)' }}>
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              label="Why ClickRevenue"
              title="Why Join"
              titleHighlight="Our Team?"
              subtitle="We invest in our people as much as we invest in our clients' growth."
            />
          </ScrollReveal>
          <div className="grid-3">
            {perks.map((perk, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="glow-card" style={{ padding: 'var(--space-2xl)' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 'var(--radius-md)',
                    background: 'rgba(227, 27, 35, 0.1)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    color: 'var(--neon-cyan)', marginBottom: 'var(--space-md)',
                  }}>
                    <perk.icon size={22} />
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)',
                    fontWeight: 700, color: 'var(--cr-white)', marginBottom: '8px',
                  }}>{perk.title}</h3>
                  <p style={{ color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)', lineHeight: 1.6 }}>
                    {perk.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section id="culture" className="section" style={{ background: 'var(--cr-surface)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-4xl)',
            alignItems: 'center',
          }}>
            <ScrollReveal direction="left">
              <div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'rgba(227, 27, 35, 0.1)', border: '1px solid rgba(227, 27, 35, 0.3)',
                  borderRadius: 'var(--radius-full)', padding: '6px 16px',
                  fontSize: 'var(--fs-sm)', color: 'var(--neon-cyan)', fontWeight: 600,
                  marginBottom: 'var(--space-lg)',
                }}>Our Culture</div>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, var(--fs-4xl))',
                  fontWeight: 800, color: 'var(--cr-white)', lineHeight: 1.2,
                  marginBottom: 'var(--space-lg)',
                }}>
                  How We <span className="text-gradient">Work</span>
                </h2>
                <p style={{
                  color: 'var(--cr-grey-300)', fontSize: 'var(--fs-md)',
                  lineHeight: 1.7, marginBottom: 'var(--space-2xl)',
                }}>
                  We&apos;re a fast-moving team of growth obsessives. We value outcomes over hours, move with urgency, and celebrate every client win as our own.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {values.map((v, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle size={16} style={{ color: 'var(--neon-cyan)', flexShrink: 0 }} />
                      <span style={{ color: 'var(--cr-grey-200)', fontSize: 'var(--fs-base)' }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
                {[
                  { value: '500+', label: 'Brands Scaled' },
                  { value: '50+', label: 'Team Members' },
                  { value: '4.8★', label: 'Glassdoor Rating' },
                  { value: '90%', label: 'Retention Rate' },
                ].map((stat, i) => (
                  <div key={i} style={{
                    background: 'var(--cr-surface-lighter)',
                    border: '1px solid var(--cr-border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-2xl)',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-display)', fontSize: 'var(--fs-3xl)',
                      fontWeight: 900, color: 'var(--neon-cyan)', marginBottom: '4px',
                    }}>{stat.value}</div>
                    <div style={{ color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            #culture .container > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Open Positions */}
      <section id="openings" className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              label="Open Positions"
              title="Join the"
              titleHighlight="Growth Team"
              subtitle="We're actively hiring across all our service verticals. Click any role to learn more."
            />
          </ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {openings.map((job, i) => (
              <JobCard key={i} job={job} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section className="section" style={{ background: 'var(--cr-surface)' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <ScrollReveal>
            <SectionHeading
              label="Apply Now"
              title="Send Us Your"
              titleHighlight="Application"
              subtitle="Don't see a perfect fit? We're always looking for exceptional talent. Send us your profile."
            />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            {submitted ? (
              <div style={{
                background: 'rgba(227, 27, 35, 0.08)', border: '1px solid rgba(227, 27, 35, 0.3)',
                borderRadius: 'var(--radius-xl)', padding: 'var(--space-3xl)', textAlign: 'center',
              }}>
                <CheckCircle size={48} style={{ color: 'var(--neon-cyan)', margin: '0 auto var(--space-lg)' }} />
                <h3 style={{ color: 'var(--cr-white)', marginBottom: '8px' }}>Application Received!</h3>
                <p style={{ color: 'var(--cr-grey-400)' }}>We&apos;ll review your profile and get back to you within 3–5 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                {[
                  { label: 'Full Name', id: 'career-name', key: 'name', type: 'text', placeholder: 'Your full name' },
                  { label: 'Email Address', id: 'career-email', key: 'email', type: 'email', placeholder: 'your@email.com' },
                  { label: 'Role You\'re Applying For', id: 'career-role', key: 'role', type: 'text', placeholder: 'e.g. Marketplace Ads Specialist' },
                ].map((field) => (
                  <div key={field.key}>
                    <label htmlFor={field.id} style={{
                      display: 'block', color: 'var(--cr-grey-200)',
                      fontSize: 'var(--fs-sm)', fontWeight: 600, marginBottom: '8px',
                    }}>{field.label}</label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      required
                      style={{
                        width: '100%', background: 'var(--cr-surface-lighter)',
                        border: '1px solid var(--cr-border)', borderRadius: 'var(--radius-lg)',
                        padding: '14px 16px', color: 'var(--cr-white)',
                        fontSize: 'var(--fs-base)', outline: 'none',
                        transition: 'border-color 0.3s ease',
                        fontFamily: 'var(--font-primary)',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--neon-cyan)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--cr-border)'; }}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="career-message" style={{
                    display: 'block', color: 'var(--cr-grey-200)',
                    fontSize: 'var(--fs-sm)', fontWeight: 600, marginBottom: '8px',
                  }}>Tell us about yourself</label>
                  <textarea
                    id="career-message"
                    rows={5}
                    placeholder="Share your experience, why you want to join ClickRevenue, and what makes you a great fit..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    style={{
                      width: '100%', background: 'var(--cr-surface-lighter)',
                      border: '1px solid var(--cr-border)', borderRadius: 'var(--radius-lg)',
                      padding: '14px 16px', color: 'var(--cr-white)',
                      fontSize: 'var(--fs-base)', outline: 'none', resize: 'vertical',
                      transition: 'border-color 0.3s ease', fontFamily: 'var(--font-primary)',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--neon-cyan)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--cr-border)'; }}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Send Application <Send size={16} />
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Questions About Working With Us?"
        subtitle="Reach out to our team and we'll be happy to answer any questions about life at ClickRevenue."
        primaryText="Contact Us"
        primaryHref="/contact"
        secondaryText="Back to Home"
        secondaryHref="/"
      />
    </>
  );
}
