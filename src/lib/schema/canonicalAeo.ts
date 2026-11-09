/**
 * AEObility Canonical AEO Hub Schema.org Graph Builder
 * Path: src/lib/schema/canonicalAeo.ts
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const getCanonicalAeoSchemaGraph = (faqs?: FaqItem[]) => {
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
      "logo": "https://aeobility.com.au/aeobility-logo-light.svg",
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
      "founder": {
        "@id": "https://aeobility.com.au/#vincebaker"
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
      "@type": "Person",
      "@id": "https://aeobility.com.au/#vincebaker",
      "name": "Vincent Baker",
      "alternateName": "Vince Baker",
      "jobTitle": "Founder & Principal AEO Specialist",
      "worksFor": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "url": "https://aeobility.com.au/about/freelance-digital-specialist-perth",
      "sameAs": [
        "https://www.linkedin.com/in/vincebaker/",
        "https://github.com/vinsnt76"
      ]
    },
    {
      "@type": "ImageObject",
      "@id": "https://aeobility.com.au/services/aeo#primaryimage",
      "url": "https://aeobility.com.au/images/services/ai-seo-example-of-multimodal-seo_AEObility.webp",
      "contentUrl": "https://aeobility.com.au/images/services/ai-seo-example-of-multimodal-seo_AEObility.webp",
      "caption": "3D avatar standing next to a glowing holographic matrix comparing ChatGPT, Google, Copilot, and Claude for Answer Engine Optimisation (AEO).",
      "description": "3D avatar standing next to a glowing holographic matrix comparing ChatGPT, Google, Copilot, and Claude for Answer Engine Optimisation (AEO).",
      "width": 1200,
      "height": 800,
      "inLanguage": "en-AU"
    },
    {
      "@type": "VideoObject",
      "@id": "https://aeobility.com.au/services/aeo#video",
      "name": "Why AEObility Framework Works for All Engines: Multi-Modal Corroboration",
      "description": "Demonstrating multi-modal transcript synchronisation and VideoObject schema cross-verification for AI answer engines including Google AI Overviews, ChatGPT Search, and Perplexity.",
      "thumbnailUrl": [
        "https://img.youtube.com/vi/_ynQCnTVsGw/maxresdefault.jpg"
      ],
      "uploadDate": "2026-09-28",
      "embedUrl": "https://www.youtube.com/embed/_ynQCnTVsGw?si=tkSRoI8DlcK42Xnh",
      "contentUrl": "https://www.youtube.com/watch?v=_ynQCnTVsGw",
      "inLanguage": "en-AU",
      "publisher": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "about": [
        {
          "@id": "https://aeobility.com.au/services/aeo#service"
        }
      ],
      "transcript": "Why AEObility framework works for all engines — Multi-modal corroboration: We synchronised video transcripts directly with VideoObject metadata, giving retrieval bots explicit text targets to cross-verify against media assets."
    },
    {
      "@type": "WebPage",
      "@id": "https://aeobility.com.au/services/aeo#webpage",
      "url": "https://aeobility.com.au/services/aeo",
      "name": "AI SEO Services: Update Your Site for Modern Answer Retrieval | AEObility",
      "description": "Restructure your digital footprint for AI-first search engines and modern discovery platforms. Explore our core AEO pillars, micro-sprints from $495 AUD ex. GST, and AEO Foundation.",
      "inLanguage": "en-AU",
      "datePublished": "2026-09-01T00:00:00+08:00",
      "dateModified": "2026-10-01T00:00:00+08:00",
      "author": {
        "@id": "https://aeobility.com.au/#vincebaker"
      },
      "publisher": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://aeobility.com.au/services/aeo#primaryimage"
      },
      "image": {
        "@id": "https://aeobility.com.au/services/aeo#primaryimage"
      },
      "video": {
        "@id": "https://aeobility.com.au/services/aeo#video"
      },
      "about": [
        {
          "@id": "https://aeobility.com.au/#organization"
        },
        {
          "@type": "Thing",
          "name": "Entity Authority",
          "identifier": "graph_node_entity_authority"
        },
        {
          "@type": "Thing",
          "name": "AEO Services",
          "identifier": "proximity_weight_0.94"
        },
        {
          "@type": "Thing",
          "name": "AI Visibility Diagnostic",
          "identifier": "proximity_weight_0.91"
        },
        {
          "@type": "Thing",
          "name": "Search Engine Optimisation",
          "sameAs": "https://www.wikidata.org/wiki/Q180711"
        },
        {
          "@type": "Thing",
          "name": "Large Language Model",
          "sameAs": "https://www.wikidata.org/wiki/Q115305900"
        },
        {
          "@type": "Thing",
          "name": "Retrieval-Augmented Generation",
          "sameAs": "https://www.wikidata.org/wiki/Q124316499"
        },
        {
          "@type": "Thing",
          "name": "Semantic Reasoner",
          "sameAs": "https://www.wikidata.org/wiki/Q1425884"
        },
        {
          "@type": "Thing",
          "name": "Information Extraction",
          "sameAs": "https://www.wikidata.org/wiki/Q1414457"
        }
      ],
      "mentions": [
        {
          "@type": "Thing",
          "name": "Knowledge Graph",
          "sameAs": "https://www.wikidata.org/wiki/Q33002955"
        },
        {
          "@type": "Thing",
          "name": "Schema.org",
          "sameAs": "https://www.wikidata.org/wiki/Q3475335"
        },
        {
          "@type": "Thing",
          "name": "JSON-LD",
          "sameAs": "https://www.wikidata.org/wiki/Q15298912"
        }
      ],
      "breadcrumb": {
        "@id": "https://aeobility.com.au/services/aeo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://aeobility.com.au/services/aeo#service"
      },
      "hasPart": [
        {
          "@type": "WebPage",
          "@id": "https://aeobility.com.au/services/aeo/definition",
          "name": "Answer Engine Optimisation Core Definition Model"
        },
        {
          "@type": "WebApplication",
          "@id": "https://aeobility.com.au/diagnostic#webapp",
          "name": "AI Visibility Diagnostic Measurement Suite"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aeobility.com.au/services/aeo#breadcrumb",
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
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://aeobility.com.au/services/aeo#service",
      "name": "Answer Engine Optimisation (AEO) Services",
      "alternateName": "Generative AI Search & Entity Optimisation Services",
      "description": "Structured digital infrastructure solutions that help search engines, LLMs, and conversational AI interfaces index, verify, and reference your organisation accurately.",
      "provider": {
        "@id": "https://aeobility.com.au/#organization"
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
      "audience": {
        "@type": "Audience",
        "audienceType": "Australian small businesses, e-commerce brands, trades, clinics, and professional service teams"
      },
      "subjectOf": [
        {
          "@id": "https://aeobility.com.au/services/aeo#primaryimage"
        },
        {
          "@id": "https://aeobility.com.au/services/aeo#video"
        },
        {
          "@type": "WebPage",
          "name": "Why This Architecture Is Correct for AI Search: Entities, Evidence, and Semantic Propositions",
          "url": "https://aeobility.com.au/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps"
        },
        {
          "@type": "TechArticle",
          "@id": "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento",
          "name": "Case Study: Baby Bento AI Search Visibility Success",
          "url": "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento"
        },
        {
          "@type": "TechArticle",
          "@id": "https://aeobility.com.au/knowledge-hub/aeo#article",
          "name": "Answer Engine Optimisation Principles & Mechanics",
          "url": "https://aeobility.com.au/knowledge-hub/aeo"
        },
        {
          "@type": "TechArticle",
          "@id": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval#article",
          "name": "What Is Positional Bias in Retrieval and Answer Engines?",
          "url": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval"
        },
        {
          "@type": "TechArticle",
          "@id": "https://aeobility.com.au/knowledge-hub/articles/entity-authority-building#article",
          "name": "Entity Authority: Why AI Search Ranks Entities Not Pages",
          "url": "https://aeobility.com.au/knowledge-hub/articles/entity-authority-building"
        },
        {
          "@type": "TechArticle",
          "@id": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines#article",
          "name": "How Perplexity, ChatGPT, Google, and Copilot Find and Cite Your Content",
          "url": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines"
        },
        {
          "@type": "TechArticle",
          "@id": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation#article",
          "name": "AI Search Optimisation with Retrieval-Augmented Generation (RAG)",
          "url": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation"
        }
      ],
      "hasOfferCatalog": {
        "@id": "https://aeobility.com.au/services/aeo#catalog"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://aeobility.com.au/services/aeo#catalog",
      "name": "AEObility AEO Service Offerings",
      "itemListElement": [
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/services/aeo#offer-micro-sprint",
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
          "@id": "https://aeobility.com.au/services/aeo#offer-blueprint",
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
          "@id": "https://aeobility.com.au/services/aeo#offer-foundation",
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
      "@id": "https://aeobility.com.au/services/aeo#faq-aeo",
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
