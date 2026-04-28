import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import styles from '../legal.module.scss';

export const metadata: Metadata = {
  title: "Privacy Policy - Sree Jayam School",
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.legalPage}>
      <Breadcrumb title="Privacy Policy" subtitle="Legal" sub_title="Privacy Policy" />
      
      <div className="container">
        <div className={styles.contentWrap}>
          <span className={styles.lastUpdated}>Last Updated: April 28, 2026</span>
          
          <div className={styles.policyContent}>
            <h2>1. Introduction</h2>
            <p>Welcome to Sree Jayam School (SJS). We value your privacy and are committed to protecting the personal data of our students, parents, and visitors. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our website and services.</p>
            
            <h2>2. Information We Collect</h2>
            <p>We may collect information through various means, including:</p>
            <ul>
              <li><strong>Personal Identifiers:</strong> Name, address, email, and phone numbers provided during admission or enquiry.</li>
              <li><strong>Student Records:</strong> Academic history, attendance, and health information required for educational purposes.</li>
              <li><strong>Digital Data:</strong> IP address, browser type, and usage patterns collected via cookies for website optimization.</li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            <p>Your information is used solely for the following purposes:</p>
            <ul>
              <li>Facilitating the admission and enrollment process.</li>
              <li>Communicating important school updates, academic results, and event notifications.</li>
              <li>Improving our educational services and website user experience.</li>
              <li>Complying with legal and regulatory requirements from educational boards (ICSE/ISC).</li>
            </ul>

            <div className={styles.highlightBox}>
              <p>Sree Jayam School does not sell, trade, or rent your personal information to third parties for marketing purposes.</p>
            </div>

            <h2>4. Data Security</h2>
            <p>We implement robust technical and organizational measures to protect your data from unauthorized access, loss, or misuse. Access to student and parent data is strictly limited to authorized school personnel only.</p>

            <h2>5. Contact Us</h2>
            <p>If you have any questions regarding this Privacy Policy, please contact our administration office at <strong>info@sreejayamschool.edu.in</strong>.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
