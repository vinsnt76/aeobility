/**
 * AEObility AEO vs SEO Comparison Schema.org Graph Builder
 * Path: src/lib/schema/aeoComparison.ts
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const getAeoComparisonSchemaGraph = (faqs?: FaqItem[]) => {
  const graphNodes: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": "https://aeobility.com.au/services/aeo/comparison#webpage",
      "url": "https://aeobility.com.au/services/aeo/comparison",
      "name": "AEO vs SEO: Choosing the Right Strategy | AEObility",
      "description": "A practical comparison of SEO, AEO, and GEO. Learn how Answer Engine Optimisation complements search foundations and how to choose the right strategy for your business. Micro-sprints from $495 ex. GST.",
      "inLanguage": "en-AU",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "breadcrumb": {
        "@id": "https://aeobility.com.au/services/aeo/comparison#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://aeobility.com.au/services/aeo/comparison#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aeobility.com.au/services/aeo/comparison#breadcrumb",
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
          "name": "AEO vs SEO",
          "item": "https://aeobility.com.au/services/aeo/comparison"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://aeobility.com.au/services/aeo/comparison#service",
      "name": "AEO & SEO Comparison & Execution Sprints",
      "alternateName": "AEO vs SEO Strategic Audit",
      "description": "Strategic advisory and sprint execution comparing traditional lexical SEO against dense vector AEO retrieval models for Australian businesses.",
      "provider": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Australian business owners, marketing managers, and digital decision makers"
      },
      "hasOfferCatalog": {
        "@id": "https://aeobility.com.au/services/aeo/comparison#catalog"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://aeobility.com.au/services/aeo/comparison#catalog",
      "name": "AEObility AEO vs SEO Sprint Offerings",
      "itemListElement": [
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/services/aeo/comparison#offer-micro-sprint",
          "name": "AEO Technical Micro-Sprints",
          "sku": "SS1-SS4-MICRO",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "495.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "Fixed-scope micro-sprints starting from $495 AUD ex. GST targeting one agreed priority: structured schema markup, page rewrites, internal linking or citation clean-up.",
          "seller": {
            "@id": "https://aeobility.com.au/#organization"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/services/aeo/comparison#offer-blueprint",
          "name": "Strategic Blueprint",
          "sku": "BPSTRAT",
          "price": "995.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "description": "A standalone digital presence audit and prioritised 90-day execution roadmap. Price excludes GST.",
          "seller": {
            "@id": "https://aeobility.com.au/#organization"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/services/aeo/comparison#offer-foundation",
          "name": "AEO Foundation",
          "sku": "AEO-FOUNDATION-CORE",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "1990.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "A focused four-week turnkey implementation engagement at $1,990 AUD ex. GST for multi-page connected improvements across structured data, content clarity, and internal linking.",
          "seller": {
            "@id": "https://aeobility.com.au/#organization"
          }
        }
      ]
    }
  ];

  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": "https://aeobility.com.au/services/aeo/comparison#faq-comparison",
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
