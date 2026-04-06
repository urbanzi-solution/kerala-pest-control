import GeneralPestHero from "@/components/GeneralPestHero";
import GeneralPestCovers from "@/components/GeneralPestCovers";
import GPCNotCoveredAndProcess from "@/components/GPCNotCoveredAndProcess";
import MaintenanceAndSafety from "@/components/MaintenanceAndSafety";
import ServiceFootprint from "@/components/ServiceFootprint";
import GPCFAQ from "@/components/GPCFAQ";
import GPCCTA from "@/components/GPCCTA";
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