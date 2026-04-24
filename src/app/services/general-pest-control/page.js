import GeneralPestHero from "@/components/GeneralPestHero";
import GeneralPestCovers from "@/components/GeneralPestCovers";
import GPCNotCoveredAndProcess from "@/components/GPCNotCoveredAndProcess";
import MaintenanceAndSafety from "@/components/MaintenanceAndSafety";
import ServiceFootprint from "@/components/ServiceFootprint";
import GPCFAQ from "@/components/GPCFAQ";
import GPCCTA from "@/components/GPCCTA";

// ✅ SEO METADATA (Enhanced - Core Service Page)
export const metadata = {
  title: "General Pest Control & IPM Services in Kerala | Kerala Pest Solutions",

  description:
    "Broad-spectrum IPM pest control for Kerala homes and businesses. Cockroaches, ants, silverfish, centipedes, and more in a single professional visit. Free inspection in Trivandrum and Kollam.",

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
    title: "General Pest Control & IPM Services in Kerala | Kerala Pest Solutions",
    description:
      "Broad-spectrum IPM pest control for Kerala homes and businesses. Cockroaches, ants, silverfish, centipedes, and more in a single professional visit. Free inspection in Trivandrum and Kollam.",
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