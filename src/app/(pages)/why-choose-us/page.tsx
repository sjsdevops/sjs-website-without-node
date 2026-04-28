import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import { schoolData } from '@/data/schoolData';
import ImagePlaceholder from '@/components/ui/placeholder';
import styles from './why.module.scss';

export const metadata: Metadata = {
  title: "Why Choose Sree Jayam School",
};

export default function WhyChooseUsPage() {
  const { whyChooseUs } = schoolData;
  
  // Custom Minimalist SVG Icons
  const Icons: Record<string, React.ReactNode> = {
    "In-Depth Understanding": (
        <svg viewBox="0 0 24 24"><path d="M12 15l-2 5L2 7l10-5 10 5-8 13-2-5z"/><path d="M2 7l10 5 10-5"/></svg>
    ),
    "Holistic Education": (
        <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
    ),
    "English Language Proficiency": (
        <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
    "International Recognition": (
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    )
  };

  return (
    <main className={styles.editorialWhy}>
      <Breadcrumb title="The SJS Advantage" subtitle="Home" sub_title="Why Choose Us" />
      
      {/* ICSE Curriculum Benefits Grid */}
      <section className={styles.benefitSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
               <span className={styles.editorialLabel}>Accreditation</span>
               <h2 className={styles.editorialTitle}>Why <strong>ICSE / ISC</strong>?</h2>
               <p className={styles.editorialLead}>Establishing a globally recognized standard for intellectual and holistic development.</p>
            </div>
          </div>
          
          <div className={styles.benefitGrid}>
            {whyChooseUs.icseBenefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.iconBox}>
                   {Icons[benefit.title] || <svg viewBox="0 0 24 24"><path d="M12 15l-2 5L2 7l10-5 10 5-8 13-2-5z"/></svg>}
                </div>
                <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                <p className={styles.benefitText}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Large Image Split Highlight */}
      <section className={styles.highlightSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
                <div className={styles.imageWrap}>
                    <img 
                      src="/assets/img/Images/School Images (43).JPG" 
                      alt="Global Standards" 
                      style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                      className="wow zoomIn"
                    />
                </div>
            </div>
            <div className="col-lg-6">
               <div className={styles.highlightContent}>
                   <h2>{whyChooseUs.title}</h2>
                   <p>{whyChooseUs.description}</p>
               </div>
            </div>
          </div>
          
          {/* Reasons Grid Blocks */}
          <div className={styles.reasonsGrid}>
            {whyChooseUs.reasons.map((reason, index) => {
              const isDark = index % 2 === 0;
              return (
                <div key={index} className={`${styles.reasonCard} ${isDark ? styles.dark : styles.light}`}>
                  <h4>{reason.title}</h4>
                  <p>{reason.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
