import RodentControlHero from "@/components/RodentControlHero";
import RodentThreatSection from "@/components/RodentThreatSection";
import RodentFeaturesAndCTA from "@/components/RodentFeaturesAndCTA";
import RodentProofingSection from "@/components/RodentProofingSection";
import RodentControlMethods from "@/components/RodentControlMethods";
import RodentProgrammeInclusions from "@/components/RodentProgrammeInclusions";
import RestaurantRodentSection from "@/components/RestaurantRodentSection";
import ServiceFootprint from "@/components/ServiceFootprint";
import RodentFAQ from "@/components/RodentFAQ";
import RodentCTA from "@/components/RodentCTA";

// ✅ SEO METADATA (service + location optimized)
export const metadata = {
  title: "Rodent Control Services in Kerala | Safe & Effective Solutions",
  description:
    "Expert rodent control services in Kerala to eliminate rats and mice safely. Protect homes, restaurants, and businesses with reliable pest management solutions.",
};

export default function Home() {
  return (
    <>
      <RodentControlHero />
      <RodentThreatSection />
      <RodentFeaturesAndCTA />
      <RodentProofingSection />
      <RodentControlMethods />
      <RodentProgrammeInclusions />
      <RestaurantRodentSection />
      <ServiceFootprint />
      <RodentFAQ />
      <RodentCTA />
    </>
  );
}