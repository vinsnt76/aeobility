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
  description: "Meet Vinnie Baker and the technical architects behind AEObility. Founded in 2026 in Perth, WA, Australia. Get found and chosen across ChatGPT, Gemini, and Perplexity.",
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
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://aeobility.com.au/about#webpage",
        "url": "https://aeobility.com.au/about",
        "name": "About Us: Automation Consultants & Architects | AEObility",
        "description": "Meet Vinnie Baker and the technical architects behind AEObility. Founded in Perth, Western Australia. Specialising in Answer Engine Optimisation (AEO) and AI search visibility.",
        "inLanguage": "en-AU",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "about": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "mainEntity": {
          "@id": "https://aeobility.com.au/#organization"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "legalName": "AEObility",
        "alternateName": [
          "AEO Bility",
          "aeo bility",
          "aeo.bility",
          "AEO.bility",
          "AEObility Perth",
          "AEObility Australia"
        ],
        "description": "AEObility (pronounced A-E-O-bility) is an independent Australian digital consultancy based in Perth, Western Australia, founded by Vince Baker. The name is a portmanteau of Answer Engine Optimisation (AEO) and ability, reflecting our focus on machine readability, schema graph architecture, and AI search discovery.",
        "disambiguatingDescription": "Independent Perth digital consultancy specialising in Answer Engine Optimisation (AEO) and structured entity data architecture. Strictly distinct from Seobility software and physical mobility equipment suppliers in Western Australia.",
        "foundingDate": "2026-07-21",
        "taxID": "ABN 61 029 803 255",
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "AUSTRALIAN_BUSINESS_NUMBER",
          "name": "ABN",
          "value": "61029803255",
          "url": "https://abr.business.gov.au/ABN/View?id=61029803255"
        },
        "url": "https://aeobility.com.au",
        "logo": "https://aeobility.com.au/aeobility-logo-light.svg",
        "telephone": "+61-480-286-282",
        "sameAs": [
          "https://abr.business.gov.au/ABN/View?id=61029803255",
          "https://www.crunchbase.com/organization/aeobility",
          "https://www.cbinsights.com/company/aeobility",
          "https://www.producthunt.com/@aeobility",
          "https://www.linkedin.com/company/aeobility",
          "https://dev.to/aeobility",
          "https://github.com/vinsnt76/aeobility"
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
          "@id": "https://aeobility.com.au/#vincebaker",
          "name": "Vincent Anthony Baker",
          "givenName": "Vincent",
          "familyName": "Baker",
          "alternateName": ["Vince Baker", "Vinnie Baker"],
          "jobTitle": "Founder & Principal AEO Specialist",
          "url": "https://aeobility.com.au/vince-baker",
          "sameAs": [
            "https://www.linkedin.com/in/vince-baker/",
            "https://app.qwoted.com/sources/vince-baker",
            "https://github.com/vinsnt76"
          ]
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://aeobility.com.au/#localbusiness",
        "name": "AEObility",
        "legalName": "AEObility",
        "image": "https://aeobility.com.au/images/about/Profile-Picture-Vinnie.png",
        "url": "https://aeobility.com.au/about",
        "telephone": "+61-480-286-282",
        "taxID": "ABN 61 029 803 255",
        "parentOrganization": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "sameAs": [
          "https://abr.business.gov.au/ABN/View?id=61029803255",
          "https://maps.app.goo.gl/zWC3RxsLV9JMBoGRA"
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
        }
      },
      {
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
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schemas */}
      <script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <Navbar />
      <SubNavPills items={ABOUT_PILLS} />
      <Breadcrumbs />
      <AboutUsContent />
      <Footer />
    </div>
  );
}
