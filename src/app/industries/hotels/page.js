import HotelHero from "@/components/HotelHero";
import HotelSolutions from "@/components/HotelSolutions";
import HotelProgramme from "@/components/HotelProgramme";
import HostelService from "@/components/HotelService";
import HotelFAQ from "@/components/HotelFAQ";
import HotelServiceCTA from "@/components/HotelServiceCTA";
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