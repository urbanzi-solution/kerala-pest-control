import SreekaryamHero from "@/components/SreekaryamHero";
import SreekaryamChallenges from "@/components/SreekaryamChallenges";
import SreekaryamSolutions from "@/components/SreekaryamSolutions";
import ComprehensiveServiceRange from "@/components/ComprehensiveServiceRange";
import SreekaryamManagement from "@/components/SreekaryamManagement";
import SreekaryamCoverage from "@/components/SreekaryamCoverage";
import SreekaryamFAQ from "@/components/SreekaryamFAQ";
import SreekaryamCTA from "@/components/SreekaryamCTA";

// ✅ SEO METADATA (location-specific + student/rental + residential focus)
export const metadata = {
  title: "Pest Control Services in Sreekaryam | Home & Hostel Solutions",
  description:
    "Professional pest control services in Sreekaryam for homes, hostels and rentals. Safe treatments to eliminate bed bugs, cockroaches and rodents effectively.",
};

export default function Home() {
  return (
    <>
      <SreekaryamHero />
      <SreekaryamChallenges />
      <SreekaryamSolutions />
      <ComprehensiveServiceRange />
      <SreekaryamManagement />
      <SreekaryamCoverage />
      <SreekaryamFAQ />
      <SreekaryamCTA />
    </>
  );
}