import KarunagapallyHero from "@/components/KarunagapallyHero";
import KarunagapallyChallenges from "@/components/KarunagapallyChallenges";
import KarunagapallySolutions from "@/components/KarunagapallySolutions";
import KarunagapallyServicePortfolio from "@/components/KarunagapallyServicePortfolio";
import KarunagapallyManagement from "@/components/KarunagapallyManagement";
import KarunagapallyFAQ from "@/components/KarunagapallyFAQ";
import KarunagapallyCTA from "@/components/KarunagapallyCTA";

// ✅ SEO METADATA (CITY-SPECIFIC)
export const metadata = {
  title: "Pest Control in Karunagapally | Safe & Professional Services",

  description:
    "Reliable pest control services in Karunagapally. Protect homes and businesses from termites, rodents, and insects with safe, expert solutions.",

  keywords: [
    "Pest control Karunagapally",
    "Termite treatment Karunagapally",
    "Rodent control Karunagapally",
    "Home pest control Karunagapally",
    "Commercial pest control Karunagapally",
    "Cockroach control Karunagapally",
    "Pest control services Kollam district",
  ],
};

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