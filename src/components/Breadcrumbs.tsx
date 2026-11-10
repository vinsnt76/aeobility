"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === '/' || pathname === '') return null;

  // Split paths and build breadcrumb trail
  const pathParts = pathname.split('/').filter(Boolean);
  
  // Format labels to match the literal lowercase path segments or specific overrides
  const formatLabel = (part: string) => {
    const overrideMap: Record<string, string> = {
      'knowledge-hub': 'Knowledge Hub',
      'guides': 'Technical Guides',
      'articles': 'Articles',
      'case-studies': 'Case Studies',
      'ai-search-marketing': 'AI Search Marketing Hub',
      'perth': 'AI Search Optimisation Perth',
      'melbourne': 'AI Search Optimisation Melbourne',
      'sydney': 'AI Search Optimisation Sydney',
      'adelaide': 'AI Search Optimisation Adelaide',
      'brisbane': 'AI Search Optimisation Brisbane',
      'machine-legibility-data-provenance': 'Machine Legibility & Data Provenance',
      'how-to-audit-and-build-entity-density-for-aeo': 'How to Audit & Build Entity Density for AEO',
      'seo-vs-geo-red-flags': 'SEO vs GEO Red Flags',
      'book': 'Book a Clarity Call',
      'diagnostic': 'Visibility Scan'
    };
    return overrideMap[part] || part.toLowerCase();
  };

  const breadcrumbs = pathParts.map((part, index) => {
    const href = '/' + pathParts.slice(0, index + 1).join('/');
    const isLast = index === pathParts.length - 1;
    return {
      label: formatLabel(part),
      href,
      isLast
    };
  });

  // Generate BreadcrumbList JSON-LD Schema
  const schemaListItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://aeobility.com.au"
    },
    ...breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 2,
      "name": crumb.label,
      "item": `https://aeobility.com.au${crumb.href}`
    }))
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": schemaListItems
  };

  const schemaId = `breadcrumb-schema-${pathParts.join('-')}`;

  return (
    <div className="max-w-6xl mx-auto w-full px-6 pt-4 pb-2 relative z-20">
      {/* JSON-LD Schema */}
      <script
        id={schemaId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] font-mono text-white/40">
        <Link href="/" className="hover:text-cyan-300 hover:underline transition-colors flex items-center gap-1 cursor-pointer">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        
        {breadcrumbs.map((crumb) => (
          <React.Fragment key={crumb.href}>
            <ChevronRight className="w-3 h-3 text-white/20" />
            <Link
              href={crumb.href}
              aria-current={crumb.isLast ? 'page' : undefined}
              className={`transition-colors cursor-pointer hover:underline ${
                crumb.isLast
                  ? 'text-cyan-300 font-medium hover:text-cyan-200 hover:opacity-90'
                  : 'hover:text-cyan-300 text-white/50'
              }`}
            >
              {crumb.label}
            </Link>
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}
