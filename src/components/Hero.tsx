'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, Globe, Search } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { trackGaEvent } from '@/lib/gtag';

export function GraphVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Node definitions (Representing Search, AI, Social platforms and business nodes)
    const nodeCount = 18;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      label?: string;
    }> = [];

    const labels = ['AI Search', 'ChatGPT', 'Google Maps', 'Claude', 'Perplexity', 'LinkedIn', 'Social Leads', 'New Clients'];
    
    for (let i = 0; i < nodeCount; i++) {
      const isLabeled = i < labels.length;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: isLabeled ? 5 : Math.random() * 2 + 1,
        color: isLabeled 
          ? (i % 2 === 0 ? '#00f0ff' : '#bd00ff') 
          : '#ffffff',
        label: isLabeled ? labels[i] : undefined,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      ctx.lineWidth = 0.7;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.18;
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, nodes[i].color === '#ffffff' ? `rgba(255,255,255,${alpha})` : `${nodes[i].color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
            grad.addColorStop(1, nodes[j].color === '#ffffff' ? `rgba(255,255,255,${alpha})` : `${nodes[j].color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
            ctx.strokeStyle = grad;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = node.label ? 8 : 0;
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        // Draw labels for key nodes
        if (node.label) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.font = '10px system-ui';
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }

        // Update positions
        node.x += node.vx;
        node.y += node.vy;

        // Boundary checks
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Decorative blurred background glows inside the graph container */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-aeo-cyan glow-blur opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-aeo-purple glow-blur opacity-25 pointer-events-none"></div>
      
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-2xl"
      />
    </div>
  );
}

