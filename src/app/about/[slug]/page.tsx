import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Welcome from '@/components/about/Welcome';
import About from '@/components/about/About';
import CapabilityMatrix from '@/components/CapabilityMatrix';
import { ArrowLeft } from 'lucide-react';
import { roleConfigs } from '../config';
import { notFound } from 'next/navigation';

import QuoteFormSection from '@/components/QuoteFormSection';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(roleConfigs).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = roleConfigs[slug];
  if (!config) return {};
  
  const pageUrl = `https://aeobility.com.au/about/${slug}`;
  const imageUrl = "https://aeobility.com.au/images/about/Profile-Picture-Vinnie.png";

  return {
    title: config.metadata.title,
    description: config.metadata.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: config.metadata.title,
      description: config.metadata.description,
      url: pageUrl,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 1200,
          alt: "Vinnie Baker - Founder & Principal Consultant at AEObility",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.metadata.title,
      description: config.metadata.description,
      images: [imageUrl],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const config = roleConfigs[slug];
  if (!config) {
    notFound();
  }

  const pageUrl = `https://aeobility.com.au/about/${config.slug}`;
  const imageUrl = "https://aeobility.com.au/images/about/Profile-Picture-Vinnie.png";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": config.metadata.title,
        "description": config.metadata.description,
        "inLanguage": "en-AU",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "primaryImageOfPage": {
          "@id": `${pageUrl}#primaryimage`
        },
        "mainEntity": {
          "@id": `${pageUrl}#service`
        }
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#primaryimage`,
        "url": imageUrl,
        "contentUrl": imageUrl,
        "caption": "Vinnie Baker - Founder & Principal Consultant at AEObility",
        "representativeOfPage": true,
        "width": 1200,
        "height": 1200,
        "copyrightHolder": {
          "@id": "https://aeobility.com.au/#organization"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${pageUrl}#service`,
        "name": config.metadata.title.split('|')[0].trim(),
        "image": {
          "@id": `${pageUrl}#primaryimage`
        },
        "description": config.metadata.description,
        "url": pageUrl,
        "telephone": "0480286282", 
        "priceRange": "$995 AUD fixed-scope Blueprint",
        "offers": {
          "@type": "Offer",
          "name": "The AEO Blueprint (Fixed-Scope Technical Audit & 90-Day Roadmap)",
          "price": "995",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://aeobility.com.au/solutions/aeo-blueprint"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "postalCode": "6060",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-31.9167",
          "longitude": "115.8500"
        },
        "areaServed": [
          {
            "@type": "City",
            "@id": "https://www.wikidata.org/wiki/Q3183",
            "name": "Perth, Western Australia"
          },
          {
            "@type": "AdministrativeArea",
            "@id": "https://www.wikidata.org/wiki/Q3206",
            "name": "Western Australia"
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
        "knowsAbout": [
          "Generative Engine Optimisation",
          "Answer Engine Optimisation",
          "Local Business Entity Graphs",
          "Schema.org Structured Data",
          "Retrieval-Augmented Generation (RAG)"
        ],
        "sameAs": [
          "https://www.google.com/maps?cid=aeobility",
          "https://www.linkedin.com/company/aeobility",
          "https://github.com/vinsnt76/aeobility",
          "https://www.wikidata.org/wiki/Q3180711",
          "https://vinniebakeraeoinsights.substack.com/",
          "https://aeobility.com.au/brand-facts"
        ],
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "founder": {
          "@id": "https://aeobility.com.au/#vincebaker"
        }
      },
      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/#vincebaker",
        "name": "Vincent Anthony Baker",
        "alternateName": ["Vince Baker", "Vinnie Baker"],
        "jobTitle": "Founder & AEO Specialist",
        "image": imageUrl,
        "url": "https://aeobility.com.au/vince-baker",
        "sameAs": [
          "https://vinniebakeraeoinsights.substack.com/",
          "https://www.linkedin.com/in/vince-baker/",
          "https://app.qwoted.com/sources/vince-baker",
          "https://github.com/vinsnt76"
        ],
        "worksFor": {
          "@id": "https://aeobility.com.au/#organization"
        }
      },
      ...(config.faqs && config.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${pageUrl}#faq`,
              "isPartOf": { "@id": `${pageUrl}#webpage` },
              "mainEntity": config.faqs.map((item) => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            }
          ]
        : [])
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <Breadcrumbs />
      
      <main className="flex-grow w-full">
        {/* Customised Role Hero Section */}
        <Welcome config={config} />
        
        {/* AEObility Narrative, Frameworks, Team Specialties & Contact Card */}
        <About />
        
        {/* Role-Specific FAQ Section */}
        {config.faqs && config.faqs.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {config.faqs.map((item, idx) => (
                <details
                  key={idx}
                  className="group bg-white/[0.02] border border-white/10 rounded-xl p-6 cursor-pointer open:bg-white/[0.04] transition-colors"
                >
                  <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center gap-4">
                    <span>{item.question}</span>
                    <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300 shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-white/75 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm">
              <Link
                href="/services"
                className="text-aeo-cyan hover:underline font-semibold"
              >
                Explore Perth &amp; Australia AEO Services &rarr;
              </Link>
              <Link
                href="/solutions/aeo-blueprint"
                className="text-white/80 hover:text-aeo-cyan hover:underline font-medium"
              >
                View the Fixed-Scope $995 AEO Blueprint &rarr;
              </Link>
            </div>
          </section>
        )}

        {/* Interactive Contact & Quote Request Form */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <QuoteFormSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
