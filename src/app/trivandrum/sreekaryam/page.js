import SreekaryamHero from "@/components/SreekaryamHero";
import SreekaryamChallenges from "@/components/SreekaryamChallenges";
import SreekaryamSolutions from "@/components/SreekaryamSolutions";
import ComprehensiveServiceRange from "@/components/ComprehensiveServiceRange";
import SreekaryamManagement from "@/components/SreekaryamManagement";
import SreekaryamCoverage from "@/components/SreekaryamCoverage";
import SreekaryamFAQ from "@/components/SreekaryamFAQ";
import SreekaryamCTA from "@/components/SreekaryamCTA";
export default function Home() {
  return (
    <>
    <SreekaryamHero />
    <SreekaryamChallenges />
    <SreekaryamSolutions />
    <ComprehensiveServiceRange />
    <SreekaryamManagement />
    <SreekaryamCoverage />
    <SreekaryamFAQ />
    <SreekaryamCTA/>
    </>
  );
}