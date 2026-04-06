import KollamHero from "@/components/KollamHero"
import KollamChallenges from "@/components/KollamChallenges";
import KollamTreatments from "@/components/KollamTreatments";
import KollamCoverageAndWhyUs from "@/components/KollamCoverageAndWhyUs";
import ProfessionalStandards from "@/components/ProfessionalStandards";
import KollamFAQ from "@/components/KollamFAQ";
import KollamCTA from "@/components/KollamCTA";
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