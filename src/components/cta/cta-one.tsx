import Image from "next/image";
import Link from "next/link";
import cta_logo from '@/assets/img/cta/cta-logo-1.png';
import cta_shape from '@/assets/img/cta/cta-shape-1.png';
import { RightArrow } from "../svg";

export default function CtaOne() {
  return (
    <section
      className="cta-area tp-cta-bg grey-bg"
      style={{ backgroundColor: '#1A3C6E', backgroundImage: 'none' }} // Custom school background
    >
      <div className="container">
        <div
          className="row align-items-center wow fadeInUp"
          data-wow-delay=".2s"
        >
          <div className="col-xxl-10 col-lg-9">
            <div className="tp-cta-wrapper d-flex align-items-center">
              <div className="tp-cta-logo">
                <Link href="/">
                   <h2 className="mb-0 text-white">SJS</h2>
                </Link>
              </div>
              <div className="tp-cta-content ml-30">
                <span className="text-white" style={{ opacity: 0.8 }}>ADMISSIONS OPEN FOR 2026-27</span>
                <h3 className="tp-cta-title text-white">
                   Nurturing Excellence in Every Child.
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-lg-3">
            <div className="tp-cta-btn-wrap">
              <div className="tp-cta-btn text-lg-end">
                <Link className="tp-btn" href="/online-application" style={{ backgroundColor: '#F5A623', border: 'none', color: '#1A3C6E' }}>
                  Enquire Now{" "}
                  <span>
                    <RightArrow clr="currentColor"/>
                  </span>
                </Link>
              </div>
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
