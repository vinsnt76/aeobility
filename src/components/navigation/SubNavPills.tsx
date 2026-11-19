'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface PillItem {
  label?: string;
  title?: string;
  href?: string;
  url?: string;
  isActive?: boolean;
}

interface SubNavPillsProps {
  sectionTitle?: string;
  items: PillItem[];
  isEmbedded?: boolean;
}

export function SubNavPills({ sectionTitle, items, isEmbedded = false }: SubNavPillsProps) {
  const pathname = usePathname();

  if (!items || !Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label={sectionTitle ? `${sectionTitle} Sub-navigation` : 'Page section navigation'}
      className={`w-full border border-[#1E293B] bg-[#08090C]/85 backdrop-blur-md py-2 sm:py-2.5 px-3 sm:px-6 shadow-md z-30 ${
        isEmbedded ? 'relative rounded-xl' : 'sticky top-20'
      }`}
    >
      {/* Subtle Right Edge Fade for Mobile Horizontal Scroll Discovery */}
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-neutral-950/90 to-transparent pointer-events-none z-10 sm:hidden" />

      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap text-xs font-medium scroll-smooth max-w-7xl mx-auto pr-6 sm:pr-0">
        {items.map((item, idx) => {
          const itemUrl = item.href || item.url || '#';
          const itemLabel = item.label || item.title || '';
          const isActive = item.isActive !== undefined ? item.isActive : pathname === itemUrl;

          return (
            <Link
              key={itemUrl + idx}
              href={itemUrl}
              className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full flex-shrink-0 transition-all duration-200 backdrop-blur-md border ${
                isActive
                  ? 'bg-cyan-950/60 text-cyan-200 border-cyan-400 font-semibold shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                  : 'bg-zinc-900/80 text-cyan-300 border-cyan-500/30 hover:bg-zinc-800/90 hover:text-cyan-200 hover:border-cyan-400/60 shadow-sm'
              }`}
            >
              {itemLabel}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default SubNavPills;
