import React from 'react';
import Link from 'next/link';

export function HomepageFaqSection() {
  const faqs = [
    {
      question: "What is Answer Engine Optimisation (AEO) and how does it differ from traditional SEO?",
      answer: "Traditional Search Engine Optimisation focuses on ranking ten blue links on search engine results pages through keyword frequency and backlink volume. Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) engineer your digital assets so conversational AI systems like ChatGPT Search, Perplexity, Google AI Overviews, and Gemini understand your core business facts and cite you as an authoritative direct source. Instead of counting clicks, AEO optimises for passage retrieval, entity clarity, and machine-readable data provenance."
    },
    {
      question: "Why do monthly SEO agency retainers fail with modern AI search engines?",
      answer: "Monthly retainers were designed for manual keyword tracking and open-ended link building cycles across desktop search engines. Modern generative answer engines do not browse pages like humans or count monthly agency hours. They evaluate verifiable entity facts, structured JSON-LD schemas, and licensing credentials in real time. AEObility replaces speculative monthly retainers with transparent, fixed-scope sprints from $495 AUD ex. GST and a $995 Strategic Blueprint where 100% of your audit fee is credited toward follow-on implementation."
    },
    {
      question: "How does AEObility structure business entities and knowledge graphs for AI citation?",
      answer: "We build connected Tri-Graphs linking what exists (Entity Graph), how concepts relate (Semantic Intent Graph), and where claims are proven (Evidence Graph). Every commercial offering is mapped using Schema.org types (Organization, LocalBusiness, ProfessionalService, Product, Offer) anchored to authoritative government registries including the Australian Business Register (ABN) and official regulatory directories. This eliminates AI hallucination and ensures search engines cite your brand with high confidence."
    },
    {
      question: "What is the difference between AEO and GEO (Generative Engine Optimisation)?",
      answer: "AEO focuses on engineering structured answers, schema markup, and deterministic facts so search engines can extract direct answers for specific user queries. GEO (Generative Engine Optimisation) expands on this by optimising multi-modal brand authority, semantic citations, and knowledge graph relationships across large language models during multi-step synthesis and comparison queries. Both work together to ensure your brand is chosen when buyers ask AI engines for recommendations."
    },
    {
      question: "What deliverables are included in the $995 Strategic Blueprint and how does the fee credit work?",
      answer: "The Strategic Blueprint is a standalone 5-business-day diagnostic audit. It includes a complete digital footprint assessment, Schema.org code review, AI visibility scorecard across ChatGPT and Perplexity, and a prioritised 90-day action roadmap. If you proceed with eligible implementation sprints within 60 calendar days of receiving your blueprint, 100% of your $995 audit fee is credited directly toward your implementation sprint total."
    },
    {
      question: "How quickly can an Australian business expect to see results from AEO implementation?",
      answer: "Unlike legacy SEO campaigns that require six to twelve months of recurring retainer spend, technical AEO fixes produce measurable validation within days. Once validated JSON-LD schema graphs and atomic answer blocks are deployed to production, search engine bots re-index structured markup within 3 to 10 business days. Brand citation improvements in conversational engines like Perplexity and ChatGPT Search typically register within two to four weeks as model indexes refresh."
    }
  ];

  return (
    <section 
      id="faq" 
      aria-labelledby="faq-heading" 
      className="w-full bg-black py-20 md:py-24 border-t border-white/10 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-radial from-aeo-purple/10 via-aeo-cyan/5 to-transparent glow-blur pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-12">
        <header className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 
            id="faq-heading" 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-soehne-breit"
          >
            Answer Engine Optimisation &amp; AI Search FAQs
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-serif leading-relaxed">
            Everything you need to know about preparing your Australian business for ChatGPT, Perplexity, and Google AI Overviews. Read our full <Link href="/knowledge-hub/what-is-aeo" className="text-cyan-400 hover:underline font-medium">comprehensive AEO guide</Link>.
          </p>
        </header>

        {/* Semantic native details/summary accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none select-none">
                <span className="text-base sm:text-lg font-bold text-white font-soehne-breit group-open:text-cyan-300 transition-colors">
                  {faq.question}
                </span>
                <span 
                  className="w-6 h-6 rounded-full bg-white/5 border border-white/10 text-cyan-400 flex items-center justify-center font-mono text-sm shrink-0 group-open:rotate-45 transition-transform duration-200"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-white/5 text-sm sm:text-base text-zinc-300 font-serif leading-relaxed">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageFaqSection;
