import KaryavattomHero from "@/components/KaryavattomHero";
import KaryavattomChallenges from "@/components/KaryavattomChallenges";
import KaryavattomSolutions from "@/components/KaryavattomSolutions";
import KaryavattomManagement from "@/components/KaryavattomManagement";
import KaryavattomCoverage from "@/components/KaryavattomCoverage";
import KaryavattomFAQ from "@/components/KaryavattomFAQ";
import KaryavattomCTA from "@/components/KaryavattomCTA";
export default function Home() {
  return (
    <>
    <KaryavattomHero />
    <KaryavattomChallenges />
    <KaryavattomSolutions />
    <KaryavattomManagement />
    <KaryavattomCoverage />
    <KaryavattomFAQ />
    <KaryavattomCTA/>
    </>
  );
}