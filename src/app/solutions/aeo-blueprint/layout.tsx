import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Strategic Blueprint: $995 Technical Diagnostic & Roadmap | AEObility",
  description: "Get a comprehensive technical audit and a practical 90-day strategic AEO roadmap. 100% of your $995 Blueprint fee is credited toward eligible implementation sprints.",
  alternates: {
    canonical: "https://aeobility.com.au/solutions/aeo-blueprint",
  },
  openGraph: {
    title: "Strategic Blueprint: Fixed-Scope AEO Audit | AEObility",
    description: "Deep technical audit & 90-day execution roadmap. 100% of your $995 fee credited toward implementation.",
    url: "https://aeobility.com.au/solutions/aeo-blueprint",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/solutions/aeo-blueprint-strategic-audit_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility Blueprint technical audit interface displaying digital presence review, entity scorecard, and 90-day action plan timeline.",
      },
    ],
  },
  keywords: [
    "aeo services",
    "aeo consultant australia",
    "Strategic Blueprint",
    "marketing audit with strategic roadmap",
    "aeo consultant perth",
    "90-day marketing roadmap"
  ]
};

export default function AEOBlueprintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
