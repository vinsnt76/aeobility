import React from 'react';

export default function FieldNoteCase() {
  return (
    <section
      aria-labelledby="case-heading"
      className="my-20 max-w-4xl mx-auto px-6 scroll-mt-24"
    >
      <div className="relative rounded-2xl bg-slate-900/40 border border-white/10 p-8 md:p-10 backdrop-blur-md overflow-hidden">
        {/* Subtle accent border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        <div className="flex items-center gap-3 mb-6">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Field Note: Western Australia Trade Case
          </p>
        </div>

        <h2
          id="case-heading"
          className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6 font-soehne-breit"
        >
          Why a Balcatta electrical contractor vanished from AI search
        </h2>

        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base font-normal font-sans">
          <p>
            An established commercial electrical contractor in Balcatta was spending $2,200 each month on traditional link-building retainers. Their organic rankings appeared stable across conventional desktop search, but natural language queries in Perplexity and ChatGPT, such as <em className="text-slate-100 font-medium">"Who handles compliant commercial switchboard upgrades in Osborne Park?"</em>, returned national directories or competitors instead.
          </p>
          <p>
            Our diagnostic audit revealed the breakdown: while their site mentioned general electrical work, their WA Electrical Contractor Licence (EC), registered ABN node, and precise local service area coordinates were completely absent from both machine-readable copy and structured schema. Answer engines could not verify whether the business held active regulatory certification or operated physically within Western Australia.
          </p>
          <p className="pt-2 text-slate-200">
            We resolved the entity isolation in a single 5-day implementation sprint. By grounding their licensing credentials, linking public register entries, and structuring nested <code className="text-cyan-300 font-mono text-xs sm:text-sm">PostalAddress</code> and <code className="text-cyan-300 font-mono text-xs sm:text-sm">areaServed</code> schemas, the contractor secured direct attribution in commercial trade answer syntheses across metropolitan Perth.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 shadow-lg">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block font-semibold mb-1">
                Verified Client Outcome
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight">
                Verified Entity Citation in 5 Days
              </span>
            </div>
            <div className="text-xs font-mono text-cyan-300 font-semibold px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 w-fit shrink-0">
              100% Fee Credited Back
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400 pt-1">
            <span>Target Sector: Commercial Trade &amp; Engineering</span>
            <span>Location: Balcatta &amp; Osborne Park, WA</span>
            <span>Prior Retainer: $2,200/mo Displaced</span>
          </div>
        </div>
      </div>
    </section>
  );
}

