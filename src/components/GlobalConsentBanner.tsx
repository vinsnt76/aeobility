"use client";

import React, { useState, useEffect } from 'react';
import { X, ShieldAlert } from 'lucide-react';
import { updateAnalyticsConsent } from '@/lib/analytics';

// Regulated GDPR/EEA/UK country codes
const REGULATED_COUNTRIES = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 
  'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 
  'SI', 'ES', 'SE', 'GB', 'UK', 'IS', 'LI', 'NO', 'CH'
];

export default function GlobalConsentBanner() {
  const [visible, setVisible] = useState(false);

  const updateConsentMode = (status: 'granted' | 'denied') => {
    updateAnalyticsConsent(status);
  };

  useEffect(() => {
    // 1. Check if user has already made a choice
    const savedConsent = localStorage.getItem('aeoCookieConsent');
    
    if (savedConsent === 'accepted') {
      updateConsentMode('granted');
      return;
    }
    
    if (savedConsent === 'declined') {
      updateConsentMode('denied');
      return;
    }

    // 2. No saved choice. Perform geolocation check.
    const checkUserLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error('IP API failed');
        
        const data = await response.json();
        
        // Show banner only if visitor is in EU/EEA/UK or ipapi indicates EU
        const isRegulated = data.in_eu === true || REGULATED_COUNTRIES.includes(data.country_code);
        
        if (isRegulated) {
          // Default to denied for GDPR regions until they choose
          updateConsentMode('denied');
          setVisible(true);
        } else {
          // Non-regulated countries (like Australia) default to granted silently
          updateConsentMode('granted');
          localStorage.setItem('aeoCookieConsent', 'accepted');
        }
      } catch {
        // If API fails (e.g. adblocker), default to Australia-friendly behavior: hide banner & grant consent
        updateConsentMode('granted');
      }
    };

    checkUserLocation();
  }, []);

  const handleAccept = () => {
    localStorage.setItem('aeoCookieConsent', 'accepted');
    updateConsentMode('granted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('aeoCookieConsent', 'declined');
    updateConsentMode('denied');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md p-6 bg-neutral-950/90 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="relative space-y-4">
        {/* Close Button */}
        <button 
          onClick={handleDecline}
          className="absolute top-0 right-0 p-1 text-white/40 hover:text-white/80 transition-colors"
          aria-label="Close Banner"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3.5">
          <div className="p-2 bg-aeo-cyan/10 border border-aeo-cyan/20 rounded-lg text-aeo-cyan">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white font-soehne-breit">Cookie Preferences</h4>
            <p className="text-xs text-white/60 leading-relaxed font-serif">
              We use analytics cookies to understand how you interact with our website, helping us improve your experience.
            </p>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={handleAccept}
            className="flex-1 py-2.5 bg-white text-black font-bold text-xs rounded-xl hover:bg-neutral-100 transition-all cursor-pointer text-center"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 py-2.5 border border-white/10 hover:border-white/20 text-white font-semibold text-xs rounded-xl hover:bg-white/5 transition-all cursor-pointer text-center"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
