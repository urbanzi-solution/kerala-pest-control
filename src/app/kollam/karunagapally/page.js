import KarunagapallyHero from "@/components/KarunagapallyHero";
import KarunagapallyChallenges from "@/components/KarunagapallyChallenges";
import KarunagapallySolutions from "@/components/KarunagapallySolutions";
import KarunagapallyServicePortfolio from "@/components/KarunagapallyServicePortfolio";
import KarunagapallyManagement from "@/components/KarunagapallyManagement";
import KarunagapallyFAQ from "@/components/KarunagapallyFAQ";
import KarunagapallyCTA from "@/components/KarunagapallyCTA";
export default function Home() {
  return (
    <>
    <KarunagapallyHero />
    <KarunagapallyChallenges />
    <KarunagapallySolutions />
    <KarunagapallyServicePortfolio />
    <KarunagapallyManagement />
    <KarunagapallyFAQ />
    <KarunagapallyCTA />
    </>
  );
}