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
  title: "Rodent Control Services in Kerala | Safe & Effective Solutions",

  description:
    "Looking for rodent control services in Kerala? Kerala Pest Solutions provides safe, eco-friendly treatments to eliminate rats and mice from homes, restaurants, and businesses with long-lasting results.",

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
    canonical: "https://keralapestsolutions.com/rodent-control",
  },

  openGraph: {
    title: "Rodent Control Services in Kerala | Kerala Pest Solutions",
    description:
      "Professional rodent control solutions for homes, restaurants, and businesses. Safe and effective long-term protection.",
    url: "https://keralapestsolutions.com/rodent-control",
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
    title: "Rodent Control Services in Kerala",
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