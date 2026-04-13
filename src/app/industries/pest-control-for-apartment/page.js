import ApartmentHero from "@/components/ApartmentHero";
import ApartmentDifference from "@/components/ApartmentDifference";
import ApartmentSolutions from "@/components/ApartmentSolutions";
import ApartmentRiskPest from "@/components/ApartmentRiskPest";
import ApartmentPestControl from "@/components/ApartmentPestControl";
import ApartmentFAQ from "@/components/ApartmentFAQ";
import ApartmentServiceCTA from "@/components/ApartmentServiceCTA";


export const metadata = {
  title: "Apartment Pest Control in Trivandrum & Kollam | Safe & Expert Service",

  description:
    "Professional apartment pest control in Trivandrum & Kollam. Safe, effective solutions for cockroaches, termites, and rodents with fast service.",

  keywords: [
    "Apartment pest control Trivandrum",
    "Pest control Kollam",
    "Home pest control Kerala",
    "Cockroach control Trivandrum",
    "Termite treatment Kollam",
    "Rodent control Kerala",
    "Apartment pest solutions Trivandrum",
  ],
  
};

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