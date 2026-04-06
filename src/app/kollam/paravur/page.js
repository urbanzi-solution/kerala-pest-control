import ParavurHero from "@/components/ParavurHero";
import ParavurChallenges from "@/components/ParavurChallenges";
import ParavurSolutions from "@/components/ParavurSolutions";
import ParavurServicePortfolio from "@/components/ParavurServicePortfolio";
import ParavurManagement from "@/components/ParavurManagement";
import ParavurFAQ from "@/components/ParavurFAQ";
import ParavurCTA from "@/components/ParavurCTA";
export default function Home() {
  return (
    <>
    <ParavurHero />
    <ParavurChallenges />
    <ParavurSolutions />
    <ParavurServicePortfolio />
    <ParavurManagement />
    <ParavurFAQ />
    <ParavurCTA />
    </>
  );
  }