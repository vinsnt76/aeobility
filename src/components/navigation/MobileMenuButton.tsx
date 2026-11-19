'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
  const router = useRouter();

  // Prefetch top intent targets on hover/focus engagement
  const handlePrefetch = () => {
    router.prefetch('/services/aeo');
    router.prefetch('/services/aeo/shopify');
    router.prefetch('/solutions/aeo-blueprint');
    router.prefetch('/diagnostic');
  };

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls="mobile-navigation-menu"
      aria-label={isOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
      onClick={onToggle}
      onMouseEnter={handlePrefetch}
      onFocus={handlePrefetch}
      className="lg:hidden flex items-center justify-center bg-[#141927]/95 hover:bg-[#1B2236] border border-[#1E293B] hover:border-[#00E5FF]/50 text-slate-200 hover:text-[#00E5FF] rounded-xl p-2.5 transition-colors cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF]"
    >
      {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
    </button>
  );
}

export default MobileMenuButton;
