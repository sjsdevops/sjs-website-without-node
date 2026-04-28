import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import { schoolData } from '@/data/schoolData';
import styles from './disclosure.module.scss';

export const metadata: Metadata = {
  title: "Mandatory Disclosure - Sree Jayam School",
};

export default function MandatoryDisclosurePage() {
  const { mandatoryDisclosure } = schoolData;
  
  return (
    <main className={styles.editorialDisclosure}>
      <Breadcrumb title="Statutory Information" subtitle="About" sub_title="Disclosure" />
      
      <section className="disclosure-section pt-120 pb-120">
        <div className="container">
          
          {/* Header */}
          <div className="row justify-content-center mb-100">
             <div className="col-lg-10 text-center">
                 <h2 style={{ fontSize: '3.5rem', fontWeight: '300', color: '#111', lineHeight: '1.1' }}>Institutional <strong>Assurance</strong>.</h2>
                 <p style={{ fontSize: '1.2rem', color: '#555', marginTop: '20px' }}>In compliance with regulatory standards, we maintain absolute transparency in our operations.</p>
             </div>
          </div>

          {/* Basic Info */}
          <div className={styles.tableContainer}>
            <h3 className={styles.tableTitle}>Basic Information</h3>
            <div className={styles.tableWrapper}>
              <table className={styles.editorialTable}>
                <thead>
                  <tr>
                    <th style={{ width: '80px' }}>S.No</th>
                    <th style={{ width: '250px' }}>Information</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {mandatoryDisclosure.basicInfo.map((row) => (
                    <tr key={row.sn}>
                      <td>{row.sn}</td>
                      <td style={{ fontWeight: '700', color: '#1A3C6E' }}>{row.info}</td>
                      <td>{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Communication Team */}
          <div className={styles.tableContainer}>
            <h3 className={styles.tableTitle}>Communication Team</h3>
            <div className={styles.tableWrapper}>
              <table className={styles.editorialTable}>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Department</th>
                    <th>Email ID</th>
                  </tr>
                </thead>
                <tbody>
                  {mandatoryDisclosure.commTeam.map((row) => (
                    <tr key={row.sn}>
                      <td>{row.sn}</td>
                      <td style={{ fontWeight: '700', color: '#1A3C6E' }}>{row.name}</td>
                      <td>{row.designation}</td>
                      <td>{row.dept}</td>
                      <td style={{ color: '#1A3C6E', fontWeight: '600' }}>{row.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Infrastructure Summary */}
          <div className={styles.tableContainer}>
            <h3 className={styles.tableTitle}>Infrastructural Summary</h3>
            <table className={styles.infraTable}>
               <tbody>
                  <tr>
                    <th>Laboratories</th>
                    <td>Physics, Chemistry, Biology, Computer, Math, Composite Lab, Robotics Lab</td>
                  </tr>
                  <tr>
                    <th>Computer Lab</th>
                    <td>High-Performance Computing Units Available</td>
                  </tr>
                  <tr>
                    <th>Library</th>
                    <td>Extensive Physical & Digital Archives</td>
                  </tr>
                  <tr>
                    <th>Sports Facilities</th>
                    <td>Table Tennis, Shuttle, Cricket, Basketball, Football & Outdoor Athletics</td>
                  </tr>
               </tbody>
            </table>
          </div>

        </div>
      </section>
    </main>
  );
}
