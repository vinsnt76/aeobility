import React from 'react';

export function HomepageFaqSection() {
  const faqs = [
    {
      question: "What is Answer Engine Optimisation (AEO) and how does it differ from traditional SEO?",
      answer: "Traditional SEO focuses on ranking web pages through keywords and backlinks. Answer Engine Optimisation (AEO) extends that foundation by structuring your services into clear answers and connected Schema.org data linked to your Australian Business Register (ABN). This reduces the risk of AI hallucination and helps ChatGPT Search, Perplexity, Gemini, and Google AI Overviews verify and recommend you."
    },
    {
      question: "Why do fixed-scope sprints beat monthly SEO agency retainers for AI search?",
      answer: "Monthly retainers were built for ongoing manual link building and open-ended agency hours. AI search systems evaluate verifiable business facts, connected Schema.org data, and clear service pages in real time. AEObility delivers targeted fixes through fixed-scope sprints from $495 AUD ex. GST and a $995 Strategic Blueprint with zero contract lock-in."
    },
    {
      question: "What deliverables are included in the $995 Strategic Blueprint and how does the fee credit work?",
      answer: "The Strategic Blueprint is a 5-business-day audit covering your website footprint, Schema.org code review, AI search visibility scorecard, and a prioritised 90-day fix plan. If you proceed with AEO Foundation implementation within 60 days, 100% of your $995 AUD fee is credited directly toward your implementation total."
    },
    {
      question: "How quickly can an Australian business expect to see results from AEO implementation?",
      answer: "Technical AEO improvements can be verified far faster than traditional 6-to-12-month SEO retainers. Once clean Schema.org markup and direct-answer service blocks are live, search crawlers typically re-index updates within 3 to 10 business days, with AI search citation improvements registering across ChatGPT Search and Perplexity within two to four weeks."
    },
    {
      question: "How can Perth and Australian businesses measure generative AI citations and search share?",
      answer: "Measuring AI visibility tracks how often AI search systems cite and recommend your business for local buyer queries, rather than counting desktop ranking positions alone. AEObility benchmarks your responses across ChatGPT Search, Perplexity, Gemini, and Google AI Overviews against local competitors to verify answer accuracy and service-page recommendations."
    }
  ];

  return (
    <section 
      id="faq" 
      aria-labelledby="faq-heading" 
      className="w-full bg-[#0D1117] py-20 md:py-24 border-t border-[#1E293B] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-radial from-aeo-purple/10 via-aeo-cyan/5 to-transparent glow-blur pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-12">
        <header className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-wider text-[#00E5FF] font-semibold">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 
            id="faq-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Answer Engine Optimisation &amp; AI Search FAQs
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-[56ch] mx-auto">
            Everything you need to know about preparing your Australian business for ChatGPT, Perplexity, and Google AI Overviews.
          </p>
        </header>

        {/* Semantic native details/summary accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group p-6 rounded-2xl bg-[#111622] border border-[#1E293B] hover:border-[#00E5FF]/40 transition-all duration-300"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none select-none">
                <span className="text-base sm:text-lg font-bold text-white group-open:text-[#00E5FF] transition-colors">
                  {faq.question}
                </span>
                <span 
                  className="w-6 h-6 rounded-full bg-[#08090C] border border-[#1E293B] text-[#00E5FF] flex items-center justify-center font-mono text-sm shrink-0 group-open:rotate-45 transition-transform duration-200"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#1E293B] text-sm sm:text-base text-slate-300 leading-relaxed">
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
