import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import ImagePlaceholder from '@/components/ui/placeholder';
import styles from './gallery.module.scss';

export const metadata: Metadata = {
  title: "Gallery - Sree Jayam School",
};

export default function GalleryPage() {
  const categories = ["All", "Celebrations", "Sports Day", "Extracurricular Activities", "Classroom Activities", "Events"];
  
  return (
    <main className={styles.editorialGallery}>
      <Breadcrumb title="Visual Archives" subtitle="Home" sub_title="Gallery" />
      
      <section className="gallery-section pt-120 pb-120">
        <div className="container">
          
          <div className="row justify-content-center mb-60">
            <div className="col-lg-8 text-center">
               <span className="editorial-label" style={{ 
                  display: 'inline-block',
                  color: '#1A3C6E',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                  borderBottom: '2px solid #F5A623',
                  paddingBottom: '6px'
               }}>Moments</span>
               <h2 className="editorial-title" style={{ 
                  fontSize: '4rem',
                  fontWeight: '300',
                  color: '#111',
                  marginBottom: '30px',
                  lineHeight: '1.1',
                  letterSpacing: '-1.5px',
               }}><strong>Campus</strong> Life In Focus.</h2>
            </div>
          </div>

          <div className={styles.galleryFilter}>
              {categories.map((cat, i) => (
              <button key={i} className={`${styles.filterBtn} ${i === 0 ? styles.active : ''}`}>
                  {cat}
              </button>
              ))}
          </div>
          
           <div className={styles.galleryGrid}>
            {[19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((num, i) => (
              <div key={num} className={styles.galleryItem}>
                 <img 
                    src={`/assets/img/Images/School Images (${num}).JPG`} 
                    alt={`Event Frame ${num}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                 />
                 <div className={styles.overlay}>
                    <div>
                        <h4>Campus Life</h4>
                        <span>Sree Jayam Moments</span>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
