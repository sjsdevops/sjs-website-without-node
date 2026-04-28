import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import styles from '../legal.module.scss';

export const metadata: Metadata = {
  title: "Disclaimer - Sree Jayam School",
};

export default function DisclaimerPage() {
  return (
    <main className={styles.legalPage}>
      <Breadcrumb title="Legal Disclaimer" subtitle="Legal" sub_title="Disclaimer" />
      
      <div className="container">
        <div className={styles.contentWrap}>
          <span className={styles.lastUpdated}>Last Updated: April 28, 2026</span>
          
          <div className={styles.policyContent}>
            <h2>Information Accuracy</h2>
            <p>The information provided on the Sree Jayam School website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, or reliability of the content.</p>
            
            <h2>Educational Content</h2>
            <p>The curriculum, academic schedules, and event details listed on this site are subject to change without prior notice. The school management reserves the right to make adjustments based on academic requirements and board guidelines.</p>

            <div className={styles.highlightBox}>
              <p>Any reliance you place on the information found on this website is strictly at your own risk.</p>
            </div>

            <h2>External Links</h2>
            <p>Our website may contain links to external websites that are not provided or maintained by Sree Jayam School. We do not guarantee the accuracy or relevance of any information on these external sites.</p>

            <h2>Professional Advice</h2>
            <p>The information on this site is not intended to be a substitute for professional academic or career counseling. We encourage parents and students to consult with school administrators for specific guidance.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
