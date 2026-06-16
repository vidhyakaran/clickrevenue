'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DynamicEntrance from '@/components/DynamicEntrance/DynamicEntrance';
import styles from './page.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // GSAP ScrollTrigger to fade chapters in and out
    const chapters = gsap.utils.toArray('.chapter-content');

    chapters.forEach((chapter, i) => {
      // Fade in as it scrolls into view, fade out as it leaves
      gsap.fromTo(chapter, 
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: chapter,
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.scrollyContainer}>
      <DynamicEntrance>
        {/* CHAPTER 1: Intro */}
        <section className={styles.chapter}>
          <div className={`chapter-content ${styles.chapterContent}`}>
            <h1 className={styles.massiveSerifTitle}>
              The power<br />
              <span className={styles.italicSerif}>of</span> digital<br />
              <span className="text-gradient">storytelling.</span>
            </h1>
            <p className={styles.scrollHint}>Scroll to explore</p>
          </div>
        </section>

        {/* CHAPTER 2: What we do */}
        <section className={styles.chapter}>
          <div className={`chapter-content ${styles.chapterContent} ${styles.rightAlign}`}>
            <h2 className={styles.massiveSerifTitle}>
              We craft <br/> <span className="text-gradient">interactive</span> <br/> experiences.
            </h2>
            <p className={styles.chapterBody}>
              With a focus on user-centered design and intuitive interactions, we aim to create unforgettable experiences to foster deep and authentic connections with your audience.
            </p>
          </div>
        </section>

        {/* CHAPTER 3: Results */}
        <section className={styles.chapter}>
          <div className={`chapter-content ${styles.chapterContent}`}>
            <h2 className={styles.massiveSerifTitle}>
              Real results<br/>for <span className="text-gradient">ambitious</span><br/>brands.
            </h2>
            <p className={styles.chapterBody}>
              500+ brands have scaled their revenue across Ads, Marketplaces, and Quick Commerce with us.
            </p>
            <div style={{ marginTop: '40px' }}>
              <Link href="/case-studies" className="btn btn-outline" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
                See Our Work <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* CHAPTER 4: CTA */}
        <section className={styles.chapter}>
          <div className={`chapter-content ${styles.chapterContent} ${styles.centerAlign}`}>
            <h2 className={styles.massiveSerifTitle}>
              Ready to <br/><span className={styles.italicSerif}>elevate</span> your <br/> brand?
            </h2>
            <div style={{ marginTop: '60px' }}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '20px 40px', fontSize: '20px' }}>
                Book a Free Audit
              </Link>
            </div>
          </div>
        </section>
      </DynamicEntrance>
    </div>
  );
}
