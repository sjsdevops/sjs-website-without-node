import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import styles from '../legal.module.scss';

export const metadata: Metadata = {
  title: "Terms & Conditions - Sree Jayam School",
};

export default function TermsConditionsPage() {
  return (
    <main className={styles.legalPage}>
      <Breadcrumb title="Terms & Conditions" subtitle="Legal" sub_title="Terms" />
      
      <div className="container">
        <div className={styles.contentWrap}>
          <span className={styles.lastUpdated}>Last Updated: April 28, 2026</span>
          
          <div className={styles.policyContent}>
            <h2>1. Agreement to Terms</h2>
            <p>By accessing or using the Sree Jayam School website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.</p>
            
            <h2>2. Admission & Enrollment</h2>
            <p>Enrollment at Sree Jayam School is subject to the successful completion of the admission process, verification of documents, and payment of the prescribed fees. The school reserves the right to deny admission at its discretion based on merit and seat availability.</p>

            <h2>3. Code of Conduct</h2>
            <p>All students and parents are expected to adhere to the school's code of conduct, which promotes discipline, respect, and academic integrity. Any violation of these standards may lead to disciplinary action, including suspension or dismissal.</p>

            <h2>4. Website Usage</h2>
            <p>The content on this website, including text, graphics, and logos, is the property of Sree Jayam School. You may not reproduce, distribute, or use this content for commercial purposes without prior written consent.</p>

            <div className={styles.highlightBox}>
              <p>The school management reserves the right to modify the curriculum, fee structure, and school policies at any time to align with educational standards.</p>
            </div>

            <h2>5. Limitation of Liability</h2>
            <p>Sree Jayam School shall not be held liable for any indirect, incidental, or consequential damages arising out of the use of our website or services, provided we have taken reasonable care in our operations.</p>

            <h2>6. Governing Law</h2>
            <p>These terms are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Vellore, Tamil Nadu.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
