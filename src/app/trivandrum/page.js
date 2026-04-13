import TrivandrumHero from "@/components/TrivandrumHero";
import TrivandrumChallenges from "@/components/TrivandrumChallenges";
import TrivandrumTreatments from "@/components/TrivandrumTreatments";
import TrivandrumCoverageAndWhyUs from "@/components/TrivandrumCoverageAndWhyUs";
import TVMProfessionalStandards from "@/components/TVMProfessionalStandards";
import TVMFAQSection from "@/components/TVMFAQSection";
import TVMCTASection from "@/components/TVMCTASection";

// ✅ SEO METADATA (Main city page)
export const metadata = {
  title: "Pest Control Services in Trivandrum | Expert Pest Control Kerala",
  description:
    "Professional pest control services in Trivandrum for homes and businesses. Safe treatments for termites, cockroaches, rodents, ants and mosquitoes.",
};

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