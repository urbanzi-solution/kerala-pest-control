import TechnoparkHero from "@/components/TechnoparkHero";
import TechnoparkEcosystem from "@/components/TechnoparkEcosystem";
import TechnoparkSolutions from "@/components/TechnoparkSolutions";
import TechnoparkManagement from "@/components/TechnoparkManagement";
import TechnoparkCoverage from "@/components/TechnoparkCoverage";
import TechnoparkFAQ from "@/components/TechnoparkFAQ";
import TechnoparkCTA from "@/components/TechnoparkCTA";

// ✅ SEO METADATA (IT park + office-focused keywords)
export const metadata = {
  title: "Pest Control Services in Technopark Trivandrum | Office Solutions",
  description:
    "Expert pest control services in Technopark Trivandrum for IT offices and commercial spaces. Safe, discreet treatments for cockroaches, rodents and ants.",
};

export default function Home() {
  return (
    <>
      <TechnoparkHero />
      <TechnoparkEcosystem />
      <TechnoparkSolutions />
      <TechnoparkManagement />
      <TechnoparkCoverage />
      <TechnoparkFAQ />
      <TechnoparkCTA />
    </>
  );
}