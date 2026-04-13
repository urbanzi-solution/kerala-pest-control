import ResidentialHero from "@/components/ResidentialHero";
import ResidentialDifference from "@/components/ResidentialDifference";
import ResidentialHighestRiskPests from "@/components/ResidentialHighestRiskPests";
import ResidentialTargetedSolutions from "@/components/ResidentialTargetedSolutions";
import ResidentialPropertyAndFamilySafety from "@/components/ResidentialPropertyAndFamilySafety";
import ResidentialAMCAndRelatedServices from "@/components/ResidentialAMCAndRelatedServices";
import ResidentialFAQ from "@/components/ResidentialFAQ";
import ResidentialCTA from "@/components/ResidentialCTA";

// ✅ SEO METADATA (UNIQUE for residential page)
export const metadata = {
  title: "Residential Pest Control in Trivandrum & Kollam | Safe Home Protection",

  description:
    "Trusted residential pest control in Trivandrum & Kollam. Protect your home from termites, cockroaches, and rodents with safe, expert solutions.",

  keywords: [
    "Residential pest control Trivandrum",
    "Home pest control Kollam",
    "Termite treatment home Kerala",
    "Cockroach control Trivandrum house",
    "Rodent control Kollam home",
    "Family safe pest control Kerala",
    "Home pest solutions Trivandrum",
  ],
};

export default function Home() {
  return (
    <>
      <ResidentialHero />
      <ResidentialDifference />
      <ResidentialHighestRiskPests />
      <ResidentialTargetedSolutions />
      <ResidentialPropertyAndFamilySafety />
      <ResidentialAMCAndRelatedServices />
      <ResidentialFAQ />
      <ResidentialCTA />
    </>
  );
}