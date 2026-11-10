import React from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answerHtml: React.ReactNode;
}

export interface FaqCluster {
  title: string;
  items: FaqItem[];
}

export const FAQ_CLUSTERS_DATA = [
  {
    title: "AEO Fundamentals & Principles",
    items: [
      {
        question: "Which core SEO principle serves as the foundation for AEO?",
        answer: (
          <p>
            High technical accessibility paired with structured entity architecture. Search bots and LLMs both require crawlable pages, clear hierarchical structure, and unambiguous Schema.org data to verify facts. Where traditional SEO uses this to index links, AEO uses it to synthesise and cite direct answers. Explore our foundational{' '}
            <Link href="/knowledge-hub/guides/aeo" className="text-aeo-cyan underline hover:text-white transition-colors">
              AEO Master Guide
            </Link>{' '}
            for complete system mechanics.
          </p>
        )
      },
      {
        question: "What is the primary difference between SEO and AEO?",
        answer: (
          <p>
            Traditional SEO focuses on ranking pages to generate website clicks. AEO (Answer Engine Optimisation) formats and proves information so conversational engines (Perplexity, ChatGPT Search, Gemini) extract and cite your brand as the definitive source. See how{' '}
            <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="text-aeo-cyan underline hover:text-white transition-colors">
              retrieval-augmented generation (RAG)
            </Link>{' '}
            transforms search retrieval.
          </p>
        )
      }
    ]
  },
  {
    title: "Entity Authority & Technical Architecture",
    items: [
      {
        question: "How do AEO platforms support entity authority building?",
        answer: (
          <p>
            By replacing isolated keyword targeting with connected entity data. This involves establishing verified canonical profiles (using <code className="text-xs font-mono text-aeo-cyan bg-white/5 px-1.5 py-0.5 rounded">sameAs</code> mapping to Wikidata and official registries), building focused topical clusters, and publishing consistent brand facts so AI search models identify your organisation as a verified source. For rapid remediation, organisations deploy{' '}
            <Link href="/solutions/aeo-sprint" className="text-aeo-cyan underline hover:text-white transition-colors">
              fixed-scope AEO Technical Sprints
            </Link>.
          </p>
        )
      },
      {
        question: "Why are semantic relationships critical for AI answer engines?",
        answer: (
          <p>
            Large Language Models navigate relationships between entities rather than raw keywords. Clearly linking products, people, and topics via structured data prevents hallucinations and ensures the model retrieves accurate specifications during multi-step comparative searches. Learn{' '}
            <Link href="/knowledge-hub/articles/structured-data-query-fan-out" className="text-aeo-cyan underline hover:text-white transition-colors">
              how query fan-out affects multi-engine indexing
            </Link>.
          </p>
        )
      }
    ]
  },
  {
    title: "Perplexity & Specialist Services",
    items: [
      {
        question: "Can you optimise specifically for Perplexity AI?",
        answer: (
          <p>
            Yes. Optimisation for Perplexity prioritises fast indexation, clear entity verification, and concise &quot;answer-first&quot; text formatting. Because Perplexity cites live web sources in real time, maintaining high factual density directly improves citation frequency. Front-loading key facts also counteracts{' '}
            <Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="text-aeo-cyan underline hover:text-white transition-colors">
              positional bias in RAG systems
            </Link>.
          </p>
        )
      },
      {
        question: "What is included in an AEO audit or diagnostic assessment?",
        answer: (
          <p>
            An assessment reviews brand entity clarity across public knowledge bases, schema markup integrity, direct answer extractability, citation frequency across AI engines, and technical accessibility for AI web crawlers. You can{' '}
            <Link href="/diagnostic" className="text-aeo-cyan underline hover:text-white transition-colors">
              run an instant 45-second AI visibility scan
            </Link>{' '}
            or{' '}
            <Link href="/solutions/aeo-blueprint" className="text-aeo-cyan underline hover:text-white transition-colors">
              inspect your entity with the $995 Strategic Blueprint
            </Link>.
          </p>
        )
      }
    ]
  },
  {
    title: "Australian & Local Enterprise Search",
    items: [
      {
        question: "Why does local AEO matter for Australian businesses?",
        answer: (
          <p>
            AI search platforms frequently answer location-based queries directly by recommending local service providers. Local AEO aligns regional schema, directory citations, and geographic entity maps so models accurately surface your business across Australian metropolitan and regional searches. See empirical results in our{' '}
            <Link href="/knowledge-hub/case-studies/aeo-geo-blueprint-90-days" className="text-aeo-cyan underline hover:text-white transition-colors">
              90-Day AEO/GEO Blueprint Case Study
            </Link>.
          </p>
        )
      },
      {
        question: "Is Answer Engine Optimisation suitable for small businesses?",
        answer: (
          <p>
            Yes. Small businesses often capture AI citations faster than legacy competitors by providing direct, unambiguous answers to specific user questions, paired with clear pricing and verified local business schema. Read how our e-commerce client drove measurable revenue in the{' '}
            <Link href="/knowledge-hub/case-studies/baby-bento" className="text-aeo-cyan underline hover:text-white transition-colors">
              Baby Bento Case Study
            </Link>.
          </p>
        )
      }
    ]
  }
];

export default function GuidesFaqSection() {
  return (
    <section 
      id="faq" 
      aria-label="Frequently Asked Questions" 
      className="space-y-8 pt-8 border-t border-white/10"
    >
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/30 text-xs text-aeo-cyan font-mono font-semibold">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Search Console Intelligence</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 font-serif font-light max-w-2xl leading-relaxed">
          Clear answers to core questions about Answer Engine Optimisation, entity authority, and technical AI search architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FAQ_CLUSTERS_DATA.map((cluster, idx) => (
          <div 
            key={idx} 
            className="rounded-2xl p-6 sm:p-7 bg-white/[0.02] border border-white/10 space-y-4"
          >
            <h3 className="text-xs font-mono uppercase tracking-wider text-aeo-cyan font-bold pb-2 border-b border-white/10">
              {cluster.title}
            </h3>

            <div className="space-y-3">
              {cluster.items.map((item, itemIdx) => (
                <details
                  key={itemIdx}
                  className="group rounded-xl bg-white/[0.02] border border-white/5 p-4 open:bg-white/[0.04] open:border-aeo-cyan/30 transition-all duration-200"
                >
                  <summary className="flex items-center justify-between gap-3 text-sm font-semibold text-white group-hover:text-aeo-cyan cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-aeo-cyan group-open:rotate-180 transition-transform duration-200 shrink-0" />
                  </summary>
                  <div className="mt-3 pt-3 border-t border-white/5 text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed font-light">
                    {item.answerHtml || item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
