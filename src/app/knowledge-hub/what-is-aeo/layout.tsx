import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "What is AEO? Answer Engine Optimisation Guide | AEObility",
    description: "Learn what Answer Engine Optimisation (AEO) is and how it differs from traditional SEO. Discover how AI search engines extract brand facts and citations.",
    alternates: {
      canonical: "https://aeobility.com.au/knowledge-hub/what-is-aeo",
    },
    openGraph: {
      title: "What is AEO? Answer Engine Optimisation Guide | AEObility",
      description: "Learn what Answer Engine Optimisation (AEO) is and how it differs from traditional SEO. Discover how AI search engines extract brand facts and citations.",
      url: "https://aeobility.com.au/knowledge-hub/what-is-aeo",
      type: "article",
      siteName: "AEObility",
    },
    keywords: [
      "what is aeo",
      "what does aeo mean",
      "aeo meaning",
      "what is aeo in digital marketing",
      "answer engine optimisation guide",
      "AEO vs SEO"
    ]
  };
}

export default function WhatIsAeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
