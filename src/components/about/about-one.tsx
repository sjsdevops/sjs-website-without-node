'use client';
import React from 'react';
import { RightArrow } from '../svg';
import { schoolData } from '@/data/schoolData';
import ImagePlaceholder from '../ui/placeholder';
import CounterItem from '../counter/counter-item';
import Link from 'next/link';
import styles from './about-editorial.module.scss';

export default function AboutOne() {
  const { aboutSnapshot } = schoolData;
  
  return (
    <section className={styles.editorialAbout}>
        <div className="container">
            <div className="row align-items-center">
                
                {/* Visual Side */}
                <div className="col-lg-6">
                    <div className={`${styles.visualCol} wow fadeInLeft`} data-wow-delay=".3s">
                        <div className={styles.expBadge}>
                            <span className={styles.number}>
                                <CounterItem min={0} max={20}/>
                            </span>
                            <span className={styles.label}>Years of<br/>Legacy</span>
                        </div>
                        <div className={styles.imageGrid}>
                            <div className={styles.mainImage}>
                                <img 
                                  src="/assets/img/Images/School Images (1).jpg" 
                                  alt="Academic Life" 
                                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div className={styles.accentImage}>
                                <img 
                                  src="/assets/img/Images/School Images (18).JPG" 
                                  alt="Sports Activity" 
                                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="col-lg-6">
                    <div className={`${styles.contentCol} wow fadeInRight`} data-wow-delay=".3s">
                        <span className={styles.preTitle}>Since 2005</span>
                        <h2 className={styles.title}>A Gateway to <strong>Excellence</strong> in Vellore.</h2>
                        
                        <ul className={styles.pointList}>
                            {aboutSnapshot.points.slice(0, 3).map((point, index) => (
                                <li key={index} className={styles.pointItem}>
                                    <div className={styles.icon}>0{index + 1}</div>
                                    <div className={styles.text}>{point}</div>
                                </li>
                            ))}
                        </ul>

                        <div className="tp-about-btn">
                            <Link className="tp-btn" href="/about" style={{ backgroundColor: '#1A3C6E', borderRadius: '0' }}>
                                Discover Our History
                                <span className="ml-10">
                                    <RightArrow/>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        {/* Decorative Background Text */}
        <div style={{ 
            position: 'absolute', 
            bottom: '-50px', 
            right: '-20px', 
            fontSize: '15rem', 
            fontWeight: '900', 
            color: '#f8f9fb', 
            zIndex: -1,
            userSelect: 'none'
        }}>
            SJS
        </div>
    </section>
  )
}
