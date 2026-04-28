import { Outfit, Jost, Crimson_Pro } from 'next/font/google';
import type { Metadata } from "next";
import "swiper/css/bundle";
import "./globals.scss";
import { VideoProvider } from '@/provider/VideoProvider';

const outfit_bold = Outfit({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: '--tp-ff-body'
});
const outfit_heading = Outfit({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: '--tp-ff-heading'
});
const outfit_p = Outfit({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: '--tp-ff-p'
});
const jost_primary = Jost({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: '--tp-ff-primary'
});
const crismon_secondary = Crimson_Pro({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: '--tp-ff-secondary'
});


export const metadata: Metadata = {
  title: {
    default: "Sree Jayam School | Best ICSE & ISC School in Vellore",
    template: "%s | Sree Jayam School"
  },
  description: "Sree Jayam School (SJS) is a leading ICSE & ISC affiliated school in Vellore, offering a transformative learning environment, holistic development, and 100% board results since 2005.",
  keywords: ["Sree Jayam School", "Best school in Vellore", "ICSE School Vellore", "ISC School Vellore", "SJS Vellore", "Quality education Vellore", "Holistic development", "Top ICSE schools in Tamil Nadu"],
  authors: [{ name: "Sree Jayam School" }],
  creator: "Sree Jayam School",
  publisher: "Sree Jayam School",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Sree Jayam School | Learn to Live",
    description: "Providing quality ICSE & ISC education since 2005 in Vellore. Focus on academic excellence and holistic development.",
    url: "https://sreejayamschool.edu.in",
    siteName: "Sree Jayam School",
    images: [
      {
        url: "/assets/img/logo/sjs-logo-main.jpg",
        width: 1200,
        height: 630,
        alt: "Sree Jayam School Vellore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sree Jayam School | ICSE & ISC Education",
    description: "Leading ICSE & ISC affiliated school in Vellore. Transforming young minds since 2005.",
    images: ["/assets/img/logo/sjs-logo-main.jpg"],
  },
  category: "Education",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  "name": "Sree Jayam School",
  "alternateName": "SJS Vellore",
  "url": "https://sreejayamschool.edu.in",
  "logo": "https://sreejayamschool.edu.in/assets/img/logo/sjs-logo-main.jpg",
  "image": "https://sreejayamschool.edu.in/assets/img/Images/School%20Images%20(1).jpg",
  "description": "Sree Jayam School (SJS) is a leading educational institution in Vellore, Tamil Nadu, affiliated with ICSE and ISC boards.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ezhil Nagar, Allapuram",
    "addressLocality": "Vellore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "602002",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9234",
    "longitude": "79.1412"
  },
  "telephone": "+91-9486274144",
  "openingHours": "Mo-Sa 08:30-16:30",
  "sameAs": [
    "https://www.facebook.com/sreejayamschool",
    "https://www.instagram.com/sreejayamschool",
    "https://www.youtube.com/@sreejayamschool"
  ],
  "award": "100% Pass Percentage in ICSE/ISC Board Exams"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit_bold.variable} ${outfit_heading.variable} ${outfit_p.variable} ${jost_primary.variable} ${crismon_secondary.variable}`}>
        <VideoProvider>
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
