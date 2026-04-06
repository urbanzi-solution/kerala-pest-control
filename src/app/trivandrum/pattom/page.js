import PattomHero from "@/components/PattomHero";
import PattomChallenges from "@/components/PattomChallenges";
import PattomSolutions from "@/components/PattomSolutions";
import ComprehensiveServiceRange from "@/components/ComprehensiveServiceRange";
import PattomManagement from "@/components/PattomManagement";
import PattomCoverage from "@/components/PattomCoverage";
import PattomFAQ from "@/components/PattomFAQ";
import PattomCTA from "@/components/PattomCTA";
export default function Home() {
  return (
    <>
    <PattomHero />
    <PattomChallenges />
    <PattomSolutions />
    <ComprehensiveServiceRange />
    <PattomManagement />
    <PattomCoverage />
    <PattomFAQ />
    <PattomCTA />
    </>
  );
}