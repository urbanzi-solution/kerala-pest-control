import BedBugHero from "@/components/BedBugHero";
import WhyDifficult from "@/components/WhyDifficult";
import TwoVisitProtocol from "@/components/TwoVisitProtocol";
import HotelsAndPrevention from "@/components/HotelsAndPrevention";
import ServiceFootprint from "@/components/ServiceFootprint";
import BedBugFAQAndCTA from "@/components/BedBugFAQAndCTA";

// ✅ SEO METADATA (Enhanced - Service Focused)
export const metadata = {
  title: "Bed Bug Control Services in Kerala | Safe & Effective Treatment",

  description:
    "Looking for bed bug control services in Kerala? Kerala Pest Solutions provides safe, proven treatments for homes, hotels, and hostels to eliminate infestations effectively.",

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
    canonical: "https://keralapestsolutions.com/bed-bug-control",
  },

  openGraph: {
    title: "Bed Bug Control Services in Kerala | Kerala Pest Solutions",
    description:
      "Professional bed bug treatment for homes, hotels, and hostels. Safe and effective solutions across Kerala.",
    url: "https://keralapestsolutions.com/bed-bug-control",
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