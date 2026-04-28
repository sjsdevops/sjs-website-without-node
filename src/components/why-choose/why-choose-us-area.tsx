import Link from "next/link";
import { RightArrowSix } from "../svg";
import ImagePlaceholder from "@/components/ui/placeholder";


export default function WhyChooseUsArea() {
   return (
      <section className="school-area grey-bg fix pb-120">
         <div className="container">
            <div className="tp-school-4-bg wow fadeInUp" data-wow-delay=".3s" style={{ backgroundColor: '#1A3C6E', borderRadius: '30px' }}>
               <div className="tp-school-4-bg-2 grey-bg" style={{ overflow: 'hidden' }}>
                  <div className="tp-school-4-shape" style={{ opacity: 0.1, position: 'absolute', width: '100%', height: '100%' }}>
                     <ImagePlaceholder text="Background texture" height="100%" bg="#000" color="#fff" rounded="0" />
                  </div>
                  <div className="row position-relative" style={{ zIndex: 2 }}>
                     <div className="col-lg-6">
                        <div className="tp-school-4-wrap">
                           <h4 className="tp-school-4-title">Why Enrol at <br /> Sree Jayam <span>School?
                              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="9" viewBox="0 0 120 9" fill="none">
                                 <path fillRule="evenodd" clipRule="evenodd" d="M115.442 8.25039C64.7892 -2.54947 20.433 3.78533 4.88329 8.17023C3.53609 8.55013 1.62363 8.4481 0.611686 7.94234C-0.400258 7.43658 -0.128479 6.71861 1.21872 6.33871C18.3618 1.5045 65.3347 -5.06747 118.455 6.25855C119.92 6.57094 120.434 7.27006 119.601 7.82009C118.769 8.37012 116.907 8.56277 115.442 8.25039Z" fill="#F5A623" />
                              </svg>
                           </span></h4>
                           <div className="tp-school-4-list">
                              <ul>
                                 <li>Holistic child development</li>
                                 <li>State of the art infrastructure</li>
                                 <li>Dedicated & passionate faculty</li>
                                 <li>Safe and secure environment</li>
                                 <li>Balanced student-teacher ratios</li>
                              </ul>
                           </div>
                           <div className="tp-school-4-btn">
                              <Link href="/about">Learn More
                                 <span>
                                    <RightArrowSix/>
                                 </span>
                              </Link>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="tp-school-4-thumb" style={{ height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
                            <img 
                              src="/assets/img/Images/School Images (12).jpg" 
                              alt="SJS Future" 
                              style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '20px' }}
                              className="wow zoomIn"
                              data-wow-delay=".4s"
                            />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
