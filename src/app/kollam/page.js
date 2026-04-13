import KollamHero from "@/components/KollamHero";
import KollamChallenges from "@/components/KollamChallenges";
import KollamTreatments from "@/components/KollamTreatments";
import KollamCoverageAndWhyUs from "@/components/KollamCoverageAndWhyUs";
import ProfessionalStandards from "@/components/ProfessionalStandards";
import KollamFAQ from "@/components/KollamFAQ";
import KollamCTA from "@/components/KollamCTA";

// ✅ SEO METADATA (150–160 chars, city-focused)
export const metadata = {
  title: "Pest Control Services in Kollam | Safe & Professional Solutions",
  description:
    "Expert pest control services in Kollam offering safe, reliable solutions for homes and businesses. Protect your property with trusted professionals today.",
};

export default function Home() {
  return (
    <>
      <KollamHero />
      <KollamChallenges />
      <KollamTreatments />
      <KollamCoverageAndWhyUs />
      <ProfessionalStandards />
      <KollamFAQ />
      <KollamCTA />
    </>
  );
}