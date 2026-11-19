"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Briefcase, TrendingUp, ShoppingCart, Brain, Search, Target, LayoutGrid, DollarSign, Compass, Award, ShieldCheck, CheckCircle2, BarChart, GraduationCap, MousePointerClick, Users, Zap, BarChart3, Cpu, Layers, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const About: React.FC = () => {
  useEffect(() => {
    // Process Instagram embed script dynamically in Next.js / React
    if (typeof window !== 'undefined') {
      const win = window as unknown as { instgrm?: { Embeds: { process: () => void } } };
      if (win.instgrm) {
        win.instgrm.Embeds.process();
      } else {
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="about" className="py-12 sm:py-20 md:py-32 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 max-w-6xl bg-neutral-950 border border-white/10 text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl"
      >
        {/* Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center md:justify-start mb-10 sm:mb-16"
        >
          <Compass className="w-7 h-7 sm:w-8 sm:h-8 text-aeo-cyan mr-3 shrink-0" />
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-left">
            From Traveller to <span className="text-gradient-aeo font-extrabold">Digital Architect</span>
          </h3>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Refactored Story & Pivot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed space-y-4 text-left font-serif block"
          >
            {/* Floated Scaled Embed Wrapper - Hides on small mobile screens to prevent text squeezing */}
            <div className="hidden sm:block float-left mr-4 mb-2 -mt-2 overflow-hidden w-[180px] h-[310px] relative">
              <div className="transform scale-[0.48] origin-top-left w-[360px]">
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink="https://www.instagram.com/p/BDDrNUDAoTb/?utm_source=ig_embed&amp;utm_campaign=loading"
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '12px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '280px',
                    padding: 0,
                    width: '99.375%',
                  }}
                >
                <div style={{ padding: '16px' }}>
                  <a
                    href="https://www.instagram.com/p/BDDrNUDAoTb/?utm_source=ig_embed&amp;utm_campaign=loading"
                    style={{
                      background: '#FFFFFF',
                      lineHeight: 0,
                      padding: '0 0',
                      textAlign: 'center',
                      textDecoration: 'none',
                      width: '100%',
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '50%',
                          flexGrow: 0,
                          height: '40px',
                          marginRight: '14px',
                          width: '40px',
                        }}
                      ></div>
                      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                        <div
                          style={{
                            backgroundColor: '#F4F4F4',
                            borderRadius: '4px',
                            flexGrow: 0,
                            height: '14px',
                            marginBottom: '6px',
                            width: '100px',
                          }}
                        ></div>
                        <div
                          style={{
                            backgroundColor: '#F4F4F4',
                            borderRadius: '4px',
                            flexGrow: 0,
                            height: '14px',
                            width: '60px',
                          }}
                        ></div>
                      </div>
                    </div>
                    <div style={{ padding: '19% 0' }}></div>
                    <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                      <svg
                        width="50px"
                        height="50px"
                        viewBox="0 0 60 60"
                        version="1.1"
                        xmlns="https://www.w3.org/2000/svg"
                        xmlnsXlink="https://www.w3.org/1999/xlink"
                      >
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                            <g>
                              <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div style={{ paddingTop: '8px' }}>
                      <div
                        style={{
                          color: '#3897f0',
                          fontFamily: 'Arial,sans-serif',
                          fontSize: '14px',
                          fontStyle: 'normal',
                          fontWeight: 550,
                          lineHeight: '18px',
                        }}
                      >
                        View this post on Instagram
                      </div>
                    </div>
                    <div style={{ padding: '12.5% 0' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
                      <div>
                        <div
                          style={{
                            backgroundColor: '#F4F4F4',
                            borderRadius: '50%',
                            height: '12.5px',
                            width: '12.5px',
                            transform: 'translateX(0px) translateY(7px)',
                          }}
                        ></div>
                        <div
                          style={{
                            backgroundColor: '#F4F4F4',
                            height: '12.5px',
                            transform: 'rotate(-45deg) translateX(3px) translateY(1px)',
                            width: '12.5px',
                            flexGrow: 0,
                            marginRight: '14px',
                            marginLeft: '2px',
                          }}
                        ></div>
                        <div
                          style={{
                            backgroundColor: '#F4F4F4',
                            borderRadius: '50%',
                            height: '12.5px',
                            width: '12.5px',
                            transform: 'translateX(9px) translateY(-18px)',
                          }}
                        ></div>
                      </div>
                      <div style={{ marginLeft: '8px' }}>
                        <div
                          style={{
                            backgroundColor: '#F4F4F4',
                            borderRadius: '50%',
                            flexGrow: 0,
                            height: '20px',
                            width: '20px',
                          }}
                        ></div>
                        <div
                          style={{
                            width: 0,
                            height: 0,
                            borderTop: '2px solid transparent',
                            borderLeft: '6px solid #f4f4f4',
                            borderBottom: '2px solid transparent',
                            transform: 'translateX(16px) translateY(-4px) rotate(30deg)',
                          }}
                        ></div>
                      </div>
                      <div style={{ marginLeft: 'auto' }}>
                        <div
                          style={{
                            width: '0px',
                            borderTop: '8px solid #F4F4F4',
                            borderRight: '8px solid transparent',
                            transform: 'translateY(16px)',
                          }}
                        ></div>
                        <div
                          style={{
                            backgroundColor: '#F4F4F4',
                            flexGrow: 0,
                            height: '12px',
                            width: '16px',
                            transform: 'translateY(-4px)',
                          }}
                        ></div>
                        <div
                          style={{
                            width: 0,
                            height: 0,
                            borderTop: '8px solid #F4F4F4',
                            borderLeft: '8px solid transparent',
                            transform: 'translateY(-4px) translateX(8px)',
                          }}
                        ></div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', marginBottom: '24px' }}>
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          flexGrow: 0,
                          height: '14px',
                          marginBottom: '6px',
                          width: '224px',
                        }}
                      ></div>
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          flexGrow: 0,
                          height: '14px',
                          width: '144px',
                        }}
                      ></div>
                    </div>
                  </a>
                  <p
                    style={{
                      color: '#c9c8cd',
                      fontFamily: 'Arial,sans-serif',
                      fontSize: '14px',
                      lineHeight: '17px',
                      marginBottom: 0,
                      marginTop: '8px',
                      overflow: 'hidden',
                      padding: '8px 0 7px',
                      textAlign: 'center',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <a
                      href="https://www.instagram.com/p/BDDrNUDAoTb/?utm_source=ig_embed&amp;utm_campaign=loading"
                      style={{
                        color: '#c9c8cd',
                        fontFamily: 'Arial,sans-serif',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        lineHeight: '17px',
                        textDecoration: 'none',
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      A post shared by Vincent Baker (@vinniiecent)
                    </a>
                  </p>
                </div>
              </blockquote>
            </div>
          </div>

          <p>
            <span className="text-aeo-cyan font-bold text-xl mr-2">|</span>After travelling Australia and the world, I naturally fell into the travel industry, beginning my career and spending more than a decade with Qantas &amp; Viva Holidays!
          </p>
          <p>
            Those years initiated a spark for digital marketing assisting clients with marketing briefs and started the foundation for everything I do today.
          </p>
          <p>
            When COVID hit and the travel sector collapsed overnight, I pivoted into digital marketing, first through SEO, then PPC, then deeper into UX, CRO, analytics, and CRM integrations leading to AI Automation and Agentic Development. What started as a survival career pivot became a full stack technical reinvention.
          </p>
          <p>
            I pride myself on relationship-driven communication, commercial accountability, operational precision, and the ability to diagnose problems quickly across complex systems.
          </p>
        </motion.div>

          {/* Right Column: Digital Career Progression */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.4 }}
            className="relative space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-left font-soehne-breit">Digital Career Progression</h3>
            
            <div className="space-y-4 text-left">
              <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="text-base font-bold text-aeo-cyan mb-1">1. SEO (Technical + Content Architecture)</h4>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                  Began with SEO fundamentals (audits, keyword research, and content briefs) before gravitating toward the technical layer. SEMrush, Google Search Console, Bing Webmaster Tools, and structured data became my daily toolkit to diagnose exact code blocks, crawl bottlenecks, and semantic gaps holding sites back.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="text-base font-bold text-aeo-cyan mb-1">2. PPC (Google Ads Search + Shopping)</h4>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                  Built search and shopping campaigns, implemented conversion tracking, and optimised ROAS through structured measurement and forecasting.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="text-base font-bold text-aeo-cyan mb-1">3. UX & CRO (Behavioural Analysis + Funnel Optimisation)</h4>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                  Used Microsoft Clarity, GA4 exploration reports, and Looker Studio dashboards to turn user friction points into measurable conversion opportunities.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="text-base font-bold text-aeo-cyan mb-1">4. CRM Integrations (HubSpot, Agile CRM, Zoho, Airtable)</h4>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                  Implemented CRMs end-to-end including requirements gathering, data migration, automation flows, and onboarding, merging systems thinking with marketing.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="text-base font-bold text-aeo-cyan mb-1">5. Automation, AI & Agentic Development</h4>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                  Engineered n8n workflows, API orchestration, Google Cloud Functions, Voiceflow agents, prompt engineering (reverse, one-shot, graph prompting), structured output pipelines, and AEO content systems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications & Industry Badges (Animated on Scroll) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 border-t border-neutral-200 dark:border-neutral-800 pt-12"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-aeo-cyan font-bold">Credentials</span>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mt-1">
                Certifications & Industry Standards
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-aeo-cyan/10 border border-aeo-cyan/30 rounded-full text-xs font-mono text-aeo-cyan">
              <Award className="w-3.5 h-3.5" />
              <span>Certified Professional</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                title: "Google Ads Certified",
                category: "Search & Shopping",
                issuer: "Google",
                icon: Target,
                badgeColor: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400"
              },
              {
                title: "Google Analytics & GTM",
                category: "GA4 Measurement",
                issuer: "Google",
                icon: BarChart,
                badgeColor: "from-amber-500/20 to-amber-600/10 border-amber-500/30 text-amber-400"
              },
              {
                title: "HubSpot Certified",
                category: "Inbound & CRM",
                issuer: "HubSpot Academy",
                icon: CheckCircle2,
                badgeColor: "from-orange-500/20 to-orange-600/10 border-orange-500/30 text-orange-400"
              },
              {
                title: "LinkedIn SEO & Sales",
                category: "Digital Foundations",
                issuer: "LinkedIn Learning",
                icon: Award,
                badgeColor: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-400"
              },
              {
                title: "Cert IV & Diploma",
                category: "Public Relations & Sales",
                issuer: "Central TAFE / Angliss",
                icon: ShieldCheck,
                badgeColor: "from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400"
              }
            ].map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className={`p-4 rounded-xl bg-gradient-to-br ${cert.badgeColor} border backdrop-blur-md flex flex-col justify-between space-y-3 group transition-all`}
              >
                <div className="flex items-center justify-between">
                  <cert.icon className="w-6 h-6 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/40 text-white/70 border border-white/10">
                    Verified
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-white transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">{cert.category}</p>
                </div>
                <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 border-t border-white/5 pt-2 flex items-center justify-between">
                  <span>{cert.issuer}</span>
                  <span className="text-aeo-cyan opacity-0 group-hover:opacity-100 transition-opacity">✓</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience, Education & Skills Module */}
        <motion.div 
          id="experience"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 border-t border-neutral-200 dark:border-neutral-800 pt-12 scroll-mt-24"
        >
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="w-7 h-7 text-aeo-cyan" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
              Experience, Education &amp; Skills
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Column 1: Education + Training */}
            <div className="space-y-10">
              {/* Education */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-aeo-cyan" />
                  <h4 className="text-lg font-semibold text-aeo-cyan">Education</h4>
                </div>
                <ul className="space-y-4">
                  <li className="border-l-2 border-neutral-800 pl-4">
                    <p className="font-bold text-neutral-900 dark:text-neutral-100">Diploma in Public Relations</p>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">Central TAFE (2004)</p>
                  </li>
                  <li className="border-l-2 border-neutral-800 pl-4">
                    <p className="font-bold text-neutral-900 dark:text-neutral-100">Cert IV Business Sales</p>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">William Angliss (2018)</p>
                  </li>
                </ul>
              </div>

              {/* Career Background */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-aeo-cyan" />
                  <h4 className="text-lg font-semibold text-aeo-cyan">Career Background</h4>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-900/60 border border-neutral-800 rounded-xl space-y-2">
                    <div className="flex justify-between items-start flex-wrap gap-1">
                      <div>
                        <h5 className="font-bold text-white text-sm">SEO &amp; Google Ads Manager</h5>
                        <p className="text-xs text-aeo-cyan font-mono">Concise Digital</p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-neutral-400 border border-neutral-800">
                        Jan 2026 – Present
                      </span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-neutral-300 leading-relaxed">
                      <li>Technical SEO audits</li>
                      <li>Pre- and post-launch migration checks</li>
                      <li>Information architecture blueprints</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-neutral-900/60 border border-neutral-800 rounded-xl space-y-2">
                    <div className="flex justify-between items-start flex-wrap gap-1">
                      <div>
                        <h5 className="font-bold text-white text-sm">Digital Specialist &amp; AI Automation Consultant</h5>
                        <p className="text-xs text-aeo-cyan font-mono">Juicebox Creative</p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-neutral-400 border border-neutral-800">
                        May 2021 – Oct 2025
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                      SEO, PPC, UX/CRO, CRM integrations, analytics, automation, and eventually AI and agentic development, often working across multiple disciplines at once.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Core Skills Grid */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-aeo-cyan" />
                <h4 className="text-lg font-semibold text-aeo-cyan">Core Skills</h4>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: "SEO", icon: Search },
                  { name: "PPC / SEM", icon: Target },
                  { name: "AEO", icon: Brain },
                  { name: "Campaign Management", icon: BarChart },
                  { name: "CRO", icon: MousePointerClick },
                  { name: "E-commerce Strategy", icon: ShoppingCart },
                  { name: "Lead Generation", icon: Users },
                  { name: "AI & Automation", icon: Zap },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    whileHover={{ scale: 1.04 }}
                    className="bg-neutral-900 hover:bg-[#171717] border border-neutral-800 p-3 rounded-lg flex flex-col items-center justify-center text-center gap-2 transition-colors group"
                  >
                    <skill.icon className="w-5 h-5 text-aeo-cyan group-hover:text-aeo-purple transition-colors shrink-0" />
                    <span className="text-[11px] font-medium leading-tight text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-aeo-cyan/5 border border-aeo-cyan/20 text-xs text-neutral-600 dark:text-neutral-300 font-serif leading-relaxed italic">
                &ldquo;Leveraging a background in travel-sector business development and award-winning agency experience to deliver high-performance digital architecture.&rdquo;
              </div>
            </div>

          </div>
        </motion.div>

        {/* Strategic Mid-Page CTA Callout to Contact / Quote Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-aeo-cyan/10 via-neutral-900 to-aeo-purple/10 border border-aeo-cyan/30 text-center space-y-4 shadow-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aeo-cyan/10 text-aeo-cyan border border-aeo-cyan/20 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Elevate Your Search &amp; AI Visibility?</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">
            Let&apos;s Build Your Custom AEO Strategy
          </h4>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto font-light leading-relaxed font-serif">
            Connect with Vince Baker for a tailored consultation. Get found, understood, and recommended across Search, Maps, and AI search engines.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('quote-form');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  const contactEl = document.getElementById('contact');
                  if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs sm:text-sm rounded-xl hover:scale-[1.03] transition-all shadow-lg shadow-aeo-cyan/20 cursor-pointer"
            >
              <span>Get in Touch &bull; Request Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Featured Impact Section (Compact 3x1 Grid) */}
        <motion.div
          id="featured-impact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 border-t border-neutral-200 dark:border-neutral-800 pt-12 scroll-mt-24"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 text-aeo-cyan font-bold text-xs tracking-widest uppercase">
                <BarChart3 size={16} />
                <span>Portfolio</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mt-1">
                Featured <span className="text-gradient-aeo font-extrabold">Impact.</span>
              </h3>
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-aeo-cyan to-aeo-purple rounded-full hidden sm:block" />
          </div>

          {/* 3 x 1 Compact Grid (Reduced by 75%) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Launched AEObility",
                date: "Jul 2026 · AEObility",
                summary: "Engineered AEObility using AEO best practices including Information Architecture and Semantic Lattice Mapping. Built a telemetry dashboard for real-time site auditing with an AI chatbot handover for intelligent data analysis.",
                subNodes: [
                  { label: "Information Architecture", highlight: true },
                  { label: "Semantic Lattice", highlight: true },
                  { label: "AI Handover", highlight: true }
                ],
                skills: ["Next.js", "React", "Antigravity"],
                imageSrc: "/images/brand/aeobility-logo-dark.svg"
              },
              {
                title: "Baby Bento · Structural Search Alignment",
                date: "Jul 2026 · Case Study",
                summary: "Rebuilt structural search clarity and intent alignment for Baby Bento ecommerce. Replaced discount dependency with schema injection and conversational AEO content alignment, reversing organic momentum drop.",
                outcomes: ["Sales Uplift +17-18%", "CTR Lift +95%", "Qualified Clicks +55%"],
                subNodes: [
                  { label: "Sales +17%", highlight: true },
                  { label: "CTR +95%", highlight: true },
                  { label: "Clicks +55%", highlight: true }
                ],
                skills: ["Shopify AEO", "Schema Injection", "Intent Routing", "E-commerce Uplift"],
                imageSrc: "/images/knowledge-hub/case-study-aeo-lifts-traffic.webp"
              },
              {
                title: "Baby Bento · Brand Book & Messaging Framework",
                date: "Apr 2026 · Baby Bento",
                summary: "Mission and purpose to support parents and kids with engaging, healthy mealtime solutions. Origin story of the founder, brand values (Creative Partner, Love Made Visible, Inspiring Prep, Confident Eating), visual identity standards (typography & colour palettes), and key messaging pillars (durability, safety, ease of use).",
                subNodes: [
                  { label: "MCP", highlight: true },
                  { label: "AI Studio", highlight: true },
                  { label: "Gemini", highlight: true }
                ],
                skills: ["Gemini", "Promelli", "AI Studio"],
                iframeSrc: "https://drive.google.com/file/d/13TJucyE9G28aRUVRdNHWC_1HgkuC8kr-/preview"
              }
            ].map((project, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-lg flex flex-col hover:border-aeo-cyan/50 transition-all group"
              >
                {/* Media Header (Fully Responsive Asset Window) */}
                <div className="relative w-full aspect-video bg-neutral-950/80 overflow-hidden flex items-center justify-center p-3">
                  {project.iframeSrc ? (
                    <iframe
                      src={project.iframeSrc}
                      width="100%"
                      height="100%"
                      className="w-full h-full border-0 pointer-events-none rounded"
                      allow="autoplay"
                    />
                  ) : project.imageSrc ? (
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                        project.imageSrc.endsWith('.svg')
                          ? 'object-contain max-h-[85%] max-w-[85%] drop-shadow-md'
                          : 'object-cover rounded'
                      }`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-900 rounded">
                      <Layers className="w-8 h-8 text-neutral-600" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Compact Content Block */}
                <div className="p-4 flex flex-col flex-grow space-y-3">
                  <header className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-aeo-cyan font-mono text-[10px] font-bold">
                      <Cpu size={12} />
                      <span>{project.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white leading-snug group-hover:text-aeo-cyan transition-colors">
                      {project.title}
                    </h4>
                  </header>

                  <p className="text-xs text-neutral-400 leading-relaxed font-sans line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Sub Nodes or Compact Metrics Pills */}
                  {project.subNodes ? (
                    <div className="grid grid-cols-3 gap-1.5 py-2 border-y border-neutral-800/80">
                      {project.subNodes.map((node, i) => (
                        <div
                          key={i}
                          className={`flex items-center justify-center p-1.5 rounded border text-center font-mono text-[9px] font-bold ${
                            node.highlight
                              ? "bg-aeo-cyan/15 border-aeo-cyan/50 text-aeo-cyan shadow-sm shadow-aeo-cyan/20"
                              : "bg-black/40 border-neutral-800 text-neutral-300"
                          }`}
                        >
                          <span className="truncate">{node.label}</span>
                        </div>
                      ))}
                    </div>
                  ) : project.outcomes ? (
                    <div className="grid grid-cols-3 gap-1.5 py-2 border-y border-neutral-800/80">
                      {project.outcomes.map((metric, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-1 bg-black/40 rounded border border-neutral-800 text-center">
                          <span className="text-[10px] font-bold text-aeo-cyan font-mono">
                            {metric.split(" ").slice(-1)}
                          </span>
                          <span className="text-[8px] text-neutral-500 font-sans tracking-tight truncate w-full">
                            {metric.split(" ").slice(0, -1).join(" ")}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {/* Compact Skills Tags */}
                  <div className="flex flex-wrap gap-1 pt-1 mt-auto">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-neutral-950 border border-neutral-800 text-neutral-300 text-[9px] font-mono rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Why Perth Businesses Hire Me Instead of an Agency */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 border-t border-neutral-200 dark:border-neutral-800 pt-16"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              A Career Built on <span className="text-gradient-aeo font-extrabold">Adaptability</span> and{" "}
              <span className="relative inline-block pb-2">
                <span>Growth</span>
                <span className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-aeo-cyan to-aeo-purple rounded-full shadow-sm" />
              </span>
            </h3>
            <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 font-serif leading-relaxed">
              My background spans both marketing and technical systems, and I&apos;ve learned how to integrate them so they support each other. Whether it&apos;s SEO, PPC, UX/CRO, CRM workflows, analytics, or automation, I look at how each piece fits into the broader digital ecosystem.
            </p>
            <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 font-serif leading-relaxed">
              This blend of skills helps me translate technical insights into practical actions which helps to understand why something matters, not just what needs to be done.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">Senior Expertise</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Advanced reporting and analytics specialist with experience automating dashboards, improving data quality, and supporting decision-making.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">Technical Know How</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Across complex systems, solving issues, shaping strategy, and delivering clear solutions.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">Strong Marketing Skillset</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Systems-minded marketer with a track record in strategy, communication, and implementation.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">AI-Ready Marketer</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Delivering end-to-end automation with no-code tools, API integrations, and conversational agents.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800 lg:col-span-2">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">15+ Years of Commercial Experience</h4>
              <p className="text-sm text-neutral-400 mb-3">Rare hybrid background across:</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 bg-white/10 rounded-full text-neutral-300">Travel industry enterprise systems</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-full text-neutral-300">Digital marketing agencies</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-full text-neutral-300">Automation consulting</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-full text-neutral-300">AI prompting</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-full text-neutral-300">CRM + analytics</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-full text-neutral-300">SEO + PPC</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-full text-neutral-300">UX/CRO</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 2-Column Section: FAQs (Left) + Get in Touch (Right) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-neutral-200 dark:border-neutral-800 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          {/* Column 1: FAQs (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-aeo-cyan font-bold">Frequently Asked Questions</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
              Got Questions? <span className="text-gradient-aeo">Answers Here.</span>
            </h3>
            <div className="space-y-4 text-left">
              <details className="group bg-neutral-50 dark:bg-neutral-900 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <summary className="font-semibold text-base cursor-pointer flex justify-between items-center text-neutral-900 dark:text-neutral-100">
                  What is your ideal role?
                  <span className="group-open:rotate-180 transition-transform text-aeo-cyan ml-2">▼</span>
                </summary>
                <p className="mt-3 text-neutral-700 dark:text-neutral-400 text-xs leading-relaxed font-sans">
                  I&apos;m looking for a part-time hybrid role, ideally up to four days a week, within an in-house marketing team or agency. I&apos;m open to full-time if the right opportunity comes along.
                </p>
              </details>

              <details className="group bg-neutral-50 dark:bg-neutral-900 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <summary className="font-semibold text-base cursor-pointer flex justify-between items-center text-neutral-900 dark:text-neutral-100">
                  When can you start and what are your salary expectations?
                  <span className="group-open:rotate-180 transition-transform text-aeo-cyan ml-2">▼</span>
                </summary>
                <p className="mt-3 text-neutral-700 dark:text-neutral-400 text-xs leading-relaxed font-sans">
                  I&apos;m available immediately. My current contracting rate is $70 + GST per hour, and I&apos;m seeking an employee package that is broadly equivalent once employment costs are considered.
                </p>
              </details>
            </div>
          </div>

          {/* Column 2: Get in Touch Card (Right 5 Cols) */}
          <div id="contact" className="lg:col-span-5 p-6 bg-neutral-900 border border-neutral-800 rounded-2xl flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/30 text-xs font-mono text-aeo-cyan font-semibold">
                <span>Let&apos;s Connect</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Get in <span className="text-gradient-aeo">Touch.</span>
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed font-serif">
                Hi there! I&apos;m Vince. I help Australian businesses get found and chosen across Search, Maps, and AI platforms with AEO, local SEO, and intelligent automation.
              </p>
            </div>

            <div className="space-y-3 border-t border-neutral-800 pt-4">
              <div className="flex flex-col gap-2 text-xs font-mono text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="text-aeo-cyan">📍</span>
                  <span>Perth, WA, Australia</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-aeo-cyan">✉️</span>
                  <a href="mailto:vince@aeobility.com.au" className="hover:text-aeo-cyan transition-colors">vince@aeobility.com.au</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-aeo-cyan">📞</span>
                  <a href="tel:0480286282" className="hover:text-aeo-cyan transition-colors">0480 286 282</a>
                </div>
              </div>

              {/* Updated CTA Button */}
              <div className="pt-2">
                <a
                  href="/book"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-aeo-cyan/20 hover:scale-[1.02] transition-all duration-300 text-center"
                >
                  Schedule a Quick Intro Call
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Semantic Lattice / Internal Linking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-20 border-t border-neutral-800 pt-10 sm:pt-16 text-center"
        >
          <h3 className="text-xs sm:text-sm font-bold mb-6 text-neutral-400 uppercase tracking-widest">Browse my other digital specialities</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/about/freelance-seo-consultant-perth" className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs sm:text-sm font-semibold hover:border-aeo-cyan hover:text-aeo-cyan transition-colors shadow-sm">Freelance SEO Consultant Perth</Link>
            <Link href="/about/freelance-google-ads-consultant-perth" className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs sm:text-sm font-semibold hover:border-aeo-cyan hover:text-aeo-cyan transition-colors shadow-sm">Freelance Google Ads Consultant Perth</Link>
            <Link href="/about/freelance-digital-specialist-perth" className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs sm:text-sm font-semibold hover:border-aeo-cyan hover:text-aeo-cyan transition-colors shadow-sm">Freelance Digital Specialist Perth</Link>
            <Link href="/about/freelance-ai-consultant-perth" className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs sm:text-sm font-semibold hover:border-aeo-cyan hover:text-aeo-cyan transition-colors shadow-sm">Freelance AI Consultant Perth</Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
