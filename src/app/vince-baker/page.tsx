import React from 'react';
import { Metadata } from 'next';
import VinceBakerClientPage from './VinceBakerClientPage';

export const metadata: Metadata = {
  title: "Vince Baker | Founder & Technical Director at AEObility",
  description: "Profile of Vince Baker, Perth-based digital specialist and founder of AEObility, specialising in Answer Engine Optimisation (AEO) and entity schema engineering.",
  alternates: {
    canonical: "https://aeobility.com.au/vince-baker",
  },
  keywords: [
    "Vince Baker",
    "Vincent Baker",
    "Vinnie Baker",
    "AEObility",
    "AEObility Perth",
    "Perth digital consultancy",
    "Answer Engine Optimisation",
    "machine search readability",
    "Founder and Technical Director"
  ]
};

const founderSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://aeobility.com.au/#vincebaker",
      "name": "Vincent Baker",
      "alternateName": ["Vince Baker", "Vinnie Baker"],
      "jobTitle": "Founder and Technical Director",
      "url": "https://aeobility.com.au/vince-baker",
      "worksFor": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "knowsAbout": [
        "Answer Engine Optimisation",
        "Generative Engine Optimisation",
        "AI Search Visibility",
        "Information Architecture",
        "Entity SEO",
        "Knowledge Graph Engineering",
        "Schema Graph Engineering",
        "Structured Data"
      ],
      "sameAs": [
        "https://www.linkedin.com/in/vincebaker",
        "https://app.qwoted.com/sources/vince-baker",
        "https://github.com/vinsnt76"
      ]
    },
    {
      "@type": "ProfilePage",
      "@id": "https://aeobility.com.au/vince-baker#webpage",
      "url": "https://aeobility.com.au/vince-baker",
      "name": "Vince Baker - Founder Profile",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": {
        "@id": "https://aeobility.com.au/#vincebaker"
      },
      "inLanguage": "en-AU"
    }
  ]
};

export default function VinceBakerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />
      <VinceBakerClientPage />
    </>
  );
}
