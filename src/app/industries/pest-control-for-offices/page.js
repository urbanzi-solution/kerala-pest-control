import OfficeHero from "@/components/OfficeHero";
import OfficeTargetedSolutions from "@/components/OfficeTargetSolutions";
import OfficeProgramme from "@/components/OfficeProgramme";
import OfficepestControl from "@/components/OfficepestControl";
import OfficeFAQ from "@/components/OfficeFAQ";
import OfficeServiceCTA from "@/components/OfficeServiceCTA";

// ✅ SEO METADATA (UNIQUE for office page)
export const metadata = {
  title: "Office Pest Control in Trivandrum & Kollam | Safe Workplace Solutions",

  description:
    "Reliable office pest control in Trivandrum & Kollam. Protect workplaces from rodents, termites, and insects with safe, professional solutions.",

  keywords: [
    "Office pest control Trivandrum",
    "Pest control Kollam offices",
    "Commercial pest control Kerala",
    "Termite treatment office Trivandrum",
    "Rodent control Kollam office",
    "Workplace pest solutions Kerala",
    "Corporate pest control services Kerala",
  ],
};

export default function Home() {
  return (
    <>
      <OfficeHero />
      <OfficeTargetedSolutions />
      <OfficeProgramme />
      <OfficepestControl />
      <OfficeFAQ />
      <OfficeServiceCTA />
    </>
  );
}