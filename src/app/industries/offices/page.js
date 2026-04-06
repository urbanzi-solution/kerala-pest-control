import OfficeHero from "@/components/OfficeHero";
import OfficeTargetedSolutions from "@/components/OfficeTargetSolutions";
import OfficeProgramme from "@/components/OfficeProgramme";
import OfficepestControl from "@/components/OfficepestControl";
import OfficeFAQ from "@/components/OfficeFAQ";
import OfficeServiceCTA from "@/components/OfficeServiceCTA";
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