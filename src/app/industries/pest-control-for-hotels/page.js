import HotelHero from "@/components/HotelHero";
import HotelSolutions from "@/components/HotelSolutions";
import HotelProgramme from "@/components/HotelProgramme";
import HostelService from "@/components/HotelService";
import HotelFAQ from "@/components/HotelFAQ";
import HotelServiceCTA from "@/components/HotelServiceCTA";

// ✅ SEO METADATA (Enhanced)
export const metadata = {
  title: "Hotel & Hostel Pest Control in Trivandrum & Kollam | Hygienic Solutions",

  description:
    "Looking for hotel or hostel pest control in Trivandrum & Kollam? Kerala Pest Solutions provides safe, hygienic treatments for bed bugs, rodents, and insects with expert service.",

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
    canonical: "https://keralapestsolutions.com/hotel-pest-control",
  },

  openGraph: {
    title: "Hotel & Hostel Pest Control in Trivandrum & Kollam",
    description:
      "Professional pest control services for hotels and hostels. Safe solutions for bed bugs, rodents, and insects.",
    url: "https://keralapestsolutions.com/hotel-pest-control",
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