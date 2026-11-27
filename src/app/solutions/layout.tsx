import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Transparent AEO Solutions, Sprints & Pricing Tier Models | AEObility",
  description: "Discover transparent AEO solutions, fixed-scope strategic blueprints, and rapid schema implementation sprints for Australian SMBs with zero contract lock-in.",
  alternates: {
    canonical: "https://aeobility.com.au/solutions",
  },
  openGraph: {
    title: "Transparent AEO Solutions, Sprints & Pricing Tier Models | AEObility",
    description: "Discover transparent AEO solutions, fixed-scope strategic blueprints, and rapid schema implementation sprints for Australian SMBs with zero contract lock-in.",
    url: "https://aeobility.com.au/solutions",
    siteName: "AEObility",
    images: [
      {
        url: "https://aeobility.com.au/images/solutions/aeo-solutions-and-pricing-framework_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility master solutions and pricing framework dashboard displaying transparent engagement tiers, micro-sprints, and Blueprint credit terms.",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparent AEO Solutions, Sprints & Pricing Tier Models | AEObility",
    description: "Discover transparent AEO solutions, fixed-scope strategic blueprints, and rapid schema implementation sprints for Australian SMBs with zero contract lock-in.",
    images: ["https://aeobility.com.au/images/solutions/aeo-solutions-and-pricing-framework_AEObility.webp"],
  },
  keywords: [
    "aeo service cost",
    "transparent digital marketing pricing",
    "90-day marketing roadmap",
    "marketing audit with strategic roadmap",
    "no contract marketing agency",
    "aeo sprints"
  ]
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
