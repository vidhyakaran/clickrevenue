'use client';
import SectionHeading from '@/components/SectionHeading/SectionHeading';

export default function TermsOfService() {
  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <SectionHeading
          label="Legal"
          title="Terms of"
          titleHighlight="Service"
          align="left"
        />
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          <p>Last updated: June 2026</p>
          <br/>
          <p>Our Terms of Service are currently under revision to better serve our brand partners and reflect our new performance marketing agreements. Check back soon for the updated terms.</p>
        </div>
      </div>
    </div>
  );
}
