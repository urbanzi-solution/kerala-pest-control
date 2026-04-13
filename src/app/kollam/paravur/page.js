import ParavurHero from "@/components/ParavurHero";
import ParavurChallenges from "@/components/ParavurChallenges";
import ParavurSolutions from "@/components/ParavurSolutions";
import ParavurServicePortfolio from "@/components/ParavurServicePortfolio";
import ParavurManagement from "@/components/ParavurManagement";
import ParavurFAQ from "@/components/ParavurFAQ";
import ParavurCTA from "@/components/ParavurCTA";

// ✅ SEO METADATA (CITY-SPECIFIC)
export const metadata = {
  title: "Pest Control in Paravur | Safe & Professional Services",

  description:
    "Reliable pest control services in Paravur. Protect homes and businesses from termites, rodents, and insects with safe, effective solutions.",

  keywords: [
    "Pest control Paravur",
    "Termite treatment Paravur",
    "Rodent control Paravur",
    "Home pest control Paravur",
    "Commercial pest control Paravur",
    "Cockroach control Paravur",
    "Pest control Kollam district",
  ],
};

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