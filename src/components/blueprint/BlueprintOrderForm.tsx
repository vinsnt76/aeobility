'use client';

import React, { useState } from 'react';
import { trackGaEvent } from '@/lib/gtag';
import { ShieldCheck } from 'lucide-react';

export default function BlueprintOrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      package: formData.get('package_code'),
      businessUrl: formData.get('business_url'),
      contactName: formData.get('contact_name'),
      contactEmail: formData.get('contact_email'),
    };

    try {
      trackGaEvent('generate_lead', {
        event_category: 'lead_generation',
        form_id: 'order-blueprint-form',
        lead_type: 'blueprint_order',
        package_code: 'BPSTRAT-995',
        value: 995,
      });

      const res = await fetch('/api/request-scope', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data.error || 'Submission failed. Please try again or email support@aeobility.com.au directly.');
      }
    } catch (err) {
      console.error('Submission failed', err);
      // Ensure user is not blocked on transient client failure
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="order-blueprint"
      aria-labelledby="order-heading"
      className="my-24 max-w-2xl mx-auto px-6 scroll-mt-24"
    >
      <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-8 md:p-10 backdrop-blur-xl shadow-2xl relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
          Order Your Blueprint
        </p>
        <h2 
          id="order-heading"
          className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 font-soehne-breit"
        >
          Fixed $995 investment with a 5-day SLA
        </h2>
        <p className="text-slate-400 text-sm mb-6 font-serif">
          Provide your core digital footprint. We confirm scope within 4 business hours and deliver your verified 90-day roadmap in 5 business days.
        </p>

        {/* Pre-selected Package Badge */}
        <div className="mb-8 p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-between text-xs font-mono">
          <span className="text-cyan-300 font-medium">Selected: Strategic Blueprint (BPSTRAT)</span>
          <span className="text-slate-300">$995 AUD ex. GST</span>
        </div>

        {submitted ? (
          <div 
            className="p-6 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-200 text-sm leading-relaxed space-y-2 animate-fade-in"
            data-testid="order-success-message"
          >
            <p className="font-semibold text-white text-base">Blueprint Order Received</p>
            <p className="text-emerald-300 text-xs font-serif">
              We have registered your details. Vince Baker will review your domain architecture and send formal confirmation with your audit timeline within 4 business hours.
            </p>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="space-y-5"
            data-agent-form="order-blueprint-form"
          >
            {/* Locked Package Parameter */}
            <input type="hidden" name="package_code" value="BPSTRAT-995" />

            {/* Field 1: Business URL */}
            <div>
              <label 
                htmlFor="business-url" 
                className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
              >
                Australian Business URL
              </label>
              <input 
                id="business-url"
                name="business_url"
                type="text"
                required
                placeholder="https://yourbrand.com.au"
                autoComplete="url"
                data-testid="input-order-url"
                className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition"
              />
            </div>

            {/* Field 2: Contact Name */}
            <div>
              <label 
                htmlFor="contact-name" 
                className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
              >
                Your Name
              </label>
              <input 
                id="contact-name"
                name="contact_name"
                type="text"
                required
                placeholder="Vince Baker"
                autoComplete="name"
                data-testid="input-order-name"
                className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition"
              />
            </div>

            {/* Field 3: Business Email */}
            <div>
              <label 
                htmlFor="contact-email" 
                className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
              >
                Business Email Address
              </label>
              <input 
                id="contact-email"
                name="contact_email"
                type="email"
                required
                placeholder="vince@yourbrand.com.au"
                autoComplete="email"
                data-testid="input-order-email"
                className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition"
              />
            </div>

            {errorMessage && (
              <p className="text-xs text-rose-400 font-mono">{errorMessage}</p>
            )}

            {/* Submit Trigger */}
            <div className="pt-2">
              <button 
                type="submit"
                disabled={isSubmitting}
                data-testid="btn-submit-order"
                data-agent-action="submit-blueprint-order"
                className="w-full py-4 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-sm transition-colors shadow-lg shadow-cyan-400/20 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? 'Registering Order...' : 'Confirm $995 Audit Order →'}
              </button>
            </div>

            {/* Reassurance Guarantee (De-Risking Direct Order) */}
            <div className="pt-3 space-y-2 text-center text-xs text-slate-400 font-serif border-t border-white/5">
              <p className="flex items-center justify-center gap-1.5 text-slate-300 font-mono text-[11px] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Zero retainers. 5-day delivery SLA.</span>
              </p>
              <ul className="text-[11px] text-slate-400 space-y-1 font-serif list-none text-left max-w-md mx-auto">
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 font-bold shrink-0">•</span>
                  <span>No immediate charge: We confirm entity scope within 4 business hours before invoicing.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 font-bold shrink-0">•</span>
                  <span>100% credit applied automatically to any follow-on sprint.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 font-bold shrink-0">•</span>
                  <span>You retain full IP and code ownership of all deliverable files.</span>
                </li>
              </ul>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

