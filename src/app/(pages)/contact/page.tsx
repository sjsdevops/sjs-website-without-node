import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import { schoolData } from '@/data/schoolData';
import styles from './contact.module.scss';

export const metadata: Metadata = {
  title: "Contact Us - Sree Jayam School",
};

export default function ContactPage() {
  const { contact } = schoolData;
  
  return (
    <main className={styles.editorialContact}>
      <Breadcrumb title="Contact Us" subtitle="Home" sub_title="Contact Us" />
      
      {/* Editorial Hero */}
      <section className={`${styles.heroSection} pt-120 pb-100`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
               <span className={styles.editorialLabel}>Get in Touch</span>
               <h2 className={styles.editorialTitle}>Reach Out to <strong>Sree Jayam</strong>.</h2>
               <div className={styles.imageAccent} style={{ marginBottom: '40px', display: 'flex', justifyContent: 'center' }}>
                  <img 
                    src="/assets/img/Images/School Images (15).jpg" 
                    alt="Sree Jayam School Entrance" 
                    style={{ width: '100%', maxWidth: '600px', borderRadius: '4px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  />
               </div>
               <p className={styles.editorialSubtitle} style={{ margin: '0 auto' }}>
                 Whether you have questions about admissions, our curriculum, or scheduling a private campus tour, our dedicated office is ready to assist you.
               </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Info Cards */}
      <section className={`${styles.infoSection} pt-80 pb-80`}>
        <div className="container">
          <div className="row g-4">
            
            {/* Location Card */}
            <div className="col-lg-4 col-md-6">
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                   <svg viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                   </svg>
                </div>
                <h4 className={styles.infoTitle}>Campus Location</h4>
                <p className={styles.infoText}>{contact.address}</p>
              </div>
            </div>
            
            {/* Email Card */}
            <div className="col-lg-4 col-md-6">
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                   <svg viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                   </svg>
                </div>
                <h4 className={styles.infoTitle}>Direct Email</h4>
                {contact.emails.map((e, index) => (
                  <p key={index} className={styles.infoText}>
                    <strong>{e.type}:</strong><br/>{e.email}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Phone Card */}
            <div className="col-lg-4 col-md-12">
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                   <svg viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                   </svg>
                </div>
                <h4 className={styles.infoTitle}>Administration</h4>
                {contact.phones.map((p, index) => (
                  <p key={index} className={styles.infoText}>
                    <strong>{p.type}:</strong><br/>{p.number}
                  </p>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Form and Map Grid */}
      <section className={`${styles.formMapSection} pt-100 pb-120`}>
        <div className="container">
          <div className="row g-0 align-items-stretch">
             
            {/* Inquiry Form */}
            <div className="col-lg-6">
              <div className={styles.formWrapper}>
                 <h3 className={styles.formHeader}>Send an Inquiry</h3>
                 <form action="#">
                    <div className="row g-4">
                       <div className="col-md-12">
                          <input type="text" placeholder="Full Name" className={styles.editorialInput} />
                       </div>
                       <div className="col-md-6">
                          <input type="email" placeholder="Email Address" className={styles.editorialInput} />
                       </div>
                       <div className="col-md-6">
                          <input type="text" placeholder="Phone Number" className={styles.editorialInput} />
                       </div>
                       <div className="col-md-12">
                          <input type="text" placeholder="Subject" className={styles.editorialInput} />
                       </div>
                       <div className="col-md-12">
                          <textarea placeholder="How can we assist you?" className={styles.editorialInput} rows={5}></textarea>
                       </div>
                       <div className="col-md-12">
                          <button type="submit" className={styles.editorialBtn}>Transmit Message</button>
                       </div>
                    </div>
                 </form>
              </div>
            </div>
            
            {/* Map Area */}
            <div className="col-lg-6">
               <div className={styles.mapWrapper}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.378772714421!2d79.1412!3d12.9234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzI0LjIiTiA3OcKwMDgnMjguMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                    allowFullScreen 
                    loading="lazy"
                  ></iframe>
               </div>
            </div>
            
          </div>
        </div>
      </section>
      
    </main>
  );
}
