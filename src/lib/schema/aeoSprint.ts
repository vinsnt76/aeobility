/**
 * AEObility AEO Technical Sprints Schema.org Modular Graph Specification
 * Path: src/lib/schema/aeoSprint.ts
 * Dynamically generated from Single Source of Truth (SSOT) src/lib/pricing.ts
 * Locale: en-AU
 */

import {
  TECHNICAL_SPRINT_CATALOG,
  GOVERNANCE_RULES,
  formatAudCurrency,
  getMacroSprints,
  getMicroSprints,
} from '@/lib/pricing';

export interface FaqItem {
  question: string;
  answer: string;
}

export const getAeoSprintSchemaGraph = (faqs: FaqItem[]) => {
  const macroSprints = getMacroSprints();
  const microSprints = getMicroSprints();
  const foundationTurnkey = TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION'];
  const foundationDirect = TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-DIRECT'];
  const defaultMicro = TECHNICAL_SPRINT_CATALOG['SS1MICRO1'];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/solutions/aeo-sprint#webpage",
        "url": "https://aeobility.com.au/solutions/aeo-sprint",
        "name": "AEO Technical Sprints & Schema Deployments | AEObility",
        "description": `Focused, fixed-scope implementation for websites, structured data and priority service pages. Micro-Sprints from ${formatAudCurrency(defaultMicro.priceExGst)}, Macro Sprints from ${formatAudCurrency(macroSprints[0].priceExGst)}, and AEO Foundation from ${formatAudCurrency(foundationDirect.priceExGst)}.`,
        "inLanguage": "en-AU",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "about": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/solutions/aeo-sprint#breadcrumb"
        },
        "mainEntity": {
          "@id": "https://aeobility.com.au/solutions/aeo-sprint#service"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/solutions/aeo-sprint#breadcrumb",
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
            "name": "Solutions",
            "item": "https://aeobility.com.au/solutions"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AEO Technical Sprints",
            "item": "https://aeobility.com.au/solutions/aeo-sprint"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/solutions/aeo-sprint#service",
        "name": "AEO Technical Sprints",
        "description": "Fixed-scope implementation services for structured data, priority-page content, and page structure. Available as individual Micro-Sprints, 4-pillar Macro Sprints, or comprehensive AEO Foundation.",
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Australian SMBs, Allied Health Clinics, and Home Service Trades"
        },
        "hasOfferCatalog": {
          "@id": "https://aeobility.com.au/solutions/aeo-sprint#catalog"
        }
      },
      {
        "@type": "OfferCatalog",
        "@id": "https://aeobility.com.au/solutions/aeo-sprint#catalog",
        "name": "AEObility Technical Sprint Catalogue",
        "itemListElement": [
          // Sub-catalog 1: Macro Sprints
          {
            "@type": "OfferCatalog",
            "name": "Macro Sprints (10-Day Sprints)",
            "itemListElement": macroSprints.map((macro) => ({
              "@type": "Offer",
              "@id": `https://aeobility.com.au/solutions/aeo-sprint#offer-${macro.code.toLowerCase()}`,
              "name": macro.name,
              "sku": macro.code,
              "url": `https://aeobility.com.au/solutions/aeo-sprint?sprint=${macro.code.toLowerCase()}`,
              "price": macro.priceExGst,
              "priceCurrency": "AUD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": macro.priceExGst,
                "priceCurrency": "AUD",
                "valueAddedTaxIncluded": false,
                "unitText": macro.deliverySla
              },
              "availability": "https://schema.org/InStock",
              "category": "AEO Technical Macro-Sprint",
              "description": `${macro.purpose} Includes: ${macro.deliverables.join('; ')}.`,
              "eligibleCustomerType": "Australian SMBs, Allied Health Clinics, and Home Service Trades",
              "itemOffered": {
                "@id": `https://aeobility.com.au/solutions/aeo-sprint#service-${macro.code.toLowerCase()}`
              },
              "seller": {
                "@id": "https://aeobility.com.au/#organization"
              }
            }))
          },
          // Sub-catalog 2: Micro Sprints
          {
            "@type": "OfferCatalog",
            "name": "Micro-Sprints (3-Day Half-Day Units)",
            "itemListElement": microSprints.map((micro) => ({
              "@type": "Offer",
              "@id": `https://aeobility.com.au/solutions/aeo-sprint#offer-${micro.code.toLowerCase()}`,
              "name": micro.name,
              "sku": micro.code,
              "url": `https://aeobility.com.au/solutions/aeo-sprint?service=${micro.code.toLowerCase()}`,
              "price": micro.priceExGst,
              "priceCurrency": "AUD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": micro.priceExGst,
                "priceCurrency": "AUD",
                "valueAddedTaxIncluded": false,
                "unitText": micro.deliverySla
              },
              "availability": "https://schema.org/InStock",
              "category": "AEO Technical Micro-Sprint",
              "description": `${micro.purpose} Deliverables: ${micro.deliverables.join('; ')}.`,
              "eligibleCustomerType": "Australian SMBs, Allied Health Clinics, and Home Service Trades",
              "seller": {
                "@id": "https://aeobility.com.au/#organization"
              }
            }))
          },
          // Sub-catalog 3: AEO Foundation
          {
            "@type": "OfferCatalog",
            "name": "AEO Foundation Packages",
            "itemListElement": [
              {
                "@type": "Offer",
                "@id": "https://aeobility.com.au/solutions/aeo-sprint#offer-foundation-direct",
                "name": foundationDirect.name,
                "sku": foundationDirect.code,
                "url": "https://aeobility.com.au/solutions/aeo-sprint?service=foundation-direct",
                "price": foundationDirect.priceExGst,
                "priceCurrency": "AUD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": foundationDirect.priceExGst,
                  "priceCurrency": "AUD",
                  "valueAddedTaxIncluded": false,
                  "unitText": foundationDirect.deliverySla
                },
                "availability": "https://schema.org/InStock",
                "category": "AEO Foundation",
                "description": `${foundationDirect.purpose} Includes: ${foundationDirect.deliverables.join('; ')}.`,
                "eligibleCustomerType": "Australian SMBs, Allied Health Clinics, and Home Service Trades",
                "itemOffered": {
                  "@id": "https://aeobility.com.au/solutions/aeo-sprint#foundation-direct-service"
                },
                "seller": {
                  "@id": "https://aeobility.com.au/#organization"
                }
              },
              {
                "@type": "Offer",
                "@id": "https://aeobility.com.au/solutions/aeo-sprint#offer-foundation",
                "name": foundationTurnkey.name,
                "sku": foundationTurnkey.code,
                "url": "https://aeobility.com.au/solutions/aeo-sprint?service=foundation",
                "price": foundationTurnkey.priceExGst,
                "priceCurrency": "AUD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": foundationTurnkey.priceExGst,
                  "priceCurrency": "AUD",
                  "valueAddedTaxIncluded": false,
                  "unitText": foundationTurnkey.deliverySla
                },
                "availability": "https://schema.org/InStock",
                "category": "AEO Foundation",
                "description": `${foundationTurnkey.purpose} ${GOVERNANCE_RULES.creditAmountExGst} AUD Blueprint fee is 100% credited toward AEO Foundation within ${GOVERNANCE_RULES.creditWindowDays} days. Includes: ${foundationTurnkey.deliverables.join('; ')}.`,
                "eligibleCustomerType": "Australian SMBs, Allied Health Clinics, and Home Service Trades",
                "itemOffered": {
                  "@id": "https://aeobility.com.au/solutions/aeo-sprint#foundation-implementation"
                },
                "seller": {
                  "@id": "https://aeobility.com.au/#organization"
                }
              }
            ]
          }
        ]
      },
      // Individual Macro Services
      ...macroSprints.map((macro) => ({
        "@type": "Service",
        "@id": `https://aeobility.com.au/solutions/aeo-sprint#service-${macro.code.toLowerCase()}`,
        "name": macro.name,
        "alternateName": macro.code,
        "description": macro.purpose,
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Australian SMBs, Allied Health Clinics, and Home Service Trades"
        }
      })),
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/solutions/aeo-sprint#foundation-direct-service",
        "name": foundationDirect.name,
        "description": foundationDirect.purpose,
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Australian SMBs, Allied Health Clinics, and Home Service Trades"
        }
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/solutions/aeo-sprint#foundation-implementation",
        "name": foundationTurnkey.name,
        "description": foundationTurnkey.purpose,
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Australian SMBs, Allied Health Clinics, and Home Service Trades"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/solutions/aeo-sprint#faq",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };
};