export default function Hero() {
  const router = useRouter();
  const [url, setUrl] = useState('');
  const [intent, setIntent] = useState('');

  const handleHeroScanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || !intent.trim()) return;

    trackGaEvent('hero_cta_clicked', { source: 'homepage_hero_direct_form' });
    trackGaEvent('form_start_submitted', { target_url: url.trim(), target_intent: intent.trim() });

    router.push(`/diagnostic?url=${encodeURIComponent(url.trim())}&intent=${encodeURIComponent(intent.trim())}&auto=true`);
  };

  return (
    <section className="hero relative w-full overflow-hidden bg-black pt-12 pb-16 md:pb-24">
      {/* Absolute Radial Gradient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-radial from-aeo-purple/20 via-aeo-cyan/5 to-transparent glow-blur pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* 50% Desktop Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column (50%): Value Prop & Conversion Plane */}
          <div className="relative z-10 space-y-6 text-left hero-card">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wide font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
              AI Visibility Telemetry
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-soehne-breit">
              Get Found.{' '}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                Get Chosen.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed font-serif">
              AEObility is a Perth digital consultancy dedicated to Answer Engine Optimisation (AEO) and machine search readability. Position your business across Google, Maps, and AI answer engines with zero guesswork.
            </p>

            {/* Embedded Telemetry Form Card with Sprint Glow */}
            <form onSubmit={handleHeroScanSubmit} className="hero-conversion-card p-6 rounded-2xl relative space-y-4">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="hero-url-input" className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-purple-400" />
                    <span>Australian Business URL</span>
                  </label>
                  <span className="text-[11px] text-slate-400 font-sans">e.g. yourbrand.com.au</span>
                </div>
                <input
                  id="hero-url-input"
                  type="text"
                  required
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  onFocus={() => trackGaEvent('form_field_focused', { field: 'url', source: 'hero_direct_embed' })}
                  placeholder="https://yourbrand.com.au"
                  className="w-full h-11 px-3.5 rounded-xl bg-black/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/25 text-sm transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                  spellCheck={false}
                  suppressHydrationWarning
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="hero-intent-input" className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5 text-purple-400" />
                    <span>Primary Search Intent</span>
                  </label>
                  <span className="text-[11px] text-slate-400 font-sans">e.g. Physiotherapist Near Me</span>
                </div>
                <input
                  id="hero-intent-input"
                  type="text"
                  required
                  value={intent}
                  onChange={e => setIntent(e.target.value)}
                  onFocus={() => trackGaEvent('form_field_focused', { field: 'intent', source: 'hero_direct_embed' })}
                  placeholder="e.g. Physiotherapist Near Me"
                  className="w-full h-11 px-3.5 rounded-xl bg-black/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/25 text-sm transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                  spellCheck={false}
                  suppressHydrationWarning
                />
              </div>

              {/* Primary Pill Button (AI Bill Continuity) */}
              <button
                type="submit"
                disabled={!url.trim() || !intent.trim()}
                className="hero-primary-cta w-full h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-white/20 text-white font-semibold text-sm tracking-wide shadow-lg shadow-purple-950/50 flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span>Run Free Visibility Scan</span>
                <ArrowRight className="w-4 h-4 text-purple-200" />
              </button>

              {/* Disclaimer & Reassurance Micro-Row */}
              <div className="pt-1 text-center space-y-1 font-mono">
                <p className="text-[11px] text-purple-300/80 font-medium">
                  * The scan executes a real-time vector analysis using Gemini.
                </p>
                <p className="text-xs text-slate-400">
                  Free visibility scan &bull; No email required to start &bull; 100% private &amp; secure
                </p>
              </div>
            </form>

            {/* Quick-Path Service Hub Links (Full Width Desktop / 2-Column Mobile Stack) */}
            <div className="pt-2 w-full">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                Explore Service Hubs
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
                <Link
                  href="/services/aeo"
                  onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'AEO & SEO', destination: '/services/aeo' })}
                  className="w-full py-2 px-2.5 rounded-full bg-transparent hover:bg-purple-500/10 border border-purple-500/30 hover:border-purple-400/60 text-xs font-medium text-purple-200 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] text-center flex items-center justify-center truncate"
                >
                  AEO &amp; SEO
                </Link>
                <Link
                  href="/services/ai-search-marketing"
                  onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'AI Search Marketing', destination: '/services/ai-search-marketing' })}
                  className="w-full py-2 px-2.5 rounded-full bg-transparent hover:bg-purple-500/10 border border-purple-500/30 hover:border-purple-400/60 text-xs font-medium text-purple-200 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] text-center flex items-center justify-center truncate"
                >
                  AI Search Marketing
                </Link>
                <Link
                  href="/services/aeo/local-business"
                  onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'Local Business GEO', destination: '/services/aeo/local-business' })}
                  className="w-full py-2 px-2.5 rounded-full bg-transparent hover:bg-purple-500/10 border border-purple-500/30 hover:border-purple-400/60 text-xs font-medium text-purple-200 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] text-center flex items-center justify-center truncate"
                >
                  Local Business GEO
                </Link>
                <Link
                  href="/services/geo-marketing"
                  onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'GEO Marketing', destination: '/services/geo-marketing' })}
                  className="w-full py-2 px-2.5 rounded-full bg-transparent hover:bg-purple-500/10 border border-purple-500/30 hover:border-purple-400/60 text-xs font-medium text-purple-200 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] text-center flex items-center justify-center truncate"
                >
                  GEO Marketing
                </Link>
                <Link
                  href="/services/aeo/shopify"
                  onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'Ecommerce AEO', destination: '/services/aeo/shopify' })}
                  className="w-full py-2 px-2.5 rounded-full bg-transparent hover:bg-purple-500/10 border border-purple-500/30 hover:border-purple-400/60 text-xs font-medium text-purple-200 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] text-center flex items-center justify-center truncate"
                >
                  Ecommerce AEO
                </Link>
                <Link
                  href="/services/aeo/procedures"
                  onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'AI Strategy', destination: '/services/aeo/procedures' })}
                  className="w-full py-2 px-2.5 rounded-full bg-transparent hover:bg-purple-500/10 border border-purple-500/30 hover:border-purple-400/60 text-xs font-medium text-purple-200 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] text-center flex items-center justify-center truncate"
                >
                  AI Strategy
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column (50%): Contained Node Animation */}
          <div className="relative w-full h-[480px] lg:h-[580px] rounded-2xl overflow-clip isolate bg-slate-950/40 border border-slate-800/60 flex items-center justify-center hero-visual-canvas-container">
            {/* Ambient Canvas Glow Backplate */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12)_0%,transparent_70%)] pointer-events-none"></div>
            
            {/* Interactive Graph Mount */}
            <div
              id="hero-node-canvas"
              className="relative z-10 w-full h-full pointer-events-auto"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 15%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%)',
              }}
            >
              <GraphVisual />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
