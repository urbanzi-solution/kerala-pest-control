import BedBugHero from "@/components/BedBugHero";
import WhyDifficult from "@/components/WhyDifficult";
import TwoVisitProtocol from "@/components/TwoVisitProtocol";
import HotelsAndPrevention from "@/components/HotelsAndPrevention";
import ServiceFootprint from "@/components/ServiceFootprint";
import BedBugFAQAndCTA from "@/components/BedBugFAQAndCTA";

// ✅ SEO METADATA (Enhanced - Service Focused)
export const metadata = {
  title: "Professional Bed Bug Removal in Kerala | Kerala Pest Solutions",

  description:
    "Complete bed bug elimination for homes, hotels, and PG accommodation in Trivandrum and Kollam. Mandatory two-visit protocol. Safe for families. Free inspection",

  keywords: [
    "Bed bug control Kerala",
    "Bed bug treatment Trivandrum",
    "Bed bug removal Kollam",
    "Hotel bed bug control Kerala",
    "Home bed bug treatment Kerala",
    "Pest control bed bugs Kerala",
    "Best bed bug control service Kerala",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/services/bed-bug-control",
  },

  openGraph: {
    title: "Professional Bed Bug Removal in Kerala | Kerala Pest Solutions",
    description:
      "Complete bed bug elimination for homes, hotels, and PG accommodation in Trivandrum and Kollam. Mandatory two-visit protocol. Safe for families. Free inspection.",
    url: "https://keralapestsolutions.com/services/bed-bug-control",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Bed Bug Control Services Kerala",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bed Bug Control Services in Kerala",
    description:
      "Safe and effective bed bug removal for homes and hotels.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <BedBugHero />
      <WhyDifficult />
      <TwoVisitProtocol />
      <HotelsAndPrevention />
      <ServiceFootprint />
      <BedBugFAQAndCTA />
    </>
  );
}