import React from 'react';
import { Metadata } from 'next';
import VinceBakerClientPage from './VinceBakerClientPage';

export const metadata: Metadata = {
  title: "Vince Baker (Vinnie Baker) | Founder & Lead AEO Specialist Perth | AEObility",
  description: "Vincent Anthony Baker (known professionally as Vince Baker or Vinnie Baker) is the founder and lead AI Search Specialist at AEObility in Dianella, Perth WA (ABN: 61 029 803 255). Specialising in Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), and structured entity data architecture.",
  alternates: {
    canonical: "https://aeobility.com.au/vince-baker",
  },
  keywords: [
    "Vincent Anthony Baker",
    "Vinnie Baker",
    "Vince Baker",
    "AEObility Perth",
    "AEO Specialist Perth",
    "AI Search Consultant",
    "AEObility Founder",
    "seo specialist perth",
    "digital search architect"
  ]
};

export default function VinceBakerPage() {
  return <VinceBakerClientPage />;
}
