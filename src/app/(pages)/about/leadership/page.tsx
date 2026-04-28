import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import { schoolData } from '@/data/schoolData';
import ImagePlaceholder from '@/components/ui/placeholder';
import styles from './leadership.module.scss';

export const metadata: Metadata = {
  title: "Leadership Messages - Sree Jayam School",
};

export default function LeadershipPage() {
  const { leadership } = schoolData;
  
  return (
    <main className={styles.editorialLeadership}>
      <Breadcrumb title="Voices of Leadership" subtitle="About" sub_title="Leadership" />
      
      <section className="leadership-section">
        <div className="container">
          {leadership.map((leader, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={leader.id} className={styles.leaderRow}>
                <div className="row align-items-center">
                  
                  {/* Photo Column */}
                  <div className={`col-lg-4 ${isEven ? 'order-lg-1' : 'order-lg-2'}`}>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageBox}>
                           <ImagePlaceholder 
                             text={leader.name} 
                             height="450px" 
                             bg="#ffffff" 
                             rounded="4px" 
                           />
                        </div>
                        <h3 className={styles.leaderName}>{leader.name}</h3>
                        <p className={styles.leaderDesignation}>{leader.designation}</p>
                    </div>
                  </div>
                  
                  {/* Message Column */}
                  <div className={`col-lg-8 ${isEven ? 'order-lg-2' : 'order-lg-1'}`}>
                    <div className={styles.messageWrapper}>
                        <span className={styles.messageHeader}>Directorate Message</span>
                        <h2 className={styles.messageTitle}>Engineering the <strong>Future</strong> of Education.</h2>
                        <div className={styles.messageBody}>
                          {leader.message}
                        </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
