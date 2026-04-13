import AntControlHero from "@/components/AntControlHero";
import AntFeaturesAndCTA from "@/components/AntFeaturesAndCTA";
import AntSpeciesGuide from "@/components/AntSpeciesGuide";
import AntRepellentSection from "@/components/AntRepellentSection";
import AntMethodologies from "@/components/AntMethodologies";
import AntProtocolAndCompliance from "@/components/AntProtocolAndCompliance";
import ServiceFootprint from "@/components/ServiceFootprint";
import AntFAQ from "@/components/AntFAQ";
import AntCTA from "@/components/AntCTA";

// ✅ SEO METADATA (service + location optimized)
export const metadata = {
  title: "Ant Control Services in Kerala | Effective & Safe Ant Removal",
  description:
    "Professional ant control services in Kerala offering safe and long-lasting solutions for homes and businesses. Eliminate infestations with expert care.",
};

export default function Home() {
  return (
    <>
      <AntControlHero />
      <AntFeaturesAndCTA />
      <AntSpeciesGuide />
      <AntRepellentSection />
      <AntMethodologies />
      <AntProtocolAndCompliance />
      <ServiceFootprint />
      <AntFAQ />
      <AntCTA />
    </>
  );
}