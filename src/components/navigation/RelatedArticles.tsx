import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen } from 'lucide-react';

export interface ArticleItem {
  slug: string;
  href: string;
  title: string;
  category: string;
  description: string;
  image: string;
  readTime: string;
}

export const ALL_ARTICLES: ArticleItem[] = [
  {
    slug: 'structured-data-query-fan-out',
    href: '/knowledge-hub/articles/structured-data-query-fan-out',
    title: 'Structured Data & Query Fan-Out in AI Search',
    category: 'AEO / Structured Data',
    description: 'Learn how structured data provides explicit machine-readable entity context during query fan-out in AI SEO and AEO search systems.',
    image: '/images/knowledge-hub/structured-data-query-fan-out_AEObility.webp',
    readTime: '6 min read',
  },
  {
    slug: 'entity-authority-building',
    href: '/knowledge-hub/articles/entity-authority-building',
    title: 'Entity Authority: Why AI Search Ranks Entities, Not Pages',
    category: 'Entity Authority & AEO',
    description: 'Discover how entity authority building strengthens semantic search visibility and helps AI search engines recognise your business.',
    image: '/images/knowledge-hub/entity-visibilty-semantic-SEO_AEObility.webp',
    readTime: '5 min read',
  },
  {
    slug: 'retrieval-augmented-generation',
    href: '/knowledge-hub/articles/retrieval-augmented-generation',
    title: 'RAG, Answer Engines & Why Machine-Readable Content Matters',
    category: 'Vector Retrieval & RAG',
    description: 'Explore how Retrieval-Augmented Generation (RAG) works, why machine legibility matters for AEO, and how passage chunking impacts discovery.',
    image: '/images/knowledge-hub/ai-search-optimisation-why-RAG-matters-AEObilty.webp',
    readTime: '6 min read',
  },
  {
    slug: 'optimising-for-different-ai-search-engines',
    href: '/knowledge-hub/articles/optimising-for-different-ai-search-engines',
    title: 'How Perplexity, ChatGPT, Google, and Copilot Find and Cite Content',
    category: 'Multi-Engine AEO & Retrieval',
    description: 'A practical guide to the crawlers, indexes, and content signals shaping AI search visibility across major answer platforms.',
    image: '/images/knowledge-hub/optimising-for-different-ai-web-search-engines_AEObility.webp',
    readTime: '8 min read',
  },
  {
    slug: 'positional-bias-in-retrieval',
    href: '/knowledge-hub/articles/positional-bias-in-retrieval',
    title: 'What Is Positional Bias in Retrieval and Answer Engines?',
    category: 'Dense Retrieval & LLM Bias',
    description: 'Learn how positional bias and attention dilution affect search visibility, and how AEO structures content for machine clarity.',
    image: '/images/knowledge-hub/positional-bias-retrieval-AEObility.webp',
    readTime: '5 min read',
  },
  {
    slug: 'how-to-fix-ai-brand-hallucinations-and-evidence-gaps',
    href: '/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps',
    title: 'Why This Architecture Is Correct for AI Search: Entities, Evidence & Propositions',
    category: 'Grounding & Provenance',
    description: 'Eliminate AI factual drift, missing citations, and incorrect pricing by deploying semantic propositions and structured verification loops.',
    image: '/images/knowledge-hub/fix-ai-hallucinations-and-evidence-gaps_AEObility.webp',
    readTime: '9 min read',
  },
  {
    slug: 'google-ai-search',
    href: '/knowledge-hub/articles/google-ai-search',
    title: 'Google AI Search: Grounded Synthesis Guide',
    category: 'AEO Strategy & Retrieval Architecture',
    description: 'Understand how Google AI Search operates: query fan-out, RAG grounding, and multi-turn AI Mode. Practical guide for maintaining search visibility.',
    image: '/images/knowledge-hub/google-ai-search-grounded-synthesis-query-fanout-visualisation.webp',
    readTime: '7 min read',
  },
  {
    slug: 'seo-vs-geo-red-flags',
    href: '/knowledge-hub/articles/seo-vs-geo-red-flags',
    title: '5 Critical Signals Your Business Needs GEO (Not Just Traditional SEO)',
    category: 'Generative Engine Optimisation / Diagnostic Guide',
    description: 'Technical analysis of five operational indicators showing when a business requires Generative Engine Optimisation (GEO) instead of legacy keyword SEO.',
    image: '/images/knowledge-hub/geo-vs-seo-red-flags-banner_AEObility.webp',
    readTime: '8 min read',
  },
  {
    slug: 'telemetry-diagnostic-architecture',
    href: '/knowledge-hub/articles/telemetry-diagnostic-architecture',
    title: 'Telemetry Diagnostic Tool: Architecture & Operational Walkthrough',
    category: 'Technical Architecture / Spec',
    description: 'Deep-dive technical specification detailing vector mapping infrastructure, text-embedding-004 RAG dilution mitigation, scoring math, and AI Bill ingestion.',
    image: '/images/knowledge-hub/telemetry-diagnostic-guide_AEObility.webp',
    readTime: '8 min read',
  },
];

interface RelatedArticlesProps {
  currentSlug?: string;
  title?: string;
  limit?: number;
}

export default function RelatedArticles({
  currentSlug,
  title = "Related Technical Reading & Entity Guides",
  limit = 3,
}: RelatedArticlesProps) {
  // Filter out the current article and slice to limit
  const related = ALL_ARTICLES.filter((item) => item.slug !== currentSlug).slice(0, limit);

  return (
    <section className="mt-12 pt-10 border-t border-white/10 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono text-aeo-cyan font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-aeo-cyan" />
          <span>{title}</span>
        </div>
        <Link
          href="/knowledge-hub/articles"
          className="text-xs font-semibold text-aeo-cyan hover:text-white transition-colors flex items-center gap-1"
        >
          View All Articles &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((article) => (
          <div
            key={article.slug}
            className="group bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-aeo-cyan/30 transition-all flex flex-col justify-between"
          >
            <div className="relative aspect-video w-full bg-neutral-950 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow space-y-3">
              <div className="space-y-2">
                <span className="text-[10px] text-aeo-cyan uppercase font-mono font-bold tracking-wider block">
                  {article.category}
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors leading-snug">
                  {article.title}
                </h4>
                <p className="text-xs text-white/60 font-serif leading-relaxed line-clamp-3">
                  {article.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                <span className="text-white/40 font-mono">{article.readTime}</span>
                <Link
                  href={article.href}
                  className="inline-flex items-center gap-1 font-semibold text-aeo-cyan group-hover:text-white transition-colors"
                >
                  Read Guide <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
