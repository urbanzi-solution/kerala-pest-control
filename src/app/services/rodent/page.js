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
export default function Home() {
  return (
    <>
    <RodentControlHero />
    <RodentThreatSection />
    <RodentFeaturesAndCTA />
    <RodentProofingSection />
    <RodentControlMethods/>
    <RodentProgrammeInclusions />
    <RestaurantRodentSection />
    
    <ServiceFootprint />
    <RodentFAQ />
    <RodentCTA />
    </>
  );
}