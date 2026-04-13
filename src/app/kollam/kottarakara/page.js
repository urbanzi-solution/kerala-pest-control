import KottarakaraHero from "@/components/KottarakaraHero";
import KottarakaraChallenges from "@/components/KottarakaraChallenges";
import KottarakaraSolutions from "@/components/KottarakaraSolutions";
import KottarakkaraServicePortfolio from "@/components/KottarakkaraServicePortfolio";
import KottarakaraManagement from "@/components/KottarakaraManagement";
import KottarakaraFAQ from "@/components/KottarakaraFAQ";
import KottarakaraCTA from "@/components/KottarakaraCTA";

// ✅ SEO METADATA (CITY-SPECIFIC)
export const metadata = {
  title: "Pest Control in Kottarakkara | Safe & Expert Services",

  description:
    "Professional pest control services in Kottarakkara. Protect homes and businesses from termites, rodents, and insects with safe, effective solutions.",

  keywords: [
    "Pest control Kottarakkara",
    "Termite treatment Kottarakkara",
    "Rodent control Kottarakkara",
    "Home pest control Kottarakkara",
    "Commercial pest control Kottarakkara",
    "Cockroach control Kottarakkara",
    "Pest control Kollam district",
  ],
};

export default function Home() {
  return (
    <>
      <KottarakaraHero />
      <KottarakaraChallenges />
      <KottarakaraSolutions />
      <KottarakkaraServicePortfolio />
      <KottarakaraManagement />
      <KottarakaraFAQ />
      <KottarakaraCTA />
    </>
  );
}