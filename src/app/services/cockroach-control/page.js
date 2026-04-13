import CockroachHero from "@/components/CockroachHero";
import CockroachRiskAndMethods from "@/components/CockroachRiskAndMethods";
import CockroachIncludes from "@/components/CockroachIncludes";
import CommercialSection from "@/components/CommercialSection";
import ServiceFootprint from "@/components/ServiceFootprint";
import CockroachFAQ from "@/components/CockroachFAQ";
import CTAcocSection from "@/components/CTAcocSection";

// ✅ SEO METADATA (service + location optimized)
export const metadata = {
  title: "Cockroach Control Services in Kerala | Safe & Effective Removal",
  description:
    "Expert cockroach control services in Kerala offering safe, long-lasting solutions for homes and businesses. Eliminate infestations with trusted professionals.",
};

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