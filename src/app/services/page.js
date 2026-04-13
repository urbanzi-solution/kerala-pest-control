import Service from "@/components/Service";
import ServiceGrid from "@/components/ServiceGrid";
import InterventionCards from "@/components/InterventionCards";
import Process from "@/components/Process";
import ServiceTable from "@/components/ServiceTable";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import ServiceFootprint from "@/components/ServiceFootprint";
import CTASection from "@/components/CTASection";

// ✅ SEO METADATA (broad services + location targeting)
export const metadata = {
  title: "Pest Control Services in Kerala | Complete Home & Commercial Solutions",
  description:
    "Comprehensive pest control services in Kerala for homes and businesses. Safe, effective solutions for termites, rodents, mosquitoes and more.",
};

export default function Home() {
  return (
    <main>
      <Service />
      <ServiceGrid />
      <InterventionCards />
      <Process />
      <ServiceTable />
      <FeaturesSection />
      <FAQSection />
      <ServiceFootprint />
      <CTASection />
    </main>
  );
}