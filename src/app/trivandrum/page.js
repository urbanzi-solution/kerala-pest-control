import TrivandrumHero from "@/components/TrivandrumHero";
import TrivandrumChallenges from "@/components/TrivandrumChallenges";
import TrivandrumTreatments from "@/components/TrivandrumTreatments";
import TrivandrumCoverageAndWhyUs from "@/components/TrivandrumCoverageAndWhyUs";
import TVMProfessionalStandards from "@/components/TVMProfessionalStandards";
import TVMFAQSection from "@/components/TVMFAQSection";
import TVMCTASection from "@/components/TVMCTASection";
export default function Home() {
  return (
    <>
    <TrivandrumHero />
    <TrivandrumChallenges />
    <TrivandrumTreatments />
    <TrivandrumCoverageAndWhyUs />
    <TVMProfessionalStandards />
    <TVMFAQSection />
    <TVMCTASection />
    </>
  );
}