/**
 * AEObility Shopify E-Commerce AEO & Product Visibility Schema.org Graph Builder
 * Path: src/lib/schema/shopifyAeo.ts
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const getShopifyAeoSchemaGraph = (faqs?: FaqItem[]) => {
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
        "https://github.com/vinsnt76/aeobility"
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
      "@type": "Service",
      "@id": "https://aeobility.com.au/services/aeo/shopify#service",
      "name": "Shopify AEO Optimisation",
      "serviceType": "Shopify AEO Ingestion Architecture",
      "description": "Platform-specific restructuring of Shopify Liquid templates, Google Merchant Center feeds, and server-side product schema to maximise discovery across AI search and shopping assistants.",
      "provider": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AEO Service Catalogue",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AEO Sprints",
              "price": "495.00",
              "priceCurrency": "AUD"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Strategic Blueprint",
              "price": "995.00",
              "priceCurrency": "AUD"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AEO Foundation",
              "price": "1990.00",
              "priceCurrency": "AUD"
            }
          }
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://aeobility.com.au/services/aeo/shopify#webpage",
      "url": "https://aeobility.com.au/services/aeo/shopify",
      "name": "Shopify AEO & AI Search Optimisation | AEObility",
      "description": "Make your Shopify products and collections reliably discoverable across AI search interfaces, AI Overviews, digital maps, and conversational shopping surfaces.",
      "inLanguage": "en-AU",
      "datePublished": "2026-08-31",
      "dateModified": "2026-08-31",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "breadcrumb": {
        "@id": "https://aeobility.com.au/services/aeo/shopify#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://aeobility.com.au/services/aeo/shopify#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aeobility.com.au/services/aeo/shopify#breadcrumb",
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
          "name": "AEO Services",
          "item": "https://aeobility.com.au/services/aeo"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Shopify AEO",
          "item": "https://aeobility.com.au/services/aeo/shopify"
        }
      ]
    }
  ];

  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": "https://aeobility.com.au/services/aeo/shopify#faq",
      "isPartOf": {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/services/aeo/shopify"
      },
      "inLanguage": "en-AU",
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
