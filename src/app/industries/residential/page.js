import ResidentialHero from "@/components/ResidentialHero";
import ResidentialDifference from "@/components/ResidentialDifference";
import ResidentialHighestRiskPests from "@/components/ResidentialHighestRiskPests";
import ResidentialTargetedSolutions from "@/components/ResidentialTargetedSolutions";
import ResidentialPropertyAndFamilySafety from "@/components/ResidentialPropertyAndFamilySafety";
import ResidentialAMCAndRelatedServices from "@/components/ResidentialAMCAndRelatedServices";
import ResidentialFAQ from "@/components/ResidentialFAQ";
import ResidentialCTA from "@/components/ResidentialCTA";
export default function Home() {
  return (
    <>
    <ResidentialHero />
    <ResidentialDifference />
    <ResidentialHighestRiskPests />
    <ResidentialTargetedSolutions />
    <ResidentialPropertyAndFamilySafety />
    <ResidentialAMCAndRelatedServices />
    <ResidentialFAQ />
    <ResidentialCTA />
    </>
  );
}