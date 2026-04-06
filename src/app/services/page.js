
import Service from "@/components/Service";
import ServiceGrid from "@/components/ServiceGrid";
import InterventionCards from "@/components/InterventionCards";
import Process from "@/components/Process";
import ServiceTable from "@/components/ServiceTable";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import ServiceFootprint from "@/components/ServiceFootprint";
import CTASection from "@/components/CTASection";
export default function Home() {
  return (
    <>
      
      <Service />
      <ServiceGrid />
      <InterventionCards />
      <Process />
      <ServiceTable />
      <FeaturesSection />
      <FAQSection />
      <ServiceFootprint />
      <CTASection/>
    </>
  );
}