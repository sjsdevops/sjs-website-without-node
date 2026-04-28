import Image from "next/image";
import Link from "next/link";
import cta_shape from '@/assets/img/cta/cta-shape-1.png';

export default function AppDownloadCta() {
  return (
    <section
      className="cta-area tp-cta-bg grey-bg"
      style={{ backgroundColor: '#1A3C6E', backgroundImage: 'none', padding: '100px 0' }} 
    >
      <div className="container">
        <div
          className="row align-items-center wow fadeInUp"
          data-wow-delay=".2s"
        >
          <div className="col-xxl-8 col-lg-7">
            <div className="tp-cta-wrapper d-flex align-items-center">
              <div className="tp-cta-logo">
                <Link href="/">
                   <h2 className="mb-0 text-white">SJS</h2>
                </Link>
              </div>
              <div className="tp-cta-content ml-30">
                <span className="text-white" style={{ opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>Stay Connected</span>
                <h3 className="tp-cta-title text-white">
                   Download the Sree Jayam Parent App today.
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5">
            <div className="tp-cta-btn-wrap d-flex justify-content-lg-end gap-3 align-items-center">
                <a href="#" target="_blank" rel="noopener noreferrer" className="app-download-btn" style={{ minWidth: '160px' }}>
                    <i className="fa-brands fa-apple" style={{ fontSize: '1.5rem' }}></i>
                    <div className="text-start" style={{ lineHeight: '1' }}>
                        <span style={{ fontSize: '0.6rem', display: 'block', color: 'rgba(255,255,255,0.8)' }}>Download on the</span>
                        <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>App Store</span>
                    </div>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="app-download-btn" style={{ minWidth: '160px' }}>
                    <i className="fa-brands fa-google-play" style={{ fontSize: '1.3rem' }}></i>
                    <div className="text-start" style={{ lineHeight: '1' }}>
                        <span style={{ fontSize: '0.6rem', display: 'block', color: 'rgba(255,255,255,0.8)' }}>GET IT ON</span>
                        <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Google Play</span>
                    </div>
                </a>
              <div className="tp-cta-shape-1">
                <Image src={cta_shape} alt="shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
