import KowdiarHero from "@/components/KowdiarHero";
import KowdiarChallenges from "@/components/KowdiarChallenges";
import KowdiarSolutions from "@/components/KowdiarSolutions";
import ComprehensiveServiceRange from "@/components/ComprehensiveServiceRange";
import KowdiarManagement from "@/components/KowdiarManagement";
import KowdiarCoverage from "@/components/KowdiarCoverage";
import KowdiarFAQ from "@/components/KowdiarFAQ";
import KowdiarCTA from "@/components/KowdiarCTA";

// ✅ SEO METADATA (location-specific + premium targeting)
export const metadata = {
  title: "Pest Control Services in Kowdiar | Premium Home & Villa Solutions",
  description:
    "Expert pest control services in Kowdiar for villas, apartments, and businesses. Safe, discreet and effective solutions to protect your property.",
};

export default function Home() {
  return (
    <>
      <KowdiarHero />
      <KowdiarChallenges />
      <KowdiarSolutions />
      <ComprehensiveServiceRange />
      <KowdiarManagement />
      <KowdiarCoverage />
      <KowdiarFAQ />
      <KowdiarCTA />
    </>
  );
}