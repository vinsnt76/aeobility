/**
 * AEObility Canonical GEO Marketing Schema.org Graph Builder
 * Path: src/lib/schema/geoMarketing.ts
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export const getGeoMarketingSchemaGraph = (faqs?: FaqItem[]) => {
  const graphNodes: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": "https://aeobility.com.au/services/geo-marketing#webpage",
      "url": "https://aeobility.com.au/services/geo-marketing",
      "name": "Generative Engine Optimisation (GEO) Services in Perth | AEObility",
      "description": "AEObility helps Perth and Australian businesses improve visibility, brand accuracy, and citation consistency across Google AI features, ChatGPT Search, Perplexity and Gemini.",
      "inLanguage": "en-AU",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": [
        {
          "@id": "https://aeobility.com.au/#organization"
        },
        {
          "@type": "Thing",
          "name": "Generative Engine Optimisation",
          "sameAs": "https://en.wikipedia.org/wiki/Generative_engine_optimization"
        },
        {
          "@type": "Thing",
          "name": "Local Search (Internet)",
          "sameAs": "https://www.wikidata.org/wiki/Q6664287"
        },
        {
          "@type": "Thing",
          "name": "Perth, Western Australia",
          "sameAs": "https://www.wikidata.org/wiki/Q3183"
        },
        {
          "@type": "Thing",
          "name": "Search Engine Optimisation",
          "sameAs": "https://www.wikidata.org/wiki/Q180711"
        }
      ],
      "mentions": [
        {
          "@type": "Thing",
          "name": "Knowledge Graph",
          "sameAs": "https://www.wikidata.org/wiki/Q33002955"
        }
      ],
      "breadcrumb": {
        "@id": "https://aeobility.com.au/services/geo-marketing#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://aeobility.com.au/services/geo-marketing#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aeobility.com.au/services/geo-marketing#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://aeobility.com.au/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://aeobility.com.au/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "GEO Marketing Services",
          "item": "https://aeobility.com.au/services/geo-marketing"
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://aeobility.com.au/services/geo-marketing#perth-entity",
      "name": "AEObility GEO Marketing Perth Hub",
      "url": "https://aeobility.com.au/services/geo-marketing",
      "telephone": "+61480286282",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Perth",
        "addressRegion": "Western Australia",
        "postalCode": "6000",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -31.9505,
        "longitude": 115.8605
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "areaServed": [
        {
          "@type": "Country",
          "name": "Australia",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q408",
            "https://www.geonames.org/2077456/australia.html"
          ]
        },
        {
          "@type": "AdministrativeArea",
          "name": "Western Australia",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q3205",
            "https://www.geonames.org/2058645/western-australia.html"
          ]
        },
        {
          "@type": "City",
          "name": "Perth",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q3183",
            "https://www.geonames.org/2063523/perth.html"
          ]
        },
        {
          "@type": "City",
          "name": "Joondalup"
        },
        {
          "@type": "City",
          "name": "Fremantle"
        },
        {
          "@type": "City",
          "name": "Mandurah"
        },
        {
          "@type": "City",
          "name": "Subiaco"
        }
      ],
      "parentOrganization": {
        "@id": "https://aeobility.com.au/#organization"
      }
    },
    {
      "@type": "Service",
      "@id": "https://aeobility.com.au/services/geo-marketing#service",
      "name": "Generative Engine Optimisation (GEO) Services",
      "alternateName": "Generative Engine Optimisation for Local & Regional Businesses",
      "description": "Diagnostic-led Generative Engine Optimisation (GEO) extending sound SEO foundations for AI-assisted search experiences including Google AI features, ChatGPT Search, Perplexity, and Gemini.",
      "provider": {
        "@id": "https://aeobility.com.au/services/geo-marketing#perth-entity"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Australia",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q408",
            "https://www.geonames.org/2077456/australia.html"
          ]
        },
        {
          "@type": "AdministrativeArea",
          "name": "Western Australia",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q3205",
            "https://www.geonames.org/2058645/western-australia.html"
          ]
        },
        {
          "@type": "City",
          "name": "Perth",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q3183",
            "https://www.geonames.org/2063523/perth.html"
          ]
        },
        {
          "@type": "City",
          "name": "Joondalup"
        },
        {
          "@type": "City",
          "name": "Fremantle"
        },
        {
          "@type": "City",
          "name": "Mandurah"
        },
        {
          "@type": "City",
          "name": "Subiaco"
        }
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Perth and Australian trade operators, medical practices, professional services, and multi-location SMBs"
      },
      "subjectOf": [
        {
          "@type": "WebPage",
          "@id": "https://aeobility.com.au/knowledge-hub/geo",
          "name": "GEO vs Local SEO: Key Differences for AI & Map Discovery",
          "url": "https://aeobility.com.au/knowledge-hub/geo"
        },
        {
          "@type": "WebPage",
          "@id": "https://aeobility.com.au/services/aeo/local-business",
          "name": "Local Business Visibility across Maps & AI Search",
          "url": "https://aeobility.com.au/services/aeo/local-business"
        },
        {
          "@type": "WebPage",
          "@id": "https://aeobility.com.au/brand-facts#webpage",
          "name": "Verified Brand Facts & Canonical Entity Directory",
          "url": "https://aeobility.com.au/brand-facts"
        },
        {
          "@type": "WebApplication",
          "@id": "https://aeobility.com.au/diagnostic#webapp",
          "name": "AI Visibility Diagnostic Engine",
          "url": "https://aeobility.com.au/diagnostic"
        }
      ],
      "hasOfferCatalog": {
        "@id": "https://aeobility.com.au/services/geo-marketing#catalog"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://aeobility.com.au/services/geo-marketing#catalog",
      "name": "AEObility GEO Marketing Service Offerings",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "GEO Visibility Diagnostic",
          "sku": "GEO-DIAGNOSTIC-AUDIT",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "995.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "Primary diagnostic gateway testing high-intent buyer prompts across AI search engines, auditing brand accuracy and citation gaps, with 100% of fee credited toward AEO Foundation. Price excludes GST.",
          "seller": { "@id": "https://aeobility.com.au/#organization" }
        },
        {
          "@type": "Offer",
          "name": "Business Facts & Citation Clean-Up Sprint",
          "sku": "GEO-S1-CITATION",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "495.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "Fixed-scope micro-sprint resolving conflicting business details, NAP errors, and profile inconsistencies across priority local platforms. Price excludes GST.",
          "seller": { "@id": "https://aeobility.com.au/#organization" }
        },
        {
          "@type": "Offer",
          "name": "AI-Ready Service Page Sprint",
          "sku": "GEO-S2-SERVICE-PAGE",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "495.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "Enhance priority service pages with structured answer scaffolding, explicit eligibility criteria, and verified local proof. Price excludes GST.",
          "seller": { "@id": "https://aeobility.com.au/#organization" }
        },
        {
          "@type": "Offer",
          "name": "Local Entity Architecture Sprint",
          "sku": "GEO-S3-LOCAL-ENTITY",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "695.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "Deploy semantic internal linking lattices connecting regional location hubs with core commercial services. Price excludes GST.",
          "seller": { "@id": "https://aeobility.com.au/#organization" }
        },
        {
          "@type": "Offer",
          "name": "Structured Data Validation Sprint",
          "sku": "GEO-S4-SCHEMA-VAL",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "495.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "Validate eligible, visible Schema.org markup and resolve implementation errors across key site paths. Price excludes GST.",
          "seller": { "@id": "https://aeobility.com.au/#organization" }
        },
        {
          "@type": "Offer",
          "name": "AI Visibility Reporting Setup Sprint",
          "sku": "GEO-S5-REPORTING-SETUP",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "495.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "Establish an auditable baseline prompt set and recurring AI mention and citation tracking setup. Price excludes GST.",
          "seller": { "@id": "https://aeobility.com.au/#organization" }
        },
        {
          "@type": "Offer",
          "name": "AEO Foundation",
          "sku": "AEO-FOUNDATION-CORE",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "1990.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "Four-week turnkey deployment covering priority page improvements, Brand Facts page, internal linking, structured data validation, profile consistency, and measurement setup at $1,990 AUD ex. GST.",
          "seller": { "@id": "https://aeobility.com.au/#organization" }
        }
      ]
    }
  ];

  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": "https://aeobility.com.au/services/geo-marketing#faq-geo",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graphNodes
  };
};

