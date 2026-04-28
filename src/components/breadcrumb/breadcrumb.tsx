import Link from "next/link";
import { HomeSvg } from "../svg";

type IProps = {
    subtitle: string;
    title: string;
    sub_title?: string; // Additional prop used in some pages
    color?: string;
    pages?: boolean;
};

export default function Breadcrumb({ subtitle, title, sub_title, color = '', pages }: IProps) {
  return (
    <section className="tp-breadcrumb__area pt-160 pb-100 p-relative z-index-1 fix">
      <div
        className="tp-breadcrumb__bg"
        style={{ backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-bg.jpg)" }}
      ></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="tp-breadcrumb__content">
              <div className="tp-breadcrumb__list">
                <span>
                  <Link href="/">
                    <HomeSvg/>
                  </Link>
                </span>
                {pages && <span>Pages</span>}
                <span className={color}>{subtitle}</span>
                {sub_title && <span className={color}>{sub_title}</span>}
              </div>
              <h3 className="tp-breadcrumb__title white">{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
