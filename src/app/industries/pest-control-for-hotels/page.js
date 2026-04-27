import HotelHero from "@/components/HotelHero";
import HotelSolutions from "@/components/HotelSolutions";
import HotelProgramme from "@/components/HotelProgramme";
import HostelService from "@/components/HotelService";
import HotelFAQ from "@/components/HotelFAQ";
import HotelServiceCTA from "@/components/HotelServiceCTA";

// ✅ SEO METADATA (Enhanced)
export const metadata = {
  title: "'Pest Control for Hotels Kerala | Discreet Professional Service | Kerala Pest Solutions",

  description:
    "Discreet, professional pest management for hotels, resorts, and serviced apartments in Trivandrum and Kollam. Bed bug specialists. Zero-disruption service. Kerala Pest Solutions.",

  keywords: [
    "Hotel pest control Trivandrum",
    "Hostel pest control Kollam",
    "Bed bug treatment Kerala",
    "Commercial pest control Trivandrum",
    "Restaurant pest control Kollam",
    "Rodent control hotels Kerala",
    "Hospitality pest solutions Kerala",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/industries/pest-control-for-hotels",
  },

  openGraph: {
    title: "'Pest Control for Hotels Kerala | Discreet Professional Service | Kerala Pest Solutions",
    description:
      "Discreet, professional pest management for hotels, resorts, and serviced apartments in Trivandrum and Kollam. Bed bug specialists. Zero-disruption service. Kerala Pest Solutions.",
    url: "https://keralapestsolutions.com/industries/pest-control-for-hotels",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Pest Control Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hotel & Hostel Pest Control in Trivandrum & Kollam",
    description:
      "Ensure hygiene in hotels and hostels with expert pest control solutions.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HotelHero />
      <HotelSolutions />
      <HotelProgramme />
      <HostelService />
      <HotelFAQ />
      <HotelServiceCTA />
    </>
  );
}