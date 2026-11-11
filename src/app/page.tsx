import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { CoreEngagementsGrid } from '@/components/sections/CoreEngagementsGrid';
import VideoExplainer from '@/components/VideoExplainer';
import USPGrid from '@/components/USPGrid';
import HowItWorks from '@/components/HowItWorks';
import BlueprintSection from '@/components/BlueprintSection';
import { HomepageFaqSection } from '@/components/sections/HomepageFaqSection';
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
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "legalName": "AEObility",
        "slogan": "Get Found. Get Chosen.",
        "brand": {
          "@type": "Brand",
          "name": "AEObility",
          "slogan": "Get Found. Get Chosen."
        },
        "alternateName": [
          "AEO Bility",
          "aeo bility",
          "aeo.bility",
          "AEO.bility",
          "AEObility Perth"
        ],
        "url": "https://aeobility.com.au/",
        "telephone": "+61-480-286-282",
        "foundingDate": "2026-07-21",
        "taxID": "ABN 61 029 803 255",
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "AUSTRALIAN_BUSINESS_NUMBER",
          "name": "ABN",
          "value": "61029803255",
          "url": "https://abr.business.gov.au/ABN/View?id=61029803255"
        },
        "logo": {
          "@type": "ImageObject",
          "@id": "https://aeobility.com.au/#logo",
          "url": "https://aeobility.com.au/aeobility-logo-light.svg"
        },
        "image": "https://aeobility.com.au/images/about/Profile-Picture-Vinnie.png",
        "description": "AEObility is a Perth-based Australian consultancy specialising in Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), AI search visibility, entity SEO and schema graph engineering. AEObility helps businesses improve how their digital information, services and expertise are structured and understood by search engines and AI-powered discovery systems.",
        "disambiguatingDescription": "AEObility is an independent Australian digital consultancy specialising in AEO, GEO and machine search readability. It is distinct from Seobility, the SEO software platform.",
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
        "areaServed": [
          {
            "@type": "City",
            "name": "Perth"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Western Australia"
          },
          {
            "@type": "Country",
            "name": "Australia"
          }
        ],
        "founder": {
          "@id": "https://aeobility.com.au/#vincebaker"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "@id": "https://aeobility.com.au/#catalog",
          "name": "AEObility Consulting Services",
          "itemListElement": [
            { "@id": "https://aeobility.com.au/#service-aeo" },
            { "@id": "https://aeobility.com.au/#service-geo" },
            { "@id": "https://aeobility.com.au/#service-entity-seo" },
            { "@id": "https://aeobility.com.au/#service-schema" }
          ]
        },
        "knowsAbout": [
          "Answer Engine Optimisation",
          "Generative Engine Optimisation",
          "AI Search Visibility",
          "Entity SEO",
          "Knowledge Graph Engineering",
          "Machine Search Readability",
          "Schema Graph Engineering",
          "Schema.org",
          "JSON-LD",
          "Structured Data",
          "Information Architecture",
          "Search Engine Optimisation"
        ],
        "sameAs": [
          "https://abr.business.gov.au/ABN/View?id=61029803255",
          "https://www.crunchbase.com/organization/aeobility",
          "https://www.cbinsights.com/company/aeobility",
          "https://www.producthunt.com/@aeobility",
          "https://www.linkedin.com/company/aeobility",
          "https://dev.to/aeobility",
          "https://github.com/vinsnt76/aeobility",
          "https://maps.app.goo.gl/zWC3RxsLV9JMBoGRA"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/#vincebaker",
        "name": "Vincent Anthony Baker",
        "givenName": "Vincent",
        "familyName": "Baker",
        "alternateName": [
          "Vince Baker",
          "Vinnie Baker"
        ],
        "jobTitle": "Founder and Technical Director",
        "disambiguatingDescription": "Australian B2B digital search architect, founder and principal AI search specialist at AEObility (Dianella, Perth, Western Australia; ABN 61 029 803 255). Distinct from former American NBA basketball player Vin Baker.",
        "url": "https://aeobility.com.au/vince-baker",
        "worksFor": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "sameAs": [
          "https://www.linkedin.com/in/vince-baker/",
          "https://app.qwoted.com/sources/vince-baker",
          "https://github.com/vinsnt76"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://aeobility.com.au/#website",
        "url": "https://aeobility.com.au/",
        "name": "AEObility",
        "description": "The official website of AEObility, an Australian Answer Engine Optimisation and Generative Engine Optimisation consultancy.",
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "inLanguage": "en-AU",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://aeobility.com.au/api/search/answer?query={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/#webpage",
        "url": "https://aeobility.com.au/",
        "name": "AEObility Perth | Answer Engine Optimisation & AI SEO Consultancy",
        "description": "Australia's premier AEO & AI SEO agency. Optimise your brand for ChatGPT, Perplexity & Google AI Overviews. Claim your free AI visibility audit.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "about": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "inLanguage": "en-AU"
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/#service-aeo",
        "name": "Answer Engine Optimisation (AEO)",
        "serviceType": "Answer Engine Optimisation",
        "description": "Answer Engine Optimisation focused on improving how business information, content and expertise are structured and understood by answer engines and AI-powered search systems.",
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        }
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/#service-geo",
        "name": "Generative Engine Optimisation (GEO)",
        "serviceType": "Generative Engine Optimisation",
        "description": "Generative Engine Optimisation focused on improving the clarity, structure and discoverability of organisational information across generative AI search and discovery environments.",
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        }
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/#service-entity-seo",
        "name": "Entity SEO and Knowledge Graph Engineering",
        "serviceType": "Entity SEO and Knowledge Graph Engineering",
        "description": "Entity-focused optimisation involving business identity, entity relationships, knowledge graph architecture and machine-readable organisational information.",
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        }
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/#service-schema",
        "name": "Schema Graph Engineering",
        "serviceType": "Structured Data and Schema Graph Engineering",
        "description": "The design and implementation of connected Schema.org structured data and JSON-LD graphs that communicate business entities, people, services and their relationships to machine-readable systems.",
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Consolidated Root Schema Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      <Navbar />
      <main id="main-content" className="flex-grow w-full">
        <Hero />
        <CoreEngagementsGrid />
        <VideoExplainer />
        <USPGrid />
        <HowItWorks />
        <BlueprintSection />
        <HomepageFaqSection />
        <HomepageContactForm />
      </main>
      <Footer />
    </div>
  );
}
