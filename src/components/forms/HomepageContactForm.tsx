'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, PhoneCall, Mail } from 'lucide-react';
import { trackGaEvent } from '@/lib/gtag';

export function HomepageContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    url: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    const isAssistantAssisted = typeof window !== 'undefined' && sessionStorage.getItem('aeo_assistant_assisted') === 'true';
    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: 'homepage_contact_form',
      lead_type: 'general_contact',
      assistant_assisted: isAssistantAssisted,
      value: 1,
    });
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-zinc-950 py-20 md:py-24 border-t border-white/10 relative overflow-hidden">
      {/* Glow background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-radial from-aeo-cyan/15 via-aeo-purple/10 to-transparent glow-blur pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-400 font-medium font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Direct Implementation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-soehne-breit">
            Ready to Clarify Your Search Visibility?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto font-serif">
            Speak directly with an AEO specialist or request a custom sprint scope.
          </p>
        </div>

        {submitted ? (
          <div className="bg-black/60 p-8 md:p-12 rounded-2xl border border-cyan-500/30 text-center space-y-4 backdrop-blur-xl max-w-2xl mx-auto shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center mx-auto border border-cyan-400/40">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-soehne-breit">Enquiry Received</h3>
            <p className="text-sm text-zinc-300 font-serif max-w-md mx-auto">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our Australian strategy team will review your details and respond within 1 business day.
            </p>
            <div className="pt-2 text-xs text-zinc-400 flex items-center justify-center gap-4">
              <a href="tel:0480286282" className="hover:text-cyan-300 flex items-center gap-1">
                <PhoneCall className="w-3.5 h-3.5" /> 0480 286 282
              </a>
              <span>•</span>
              <a href="mailto:vince@aeobility.com.au" className="hover:text-cyan-300 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> vince@aeobility.com.au
              </a>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            data-agent-form="contact-sprint-scope"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black/60 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl"
          >
            <div>
              <label htmlFor="contact-name-input" className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1 font-mono">
                Your Name *
              </label>
              <input
                id="contact-name-input"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-email-input" className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1 font-mono">
                Business Email *
              </label>
              <input
                id="contact-email-input"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@company.com.au"
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-phone-input" className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1 font-mono">
                Phone Number
              </label>
              <input
                id="contact-phone-input"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0400 000 000"
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-url-input" className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1 font-mono">
                Australian Business URL
              </label>
              <input
                id="contact-url-input"
                name="url"
                type="url"
                autoComplete="url"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                placeholder="https://yourbrand.com.au"
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="contact-message-input" className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1 font-mono">
                Primary Search Intent or Goals
              </label>
              <textarea
                id="contact-message-input"
                name="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your primary search intent or goals..."
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
              />
            </div>

            <div className="md:col-span-2 text-center mt-2">
              <button
                type="submit"
                data-agent-action="submit-sprint-scope"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-cyan-400 text-zinc-950 font-bold text-sm hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
              >
                <span>Request Sprint Scope</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default HomepageContactForm;
