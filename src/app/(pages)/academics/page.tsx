import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import { schoolData } from '@/data/schoolData';
import ImagePlaceholder from '@/components/ui/placeholder';
import styles from './academics.module.scss';

export const metadata: Metadata = {
  title: "ICSE & ISC Curriculum | Board Results",
  description: "Explore the comprehensive ICSE & ISC academic curriculum at Sree Jayam School. Highlighting our scholastic assessment system, 100% board results, and holistic education stages.",
};

export default function AcademicsPage() {
  const { academics, results } = schoolData;
  
  return (
    <main className={styles.editorialAcademics}>
      <Breadcrumb title="Academic Rigor" subtitle="Home" sub_title="Academics" />
      
      {/* Hero Intro */}
      <section className={`${styles.heroSection} pt-120 pb-80`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
               <span className="editorial-label" style={{ 
                  display: 'inline-block',
                  color: '#1A3C6E',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                  borderBottom: '2px solid #F5A623',
                  paddingBottom: '6px'
               }}>Curriculum</span>
               <h2 className="editorial-title" style={{ 
                  fontSize: '4rem',
                  fontWeight: '300',
                  color: '#111',
                  marginBottom: '30px',
                  lineHeight: '1.1',
                  letterSpacing: '-1.5px',
               }}><strong>Scholastic</strong> Assessment.</h2>
               <div className={styles.introContent}>
                  {academics.intro}
               </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic Stages alternating rows */}
      <section className={styles.stageSection}>
         {academics.stages.map((stage, index) => {
           const isEven = index % 2 === 0;
           return (
             <div key={stage.id} className={styles.stageRow}>
                <div className="row g-0 align-items-center">
                   
                   {/* Image Box */}
                    <div className={`col-lg-6 ${isEven ? 'order-lg-1' : 'order-lg-2'}`}>
                       <div className={styles.stageImage}>
                          <img 
                            src={
                               stage.id === "foundation" ? "/assets/img/Images/School Images (13).jpg" :
                               stage.id === "preparatory" ? "/assets/img/Images/School Images (11).jpg" :
                               stage.id === "middle" ? "/assets/img/Images/School Images (54).jpg" :
                               stage.id === "secondary" ? "/assets/img/Images/School Images (16).jpg" :
                               `/assets/img/Images/School Images (1).jpg`
                            } 
                            alt={stage.title} 
                            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                            className="wow fadeIn"
                          />
                       </div>
                    </div>
                   
                   {/* Content Box */}
                   <div className={`col-lg-6 ${isEven ? 'order-lg-2' : 'order-lg-1'}`}>
                      <div className={styles.stageContent}>
                         <h3>{stage.title}</h3>
                         <p>{stage.content}</p>
                      </div>
                   </div>

                </div>
             </div>
           );
         })}
      </section>
      
      {/* Table Results Section */}
      <section className={styles.resultsSection}>
        <div className="container">
           <div className="row justify-content-center mb-60">
              <div className="col-lg-8 text-center">
                 <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#1A3C6E' }}>Board <strong>Performance</strong></h2>
                 <p style={{ fontSize: '1.1rem', color: '#555', marginTop: '15px' }}>Consistent 100% Pass Percentage in ICSE & ISC Examinations.</p>
              </div>
           </div>
           
           <div className="row justify-content-center">
              <div className="col-lg-10">
                 <div className={styles.tableWrapper}>
                    <table className={styles.editorialTable}>
                       <thead>
                         <tr>
                            <th>Class</th>
                            <th>Academic Year</th>
                            <th>Pass %</th>
                         </tr>
                       </thead>
                       <tbody>
                         {results.map((res, i) => (
                           <tr key={i}>
                              <td style={{ fontWeight: '700' }}>{res.class}</td>
                              <td>{res.year}</td>
                              <td>
                                 <div className={styles.resultBadge}>{res.passPercentage}</div>
                              </td>
                           </tr>
                         ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
}
