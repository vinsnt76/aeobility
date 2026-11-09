/**
 * AEObility Local Business Visibility Production Schema.org Graph Builder
 * Path: src/lib/schema/localBusinessAeo.ts
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const getLocalBusinessAeoSchemaGraph = (faqs?: FaqItem[]) => {
  const graphNodes: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": "https://aeobility.com.au/#organization",
      "name": "AEObility",
      "legalName": "AEObility",
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
      "sameAs": [
        "https://abr.business.gov.au/ABN/View?id=61029803255",
        "https://www.crunchbase.com/organization/aeobility",
        "https://www.cbinsights.com/company/aeobility",
        "https://www.producthunt.com/@aeobility",
        "https://www.linkedin.com/company/aeobility",
        "https://dev.to/aeobility",
        "https://github.com/vinsnt76/aeobilty",
        "https://maps.app.goo.gl/zWC3RxsLV9JMBoGRA"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://aeobility.com.au/#website",
      "url": "https://aeobility.com.au/",
      "name": "AEObility",
      "publisher": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "inLanguage": "en-AU"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aeobility.com.au/services/aeo/local-business#breadcrumb",
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
          "name": "AEO & SEO",
          "item": "https://aeobility.com.au/services/aeo"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Local Business Visibility",
          "item": "https://aeobility.com.au/services/aeo/local-business"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://aeobility.com.au/services/aeo/local-business#webpage",
      "url": "https://aeobility.com.au/services/aeo/local-business",
      "name": "Local Business Visibility across Maps & AI Search",
      "headline": "Local Search & AEO for Local Businesses",
      "description": "Fixed-scope local search and AEO services for Australian trades, clinics and local service businesses. Fix inconsistent business details, missing suburb schema, citation gaps and location mapping issues across Search, Maps and AI answers.",
      "inLanguage": "en-AU",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "publisher": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "breadcrumb": {
        "@id": "https://aeobility.com.au/services/aeo/local-business#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://aeobility.com.au/services/aeo/local-business#service"
      },
      "about": [
        { "@type": "Thing", "name": "Local search optimisation" },
        { "@type": "Thing", "name": "Google Business Profile optimisation" },
        { "@type": "Thing", "name": "LocalBusiness structured data" },
        { "@type": "Thing", "name": "Citation and NAP consistency" },
        { "@type": "Thing", "name": "Service-area SEO" },
        { "@type": "Thing", "name": "AI search optimisation" }
      ],
      "potentialAction": [
        {
          "@type": "CommunicateAction",
          "name": "Request a local AEO quote",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://aeobility.com.au/contact",
            "inLanguage": "en-AU"
          }
        },
        {
          "@type": "CommunicateAction",
          "name": "Run a free local visibility scan",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://aeobility.com.au/services/aeo/local-business#local-diagnostic-form",
            "inLanguage": "en-AU"
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://aeobility.com.au/services/aeo/local-business#perth-entity",
      "name": "AEObility Local Business Perth Hub",
      "url": "https://aeobility.com.au/services/aeo/local-business",
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
        }
      ],
      "parentOrganization": {
        "@id": "https://aeobility.com.au/#organization"
      }
    },
    {
      "@type": "Service",
      "@id": "https://aeobility.com.au/services/aeo/local-business#service",
      "name": "Local Business Visibility across Maps & AI Search",
      "alternateName": [
        "Local Search & AEO for Local Businesses",
        "Local Search & Proximity Optimisation",
        "Local Business GEO"
      ],
      "description": "Fixed-scope local search, Maps and AI search optimisation for Australian trade businesses, clinics, storefronts and regional service providers. Services address local structured data, citation consistency, Google Business Profile alignment, service-area content and multi-location internal linking.",
      "url": "https://aeobility.com.au/services/aeo/local-business",
      "provider": {
        "@id": "https://aeobility.com.au/services/aeo/local-business#perth-entity"
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
        }
      ],
      "audience": [
        { "@type": "BusinessAudience", "audienceType": "Australian trade and mobile service businesses" },
        { "@type": "BusinessAudience", "audienceType": "Australian clinics and local storefront businesses" },
        { "@type": "BusinessAudience", "audienceType": "Multi-location and regional service businesses" }
      ],
      "serviceType": [
        "Local search optimisation",
        "Local SEO",
        "Local AEO",
        "Google Business Profile alignment",
        "LocalBusiness schema implementation",
        "Citation clean-up",
        "NAP standardisation",
        "Service-area page restructuring",
        "Multi-location internal linking"
      ],
      "termsOfService": "https://aeobility.com.au/terms",
      "hasOfferCatalog": {
        "@id": "https://aeobility.com.au/services/aeo/local-business#offer-catalog"
      },
      "offers": [
        { "@id": "https://aeobility.com.au/services/aeo/local-business#micro-sprint-offer" },
        { "@id": "https://aeobility.com.au/services/aeo/local-business#foundation-offer" },
        { "@id": "https://aeobility.com.au/services/aeo/local-business#blueprint-offer" }
      ]
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://aeobility.com.au/services/aeo/local-business#offer-catalog",
      "name": "AEObility Local Business Visibility Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Proximity Micro-Sprints",
          "itemListElement": [
            { "@id": "https://aeobility.com.au/services/aeo/local-business#micro-sprint-offer" }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Local Foundation Services",
          "itemListElement": [
            { "@id": "https://aeobility.com.au/services/aeo/local-business#foundation-offer" }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Local Strategy and Diagnostic Services",
          "itemListElement": [
            { "@id": "https://aeobility.com.au/services/aeo/local-business#blueprint-offer" }
          ]
        }
      ]
    },
    {
      "@type": "Offer",
      "@id": "https://aeobility.com.au/services/aeo/local-business#micro-sprint-offer",
      "name": "Proximity Micro-Sprint",
      "description": "A fixed-scope local signal repair for one priority issue, including LocalBusiness or service schema injection, or citation clean-up and NAP standardisation.",
      "url": "https://aeobility.com.au/services/aeo/local-business",
      "price": "495",
      "priceCurrency": "AUD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "495",
        "priceCurrency": "AUD",
        "valueAddedTaxIncluded": false,
        "description": "From $495 AUD excluding GST."
      },
      "availability": "https://schema.org/InStock",
      "itemOffered": {
        "@type": "Service",
        "name": "Proximity Micro-Sprint",
        "serviceType": [
          "LocalBusiness schema implementation",
          "Service schema implementation",
          "Citation clean-up",
          "NAP standardisation"
        ],
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        }
      }
    },
    {
      "@type": "Offer",
      "@id": "https://aeobility.com.au/services/aeo/local-business#foundation-offer",
      "name": "Unified Local Foundation",
      "description": "A four-week local visibility implementation for multi-location clinics and growing trade services, combining structured data, citation consistency and internal location-page connections.",
      "url": "https://aeobility.com.au/services/aeo/local-business",
      "price": "1990",
      "priceCurrency": "AUD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "1990",
        "priceCurrency": "AUD",
        "valueAddedTaxIncluded": false,
        "description": "$1,990 AUD excluding GST."
      },
      "availability": "https://schema.org/InStock",
      "itemOffered": {
        "@type": "Service",
        "name": "Unified Local Foundation",
        "serviceType": [
          "Multi-location schema graph implementation",
          "Cross-directory NAP alignment",
          "Internal location linking",
          "Service-area optimisation"
        ],
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        }
      }
    },
    {
      "@type": "Offer",
      "@id": "https://aeobility.com.au/services/aeo/local-business#blueprint-offer",
      "name": "Local Visibility Blueprint",
      "description": "A fixed-price local visibility audit and 90-day execution roadmap covering local profile structures, map coordinate logic and existing structured data. The Blueprint fee is credited toward Foundation work.",
      "url": "https://aeobility.com.au/services/aeo/local-business",
      "price": "995",
      "priceCurrency": "AUD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "995",
        "priceCurrency": "AUD",
        "valueAddedTaxIncluded": false,
        "description": "$995 AUD excluding GST."
      },
      "availability": "https://schema.org/InStock",
      "itemOffered": {
        "@type": "Service",
        "name": "Local Visibility Blueprint",
        "serviceType": [
          "Local profile audit",
          "Structured data audit",
          "Map coordinate review",
          "90-day local visibility roadmap"
        ],
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        }
      }
    }
  ];

  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": "https://aeobility.com.au/services/aeo/local-business#faq",
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
