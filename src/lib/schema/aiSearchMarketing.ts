/**
 * AEObility AI Search Marketing & Strategy Schema.org Graph Builder
 * Path: src/lib/schema/aiSearchMarketing.ts
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const getAiSearchMarketingSchemaGraph = (faqs?: FaqItem[]) => {
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
        "AEObility Perth",
        "AEObility Australia"
      ],
      "url": "https://aeobility.com.au/",
      "logo": "https://aeobility.com.au/aeobility-logo-light.svg",
      "telephone": "+61-480-286-282",
      "foundingDate": "2026-07-21",
      "taxID": "ABN 61 029 803 255",
      "description": "AEObility is a technical AI search marketing firm in Perth executing native Answer Engine Optimisation (AEO) using proprietary NLP workflows, automated multimedia video generation, and open-standard Model Context Protocol (MCP) servers.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dianella",
        "addressRegion": "Western Australia",
        "postalCode": "6059",
        "addressCountry": "AU"
      },
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
      ]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://aeobility.com.au/#ai-bill",
      "name": "AI Bill",
      "applicationCategory": "Diagnostic Assistant",
      "operatingSystem": "Web",
      "author": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "description": "Proprietary NLP diagnostic assistant and RAG telemetry engine for AEObility."
    },
    {
      "@type": "Person",
      "@id": "https://aeobility.com.au/#vincebaker",
      "name": "Vince Baker",
      "jobTitle": "Founder & Principal AEO Specialist",
      "worksFor": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "url": "https://aeobility.com.au/about",
      "sameAs": [
        "https://www.linkedin.com/in/vincebaker/"
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
      "@id": "https://aeobility.com.au/services/ai-search-marketing#webpage",
      "url": "https://aeobility.com.au/services/ai-search-marketing",
      "name": "AI Search Marketing Services Perth | AEObility",
      "description": "Engineered AI search marketing and answer engine optimisation in Perth. Make your business easier for search engines, digital assistants, and AI search systems to identify, understand, and reference.",
      "inLanguage": "en-AU",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": [
        {
          "@id": "https://aeobility.com.au/#organization"
        },
        {
          "@id": "https://aeobility.com.au/#ai-bill"
        },
        {
          "@id": "https://aeobility.com.au/services/ai-search-marketing#service"
        },
        {
          "@id": "https://aeobility.com.au/services/ai-search-marketing#ai-bill-overview-video"
        }
      ],
      "breadcrumb": {
        "@id": "https://aeobility.com.au/services/ai-search-marketing#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://aeobility.com.au/services/ai-search-marketing#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aeobility.com.au/services/ai-search-marketing#breadcrumb",
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
        }
      ]
    },
    {
      "@type": "VideoObject",
      "@id": "https://aeobility.com.au/services/ai-search-marketing#ai-bill-overview-video",
      "name": "AI Bill: Demonstrating AEO, MCP, and AI Search Marketing in Perth",
      "description": "See how AEObility's NLP diagnostic assistant, AI Bill, audits entity clarity, connects to Model Context Protocol (MCP) endpoints, and drives AI search visibility for Australian businesses.",
      "thumbnailUrl": [
        "https://img.youtube.com/vi/ghX_txnK7WU/maxresdefault.jpg"
      ],
      "uploadDate": "2026-09-27",
      "embedUrl": "https://www.youtube-nocookie.com/embed/ghX_txnK7WU",
      "contentUrl": "https://www.youtube.com/watch?v=ghX_txnK7WU",
      "inLanguage": "en-AU",
      "publisher": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "about": [
        {
          "@id": "https://aeobility.com.au/#ai-bill"
        },
        {
          "@id": "https://aeobility.com.au/services/ai-search-marketing#service"
        }
      ],
      "transcript": "AI Bill is AEObility's proprietary NLP diagnostic assistant in Perth. In this video, we demonstrate how Model Context Protocol endpoints and entity tri-graph schemas eliminate ambiguity in generative AI search engines, ensuring Australian businesses get found and chosen across Google Maps, Perplexity, and AI search interfaces."
    },
    {
      "@type": "Service",
      "@id": "https://aeobility.com.au/services/ai-search-marketing#service",
      "name": "AI Search Marketing & AEO Sprints",
      "alternateName": "Generative Search Strategy",
      "description": "Technical AEO, MCP server integration, multi-modal video provenance, and schema architecture for Australian businesses.",
      "provider": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "mainEntityOfPage": "https://aeobility.com.au/services/ai-search-marketing",
      "areaServed": [
        {
          "@type": "Country",
          "name": "Australia"
        },
        {
          "@type": "City",
          "name": "Perth",
          "url": "https://aeobility.com.au/services/ai-search-marketing/perth"
        },
        {
          "@type": "City",
          "name": "Melbourne",
          "url": "https://aeobility.com.au/services/ai-search-marketing/melbourne"
        },
        {
          "@type": "City",
          "name": "Sydney",
          "url": "https://aeobility.com.au/services/ai-search-marketing/sydney"
        },
        {
          "@type": "City",
          "name": "Adelaide",
          "url": "https://aeobility.com.au/services/ai-search-marketing/adelaide"
        },
        {
          "@type": "City",
          "name": "Brisbane",
          "url": "https://aeobility.com.au/services/ai-search-marketing/brisbane"
        }
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Australian small businesses, internal marketing teams, and enterprise brand managers"
      },
      "offers": {
        "@type": "Offer",
        "price": "995.00",
        "priceCurrency": "AUD",
        "description": "AEObility 90-Day Blueprint: 100% of your Blueprint fee is credited toward eligible technical implementation sprints."
      },
      "hasOfferCatalog": {
        "@id": "https://aeobility.com.au/services/ai-search-marketing#catalog"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://aeobility.com.au/services/ai-search-marketing#catalog",
      "name": "Model Context Protocol & Technical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/services/ai-search-marketing#offer-mcp-integration",
          "name": "MCP Endpoint Integration & Schema Deployment",
          "description": "Open-standard Model Context Protocol endpoint deployment, machine-readable tool catalogues, and structured schema integration.",
          "seller": {
            "@id": "https://aeobility.com.au/#organization"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/services/ai-search-marketing#offer-micro-sprints",
          "name": "AEO Technical Micro-Sprints",
          "url": "https://aeobility.com.au/services/ai-search-marketing#ai-micro-sprints",
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
          "@id": "https://aeobility.com.au/services/ai-search-marketing#offer-blueprint",
          "name": "Strategic Blueprint",
          "url": "https://aeobility.com.au/solutions/aeo-blueprint",
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
          "@id": "https://aeobility.com.au/services/ai-search-marketing#offer-foundation",
          "name": "AEO Foundation",
          "url": "https://aeobility.com.au/services/ai-search-marketing#ai-foundation",
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
      "@id": "https://aeobility.com.au/services/ai-search-marketing#faq-ai",
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
