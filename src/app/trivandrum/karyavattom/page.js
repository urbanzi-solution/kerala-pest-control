import KaryavattomHero from "@/components/KaryavattomHero";
import KaryavattomChallenges from "@/components/KaryavattomChallenges";
import KaryavattomSolutions from "@/components/KaryavattomSolutions";
import KaryavattomManagement from "@/components/KaryavattomManagement";
import KaryavattomCoverage from "@/components/KaryavattomCoverage";
import KaryavattomFAQ from "@/components/KaryavattomFAQ";
import KaryavattomCTA from "@/components/KaryavattomCTA";

// ✅ SEO METADATA (city-specific targeting)
export const metadata = {
  title: "Pest Control Services in Karyavattom | Safe & Reliable Solutions",
  description:
    "Professional pest control services in Karyavattom offering safe and effective solutions for homes and businesses. Protect your space with expert care.",
};

export default function Home() {
  return (
    <>
      <KaryavattomHero />
      <KaryavattomChallenges />
      <KaryavattomSolutions />
      <KaryavattomManagement />
      <KaryavattomCoverage />
      <KaryavattomFAQ />
      <KaryavattomCTA />
    </>
  );
}