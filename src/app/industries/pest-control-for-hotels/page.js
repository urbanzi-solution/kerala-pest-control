import HotelHero from "@/components/HotelHero";
import HotelSolutions from "@/components/HotelSolutions";
import HotelProgramme from "@/components/HotelProgramme";
import HostelService from "@/components/HotelService";
import HotelFAQ from "@/components/HotelFAQ";
import HotelServiceCTA from "@/components/HotelServiceCTA";

// ✅ SEO METADATA (UNIQUE for hotel page)
export const metadata = {
  title: "Hotel & Hostel Pest Control in Trivandrum & Kollam | Hygienic Solutions",

  description:
    "Expert pest control for hotels and hostels in Trivandrum & Kollam. Ensure hygiene with safe solutions for bed bugs, rodents, and insects.",

  keywords: [
    "Hotel pest control Trivandrum",
    "Hostel pest control Kollam",
    "Bed bug treatment Kerala",
    "Commercial pest control Trivandrum",
    "Restaurant pest control Kollam",
    "Rodent control hotels Kerala",
    "Hospitality pest solutions Kerala",
  ],
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