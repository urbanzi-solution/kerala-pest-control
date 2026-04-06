import CockroachHero from "@/components/CockroachHero";
import CockroachRiskAndMethods from "@/components/CockroachRiskAndMethods";
import CockroachIncludes from "@/components/CockroachIncludes";
import CommercialSection from "@/components/CommercialSection";
import ServiceFootprint from "@/components/ServiceFootprint";
import CockroachFAQ from "@/components/CockroachFAQ";
import CTAcocSection from "@/components/CTAcocSection";

export default function Home() {
  return (
    <>
    <CockroachHero />
    <CockroachRiskAndMethods />
    <CockroachIncludes />
    <CommercialSection />
    <ServiceFootprint />
    <CockroachFAQ />
    <CTAcocSection />
    
    </>
  );
}