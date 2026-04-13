import NalanchiraHero from "@/components/NalanchiraHero";
import NalanchiraChallenges from "@/components/NalanchiraChallenges";
import NalanchiraSolutions from "@/components/NalanchiraSolutions";
import ComprehensiveServiceRange from "@/components/ComprehensiveServiceRange";
import NalanchiraManagement from "@/components/NalanchiraManagement";
import NalanchiraCoverage from "@/components/NalanchiraCoverage";
import NalanchiraFAQ from "@/components/NalanchiraFAQ";
import NalanchiraCTA from "@/components/NalanchiraCTA";

// ✅ SEO METADATA (location-specific + residential + student focus)
export const metadata = {
  title: "Pest Control Services in Nalanchira | Safe & Reliable Solutions",
  description:
    "Professional pest control services in Nalanchira for homes, hostels, and apartments. Safe, effective treatments to keep your space pest-free.",
};

export default function Home() {
  return (
    <>
      <NalanchiraHero />
      <NalanchiraChallenges />
      <NalanchiraSolutions />
      <ComprehensiveServiceRange />
      <NalanchiraManagement />
      <NalanchiraCoverage />
      <NalanchiraFAQ />
      <NalanchiraCTA />
    </>
  );
}