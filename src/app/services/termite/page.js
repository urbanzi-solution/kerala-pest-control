
import TermiteHero from "@/components/TermiteHero";
import FeatureStrip from "@/components/FeatureStrip";
import TermiteRiskSection from "@/components/TermiteRiskSection";
import AdvancedDefenseSystems from "@/components/AdvancedDefenseSystems";
import WhatIsIncluded from "@/components/WhatIsIncuded";
import ComparisonTable from "@/components/ComparisonTable";
import AMCSection from "@/components/AMCSection";
import FAQTermite from "@/components/FAQTermite";
import ServiceFootprint from "@/components/ServiceFootprint";
export default function Home() {
  return (
    <>
    <TermiteHero />
    <FeatureStrip />
    <TermiteRiskSection />
    <AdvancedDefenseSystems />
    <WhatIsIncluded />
    <ComparisonTable />
    <AMCSection />
    <FAQTermite />
    <ServiceFootprint />
    </>
  );
}
