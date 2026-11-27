import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Top AI SEO & AEO Tools Comparison (2026) | AEObility",
    description: "Compare top-rated AI SEO and AEO tools for citation tracking, FAQ schema extraction, and Google snippet optimisation. Find managed service alternatives.",
    alternates: {
      canonical: "https://aeobility.com.au/knowledge-hub/ai-seo-tools",
    },
    openGraph: {
      title: "Top AI SEO & AEO Tools Comparison (2026) | AEObility",
      description: "Compare top-rated AI SEO and AEO tools for citation tracking, FAQ schema extraction, and Google snippet optimisation. Find managed service alternatives.",
      url: "https://aeobility.com.au/knowledge-hub/ai-seo-tools",
      type: "website",
      siteName: "AEObility",
    },
    keywords: [
      "ai seo tools",
      "top rated seo tools with faq aeo and google snippets",
      "ai seo tools perth",
      "chatgtp seo",
      "seo ai tools",
      "AEO tools",
      "schema generators",
      "AI search retrieval tools",
      "Perth AEO telemetry"
    ]
  };
}

export default function AiSeoToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
