import GeneralPestHero from "@/components/GeneralPestHero";
import GeneralPestCovers from "@/components/GeneralPestCovers";
import GPCNotCoveredAndProcess from "@/components/GPCNotCoveredAndProcess";
import MaintenanceAndSafety from "@/components/MaintenanceAndSafety";
import ServiceFootprint from "@/components/ServiceFootprint";
import GPCFAQ from "@/components/GPCFAQ";
import GPCCTA from "@/components/GPCCTA";

// ✅ SEO METADATA (service + location optimized)
export const metadata = {
  title: "General Pest Control Services in Kerala | Safe & Reliable Solutions",
  description:
    "Comprehensive general pest control services in Kerala for homes and businesses. Safe, effective treatments to keep your space pest-free all year round.",
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