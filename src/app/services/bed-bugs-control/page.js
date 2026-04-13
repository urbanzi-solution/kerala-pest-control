import BedBugHero from "@/components/BedBugHero";
import WhyDifficult from "@/components/WhyDifficult";
import TwoVisitProtocol from "@/components/TwoVisitProtocol";
import HotelsAndPrevention from "@/components/HotelsAndPrevention";
import ServiceFootprint from "@/components/ServiceFootprint";
import BedBugFAQAndCTA from "@/components/BedBugFAQAndCTA";

// ✅ SEO METADATA (service + location optimized)
export const metadata = {
  title: "Bed Bug Control Services in Kerala | Safe & Effective Treatment",
  description:
    "Professional bed bug control services in Kerala with proven treatments for homes and hotels. Eliminate infestations safely with expert solutions today.",
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