import React from 'react';
import Link from 'next/link';
import FooterNewsletterForm from '@/components/forms/FooterNewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 text-white/50 py-16 font-sans">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
        
        {/* Brand & Social Column */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-aeo-cyan"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2L2 10L16 18L30 10L16 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 22L16 30L30 22"
                stroke="#bd00ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-base font-bold tracking-wider text-white">
              AEObility
            </span>
          </div>
          
          <p className="text-xs text-white/40 leading-relaxed font-light font-serif max-w-sm">
            Optimising Australian small businesses for the future of search. Discoverable, understandable, and recommended across maps, search, and generative AI search experiences.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-2">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/133445734/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-aeo-cyan transition-colors inline-flex items-center justify-center"
              aria-label="AEObility on LinkedIn"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5 fill-current" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                <title>LinkedIn</title>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/aeo.bility/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-aeo-cyan transition-colors inline-flex items-center justify-center"
              aria-label="AEObility on Instagram"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                <title>Instagram</title>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61591781069830"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-aeo-cyan transition-colors inline-flex items-center justify-center"
              aria-label="AEObility on Facebook"
            >
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5 fill-current" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                <title>Facebook</title>
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.9H7.5v-2.9H10V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.24 0-1.63.77-1.63 1.56v1.8h2.7l-.43 2.9H13v6.9c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UCcQMe3h157C2MDt70lohXpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-aeo-cyan transition-colors inline-flex items-center justify-center"
              aria-label="AEObility on YouTube"
            >
              <span className="sr-only">YouTube</span>
              <svg className="w-5 h-5 fill-current" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                <title>YouTube</title>
                <path d="M23.498 6.163c-.272-1.016-1.07-1.815-2.085-2.087-1.839-.496-9.213-.496-9.213-.496s-7.373 0-9.213.496c-1.016.272-1.813 1.07-2.086 2.087-.496 1.839-.496 5.673-.496 5.673s0 3.834.496 5.673c.273 1.016 1.07 1.815 2.086 2.086 1.84.497 9.213.497 9.213.497s7.374 0 9.213-.497c1.016-.271 1.813-1.07 2.086-2.086.496-1.839.496-5.673.496-5.673s0-3.834-.496-5.673zm-14.28 9.387v-7.103l6.23 3.557-6.23 3.546z"/>
              </svg>
            </a>

            {/* Google Maps */}
            <a
              href="https://maps.app.goo.gl/zWC3RxsLV9JMBoGRA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-aeo-cyan transition-colors inline-flex items-center justify-center"
              aria-label="AEObility on Google Maps"
            >
              <span className="sr-only">Google Maps</span>
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                <title>Google Maps</title>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Services &amp; Blueprint</h4>
          <ul className="space-y-2 text-xs font-medium">
            <li>
              <Link href="/services/aeo" className="hover:text-white transition-colors">
                AEO &amp; Search Engine Services
              </Link>
            </li>
            <li>
              <Link href="/services/ai-search-marketing" className="hover:text-white transition-colors">
                AI Search Strategy
              </Link>
            </li>
            <li>
              <Link href="/services/geo-marketing" className="hover:text-white transition-colors">
                GEO Marketing
              </Link>
            </li>
            <li>
              <Link href="/services/perth/seo-specialist" className="hover:text-white transition-colors">
                Perth SEO Specialist
              </Link>
            </li>
            <li>
              <Link href="/services/ai-search-agency" className="hover:text-white transition-colors">
                AI Search Agency
              </Link>
            </li>
            <li>
              <Link href="/about/freelance-seo-consultant-perth" className="hover:text-white transition-colors">
                Freelance SEO Consultant Perth
              </Link>
            </li>
            <li>
              <Link href="/solutions/aeo-blueprint" className="hover:text-white transition-colors">
                Strategic Blueprint
              </Link>
            </li>
            <li>
              <Link href="/solutions" className="hover:text-white transition-colors">
                AEO Packages &amp; Sprints
              </Link>
            </li>
          </ul>
        </div>

        {/* Helpful Info Column */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Helpful Info</h4>
          <ul className="space-y-2 text-xs font-medium">
            <li>
              <Link href="/knowledge-hub/articles" className="hover:text-white transition-colors">
                Articles &amp; Guides
              </Link>
            </li>
            <li>
              <Link href="/knowledge-hub/ai-seo-tools" className="hover:text-white transition-colors">
                AI SEO Tools &amp; Comparison
              </Link>
            </li>
            <li>
              <Link href="/knowledge-hub/what-is-aeo" className="hover:text-white transition-colors">
                What is AEO?
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Support &amp; Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Our Team
              </Link>
            </li>
            <li>
              <Link href="/brand-facts" data-testid="nav-brand-facts" className="hover:text-white transition-colors">
                Brand Facts
              </Link>
            </li>
            <li>
              <a href="/llms.txt" data-testid="nav-llmstxt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-mono text-[11px] text-aeo-cyan/70 hover:text-aeo-cyan">
                llms.txt
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup Column */}
        <aside aria-label="Newsletter Subscription" className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Stay Ahead</h4>
          <p className="text-xs text-white/40 leading-relaxed font-light font-serif">
            Subscribe to receive actionable AEO insights, entity mapping updates, and visibility recommendations.
          </p>
          <FooterNewsletterForm />
        </aside>

      </div>

      {/* Copyright row */}
      <div className="max-w-6xl mx-auto px-6 border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/30 font-light">
        <div className="space-y-1">
          <div>© {new Date().getFullYear()} AEObility. All rights reserved.</div>
          <div>
            AEObility is a registered Australian business name (ABN: 61 029 803 255), registered with the Australian Securities and Investments Commission (ASIC) on 21 July 2026. Principal place of business: Dianella, Western Australia 6059.
          </div>
        </div>
        <div>
          Built for Australian local entities.
        </div>
      </div>
    </footer>
  );
}
