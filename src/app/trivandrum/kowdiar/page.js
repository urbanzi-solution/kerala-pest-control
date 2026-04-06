import KowdiarHero from "@/components/KowdiarHero";
import KowdiarChallenges from "@/components/KowdiarChallenges";
import KowdiarSolutions from "@/components/KowdiarSolutions";
import ComprehensiveServiceRange from "@/components/ComprehensiveServiceRange";
import KowdiarManagement from "@/components/KowdiarManagement";
import KowdiarCoverage from "@/components/KowdiarCoverage";
import KowdiarFAQ from "@/components/KowdiarFAQ";
import KowdiarCTA from "@/components/KowdiarCTA";
export default function Home() {
  return (
    <>
    <KowdiarHero />
    <KowdiarChallenges />
    <KowdiarSolutions />
    <ComprehensiveServiceRange />
    <KowdiarManagement />
    <KowdiarCoverage />
    <KowdiarFAQ />
    <KowdiarCTA />
    </>
  );
}