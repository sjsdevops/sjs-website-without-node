import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/img/logo/logo-black.png';
import { CloseThreeSvg, InstagramSvg, FbSvg, YoutubeSvg } from "@/components/svg";
import OffcanvasMenu from "./offcanvas-menu";
import OffcanvasMenuTwo from "./offcanvas-menu-2";


const galleryData = [
   { link: "https://www.instagram.com/", src: "/assets/img/menu/offcanvas/offcanvas-1.jpg" },
   { link: "https://www.instagram.com/", src: "/assets/img/menu/offcanvas/offcanvas-2.jpg" },
   { link: "https://www.instagram.com/", src: "/assets/img/menu/offcanvas/offcanvas-3.jpg" },
   { link: "https://www.instagram.com/", src: "/assets/img/menu/offcanvas/offcanvas-4.jpg" },
];

type IProps = {
   openOffCanvas: boolean;
   onHandleOffCanvas: () => void;
   offcanvas_cls?: string;
   offcanvas_menu_2?: boolean;
}
export default function OffcanvasArea({openOffCanvas,onHandleOffCanvas,offcanvas_cls,offcanvas_menu_2}:IProps) {
   return (
      <>
         <div className={`offcanvas__area ${offcanvas_cls} ${openOffCanvas ? 'offcanvas-opened' : ''}`}>
            <div className="offcanvas__wrapper">
               <div className="offcanvas__close">
                  <button onClick={onHandleOffCanvas} className="offcanvas__close-btn offcanvas-close-btn">
                     <CloseThreeSvg />
                  </button>
               </div>
               <div className="offcanvas__content">
                  <div className="offcanvas__top mb-90 d-flex justify-content-between align-items-center">
                     <div className="offcanvas__logo tp-header-logo">
                        <Link href="/">
                           <Image 
                             src="/assets/img/logo/sjs-logo-main.jpg" 
                             alt="logo" 
                             width={180} 
                             height={50} 
                             style={{ height: 'auto', width: '180px' }} 
                           />
                        </Link>
                     </div>
                  </div>
                  <div className="offcanvas-main">
                     <div className="offcanvas-content">
                        <h3 className="offcanvas-title">Welcome to SJS!</h3>
                        <p>Learn to Live. Nurturing excellence through innovative education.</p>
                     </div>
                     
                     {/* mobile menu */}
                     {offcanvas_menu_2 ? <OffcanvasMenuTwo /> : <OffcanvasMenu />}
                     {/* mobile menu */}

                     <div className="offcanvas-gallery">
                        <div className="row gx-2">
                           {galleryData.map((item, index) => (
                              <div className="col-md-3 col-3" key={index}>
                                 <div className="offcanvas-gallery-img fix">
                                    <a href={item.link} target="_blank">
                                       <Image src={item.src} alt={`gallery-${index}`} width={87} height={87} />
                                    </a>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="offcanvas-contact">
                        <h3 className="offcanvas-title sm">Information</h3>
                        <ul>
                           <li><a href="tel:+914162234033">+91 416 2234033</a></li>
                           <li><a href="mailto:info@sreejayamschool.edu.in">info@sreejayamschool.edu.in</a></li>
                           <li><a href="#">Sree Jayam School, Vellore</a></li>
                        </ul>
                     </div>
                     <div className="offcanvas-social">
                        <h3 className="offcanvas-title sm">Follow Us</h3>
                        <ul>
                           <li>
                              <a href="#">
                                 <FbSvg />
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <InstagramSvg />
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <YoutubeSvg />
                              </a>
                           </li>
                           <li>
                              <a href="#" title="Play Store">
                                 <i className="fa-brands fa-google-play"></i>
                              </a>
                           </li>
                           <li>
                              <a href="#" title="App Store">
                                 <i className="fa-brands fa-apple"></i>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>


         {/* Body Overlay */}
         <div onClick={onHandleOffCanvas} className={`body-overlay ${openOffCanvas ? 'opened' : ''}`}/>
         {/* Body Overlay */}
      </>
   )
}
