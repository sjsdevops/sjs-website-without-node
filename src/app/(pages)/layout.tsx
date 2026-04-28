import MainProvider from "@/components/provider/main-provider";
import HeaderOne from "@/components/header/header-one";
import BackToTop from "@/components/back-to-top";
import FooterOne from "@/components/footer/footer-one";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
      {/* header area start */}
      <HeaderOne header_solid={true} />
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <FooterOne />
      {/* footer area end */}

      {/* back to top */}
      <BackToTop/>
      {/* back to top */}
    </MainProvider>
  );
}
