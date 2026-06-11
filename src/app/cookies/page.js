'use client';
import SectionHeading from '@/components/SectionHeading/SectionHeading';

export default function CookiePolicy() {
  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <SectionHeading
          label="Legal"
          title="Cookie"
          titleHighlight="Policy"
          align="left"
        />
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          <p>Last updated: June 2026</p>
          <br/>
          <p>We use cookies to improve your experience on our site and analyze traffic. The detailed Cookie Policy page is currently being updated. In the meantime, by continuing to use our site, you consent to our use of essential cookies.</p>
        </div>
      </div>
    </div>
  );
}
