'use client';

import React, { useState } from 'react';

export function FooterNewsletterForm() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/forms/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Newsletter Subscriber',
          email: email.trim(),
          service: 'AEObility Intelligence Newsletter',
          message: 'Footer newsletter subscription request.',
          source: 'Footer Newsletter Form',
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Unable to subscribe right now.');
      }
      setSubscribed(true);
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to subscribe right now.');
    } finally {
      setLoading(false);
    }
  };

  if (subscribed) {
    return (
      <div className="p-3 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center text-xs text-cyan-300">
        Thank you for subscribing to AEObility Intelligence.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubscribe} className="space-y-2">
      <div className="flex gap-2">
        <label htmlFor="footer-newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          autoComplete="email"
          className="w-full px-3.5 py-2 text-xs bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-cyan-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 text-xs font-semibold bg-cyan-400 hover:bg-cyan-300 text-zinc-950 rounded-xl transition-colors cursor-pointer disabled:opacity-50"
        >
          {loading ? '...' : 'Join'}
        </button>
      </div>
      {error && (
        <p role="alert" className="text-[11px] text-red-300 font-sans">
          {error}
        </p>
      )}
      <p className="text-[10px] text-white/30 font-mono">
        Monthly Australian AEO &amp; AI Search insights. No spam.
      </p>
    </form>
  );
}

export default FooterNewsletterForm;

