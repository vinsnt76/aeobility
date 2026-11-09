import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';

export const metadata: Metadata = {
  title: "Contact & Technical Support | AEObility Perth",
  description: "Book a 15-minute clarity call or submit an enquiry for AEO, SEO, and AI search visibility support. Direct founder-led assistance with zero pressure.",
  keywords: [
    "aeo consultant perth",
    "contact aeobility",
    "book a digital marketing consultation",
    "small business optimisation support",
    "aeo technical support"
  ],
  alternates: {
    canonical: "https://aeobility.com.au/contact",
  }
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://aeobility.com.au/contact#webpage",
        "url": "https://aeobility.com.au/contact",
        "name": "Contact & Technical Support | AEObility Perth",
        "description": "Book a 15-minute clarity call or submit an enquiry for AEO, SEO, and AI search visibility support. Direct founder-led assistance with zero pressure.",
        "publisher": {
          "@type": "Organization",
          "@id": "https://aeobility.com.au/#organization",
          "name": "AEObility",
          "url": "https://aeobility.com.au"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://aeobility.com.au/#localbusiness",
        "name": "AEObility",
        "legalName": "AEObility",
        "image": "https://aeobility.com.au/images/about/Profile-Picture-Vinnie.png",
        "url": "https://aeobility.com.au/contact",
        "email": "support@aeobility.com.au",
        "taxID": "61029803255",
        "sameAs": [
          "https://maps.app.goo.gl/zWC3RxsLV9JMBoGRA"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "Western Australia",
          "postalCode": "6000",
          "addressCountry": "Australia"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -31.9505,
          "longitude": 115.8605
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "17:00"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />
      <ContactForm />
      <Footer />
    </div>
  );
}
