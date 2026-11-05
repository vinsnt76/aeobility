import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { CoreEngagementsGrid } from '@/components/sections/CoreEngagementsGrid';
import VideoExplainer from '@/components/VideoExplainer';
import USPGrid from '@/components/USPGrid';
import HowItWorks from '@/components/HowItWorks';
import BlueprintSection from '@/components/BlueprintSection';
import HomepageContactForm from '@/components/forms/HomepageContactForm';
import Footer from '@/components/Footer';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "AEObility Perth | Answer Engine Optimisation & AI SEO Consultancy",
  description: "Australia's premier AEO & AI SEO agency. Optimise your brand for ChatGPT, Perplexity & Google AI Overviews. Claim your free AI visibility audit.",
  keywords: [
    "aeo",
    "ai seo",
    "website seo optimisation",
    "AI Search Optimisation Australia",
    "artificial intelligence seo",
    "local business visibility",
    "get found on google maps",
    "online visibility audit",
    "machine-readable content",
    "conversational search",
    "intent matching"
  ],
  alternates: {
    canonical: 'https://aeobility.com.au',
  }
};

export default function Home() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "alternateName": [
          "aeo bility",
          "aeo.bility",
          "AEO Bility",
          "AEO.bility"
        ],
        "legalName": "AEObility",
        "url": "https://aeobility.com.au",
        "logo": "https://aeobility.com.au/aeobility-logo-light.svg",
        "description": "Perth-based Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) consultancy.",
        "disambiguatingDescription": "Australian digital consultancy specialising in machine search readability and AEO, distinct from Seobility SEO software.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "addressCountry": "AU"
        },
        "founder": {
          "@id": "https://aeobility.com.au/#vincebaker"
        },
        "sameAs": [
          "https://www.cbinsights.com/company/aeobility",
          "https://www.producthunt.com/@aeobility",
          "https://www.linkedin.com/company/aeobility",
          "https://dev.to/aeobility"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/#vincebaker",
        "name": "Vincent Baker",
        "alternateName": ["Vince Baker", "Vinnie Baker"],
        "jobTitle": "Founder & Technical Director",
        "worksFor": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "knowsAbout": [
          "Answer Engine Optimisation",
          "Generative Engine Optimisation",
          "Information Architecture",
          "Schema Graph Engineering"
        ],
        "sameAs": [
          "https://www.linkedin.com/in/vincebaker",
          "https://app.qwoted.com/sources/vince-baker",
          "https://github.com/vinsnt76"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://aeobility.com.au/#website",
        "url": "https://aeobility.com.au",
        "name": "AEObility",
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        }
      },
      {
        "@type": "VideoObject",
        "@id": "https://aeobility.com.au/#video-explainer",
        "name": "Our Approach to Answer Engine Search",
        "description": "Learn how AEObility refactors digital content to rank and get cited inside conversational AI systems and map interfaces.",
        "thumbnailUrl": [
          "https://aeobility.com.au/images/brand/aeobility-video-explainer.webp"
        ],
        "uploadDate": "2026-07-05T00:00:00+08:00",
        "contentUrl": "https://aeobility.com.au/videos/explainer.mp4",
        "embedUrl": "https://drive.google.com/file/d/18D0_A6T5Xikp7wvAg0AGcDDXRtdQKlG1/preview",
        "creator": {
          "@id": "https://aeobility.com.au/#vincebaker"
        },
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Unified Homepage Entity Disambiguation Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      <Navbar />
      <Hero />
      <CoreEngagementsGrid />
      <VideoExplainer />
      <USPGrid />
      <HowItWorks />
      <BlueprintSection />
      <HomepageContactForm />
      <Footer />
    </div>
  );
}
