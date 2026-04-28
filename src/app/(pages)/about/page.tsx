import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import { schoolData } from '@/data/schoolData';
import styles from './about.module.scss';

export const metadata: Metadata = {
  title: "Our Legacy & History",
  description: "Learn about the origins of Sree Jayam School, from our start in 2005 to becoming a premier ICSE & ISC institution in Vellore. Discover our commitment to quality education.",
};

export default function AboutPage() {
  const { aboutFull } = schoolData;
  
  return (
    <main className={styles.editorialAbout}>
      <Breadcrumb title="Our Legacy" subtitle="Home" sub_title="About Us" />
      
      {/* Editorial History section */}
      <section className={`${styles.heroSection} pt-120 pb-100`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <span className={styles.editorialLabel}>Our Origins</span>
              <h2 className={styles.editorialTitle}>A Tradition of <strong>Excellence</strong>.</h2>
              <div className={styles.historyContent}>
                 {aboutFull.history}
              </div>
              
              <div className={styles.historyImageWrap} style={{ marginTop: '60px' }}>
                 <img 
                    src="/assets/img/Images/School Images (12).jpg" 
                    alt="Foundational Years" 
                    style={{ width: '100%', maxHeight: '600px', objectFit: 'cover', borderRadius: '4px' }}
                 />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Milestones Grid Section */}
      <section className="milestones-section pt-100 pb-120">
        <div className="container">
          <div className="row justify-content-center mb-60">
            <div className="col-lg-8 text-center">
               <h2 className={styles.editorialTitle} style={{ fontSize: '3rem' }}>Key <strong>Milestones</strong></h2>
            </div>
          </div>
          
          <div className={styles.milestoneGrid}>
              {aboutFull.milestones.map((milestone, index) => (
                <div key={index} className={styles.milestoneCard}>
                    <div className={styles.year}>{milestone.year}</div>
                    <div className={styles.title}>{milestone.title}</div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
