import SreekaryamHero from "@/components/SreekaryamHero";
import SreekaryamChallenges from "@/components/SreekaryamChallenges";
import SreekaryamSolutions from "@/components/SreekaryamSolutions";
import ComprehensiveServiceRange from "@/components/ComprehensiveServiceRange";
import SreekaryamManagement from "@/components/SreekaryamManagement";
import SreekaryamCoverage from "@/components/SreekaryamCoverage";
import SreekaryamFAQ from "@/components/SreekaryamFAQ";
import SreekaryamCTA from "@/components/SreekaryamCTA";

// ✅ SEO METADATA (Enhanced - Student + Rental + Residential Targeting)
export const metadata = {
  title: "Pest Control in Sreekaryam, Trivandrum | Kerala Pest Solutions",

  description:
    "Pest control in Sreekaryam, Trivandrum. Termite treatment, bed bug removal for student accommodation, cockroach control for apartments. Free inspection.",

  keywords: [
    "Pest control Sreekaryam",
    "Hostel pest control Sreekaryam",
    "Rental pest control Sreekaryam",
    "Bed bug treatment Sreekaryam",
    "Cockroach control Sreekaryam",
    "Rodent control Sreekaryam",
    "Pest control Trivandrum",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/pest-control-sreekaryam",
  },

  openGraph: {
    title: "Pest Control in Sreekaryam, Trivandrum | Kerala Pest Solutions",
    description:
      "Pest control in Sreekaryam, Trivandrum. Termite treatment, bed bug removal for student accommodation, cockroach control for apartments. Free inspection.",
    url: "https://keralapestsolutions.com/pest-control-sreekaryam",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control in Sreekaryam",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pest Control in Sreekaryam",
    description:
      "Trusted pest control services for homes, hostels, and rental properties.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <SreekaryamHero />
      <SreekaryamChallenges />
      <SreekaryamSolutions />
      <ComprehensiveServiceRange />
      <SreekaryamManagement />
      <SreekaryamCoverage />
      <SreekaryamFAQ />
      <SreekaryamCTA />
    </>
  );
}