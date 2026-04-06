import TechnoparkHero from "@/components/TechnoparkHero";
import TechnoparkEcosystem from "@/components/TechnoparkEcosystem";
import TechnoparkSolutions from "@/components/TechnoparkSolutions";
import TechnoparkManagement from "@/components/TechnoparkManagement";
import TechnoparkCoverage from "@/components/TechnoparkCoverage";
import TechnoparkFAQ from "@/components/TechnoparkFAQ";
import TechnoparkCTA from "@/components/TechnoparkCTA";
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