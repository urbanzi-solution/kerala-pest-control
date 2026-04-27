import TermiteHero from "@/components/TermiteHero";
import FeatureStrip from "@/components/FeatureStrip";
import TermiteRiskSection from "@/components/TermiteRiskSection";
import AdvancedDefenseSystems from "@/components/AdvancedDefenseSystems";
import WhatIsIncluded from "@/components/WhatIsIncuded";
import ComparisonTable from "@/components/ComparisonTable";
import AMCSection from "@/components/AMCSection";
import FAQTermite from "@/components/FAQTermite";
import ServiceFootprint from "@/components/ServiceFootprint";

// ✅ SEO METADATA (HIGH-VALUE SERVICE PAGE)
export const metadata = {
  title: "Professional Termite Treatment in Kerala | Kerala Pest Solutions",

  description:
    "Expert termite treatment for Kerala homes and businesses. Pre-construction barriers, post-construction injection, and baiting systems. ",

  keywords: [
    "Termite control Kerala",
    "Termite treatment Trivandrum",
    "Anti termite treatment Kollam",
    "Pre construction termite treatment Kerala",
    "Post construction termite treatment Kerala",
    "Wood termite control Kerala",
    "Best termite control service Kerala",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/services/termite-control",
  },

  openGraph: {
    title: "Professional Termite Treatment in Kerala | Kerala Pest Solutions",
    description:
      "Expert termite treatment for Kerala homes and businesses. Pre-construction barriers, post-construction injection, and baiting systems. ",
    url: "https://keralapestsolutions.com/services/termite-control",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Termite Control Services Kerala",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Professional Termite Treatment in Kerala | Kerala Pest Solutions",
    description:
      "Protect your property with expert termite treatment solutions.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <TermiteHero />
      <FeatureStrip />
      <TermiteRiskSection />
      <AdvancedDefenseSystems />
      <WhatIsIncluded />
      <ComparisonTable />
      <AMCSection />
      <FAQTermite />
      <ServiceFootprint />
    </>
  );
}