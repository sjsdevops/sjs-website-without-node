import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import styles from '../legal.module.scss';

export const metadata: Metadata = {
  title: "Refund Policy - Sree Jayam School",
};

export default function RefundPolicyPage() {
  return (
    <main className={styles.legalPage}>
      <Breadcrumb title="Fee Refund Policy" subtitle="Policies" sub_title="Refunds" />
      
      <div className="container">
        <div className={styles.contentWrap}>
          <span className={styles.lastUpdated}>Last Updated: April 28, 2026</span>
          
          <div className={styles.policyContent}>
            <h2>1. Admission Application Fee</h2>
            <p>The application fee paid during the online or offline admission process is non-refundable and non-transferable, as it covers the administrative costs of processing the application.</p>
            
            <h2>2. Tuition Fee Refunds</h2>
            <p>Refunds for tuition fees are subject to the following conditions:</p>
            <ul>
              <li><strong>Cancellation before Session Start:</strong> If an admission is cancelled before the start of the academic session, a partial refund may be considered after deducting processing charges.</li>
              <li><strong>Mid-Session Withdrawal:</strong> If a student is withdrawn mid-session, fees already paid for the current term are generally non-refundable.</li>
            </ul>

            <div className={styles.highlightBox}>
              <p>Special cases involving medical emergencies or family relocation will be reviewed by the School Management on an individual basis.</p>
            </div>

            <h2>3. Security Deposits</h2>
            <p>Any security deposits collected at the time of admission are fully refundable when the student leaves the school, provided all dues are cleared and the Transfer Certificate process is completed.</p>

            <h2>4. Refund Process</h2>
            <p>To request a refund, parents must submit a formal written application to the school administration. Approved refunds will be processed via bank transfer within 15-30 working days.</p>

            <h2>5. Contact</h2>
            <p>For any queries related to fees and refunds, please reach out to our accounts department at <strong>finance@sreejayamschool.edu.in</strong>.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
