import React from 'react';
import CTASection from '@/components/CTASection/CTASection';
import NoomoCaseCard from '@/components/NoomoCaseCard/NoomoCaseCard';
import { caseStudiesConfig } from '@/config/stats';
import styles from './page.module.css';

export const metadata = {
  title: 'Work — Growth Results | ClickRevenue',
  description: 'See how ClickRevenue has helped 500+ brands achieve transformative growth across performance marketing, marketplaces, and quick commerce.',
};

// Placeholder images for the massive Noomo-style cards
const placeholderImages = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2000&auto=format&fit=crop'
];

export default function CaseStudiesPage() {
  const activeCases = caseStudiesConfig.filter(cs => cs.title !== null);

  // Re-group cases into Noomo's alternating layout structure:
  // Item 0, 1 -> Half Slice
  // Item 2 -> Full Slice
  // Item 3, 4 -> Half Slice
  // Item 5 -> Full Slice
  const slices = [];
  let i = 0;
  while (i < activeCases.length) {
    // If it's the start of a sequence or after a full slice, create a half slice if there are 2 items
    if ((slices.length % 2 === 0) && (i + 1 < activeCases.length)) {
      slices.push({
        type: 'half',
        items: [activeCases[i], activeCases[i + 1]]
      });
      i += 2;
    } else {
      slices.push({
        type: 'full',
        item: activeCases[i]
      });
      i += 1;
    }
  }

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroTitleContainer}>
          <h1 className={styles.heroTitle}>
            We craft<br/>
            interactive<br/>
            experiences
          </h1>
          <h2 className={styles.heroSubtitle}>
            With a focus on user-centered design and data-driven interactions, we aim to create transformative growth for your brand.
          </h2>
        </div>
      </section>

      <div className={styles.worksContent}>
        {slices.map((slice, index) => {
          if (slice.type === 'half') {
            return (
              <div key={index} className={styles.halfSlice}>
                <div className={styles.halfItem}>
                  <NoomoCaseCard 
                    variant="half"
                    title={slice.items[0].title}
                    tags={[slice.items[0].tag, slice.items[0].industry, 'Growth']}
                    imageSrc={placeholderImages[index % placeholderImages.length]}
                    href="#"
                  />
                </div>
                <div className={styles.halfItem}>
                  <NoomoCaseCard 
                    variant="half"
                    title={slice.items[1].title}
                    tags={[slice.items[1].tag, slice.items[1].industry, 'Strategy']}
                    imageSrc={placeholderImages[(index + 1) % placeholderImages.length]}
                    href="#"
                  />
                </div>
              </div>
            );
          } else {
            return (
              <div key={index} className={styles.fullSlice}>
                <NoomoCaseCard 
                  variant="full"
                  title={slice.item.title}
                  tags={[slice.item.tag, slice.item.industry, 'Performance', 'Scale']}
                  imageSrc={placeholderImages[(index + 2) % placeholderImages.length]}
                  href="#"
                />
              </div>
            );
          }
        })}
      </div>

      <CTASection
        title="Want Results Like These?"
        subtitle="Let's discuss how we can drive similar growth for your brand."
      />
    </>
  );
}
