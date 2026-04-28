import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import { schoolData } from '@/data/schoolData';
import ImagePlaceholder from '@/components/ui/placeholder';
import styles from './facilities.module.scss';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Premium Facilities - Sree Jayam School",
};

export default function FacilitiesPage() {
  const { facilities } = schoolData;
  
  // Clean, minimalist geometric SVGs replacing emojis
  const infraIcons: Record<string, React.ReactNode> = {
    "Laboratories": (
      <svg viewBox="0 0 24 24">
        <path d="M10 3h4v4l5 11v3H5v-3l5-11V3z" />
        <path d="M9 14h6" />
        <path d="M12 3v4" />
      </svg>
    ),
    "Computer Lab": (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    "Library": (
      <svg viewBox="0 0 24 24">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    "Sports Facilities": (
      <svg viewBox="0 0 24 24">
         <circle cx="12" cy="12" r="10" />
         <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
         <path d="M2 12h20" />
      </svg>
    )
  };

  const infraDetails = [
    { title: "Laboratories", desc: "Physics, Chemistry, Biology, Computer, Math, Composite, Robotics. Fostering empirical exploration." },
    { title: "Computer Lab", desc: "High-performance architecture equipped with rigorous modern software ecosystem suites." },
    { title: "Library", desc: "Extensively stocked physical and digital archives providing rigorous academic enrichment." },
    { title: "Sports Facilities", desc: "Table Tennis, Shuttle, Cricket, Basketball, Football & Athletics focused on physical discipline." }
  ];

  return (
    <main className={styles.editorialFacilities}>
      <Breadcrumb title="Our Facilities" subtitle="Home" sub_title="Facilities" />
      
      {/* Editorial Hero */}
      <section className={`${styles.heroSection} pt-120 pb-100`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <span className={styles.editorialLabel}>Infrastructure</span>
              <h2 className={styles.editorialTitle}>Environments Engineered for <strong>Excellence</strong>.</h2>
              <p className={styles.editorialSubtitle} style={{ margin: '0 auto' }}>
                We believe that a sterile environment stifles growth. Our campus integrates sophisticated architecture with purposeful design to foster unparalleled academic and personal development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Feature Layout */}
      <section className="facilities-showcase">
         {facilities.map((fac, index) => {
            const isEven = index % 2 === 0;
            return (
               <div className={styles.featureSection} key={index}>
                  <div className="row g-0 align-items-center">
                     
                     {/* Image Column */}
                     <div className={`col-lg-6 ${isEven ? 'order-lg-1' : 'order-lg-2'}`}>
                        <div className={styles.featureImageWrapper}>
                           <img 
                             src={
                               fac.title === "Library" ? "/assets/img/Images/School Images (58).jpg" :
                               fac.title === "Science Labs" ? "/assets/img/Images/School Images (59).jpg" :
                               fac.title === "Computer Lab" ? "/assets/img/Images/School Images (3).jpg" :
                               fac.title === "Sports Facilities" ? "/assets/img/Images/School Images (5).jpg" :
                               fac.title === "Smart Classrooms" ? "/assets/img/Images/School Images (7).jpg" :
                               fac.title === "Montessori Room" ? "/assets/img/Images/School Images (8).jpg" :
                               fac.title === "Kids Play Area" ? "/assets/img/Images/School Images (14).jpg" :
                               fac.title === "Indoor Multipurpose Hall" ? "/assets/img/Images/School Images (16).jpg" :
                               fac.title === "Outdoor Basketball Court" ? "/assets/img/Images/School Images (18).JPG" :
                               fac.title === "Music Room" ? "/assets/img/Images/School Images (6).jpg" :
                               fac.title === "Cafeteria" ? "/assets/img/Images/School Images (51).JPG" :
                               fac.title === "Transport" ? "/assets/img/Images/School Images (50).JPG" :
                               `/assets/img/Images/School Images (10).jpg`
                             } 
                             alt={fac.title} 
                             style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                           />
                        </div>
                     </div>
                     
                     {/* Text Column */}
                     <div className={`col-lg-6 ${isEven ? 'order-lg-2' : 'order-lg-1'}`}>
                        <div className={styles.featureContent}>
                           <h3>{fac.title}</h3>
                           <p>{fac.description}</p>
                        </div>
                     </div>

                  </div>
               </div>
            );
         })}
      </section>
      
      {/* Expert Infrastructure Overview Grid */}
      <section className={`${styles.overviewSection} pt-120 pb-120`}>
        <div className="container">
            <div className="row justify-content-center mb-60">
                <div className="col-lg-8 text-center">
                   <h2 className={styles.editorialTitle} style={{ fontSize: '3rem' }}>Core <strong>Infrastructure</strong></h2>
                </div>
            </div>
            
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className={styles.overviewGrid}>
                      {infraDetails.map((item, i) => (
                          <div className={styles.overviewCard} key={i}>
                              <div className={styles.overviewIcon}>
                                 {infraIcons[item.title]}
                              </div>
                              <h4>{item.title}</h4>
                              <p>{item.desc}</p>
                          </div>
                      ))}
                  </div>
               </div>
            </div>
            
            <div className="row text-center mt-80">
               <div className="col-12">
                 <Link href="/gallery" className="tp-btn" style={{ padding: '16px 40px' }}>Discover the Gallery</Link>
               </div>
            </div>
        </div>
      </section>
    </main>
  );
}
