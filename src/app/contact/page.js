'use client';

import { useState } from 'react';
import {
  Mail, Phone, MapPin, Send, CheckCircle,
  MessageSquare, Clock, ArrowRight, Zap
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import CTASection from '@/components/CTASection/CTASection';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@clickrevenue.in',
    sub: 'We reply within 24 hours',
    href: 'mailto:hello@clickrevenue.in',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91 98765 43210',
    sub: 'Mon–Sat, 10am–7pm IST',
    href: 'tel:+919876543210',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'New Delhi, India',
    sub: 'DLF Cyber City, Gurugram 122002',
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon – Sat',
    sub: '10:00 AM – 7:00 PM IST',
    href: null,
  },
];

const socialLinks = [
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/company/clickrevenue', color: '#0077B5' },
  { icon: TwitterIcon, label: 'Twitter / X', href: 'https://twitter.com/clickrevenue', color: '#1DA1F2' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/clickrevenue', color: '#E1306C' },
  { icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com/clickrevenue', color: '#1877F2' },
];

const services = [
  'Performance Marketing (Meta / Google Ads)',
  'SEO & Organic Growth',
  'Marketplace Growth (Amazon / Flipkart)',
  'Quick Commerce (Blinkit / Instamart)',
  'Growth & Creative Support',
  'Not sure — let\'s discuss',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    background: 'var(--cr-surface-lighter)',
    border: '1px solid var(--cr-border)',
    borderRadius: 'var(--radius-lg)',
    padding: '14px 16px',
    color: 'var(--cr-white)',
    fontSize: 'var(--fs-base)',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    fontFamily: 'var(--font-primary)',
  };

  const labelStyle = {
    display: 'block',
    color: 'var(--cr-grey-200)',
    fontSize: 'var(--fs-sm)',
    fontWeight: 600,
    marginBottom: '8px',
  };

  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        paddingTop: 'calc(var(--nav-height) + var(--space-4xl))',
        paddingBottom: 'var(--space-3xl)',
        position: 'relative', zIndex: 1,
      }}>
        {/* ambient glow */}
        <div style={{
          position: 'absolute', top: '10%', left: '50%',
          transform: 'translateX(-50%)',
          width: '700px', height: '350px',
          background: 'radial-gradient(ellipse, rgba(227, 27, 35, 0.07) 0%, transparent 70%)',
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
              <MessageSquare size={14} /> Get In Touch
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'var(--fs-hero)',
              fontWeight: 900, color: 'var(--cr-white)', lineHeight: 1.1,
              marginBottom: 'var(--space-lg)',
            }}>
              Let&apos;s <span className="text-gradient">Grow</span> Together
            </h1>

            <p style={{
              color: 'var(--cr-grey-300)', fontSize: 'var(--fs-lg)',
              maxWidth: '600px', margin: '0 auto', lineHeight: 1.7,
            }}>
              Ready to scale your brand? Tell us about your goals and our team will get back to you within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Contact Info Cards ── */}
      <section style={{ paddingBottom: 'var(--space-3xl)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="grid-4">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="glow-card"
                    style={{
                      display: 'block',
                      padding: 'var(--space-xl)',
                      textDecoration: 'none',
                    }}
                  >
                    <InfoCard info={info} />
                  </a>
                ) : (
                  <div className="glow-card" style={{ padding: 'var(--space-xl)' }}>
                    <InfoCard info={info} />
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content: Form + Sidebar ── */}
      <section className="section" style={{ borderTop: '1px solid var(--cr-border)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 'var(--space-4xl)',
            alignItems: 'flex-start',
          }}>

            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div style={{
                background: 'var(--cr-surface)',
                border: '1px solid var(--cr-border)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'var(--space-3xl)',
              }}>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'var(--fs-2xl)',
                  fontWeight: 800, color: 'var(--cr-white)', marginBottom: 'var(--space-sm)',
                }}>
                  Send Us a <span className="text-gradient">Message</span>
                </h2>
                <p style={{ color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)', marginBottom: 'var(--space-2xl)' }}>
                  Fill in your details and we&apos;ll reach out within one business day.
                </p>

                {submitted ? (
                  <div style={{
                    textAlign: 'center', padding: 'var(--space-3xl) 0',
                  }}>
                    <div style={{
                      width: 72, height: 72, borderRadius: 'var(--radius-full)',
                      background: 'rgba(227, 27, 35, 0.1)', border: '2px solid var(--neon-cyan)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto var(--space-lg)',
                    }}>
                      <CheckCircle size={32} style={{ color: 'var(--neon-cyan)' }} />
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontSize: 'var(--fs-xl)',
                      fontWeight: 700, color: 'var(--cr-white)', marginBottom: '8px',
                    }}>Message Sent!</h3>
                    <p style={{ color: 'var(--cr-grey-400)', marginBottom: 'var(--space-xl)' }}>
                      Thank you for reaching out. Our team will connect with you shortly.
                    </p>
                    <button
                      className="btn btn-outline"
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' }); }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
                      <div>
                        <label htmlFor="contact-name" style={labelStyle}>Full Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = 'var(--neon-cyan)'; }}
                          onBlur={(e) => { e.target.style.borderColor = 'var(--cr-border)'; }}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" style={labelStyle}>Email Address *</label>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = 'var(--neon-cyan)'; }}
                          onBlur={(e) => { e.target.style.borderColor = 'var(--cr-border)'; }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
                      <div>
                        <label htmlFor="contact-company" style={labelStyle}>Company / Brand Name</label>
                        <input
                          id="contact-company"
                          type="text"
                          placeholder="Your brand"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = 'var(--neon-cyan)'; }}
                          onBlur={(e) => { e.target.style.borderColor = 'var(--cr-border)'; }}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" style={labelStyle}>Phone Number</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = 'var(--neon-cyan)'; }}
                          onBlur={(e) => { e.target.style.borderColor = 'var(--cr-border)'; }}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-service" style={labelStyle}>Service You&apos;re Interested In</label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        onFocus={(e) => { e.target.style.borderColor = 'var(--neon-cyan)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'var(--cr-border)'; }}
                      >
                        <option value="" style={{ background: '#1a1a1a' }}>Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s} style={{ background: '#1a1a1a' }}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" style={labelStyle}>Your Message *</label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        placeholder="Tell us about your brand, goals, and what you'd like help with..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        style={{ ...inputStyle, resize: 'vertical' }}
                        onFocus={(e) => { e.target.style.borderColor = 'var(--neon-cyan)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'var(--cr-border)'; }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                      style={{ alignSelf: 'flex-start', opacity: loading ? 0.7 : 1 }}
                    >
                      {loading ? 'Sending...' : <> Send Message <Send size={16} /></>}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Sidebar */}
            <ScrollReveal direction="right">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
                {/* Why Reach Out */}
                <div style={{
                  background: 'var(--cr-surface)',
                  border: '1px solid var(--cr-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-2xl)',
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)',
                    fontWeight: 700, color: 'var(--cr-white)', marginBottom: 'var(--space-lg)',
                  }}>What Happens Next?</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                    {[
                      { step: '01', title: 'We Review Your Query', desc: 'Our team reviews your message and aligns with the right specialist.' },
                      { step: '02', title: 'Discovery Call', desc: 'We schedule a 30-min call to understand your goals and challenges.' },
                      { step: '03', title: 'Custom Growth Plan', desc: 'We present a tailored strategy with timelines and expected outcomes.' },
                      { step: '04', title: 'We Start Growing', desc: 'Onboarding in 48 hours. Results within the first 30 days.' },
                    ].map((step, i) => (
                      <div key={i} style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start' }}>
                        <div style={{
                          width: 36, height: 36, borderRadius: 'var(--radius-full)',
                          background: 'rgba(227, 27, 35, 0.1)', border: '1px solid rgba(227, 27, 35, 0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontFamily: 'var(--font-display)', fontSize: 'var(--fs-xs)',
                          fontWeight: 800, color: 'var(--neon-cyan)', flexShrink: 0,
                        }}>{step.step}</div>
                        <div>
                          <h4 style={{
                            fontFamily: 'var(--font-display)', fontSize: 'var(--fs-base)',
                            fontWeight: 600, color: 'var(--cr-white)', marginBottom: '4px',
                          }}>{step.title}</h4>
                          <p style={{ color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)', lineHeight: 1.5 }}>
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div style={{
                  background: 'var(--cr-surface)',
                  border: '1px solid var(--cr-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-2xl)',
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)',
                    fontWeight: 700, color: 'var(--cr-white)', marginBottom: 'var(--space-lg)',
                  }}>Follow Us</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex', alignItems: 'center', gap: '12px',
                          padding: '12px 16px',
                          background: 'var(--cr-surface-lighter)',
                          border: '1px solid var(--cr-border)',
                          borderRadius: 'var(--radius-lg)',
                          color: 'var(--cr-grey-200)',
                          fontSize: 'var(--fs-sm)', fontWeight: 500,
                          transition: 'all 0.3s ease',
                          textDecoration: 'none',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = social.color;
                          e.currentTarget.style.color = social.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'var(--cr-border)';
                          e.currentTarget.style.color = 'var(--cr-grey-200)';
                        }}
                      >
                        <social.icon size={18} />
                        {social.label}
                        <ArrowRight size={14} style={{ marginLeft: 'auto' }} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Response Badge */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(227, 27, 35, 0.15), rgba(227, 27, 35, 0.05))',
                  border: '1px solid rgba(227, 27, 35, 0.3)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-xl)',
                  textAlign: 'center',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                    <div className="neon-icon" style={{ width: 48, height: 48, borderRadius: 'var(--radius-full)' }}>
                      <Zap size={24} />
                    </div>
                  </div>
                  <h4 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'var(--fs-base)',
                    fontWeight: 700, color: 'var(--cr-white)', marginBottom: '4px',
                  }}>Quick Response Guarantee</h4>
                  <p style={{ color: 'var(--cr-grey-400)', fontSize: 'var(--fs-sm)' }}>
                    We reply to all queries within <strong style={{ color: 'var(--neon-cyan)' }}>24 hours</strong> — weekdays.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 600px) {
            .form-grid-2 { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <CTASection
        title="Ready to Scale Your Brand?"
        subtitle="Join 500+ brands that trust ClickRevenue for growth across Ads, Marketplaces & Quick Commerce."
      />
    </>
  );
}

function InfoCard({ info }) {
  return (
    <>
      <div style={{
        width: 44, height: 44, borderRadius: 'var(--radius-md)',
        background: 'rgba(227, 27, 35, 0.1)', border: '1px solid rgba(227, 27, 35, 0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--neon-cyan)', marginBottom: 'var(--space-md)',
      }}>
        <info.icon size={20} />
      </div>
      <p style={{ color: 'var(--cr-grey-400)', fontSize: 'var(--fs-xs)', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {info.title}
      </p>
      <p style={{ color: 'var(--cr-white)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-base)', marginBottom: '4px' }}>
        {info.value}
      </p>
      <p style={{ color: 'var(--cr-grey-400)', fontSize: 'var(--fs-xs)' }}>{info.sub}</p>
    </>
  );
}
