import GeneralPestHero from "@/components/GeneralPestHero";
import GeneralPestCovers from "@/components/GeneralPestCovers";
import GPCNotCoveredAndProcess from "@/components/GPCNotCoveredAndProcess";
import MaintenanceAndSafety from "@/components/MaintenanceAndSafety";
import ServiceFootprint from "@/components/ServiceFootprint";
import GPCFAQ from "@/components/GPCFAQ";
import GPCCTA from "@/components/GPCCTA";

// ✅ SEO METADATA (Enhanced - Core Service Page)
export const metadata = {
  title: "General Pest Control Services in Kerala | Safe & Reliable Solutions",

  description:
    "Looking for general pest control services in Kerala? Kerala Pest Solutions provides safe, eco-friendly treatments to protect homes and businesses from common pests all year round.",

  keywords: [
    "Pest control Kerala",
    "General pest control Trivandrum",
    "Pest control Kollam",
    "Home pest control Kerala",
    "Commercial pest control Kerala",
    "Eco friendly pest control Kerala",
    "Best pest control company Kerala",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/general-pest-control",
  },

  openGraph: {
    title: "General Pest Control Services in Kerala | Kerala Pest Solutions",
    description:
      "Comprehensive pest control solutions for homes and businesses in Kerala. Safe and effective year-round protection.",
    url: "https://keralapestsolutions.com/general-pest-control",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "General Pest Control Services Kerala",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "General Pest Control Services in Kerala",
    description:
      "Safe and reliable pest control solutions for homes and businesses.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <GeneralPestHero />
      <GeneralPestCovers />
      <GPCNotCoveredAndProcess />
      <MaintenanceAndSafety />
      <ServiceFootprint />
      <GPCFAQ />
      <GPCCTA />
    </>
  );
}