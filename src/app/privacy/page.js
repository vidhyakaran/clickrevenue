'use client';
import SectionHeading from '@/components/SectionHeading/SectionHeading';

export default function PrivacyPolicy() {
  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <SectionHeading
          label="Legal"
          title="Privacy"
          titleHighlight="Policy"
          align="left"
        />
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          <p>Last updated: June 2026</p>
          <br/>
          <p>This Privacy Policy is currently being updated to reflect our new compliance guidelines and data processing practices. Please check back shortly for the full documentation regarding how ClickRevenue collects, uses, and safeguards your data.</p>
        </div>
      </div>
    </div>
  );
}
