import PattomHero from "@/components/PattomHero";
import PattomChallenges from "@/components/PattomChallenges";
import PattomSolutions from "@/components/PattomSolutions";
import ComprehensiveServiceRange from "@/components/ComprehensiveServiceRange";
import PattomManagement from "@/components/PattomManagement";
import PattomCoverage from "@/components/PattomCoverage";
import PattomFAQ from "@/components/PattomFAQ";
import PattomCTA from "@/components/PattomCTA";

// ✅ SEO METADATA (location-specific + hospital/commercial + residential mix)
export const metadata = {
  title: "Pest Control Services in Pattom | Home & Commercial Solutions",
  description:
    "Expert pest control services in Pattom for homes, clinics, and offices. Safe and effective solutions to eliminate termites, cockroaches and rodents.",
};

export default function Home() {
  return (
    <>
      <PattomHero />
      <PattomChallenges />
      <PattomSolutions />
      <ComprehensiveServiceRange />
      <PattomManagement />
      <PattomCoverage />
      <PattomFAQ />
      <PattomCTA />
    </>
  );
}