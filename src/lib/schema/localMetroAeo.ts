/**
 * AEObility Local Metro AI Search Marketing Schema.org Graph Builder
 * Path: src/lib/schema/localMetroAeo.ts
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LocalMetroConfig {
  city: string;
  state: string;
  stateFull: string;
  postcode?: string;
  latitude: number;
  longitude: number;
  slug: string;
  wikiUrl: string;
  wikidata?: string;
}

export const METRO_WIKIDATA_MAP: Record<string, { name: string; wikidata: string }> = {
  perth: { name: "Perth", wikidata: "https://www.wikidata.org/wiki/Q3183" },
  sydney: { name: "Sydney", wikidata: "https://www.wikidata.org/wiki/Q3130" },
  melbourne: { name: "Melbourne", wikidata: "https://www.wikidata.org/wiki/Q34647" },
  brisbane: { name: "Brisbane", wikidata: "https://www.wikidata.org/wiki/Q34932" },
  adelaide: { name: "Adelaide", wikidata: "https://www.wikidata.org/wiki/Q5112" },
};

export const METRO_CONFIGS: Record<string, LocalMetroConfig> = {
  perth: {
    city: "Perth",
    state: "WA",
    stateFull: "Western Australia",
    postcode: "6000",
    latitude: -31.9505,
    longitude: 115.8605,
    slug: "perth",
    wikiUrl: "https://en.wikipedia.org/wiki/Perth",
    wikidata: "https://www.wikidata.org/wiki/Q3183"
  },
  sydney: {
    city: "Sydney",
    state: "NSW",
    stateFull: "New South Wales",
    postcode: "2000",
    latitude: -33.8688,
    longitude: 151.2093,
    slug: "sydney",
    wikiUrl: "https://en.wikipedia.org/wiki/Sydney",
    wikidata: "https://www.wikidata.org/wiki/Q3130"
  },
  melbourne: {
    city: "Melbourne",
    state: "VIC",
    stateFull: "Victoria",
    postcode: "3000",
    latitude: -37.8136,
    longitude: 144.9631,
    slug: "melbourne",
    wikiUrl: "https://en.wikipedia.org/wiki/Melbourne",
    wikidata: "https://www.wikidata.org/wiki/Q34647"
  },
  brisbane: {
    city: "Brisbane",
    state: "QLD",
    stateFull: "Queensland",
    postcode: "4000",
    latitude: -27.4698,
    longitude: 153.0251,
    slug: "brisbane",
    wikiUrl: "https://en.wikipedia.org/wiki/Brisbane",
    wikidata: "https://www.wikidata.org/wiki/Q34932"
  },
  adelaide: {
    city: "Adelaide",
    state: "SA",
    stateFull: "South Australia",
    postcode: "5000",
    latitude: -34.9285,
    longitude: 138.6007,
    slug: "adelaide",
    wikiUrl: "https://en.wikipedia.org/wiki/Adelaide",
    wikidata: "https://www.wikidata.org/wiki/Q5112"
  }
};

export const getLocalMetroSchemaGraph = (config: LocalMetroConfig, faqs?: FaqItem[]) => {
  const pageUrl = `https://aeobility.com.au/services/ai-search-marketing/${config.slug}`;
  const cityData = METRO_WIKIDATA_MAP[config.slug.toLowerCase()] || {
    name: config.city,
    wikidata: config.wikidata || config.wikiUrl,
  };

  const graphNodes: Record<string, unknown>[] = [
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
        "AEObility Perth"
      ],
      "url": "https://aeobility.com.au/",
      "telephone": "+61-480-286-282",
      "logo": "https://aeobility.com.au/aeobility-logo-light.svg",
      "foundingDate": "2026-07-21",
      "taxID": "ABN 61 029 803 255",
      "founder": {
        "@id": "https://aeobility.com.au/#vincebaker"
      },
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
        "https://github.com/vinsnt76/aeobility",
        "https://maps.app.goo.gl/zWC3RxsLV9JMBoGRA"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dianella",
        "addressRegion": "WA",
        "postalCode": "6059",
        "addressCountry": "AU"
      }
    },
    {
      "@type": "Person",
      "@id": "https://aeobility.com.au/#vincebaker",
      "name": "Vincent Anthony Baker",
      "givenName": "Vincent",
      "familyName": "Baker",
      "alternateName": ["Vince Baker", "Vinnie Baker"],
      "jobTitle": "Founder & Principal AEO Specialist",
      "worksFor": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "url": "https://aeobility.com.au/vince-baker",
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
      "publisher": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "inLanguage": "en-AU"
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      "url": pageUrl,
      "name": `AI Search Marketing & Optimisation ${config.city} | AEObility`,
      "description": `Professional AI search marketing, GEO, and answer engine optimisation services for businesses in ${config.city}, ${config.stateFull}.`,
      "inLanguage": "en-AU",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": [
        {
          "@id": "https://aeobility.com.au/#organization"
        },
        {
          "@id": `${pageUrl}#professional-service`
        },
        {
          "@id": `${pageUrl}#service`
        }
      ],
      "breadcrumb": {
        "@id": `${pageUrl}#breadcrumb`
      },
      "mainEntity": {
        "@id": `${pageUrl}#service`
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
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
          "name": "AI Search Marketing",
          "item": "https://aeobility.com.au/services/ai-search-marketing"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": config.city,
          "item": pageUrl
        }
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": `${pageUrl}#professional-service`,
      "name": `AEObility AI Search Optimisation ${config.city}`,
      "description": `Professional AI search marketing, GEO, and answer engine optimisation services for businesses throughout the ${config.city} metropolitan region.`,
      "url": pageUrl,
      "telephone": "+61480286282",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": config.city,
        "addressRegion": config.state,
        "postalCode": config.postcode || "",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": config.latitude,
        "longitude": config.longitude
      },
      "areaServed": [
        {
          "@type": "City",
          "@id": cityData.wikidata,
          "name": cityData.name,
          "sameAs": config.wikiUrl
        },
        {
          "@type": "State",
          "name": config.stateFull
        }
      ],
      "parentOrganization": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "sameAs": [
        "https://maps.app.goo.gl/zWC3RxsLV9JMBoGRA",
        "https://www.linkedin.com/company/aeobility"
      ]
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      "name": `AEObility ${cityData.name}: AI Search & AEO Digital Consultancy Services`,
      "serviceType": "AI Search Optimisation",
      "provider": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "areaServed": {
        "@type": "City",
        "@id": cityData.wikidata,
        "name": cityData.name
      },
      "description": `Bespoke Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) consultancy services for businesses in ${cityData.name}, ${config.stateFull} and nationwide.`,
      "isRelatedTo": {
        "@id": "https://aeobility.com.au/services/aeo#service"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `AEO Sprints & Foundations - ${config.city}`,
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AEO Technical Micro-Sprint",
              "description": "One priority page or structured schema deployment fix."
            },
            "price": "495.00",
            "priceCurrency": "AUD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Strategic Blueprint",
              "description": "Comprehensive digital audit, entity gap review, and 90-day roadmap."
            },
            "price": "995.00",
            "priceCurrency": "AUD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AEO Foundation",
              "description": "Connected multi-page schema integration and citation alignment."
            },
            "price": "1990.00",
            "priceCurrency": "AUD"
          }
        ]
      }
    }
  ];

  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graphNodes
  };
};
