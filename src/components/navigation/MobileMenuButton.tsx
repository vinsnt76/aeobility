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
      className="lg:hidden flex items-center justify-center bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-full p-2.5 transition-colors cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
    >
      {isOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
    </button>
  );
}

export default MobileMenuButton;
