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
        "legalName": "AEObility",
        "alternateName": [
          "AEO Bility",
          "aeo bility",
          "aeo.bility",
          "AEO.bility"
        ],
        "url": "https://aeobility.com.au/",
        "telephone": "+61-480-286-282",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://aeobility.com.au/#logo",
          "url": "https://aeobility.com.au/aeobility-logo-light.svg"
        },
        "description": "AEObility is a Perth-based Australian consultancy specialising in Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), AI search visibility, entity SEO and schema graph engineering. AEObility helps businesses improve how their digital information, services and expertise are structured and understood by search engines and AI-powered discovery systems.",
        "disambiguatingDescription": "AEObility is an independent Australian digital consultancy specialising in AEO, GEO and machine search readability. It is distinct from Seobility, the SEO software platform.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "Western Australia",
          "addressCountry": "AU"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Perth"
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
          "https://www.cbinsights.com/company/aeobility",
          "https://www.producthunt.com/@aeobility",
          "https://www.linkedin.com/company/aeobility",
          "https://dev.to/aeobility"
        ],
        "subjectOf": [
          {
            "@id": "https://aeoservices.com.au/ai-citation-index-australia/#october-2026"
          },
          {
            "@id": "https://isitagentready.com/www.aeobility.com.au#assessment"
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/#vincebaker",
        "name": "Vincent Baker",
        "alternateName": [
          "Vince Baker",
          "Vinnie Baker"
        ],
        "jobTitle": "Founder and Technical Director",
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
          "Schema.org",
          "JSON-LD",
          "Structured Data"
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
        "url": "https://aeobility.com.au/",
        "name": "AEObility",
        "description": "The official website of AEObility, an Australian Answer Engine Optimisation and Generative Engine Optimisation consultancy.",
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
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
      },
      {
        "@type": "Report",
        "@id": "https://aeoservices.com.au/ai-citation-index-australia/#october-2026",
        "name": "AI Citation Index Australia: October 2026",
        "url": "https://aeoservices.com.au/ai-citation-index-australia/",
        "description": "A monthly Australian AI-citation study measuring the domains cited by Perplexity Sonar across a fixed set of 29 AEO-related questions. The October 2026 edition recorded 587 citations across 343 domains. AEObility was cited in 2 of 29 questions, receiving 5 citations, and was listed among the domains that joined the 15 most-cited domains since September 2026.",
        "datePublished": "2026-10-17",
        "inLanguage": "en-AU",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "author": {
          "@type": "Organization",
          "@id": "https://aeoservices.com.au/#organization",
          "name": "AEO Services",
          "url": "https://aeoservices.com.au/"
        },
        "mentions": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "keywords": [
          "AI Citation Index",
          "Australian AI Search",
          "Perplexity Sonar",
          "Answer Engine Optimisation",
          "Generative Engine Optimisation",
          "AI Search Visibility"
        ]
      },
      {
        "@type": "CreativeWork",
        "@id": "https://isitagentready.com/www.aeobility.com.au#assessment",
        "name": "AEObility Agent Readiness Assessment",
        "url": "https://isitagentready.com/www.aeobility.com.au",
        "description": "External agent-readiness assessment of the AEObility website, reporting a score of 94 out of 100 and Level 5 Agent-Native classification according to the assessment result.",
        "about": {
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
