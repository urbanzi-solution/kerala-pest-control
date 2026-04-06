import AntControlHero from "@/components/AntControlHero";
import AntFeaturesAndCTA from "@/components/AntFeaturesAndCTA";
import AntSpeciesGuide from "@/components/AntSpeciesGuide";
import AntRepellentSection from "@/components/AntRepellentSection";
import AntMethodologies from "@/components/AntMethodologies";
import AntProtocolAndCompliance from "@/components/AntProtocolAndCompliance";
import ServiceFootprint from "@/components/ServiceFootprint";
import AntFAQ from "@/components/AntFAQ";
import AntCTA from "@/components/AntCTA";
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