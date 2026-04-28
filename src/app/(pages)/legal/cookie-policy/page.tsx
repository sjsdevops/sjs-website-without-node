import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import styles from '../legal.module.scss';

export const metadata: Metadata = {
  title: "Cookie Policy - Sree Jayam School",
};

export default function CookiePolicyPage() {
  return (
    <main className={styles.legalPage}>
      <Breadcrumb title="Cookie Policy" subtitle="Legal" sub_title="Cookies" />
      
      <div className="container">
        <div className={styles.contentWrap}>
          <span className={styles.lastUpdated}>Last Updated: April 28, 2026</span>
          
          <div className={styles.policyContent}>
            <h2>What are Cookies?</h2>
            <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They help the website remember your preferences and provide a better browsing experience.</p>
            
            <h2>How We Use Cookies</h2>
            <p>Sree Jayam School uses cookies for the following reasons:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the website to function correctly (e.g., handling admission form submissions).</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our site by collecting anonymous data on page views and navigation paths.</li>
              <li><strong>Preference Cookies:</strong> Allow the site to remember choices you make (such as language or region) to provide enhanced features.</li>
            </ul>

            <div className={styles.highlightBox}>
              <p>We do not use tracking or advertising cookies from third-party networks for marketing purposes.</p>
            </div>

            <h2>Managing Your Cookies</h2>
            <p>Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, although this may affect the functionality of certain parts of our website.</p>

            <h2>Changes to This Policy</h2>
            <p>We may update our Cookie Policy from time to time to reflect changes in technology or legal requirements. Any updates will be posted on this page.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
