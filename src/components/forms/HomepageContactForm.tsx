'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, PhoneCall, Mail } from 'lucide-react';
import { trackGaEvent } from '@/lib/gtag';

export function HomepageContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    url: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const isAssistantAssisted = typeof window !== 'undefined' && sessionStorage.getItem('aeo_assistant_assisted') === 'true';
      const res = await fetch('/api/forms/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          website: formData.url,
          service: 'Sprint Scope Request (Homepage)',
          message: formData.message || 'Requested custom sprint scope from homepage footer form.',
          source: isAssistantAssisted ? 'Homepage Footer Form (AI Bill Assisted)' : 'Homepage Footer Form (/)',
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Unable to submit your enquiry right now. Please email support@aeobility.com.au directly.');
      }

      trackGaEvent('generate_lead', {
        event_category: 'lead_generation',
        form_id: 'homepage_contact_form',
        lead_type: 'general_contact',
        assistant_assisted: isAssistantAssisted,
        value: 1,
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Unable to submit your enquiry right now. Please email support@aeobility.com.au directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section aria-labelledby="contact-heading" className="w-full bg-[#08090C] py-20 md:py-24 border-t border-[#1E293B] relative overflow-hidden">
      {/* Glow background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-radial from-aeo-cyan/15 via-aeo-purple/10 to-transparent glow-blur pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <header className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#111622] border border-[#1E293B] font-mono text-xs uppercase tracking-wider text-[#00E5FF] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#00E5FF] animate-pulse" />
            <span>Direct Implementation</span>
          </div>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Ready to Clarify Your Search Visibility?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-[56ch] mx-auto">
            Speak directly with an AEO specialist or request a custom sprint scope.
          </p>
        </header>

        {submitted ? (
          <aside aria-label="Enquiry confirmation" className="bg-[#111622] p-8 md:p-12 rounded-2xl border border-[#00E5FF]/30 text-center space-y-4 backdrop-blur-xl max-w-2xl mx-auto shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center mx-auto border border-[#00E5FF]/40">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">Enquiry Received</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md mx-auto">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our Australian strategy team will review your details and respond within 1 business day.
            </p>
            <div className="pt-2 text-xs text-slate-400 flex items-center justify-center gap-4">
              <a href="tel:0480286282" className="hover:text-[#00E5FF] flex items-center gap-1">
                <PhoneCall className="w-3.5 h-3.5" /> 0480 286 282
              </a>
              <span>•</span>
              <a href="mailto:vince@aeobility.com.au" className="hover:text-[#00E5FF] flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> vince@aeobility.com.au
              </a>
            </div>
          </aside>
        ) : (
          <form
            onSubmit={handleSubmit}
            data-agent-form="contact-sprint-scope"
            className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#111622] p-6 md:p-8 rounded-2xl border border-[#1E293B] shadow-2xl"
          >
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1.5">
                Name *
              </span>
              <input
                id="contact-name-input"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-lg bg-[#08090C] border border-[#1E293B] text-white placeholder-slate-500 text-sm focus:border-[#00E5FF] focus:outline-none transition-colors"
              />
            </label>

            <label className="block">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1.5">
                Work Email *
              </span>
              <input
                id="contact-email-input"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@company.com.au"
                className="w-full px-4 py-3 rounded-lg bg-[#08090C] border border-[#1E293B] text-white placeholder-slate-500 text-sm focus:border-[#00E5FF] focus:outline-none transition-colors"
              />
            </label>

            <label className="block">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1.5">
                Website URL
              </span>
              <input
                id="contact-url-input"
                name="url"
                type="url"
                autoComplete="url"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                placeholder="https://yourbrand.com.au"
                className="w-full px-4 py-3 rounded-lg bg-[#08090C] border border-[#1E293B] text-white placeholder-slate-500 text-sm focus:border-[#00E5FF] focus:outline-none transition-colors"
              />
            </label>

            <label className="block md:col-span-3">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1.5">
                Search Intent or Goal (Optional)
              </span>
              <textarea
                id="contact-message-input"
                name="message"
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="e.g. Improve AI visibility for commercial solar in Perth"
                className="w-full px-4 py-3 rounded-lg bg-[#08090C] border border-[#1E293B] text-white placeholder-slate-500 text-sm focus:border-[#00E5FF] focus:outline-none transition-colors"
              />
            </label>

            {submitError && (
              <div role="alert" className="md:col-span-3 p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-xs text-red-200 font-sans text-center">
                {submitError}
              </div>
            )}

            <footer className="md:col-span-3 text-center mt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                data-agent-action="submit-sprint-scope"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#00E5FF] text-[#08090C] font-bold text-sm hover:bg-[#33ECFF] transition-all shadow-[0_0_20px_rgba(0,229,255,0.25)] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Request Sprint Scope'}</span>
                <Send className="w-4 h-4" />
              </button>
            </footer>
          </form>
        )}
      </div>
    </section>
  );
}

export default HomepageContactForm;
