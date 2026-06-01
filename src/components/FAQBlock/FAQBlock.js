'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQBlock.module.css';
import SectionHeading from '../SectionHeading/SectionHeading';

const defaultFaqs = [
  {
    question: "How is ClickRevenue different from a standard digital marketing agency?",
    answer: "We are a full-funnel growth partner. Instead of just running ads and sending traffic, we manage your entire revenue engine—from Meta/Google acquisition to organic SEO, and deep distribution across marketplaces (Amazon/Flipkart) and Quick Commerce (Blinkit/Instamart)."
  },
  {
    question: "Do you guarantee ROAS or specific revenue targets?",
    answer: "While we cannot guarantee a specific ROAS before an initial audit due to market variables, our strategies are deeply data-driven. We work with brands on a revenue-first approach, setting clear KPIs in month 1 and scaling aggressively once unit economics are proven."
  },
  {
    question: "What is your typical onboarding process?",
    answer: "Our onboarding takes 7-14 days. It involves a deep-dive technical audit of your existing accounts, setting up attribution tracking, analyzing competitor gaps, and delivering a 90-day growth roadmap before any campaigns go live."
  },
  {
    question: "Do you handle creative production as well as media buying?",
    answer: "Yes. Our growth strategies integrate tightly with creative execution. We produce performance-focused static and video assets designed specifically for conversion, rather than just brand aesthetics."
  }
];

export default function FAQBlock({ faqs = defaultFaqs, title = "Frequently Asked", titleHighlight = "Questions" }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <SectionHeading 
          label="Clear Answers" 
          title={title} 
          titleHighlight={titleHighlight} 
          subtitle="Everything you need to know about partnering with ClickRevenue for your growth." 
        />
        
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <button className={styles.faqQuestion} aria-expanded={openIndex === index}>
                {faq.question}
                <ChevronDown className={styles.faqIcon} size={20} />
              </button>
              <div 
                className={styles.faqAnswerWrapper}
                style={{ height: openIndex === index ? 'auto' : 0 }}
              >
                <div className={styles.faqAnswer}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
