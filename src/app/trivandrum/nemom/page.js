import NemomHero from "@/components/NemomHero";
import NemomChallenges from "@/components/NemomChallenges";
import NemomSolutions from "@/components/NemomSolutions";
import ComprehensiveServiceRange from "@/components/ComprehensiveServiceRange";
import NemomManagement from "@/components/NemomManagement";
import NemomCoverage from "@/components/NemomCoverage";
import NemomFAQ from "@/components/NemomFAQ";
import NemomCTA from "@/components/NemomCTA";

// ✅ SEO METADATA (Enhanced - Suburban Residential Targeting)
export const metadata = {
  title: "Pest Control in Nemom, Trivandrum | Kerala Pest Solutions",

  description:
    "Pest control in Nemom, Trivandrum. Termite treatment for properties on former agricultural land, rodent control, mosquito management. Free inspection.",

  keywords: [
    "Pest control Nemom",
    "Home pest control Nemom",
    "Villa pest control Nemom",
    "Termite treatment Nemom",
    "Rodent control Nemom",
    "Cockroach control Nemom",
    "Pest control Trivandrum",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/pest-control-nemom",
  },

  openGraph: {
    title: "Pest Control in Nemom, Trivandrum | Kerala Pest Solutions",
    description:
      "Pest control in Nemom, Trivandrum. Termite treatment for properties on former agricultural land, rodent control, mosquito management. Free inspection.",
    url: "https://keralapestsolutions.com/pest-control-nemom",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control in Nemom",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pest Control in Nemom",
    description:
      "Trusted pest control services for homes and villas.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <NemomHero />
      <NemomChallenges />
      <NemomSolutions />
      <ComprehensiveServiceRange />
      <NemomManagement />
      <NemomCoverage />
      <NemomFAQ />
      <NemomCTA />
    </>
  );
}