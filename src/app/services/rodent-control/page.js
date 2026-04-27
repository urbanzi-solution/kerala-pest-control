import RodentControlHero from "@/components/RodentControlHero";
import RodentThreatSection from "@/components/RodentThreatSection";
import RodentFeaturesAndCTA from "@/components/RodentFeaturesAndCTA";
import RodentProofingSection from "@/components/RodentProofingSection";
import RodentControlMethods from "@/components/RodentControlMethods";
import RodentProgrammeInclusions from "@/components/RodentProgrammeInclusions";
import RestaurantRodentSection from "@/components/RestaurantRodentSection";
import ServiceFootprint from "@/components/ServiceFootprint";
import RodentFAQ from "@/components/RodentFAQ";
import RodentCTA from "@/components/RodentCTA";

// ✅ SEO METADATA (Enhanced - Service Focused)
export const metadata = {
  title: "Professional Rodent Control in Kerala | Kerala Pest Solutions",

  description:
    "Rat and mouse control for homes, restaurants, and businesses in Trivandrum and Kollam. Tamper-resistant stations, proofing reports, monitored programmes.",

  keywords: [
    "Rodent control Kerala",
    "Rat control Trivandrum",
    "Mouse control Kollam",
    "Restaurant rodent control Kerala",
    "Home rodent control Kerala",
    "Commercial rodent control Kerala",
    "Best rodent control service Kerala",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/services/rodent-control",
  },

  openGraph: {
    title: "Professional Rodent Control in Kerala | Kerala Pest Solutions",
    description:
      "Rat and mouse control for homes, restaurants, and businesses in Trivandrum and Kollam. Tamper-resistant stations, proofing reports, monitored programmes.",
    url: "https://keralapestsolutions.com/services/rodent-control",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Rodent Control Services Kerala",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Professional Rodent Control in Kerala | Kerala Pest Solutions",
    description:
      "Safe and reliable rat and mouse control solutions for homes and businesses.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <RodentControlHero />
      <RodentThreatSection />
      <RodentFeaturesAndCTA />
      <RodentProofingSection />
      <RodentControlMethods />
      <RodentProgrammeInclusions />
      <RestaurantRodentSection />
      <ServiceFootprint />
      <RodentFAQ />
      <RodentCTA />
    </>
  );
}