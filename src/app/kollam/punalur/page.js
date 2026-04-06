import PunalurHero from "@/components/PunalurHero";
import PunalurChallenges from "@/components/PunalurChallenges";
import PunalurSolutions from "@/components/PunalurSolutions";
import PunalurServicePortfolio from "@/components/PunalurServicePortfolio";
import PunalurManagement from "@/components/PunalurManagement";
import PunalurFAQ from "@/components/PunalurFAQ";
import PunalurCTA from "@/components/PunalurCTA";
export default function Home() {
  return (
    <>
    <PunalurHero />
    <PunalurChallenges />
    <PunalurSolutions />
    <PunalurServicePortfolio  />
    <PunalurManagement />
    <PunalurFAQ />
    <PunalurCTA />
    </>
  );
}