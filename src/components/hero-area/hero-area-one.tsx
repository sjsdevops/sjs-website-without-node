'use client';
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { RightArrow } from "../svg";
import styles from "@/app/(home)/(home-main)/hero.module.scss";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    id: 1,
    video: "/assets/img/Images/Shree Jayam School Reel 1(2)_output (1).mp4",
    label: "Cinematic Campus Life",
    title: "Experience <span>Excellence</span> in Motion.",
    desc: "Discover the vibrant energy and world-class infrastructure of Sree Jayam Schools.",
    stats: "100% Pass Rate"
  },
  {
    id: 2,
    video: "/assets/img/Images/Shree Jayam School Reel 2(2)_output (1).mp4",
    label: "Holistic Development",
    title: "Growth <span>Beyond</span> Boundaries.",
    desc: "Empowering students through sports, arts, and balanced character building.",
    stats: "15+ Activities"
  },
  {
    id: 3,
    video: "/assets/img/Images/Shree Jayam School Reel 3(1)_output (1).mp4",
    label: "Vibrant Community",
    title: "Tradition <span>Meets</span> Innovation.",
    desc: "Join a community dedicated to values, discipline, and state-of-the-art learning.",
    stats: "50+ Expert Faculty"
  }
];

export default function HeroAreaOne() {
  return (
    <section className={styles.heroMain}>
       <Swiper
        effect={'fade'}
        slidesPerView={1}
        loop={true}
        speed={1500}
        autoplay={{
            delay: 8000,
            disableOnInteraction: false,
        }}
        fadeEffect={{ crossFade: true }}
        pagination={{ 
            clickable: true,
            el: '.custom-pagination'
        }}
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        className={styles.heroSwiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slideItem}>
            <div className={styles.videoBackground}>
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className={styles.actualVideo}
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
                <div className={styles.videoOverlay}></div>
            </div>
            
            <div className="container">
               <div className={styles.editorialContainer}>
                  <div className={styles.heroContent}>
                    <div className={styles.labelLine}>
                        {slide.label}
                    </div>
                    <h1 className={styles.mainTitle} 
                        dangerouslySetInnerHTML={{ __html: slide.title }}>
                    </h1>
                    <p className={styles.description}>
                        {slide.desc}
                    </p>
                    <div className={styles.heroButtons}>
                        <Link className="tp-btn" href="/online-application" style={{ backgroundColor: '#F5A623', border: 'none', color: '#111' }}>
                            Enroll Now
                            <span className="ml-10"><RightArrow/></span>
                        </Link>
                        <Link className="tp-btn tp-btn-2" href="/about" style={{ backgroundColor: 'transparent', border: '2px solid #fff', color: '#fff' }}>
                            Our Story
                        </Link>
                    </div>
                  </div>
               </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-pagination"></div>
      </Swiper>
    </section>
  );
}
