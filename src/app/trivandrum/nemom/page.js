import NemomHero from "@/components/NemomHero";
import NemomChallenges from "@/components/NemomChallenges";
import NemomSolutions from "@/components/NemomSolutions";
import ComprehensiveServiceRange from "@/components/ComprehensiveServiceRange";
import NemomManagement from "@/components/NemomManagement";
import NemomCoverage from "@/components/NemomCoverage";
import NemomFAQ from "@/components/NemomFAQ";
import NemomCTA from "@/components/NemomCTA";

// ✅ SEO METADATA (location-specific + suburban residential focus)
export const metadata = {
  title: "Pest Control Services in Nemom | Trusted Home Protection",
  description:
    "Reliable pest control services in Nemom for homes and villas. Safe and effective solutions to protect your family from termites, rodents and insects.",
};

export default function Home() {
  return (
    <>
      <NemomHero />
      <NemomChallenges />
      <NemomSolutions />
      <ComprehensiveServiceRange />
      <NemomManagement />
      <NemomCoverage />
      <NemomFAQ />
      <NemomCTA />
    </>
  );
}