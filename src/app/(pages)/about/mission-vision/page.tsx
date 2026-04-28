import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import { schoolData } from '@/data/schoolData';
import styles from './mission.module.scss';

export const metadata: Metadata = {
  title: "Mission & Vision - Sree Jayam School",
};

export default function MissionVisionPage() {
  const { missionVision } = schoolData;
  
  return (
    <main className={styles.editorialMission}>
      <Breadcrumb title="Mission, Vision & Policy" subtitle="About Us" sub_title="Mission & Vision" />
      
      {/* Premium Split Section */}
      <section className={styles.splitSection}>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className={styles.missionCard}>
                <div className={styles.icon}>
                   <i className="fa-solid fa-rocket"></i>
                </div>
                <h2>Our Mission</h2>
                <p>{missionVision.mission}</p>
                <div className={`${styles.decorCircle} ${styles.one}`}></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.visionCard}>
                <div className={styles.icon}>
                   <i className="fa-solid fa-eye"></i>
                </div>
                <h2>Our Vision</h2>
                <p>{missionVision.vision}</p>
                <div className={`${styles.decorCircle} ${styles.two}`}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Institutional Policy Section */}
      <section className={styles.policySection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className={styles.policyBlock}>
                <h2>Institutional Policy</h2>
                <div className={styles.content}>
                  {missionVision.policy}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
