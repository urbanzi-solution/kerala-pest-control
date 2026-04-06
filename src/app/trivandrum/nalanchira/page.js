import NalanchiraHero from "@/components/NalanchiraHero";
import NalanchiraChallenges from "@/components/NalanchiraChallenges";
import NalanchiraSolutions from "@/components/NalanchiraSolutions";
import ComprehensiveServiceRange from "@/components/ComprehensiveServiceRange";
import NalanchiraManagement from "@/components/NalanchiraManagement";
import NalanchiraCoverage from "@/components/NalanchiraCoverage";
import NalanchiraFAQ from "@/components/NalanchiraFAQ";
import NalanchiraCTA from "@/components/NalanchiraCTA";
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