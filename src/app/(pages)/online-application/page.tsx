import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import styles from './admissions.module.scss';
import Link from 'next/link';
import { CheckSvg } from '@/components/svg';

export const metadata: Metadata = {
  title: "Online Application - Sree Jayam School",
};

export default function AdmissionsPage() {
  const admissionPortalUrl = "http://admission.sreejayamschool.edu.in/";

  const stats = [
    { number: "100%", label: "Pass Rate" },
    { number: "15+", label: "Extracurriculars" },
    { number: "25:1", label: "Student-Teacher Ratio" },
    { number: "50+", label: "Expert Faculty" },
  ];

  const steps = [
    {
      step: "01",
      title: "Online Registration",
      desc: "Fill out the simple application form through our secure, dedicated admission portal. It only takes a few minutes."
    },
    {
      step: "02",
      title: "Campus Interaction",
      desc: "Once reviewed, our team will invite you and your child for a casual interaction session and campus tour."
    },
    {
      step: "03",
      title: "Enrollment & Welcome",
      desc: "Complete the final documentation and fee payment to secure your seat. Welcome to the SJS family!"
    }
  ];

  return (
    <main className={styles.marketingContainer}>
      <Breadcrumb title="Online Application" subtitle="Home" sub_title="Online Application" />
      
      {/* High-Impact Hero Section */}
      <section className={`${styles.heroSection}`}>
        <div className="container">
           <div className={styles.heroContent}>
              <div className="row align-items-center">
                 <div className="col-lg-7 mb-50 mb-lg-0">
                    <span className={styles.badge}>Admissions Open 2026-2027</span>
                    <h1 className={styles.mainTitle}>
                       Your Child's Future <br/> Starts <span>Right Here.</span>
                    </h1>
                    <p className={styles.subtitle}>
                       Join Sree Jayam School and give your child the gift of holistic, modern education. We are currently accepting applications across all grades.
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                       <a href={admissionPortalUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
                          Apply Online Now <i className="fa-solid fa-arrow-right ms-2"></i>
                       </a>
                       <Link href="/contact" className={styles.ctaSecondary}>
                          Contact Office
                       </Link>
                    </div>
                    
                    <div className="mt-40 d-flex align-items-center gap-4">
                       <div className="d-flex align-items-center gap-2">
                          <div style={{ color: '#F5A623' }}><CheckSvg /></div>
                          <span style={{ fontWeight: 600, color: '#1A3C6E' }}>Fast Process</span>
                       </div>
                       <div className="d-flex align-items-center gap-2">
                          <div style={{ color: '#F5A623' }}><CheckSvg /></div>
                          <span style={{ fontWeight: 600, color: '#1A3C6E' }}>Secure Portal</span>
                       </div>
                    </div>
                 </div>
                 
                 <div className="col-lg-5">
                    {/* Visual Stats Block on the side instead of image */}
                    <div className="row g-4">
                       {stats.map((stat, idx) => (
                         <div className="col-6" key={idx}>
                            <div className={styles.statCard}>
                               <h4>{stat.number}</h4>
                               <p>{stat.label}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Atmosphere Banner */}
      <section className={styles.atmosphereBanner}>
         <div className="container">
            <div className={styles.bannerImageWrap} style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', marginBottom: '80px' }}>
               <img 
                 src="/assets/img/Images/School Images (57).jpg" 
                 alt="SJS Assembly Atmosphere" 
                 style={{ width: '100%', height: '500px', objectFit: 'cover' }}
               />
               <div className={styles.bannerCaption} style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '40px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: 'white' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>Vibrant Campus Atmosphere</h3>
                  <p style={{ opacity: 0.9 }}>Where discipline meets community every single morning.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 3 Step Timeline */}
      <section className={`${styles.timelineSection} pt-120 pb-120`}>
         <div className="container">
            <div className="row justify-content-center mb-60">
               <div className="col-lg-8 text-center">
                  <span className={styles.badge}>How it Works</span>
                  <h2 className={styles.mainTitle} style={{ fontSize: '2.8rem' }}>A Simple, Transparent <br/> <span>Admission Process</span></h2>
               </div>
            </div>
            
            <div className="row g-4">
               {steps.map((item, idx) => (
                 <div className="col-lg-4" key={idx}>
                    <div className={styles.timelineCard}>
                       <div className={styles.timelineNumber}>{item.step}</div>
                       <h3 className={styles.timelineTitle}>{item.title}</h3>
                       <p className={styles.timelineDesc}>{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Massive Bottom CTA */}
      <section className="pb-120 pt-40" style={{ backgroundColor: 'white' }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className={styles.bottomCtaBanner}>
                     <h2>Ready to join the SJS Community?</h2>
                     <p>Don't miss the opportunity to enroll your child in an environment designed for ultimate success and growth.</p>
                     <a href={admissionPortalUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary} style={{ padding: '20px 50px', fontSize: '1.3rem' }}>
                        Start Your Application
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
      
    </main>
  );
}
