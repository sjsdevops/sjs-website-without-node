import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import styles from '../legal.module.scss';

export const metadata: Metadata = {
  title: "Child Protection Policy - Sree Jayam School",
};

export default function ChildProtectionPage() {
  return (
    <main className={styles.legalPage}>
      <Breadcrumb title="Child Protection & Safeguarding" subtitle="Policies" sub_title="Safeguarding" />
      
      <div className="container">
        <div className={styles.contentWrap}>
          <span className={styles.lastUpdated}>Last Updated: April 28, 2026</span>
          
          <div className={styles.policyContent}>
            <h2>Our Commitment</h2>
            <p>Sree Jayam School (SJS) is committed to safeguarding and promoting the welfare of all our students. We believe that every child has the right to a safe, secure, and supportive learning environment, free from any form of harm or exploitation.</p>
            
            <h2>Key Principles</h2>
            <ul>
              <li><strong>Zero Tolerance:</strong> We maintain a zero-tolerance policy towards any form of child abuse, harassment, or bullying.</li>
              <li><strong>Qualified Staff:</strong> All staff members undergo thorough background checks and are trained to recognize and report any safeguarding concerns.</li>
              <li><strong>Safe Infrastructure:</strong> Our campus is equipped with CCTV surveillance and secure access points to monitor student safety.</li>
              <li><strong>Confidentiality:</strong> All safeguarding reports are handled with the utmost sensitivity and confidentiality.</li>
            </ul>

            <div className={styles.highlightBox}>
              <p>The safety and well-being of the student always take precedence over all other institutional considerations.</p>
            </div>

            <h2>Reporting Mechanisms</h2>
            <p>If a student, parent, or staff member has a concern regarding the welfare of a child, they are encouraged to report it immediately to the <strong>Child Protection Officer</strong> or the Principal. We ensure that every report is investigated promptly and thoroughly.</p>

            <h2>Collaborative Effort</h2>
            <p>We work closely with parents and external child welfare agencies to ensure a holistic approach to student safety and mental health support.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
