import KundaraHero from "@/components/KundaraHero";
import KundaraChallenges from "@/components/KundaraChallenges";
import KundaraSolutions from "@/components/KundaraSolutions";
import KundaraServicePortfolio from "@/components/KundaraServicePortfolio";
import KundaraManagement from "@/components/KundaraManagement";
import KundaraFAQ from "@/components/KundaraFAQ";
import KundaraCTA from "@/components/KundaraCTA";

// ✅ SEO METADATA (CITY-SPECIFIC)
export const metadata = {
  title: "Pest Control in Kundara | Safe & Professional Services",

  description:
    "Trusted pest control services in Kundara. Protect homes and businesses from termites, rodents, and insects with safe, effective solutions.",

  keywords: [
    "Pest control Kundara",
    "Termite treatment Kundara",
    "Rodent control Kundara",
    "Home pest control Kundara",
    "Commercial pest control Kundara",
    "Cockroach control Kundara",
    "Pest control Kollam district",
  ],
};

export default function Home() {
  return (
    <>
      <KundaraHero />
      <KundaraChallenges />
      <KundaraSolutions />
      <KundaraServicePortfolio />
      <KundaraManagement />
      <KundaraFAQ />
      <KundaraCTA />
    </>
  );
}