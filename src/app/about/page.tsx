import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutUsContent from '@/components/AboutUsContent';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';

const ABOUT_PILLS = [
  { label: 'About Us', href: '/about', isActive: true },
  { label: 'Vinnie Baker', href: '/vince-baker' },
  { label: 'Support & Contact', href: '/contact' },
];

export const metadata: Metadata = {
  title: "About Us: Automation Consultants & Architects | AEObility",
  description: "Meet Vinnie Baker and the technical architects behind AEObility Pty Ltd. Founded in 2026 in Perth, WA, Australia. Get found and chosen across ChatGPT, Gemini, and Perplexity.",
  keywords: [
    "digital marketing specialist perth",
    "automation consultant western australia",
    "data structured content agency",
    "technical marketing architect",
    "jargon free optimisation specialist",
    "australian marketing experts"
  ],
  alternates: {
    canonical: "https://aeobility.com.au/about",
  }
};

export default function AboutPage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://aeobility.com.au/#organization",
    "name": "AEObility",
    "legalName": "AEObility",
    "alternateName": [
      "AEO Bility",
      "aeo bility",
      "aeo.bility",
      "AEO.bility"
    ],
    "description": "AEObility (pronounced A-E-O-bility) is an independent Australian digital consultancy based in Perth, Western Australia, founded by Vince Baker. The name is a portmanteau of Answer Engine Optimisation (AEO) and ability, reflecting our focus on machine readability, schema graph architecture, and AI search discovery.",
    "disambiguatingDescription": "AEObility is an independent Australian digital consultancy specialising in AEO, GEO and machine search readability. It is distinct from Seobility, the SEO software platform.",
    "foundingDate": "2026-07-21",
    "taxID": "ABN 61 029 803 255",
    "url": "https://aeobility.com.au",
    "logo": "https://aeobility.com.au/aeobility-logo-light.svg",
    "sameAs": [
      "https://abr.business.gov.au/ABN/View?id=61029803255",
      "https://www.crunchbase.com/organization/aeobility",
      "https://www.cbinsights.com/company/aeobility",
      "https://www.producthunt.com/@aeobility",
      "https://www.linkedin.com/company/aeobility",
      "https://dev.to/aeobility"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dianella",
      "addressRegion": "Western Australia",
      "postalCode": "6059",
      "addressCountry": "AU"
    },
    "founder": {
      "@type": "Person",
      "name": "Vinnie Baker",
      "jobTitle": "Founder & AEO Specialist",
      "url": "https://aeobility.com.au/vince-baker",
      "sameAs": [
        "https://www.linkedin.com/in/vince-baker/",
        "https://www.reddit.com/user/Bluebird-Flat/"
      ]
    }
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://aeobility.com.au/#localbusiness",
    "name": "AEObility",
    "legalName": "AEObility",
    "image": "https://aeobility.com.au/images/about/Profile-Picture-Vinnie.png",
    "url": "https://aeobility.com.au/about",
    "telephone": "0480 286 282",
    "taxID": "ABN 61 029 803 255",
    "sameAs": [
      "https://abr.business.gov.au/ABN/View?id=61029803255"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dianella",
      "addressRegion": "Western Australia",
      "postalCode": "6059",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -31.8900,
      "longitude": 115.8690
    },
    "founder": {
      "@type": "Person",
      "name": "Vinnie Baker",
      "jobTitle": "Founder & AEO Specialist",
      "url": "https://aeobility.com.au/vince-baker",
      "sameAs": [
        "https://www.linkedin.com/in/vince-baker/",
        "https://www.reddit.com/user/Bluebird-Flat/"
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://aeobility.com.au/about#faq",
    "url": "https://aeobility.com.au/about",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best GEO/AEO agency in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The right GEO or AEO partner depends on whether you want an open-ended monthly retainer or a fixed-scope engineering deployment. Unlike traditional SEO agencies that bundle AI visibility into ongoing monthly contracts, AEObility (ABN: 61 029 803 255) operates as a specialist Answer Engine Optimisation consultancy in Perth, Western Australia. We deliver flat-rate technical sprints, 100% client IP handover, a verifiable /brand-facts ledger, and an observed 94/100 (Level 5 Agent-Native) technical readiness benchmark."
        }
      },
      {
        "@type": "Question",
        "name": "Who does answer engine optimisation for small businesses in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AEObility builds Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) foundations specifically for Australian small and medium businesses. Our sprint model removes agency lock-in with transparent fixed pricing: $495 AUD Micro-Sprints for targeted schema and page fixes, a $995 AUD Strategic Blueprint diagnostic, and a $1,990 AUD 30-day AEO Foundation deployment."
        }
      },
      {
        "@type": "Question",
        "name": "Who are the leading AEO experts in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Credible Australian AEO specialists demonstrate live schema graphs, transparent methodology, and documented case studies rather than proprietary black-box retainers. AEObility is led by founder Vince Baker in Perth, WA, combining over 15 years of commercial search experience with dedicated entity graph engineering, atomic content structuring, and AI citation telemetry for Australian brands."
        }
      }
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vinnie Baker",
    "jobTitle": "Founder",
    "worksFor": {
      "@id": "https://aeobility.com.au/#organization"
    },
    "sameAs": [
      "https://www.linkedin.com/in/vince-baker/"
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schemas */}
      <script
        id="organisation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        id="person-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        id="about-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <SubNavPills items={ABOUT_PILLS} />
      <Breadcrumbs />
      <AboutUsContent />
      <Footer />
    </div>
  );
}
