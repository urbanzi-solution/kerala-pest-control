import NemomHero from "@/components/NemomHero";
import NemomChallenges from "@/components/NemomChallenges";
import NemomSolutions from "@/components/NemomSolutions";
import ComprehensiveServiceRange from "@/components/ComprehensiveServiceRange";
import NemomManagement from "@/components/NemomManagement";
import NemomCoverage from "@/components/NemomCoverage";
import NemomFAQ from "@/components/NemomFAQ";
import NemomCTA  from "@/components/NemomCTA";
export default function Home() {
  return (
    <>
    <NemomHero />
    <NemomChallenges />
    <NemomSolutions />
    <ComprehensiveServiceRange />
    <NemomManagement />
    <NemomCoverage />
    <NemomFAQ />
    <NemomCTA />
    </>
  );
}