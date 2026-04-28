'use client';
import Image from "next/image";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { schoolData } from "@/data/schoolData";
import tag_svg from '@/assets/img/icon/program-tag-1.svg';
import Link from "next/link";
import ImagePlaceholder from "@/components/ui/placeholder";

const slider_options: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false, // Changed to false for 4 items
  pagination: {
    el: ".tp-program-dot",
    clickable: true,
  },
  breakpoints: {
    "1200": {
      slidesPerView: 3,
    },
    "992": {
      slidesPerView: 3,
    },
    "768": {
      slidesPerView: 2,
    },
    "576": {
      slidesPerView: 1,
    },
    "0": {
      slidesPerView: 1,
    },
  },
};

export default function ProgramSlider() {
  const { academics } = schoolData;
  
  return (
    <Swiper
      {...slider_options}
      modules={[Pagination]}
      className="swiper tp-program-active wow fadeInUp"
      data-wow-delay=".6s"
    >
      {academics.stages.map((item, index) => (
        <SwiperSlide
          key={item.id}
          className="tp-program-item grey-bg mb-50"
        >
          <div className="tp-program-thumb fix">
            <Link href="/online-application">
               <img 
                 src={`/assets/img/Images/School Images (${13 + index}).jpg`} 
                 alt={item.title} 
                 style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                 className="wow zoomIn"
                 data-wow-delay={`.${index + 2}s`}
               />
            </Link>
          </div>
          <div className="tp-program-content">
            <h3 className="tp-program-title">
              <Link href="/academics">{item.title}</Link>
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5', height: '80px', overflow: 'hidden' }}>
              {item.content}
            </p>
            <div className="tp-program-tag">
              <p>
                <span>
                  <Image
                    src={tag_svg}
                    alt="program-icon"
                  />
                </span>
                SJS Academic Stream
              </p>
            </div>
          </div>
          <div className="tp-program-btn">
            <Link href="/online-application">Enquire Now</Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
