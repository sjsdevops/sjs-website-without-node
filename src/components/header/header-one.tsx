import React from "react";
import Link from "next/link";
import Image from "next/image";
import { } from "../svg";
import NavMenus from "./navbar/nav-menus";
import HeaderTopArea from "./header-top/header-top-area";
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";

import OffcanvasButton from "./button/offcanvas-btn";

type IProps = {
  header_solid?: boolean;
}

export default function HeaderOne({ header_solid = false }: IProps) {
  return (
    <>
      <header className={`header-area ${!header_solid ? 'tp-header-transparent' : 'tp-header-inner'} p-relative`} style={header_solid ? { backgroundColor: 'white', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' } : {}}>
         
        {/* header top start*/}
         <HeaderTopArea />
        {/* header top end */}

        <HeaderStickyWrapper>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-header-logo-1 tp-header-logo">
                  <Link href="/">
                    <Image 
                      src="/assets/img/logo/sjs-logo-main.jpg" 
                      alt="Sree Jayam School" 
                      width={220} 
                      height={60} 
                      style={{ height: 'auto', width: '220px' }}
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-8 d-none d-xl-block">
                <div className="main-menu text-center">
                  {/* nav menus start */}
                  <NavMenus />
                  {/* nav menus end */}
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-header-contact d-flex align-items-center justify-content-end">

                  <div className="tp-header-btn d-none d-md-block ml-30">
                    <Link href="/online-application">Admissions</Link>
                  </div>
                  <div className="tp-header-bar d-xl-none ml-30">
                    <OffcanvasButton/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeaderStickyWrapper>
      </header>

      {/* mobile offcanvas */}
      <div id="offcanvas-sidebar"/>
      {/* mobile offcanvas */}
    </>
  );
}
