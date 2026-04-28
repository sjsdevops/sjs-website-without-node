import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Email } from "../svg";
import FooterSocial from "./footer-social";
import logo from "@/assets/img/logo/logo-red.png"; // [REPLACE_WITH_SJS_LOGO]
import logo_black from "@/assets/img/logo/logo-black-2.png";
import { footerLinks } from "@/data/footer-links";
import { schoolData } from "@/data/schoolData";

// prop type 
type IProps = {
  style_2?: boolean
}

export default function FooterOne({ style_2 = false }: IProps) {
  const { contact } = schoolData;
  
  return (
    <footer>
      <div className={`tp-footer-main ${style_2 ? '' : 'grey-bg'} pt-80 pb-55`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-3 col-sm-6">
              <div className={`tp-footer-widget ${style_2 ? 'tp-footer-5-col-1' : 'tp-footer-col-1'} mb-30`}>
                <div className="tp-footer-widget-logo mb-20 tp-header-logo">
                  <Link href="/">
                    <Image 
                      src="/assets/img/logo/sjs-logo-main.jpg" 
                      alt="Sree Jayam School" 
                      width={200} 
                      height={55} 
                      style={{ height: 'auto', width: '200px' }}
                    />
                  </Link>
                </div>
                <div className="tp-footer-widget-content">
                  <p>
                    {contact.address} <br />
                    Founded in 2005 · ICSE/ISC Affiliated
                  </p>
                </div>
                <div className="tp-footer-contact">
                   <span>Admission Enquiry</span>
                   <a href={`tel:${contact.phones[0].number.split('/')[1]?.trim() || contact.phones[0].number}`}>{contact.phones[0].number}</a>
                </div>
                <div className="tp-footer-contact-mail">
                  <a href={`mailto:${contact.emails[0].email}`}>
                    <span>
                      <Email />
                    </span>
                    {contact.emails[0].email}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <div className={`tp-footer-widget ${style_2 ? 'tp-footer-5-col-2' : 'tp-footer-col-2'} mb-30`}>
                <h4 className="tp-footer-widget-title mb-20">Quick Links</h4>
                <div className="tp-footer-widget-link">
                  <ul>
                    {footerLinks.link_one.map((link) => (
                      <li key={link.id}>
                        <Link href={link.link}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-4">
              <div className={`tp-footer-widget ${style_2 ? 'tp-footer-5-col-3' : 'tp-footer-col-3'} mb-30`}>
                <h4 className="tp-footer-widget-title mb-20">Academics</h4>
                <div className="tp-footer-widget-link">
                  <ul>
                    {footerLinks.link_two.map((link) => (
                      <li key={link.id}>
                        <Link href={link.link}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-8">
              <div className={`p-footer-widget ${style_2 ? 'tp-footer-5-col-4' : 'tp-footer-col-4'} mb-30`}>
                <h4 className="tp-footer-widget-title mb-20">Follow Us</h4>
                <div className="tp-footer-newsletter-wrap">
                  <p>
                    Stay updated with our latest activities and celebrations.
                  </p>
                  {/* footer social */}
                  <div className="tp-footer-newsletter-social">
                    <FooterSocial />
                  </div>
                  {/* footer social */}
                  
                  {/* App Download widget */}
                  <div className="tp-footer-app-download mt-40">
                    <h4 className="tp-footer-widget-title mb-15" style={{ fontSize: '1.1rem', color: '#1A3C6E' }}>Sree Jayam Parent App</h4>
                    <p style={{ fontSize: '0.9rem', marginBottom: '15px', lineHeight: '1.4' }}>Download the official app to track attendance, secure fees, and monitor academic progress.</p>
                    <div className="d-flex gap-2">
                      <a href="#" target="_blank" rel="noopener noreferrer" className="app-download-btn">
                        <i className="fa-brands fa-apple" style={{ fontSize: '1.5rem' }}></i>
                        <div className="text-start" style={{ lineHeight: '1' }}>
                           <span style={{ fontSize: '0.6rem', display: 'block', color: 'rgba(255,255,255,0.8)' }}>Download on the</span>
                           <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>App Store</span>
                        </div>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="app-download-btn">
                        <i className="fa-brands fa-google-play" style={{ fontSize: '1.3rem' }}></i>
                        <div className="text-start" style={{ lineHeight: '1' }}>
                           <span style={{ fontSize: '0.6rem', display: 'block', color: 'rgba(255,255,255,0.8)' }}>GET IT ON</span>
                           <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Google Play</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* App Download widget */}
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div className={`${style_2 ? 'tp-footer-5-bottom' : 'tp-footer-bottom'}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-footer-copyright text-center">
                <span>
                  © {new Date().getFullYear()} Sree Jayam School. All Rights Reserved. | Designed by Man2Web
                </span>
                <div className="tp-footer-legal-links mt-10">
                   {footerLinks.link_legal.map((link, index) => (
                      <React.Fragment key={link.id}>
                         <Link href={link.link}>{link.title}</Link>
                         {index < footerLinks.link_legal.length - 1 && <span className="mx-2">|</span>}
                      </React.Fragment>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
