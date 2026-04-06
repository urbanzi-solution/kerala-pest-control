import ApartmentHero from "@/components/ApartmentHero";
import ApartmentDifference from "@/components/ApartmentDifference";
import ApartmentSolutions from "@/components/ApartmentSolutions";
import ApartmentRiskPest from "@/components/ApartmentRiskPest";
import ApartmentPestControl from "@/components/ApartmentPestControl";
import ApartmentFAQ from "@/components/ApartmentFAQ";
import ApartmentServiceCTA from "@/components/ApartmentServiceCTA";
export default function Home() {
  return (
    <>
    <ApartmentHero />
    <ApartmentDifference />
    <ApartmentSolutions />
    <ApartmentRiskPest />
    <ApartmentPestControl />
    <ApartmentFAQ />
    <ApartmentServiceCTA />
    </>
  );
}