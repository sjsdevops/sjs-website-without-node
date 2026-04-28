import { Metadata } from 'next';
import HeroAreaOne from '@/components/hero-area/hero-area-one';
import AboutOne from '@/components/about/about-one';
import CounterOne from '@/components/counter/counter-one';
import ProgramArea from '@/components/program/program-area';
import CtaOne from '@/components/cta/cta-one';
import AppDownloadCta from '@/components/cta/app-download-cta';
import { schoolData } from '@/data/schoolData';
import Link from 'next/link';
import ImagePlaceholder from '@/components/ui/placeholder';

export const metadata: Metadata = {
  title: "Home - Sree Jayam School",
  description: "Learn to Live - Sree Jayam School, Vellore. ICSE & ISC Affiliated.",
};

export default function HomePage() {
  const { results } = schoolData;
  
  return (
    <main>
      {/* hero area start */}
      <HeroAreaOne/>
      {/* hero area end */}

      {/* about area start */}
      <AboutOne/>
      {/* about area end */}

      {/* counter area start */}
      <CounterOne/>
      {/* counter area end */}

      {/* program area start (Academic Stages) */}
      <ProgramArea/>
      {/* program area end */}

      {/* Results Highlight Section */}
      <section className="results-area pt-120 pb-120 grey-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="tp-section text-center mb-60">
                <h3 className="tp-section-title">Academic Results</h3>
                <p>Consistently achieving excellence year after year through dedication and hard work.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="table-responsive" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <table className="table table-bordered text-center mb-0" style={{ backgroundColor: 'white' }}>
                  <thead style={{ backgroundColor: '#1A3C6E', color: 'white' }}>
                    <tr>
                      <th className="py-3">Class</th>
                      <th className="py-3">Year</th>
                      <th className="py-3">Pass %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((item, index) => (
                      <tr key={index}>
                        <td className="py-3">{item.class}</td>
                        <td className="py-3">{item.year}</td>
                        <td className="py-3" style={{ fontWeight: 'bold', color: '#1A3C6E' }}>{item.passPercentage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Teaser */}
      <section className="why-teaser pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-50 mb-lg-0">
              <div className="tp-section mb-40">
                <h3 className="tp-section-title">Why Choose Us?</h3>
                <p>We provide a safe, caring and child-friendly atmosphere with an emphasis on social, emotional and basic skill development.</p>
              </div>
              <ul className="mb-40 p-0" style={{ listStyle: 'none' }}>
                <li className="d-flex align-items-center mb-15">
                    <span className="mr-15" style={{ color: '#F5A623', fontSize: '1.2rem' }}>✔</span>
                    <span style={{ fontSize: '1.1rem' }}>Activity-based learning to build confidence</span>
                </li>
                <li className="d-flex align-items-center mb-15">
                    <span className="mr-15" style={{ color: '#F5A623', fontSize: '1.2rem' }}>✔</span>
                    <span style={{ fontSize: '1.1rem' }}>Safe and supportive environment</span>
                </li>
                <li className="d-flex align-items-center mb-15">
                    <span className="mr-15" style={{ color: '#F5A623', fontSize: '1.2rem' }}>✔</span>
                    <span style={{ fontSize: '1.1rem' }}>Qualified and dedicated teachers</span>
                </li>
              </ul>
              <Link href="/why-choose-us" className="tp-btn">Learn More</Link>
            </div>
            <div className="col-lg-6">
                <img 
                  src="/assets/img/Images/School Images (46).JPG" 
                  alt="SJS Activities" 
                  style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  className="wow fadeInRight"
                />
            </div>
          </div>
        </div>
      </section>



      {/* App Download CTA start */}
      <AppDownloadCta />
      {/* App Download CTA end */}
    </main>
  )
}
