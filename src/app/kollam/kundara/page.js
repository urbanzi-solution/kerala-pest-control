import KundaraHero from "@/components/KundaraHero";
import KundaraChallenges from "@/components/KundaraChallenges";
import KundaraSolutions from "@/components/KundaraSolutions";
import KundaraServicePortfolio from "@/components/KundaraServicePortfolio";
import KundaraManagement from "@/components/KundaraManagement";
import KundaraFAQ from "@/components/KundaraFAQ";
import KundaraCTA from "@/components/KundaraCTA";
export default function Home() {
  return (
    <>
    <KundaraHero />
    <KundaraChallenges />
    <KundaraSolutions />
    <KundaraServicePortfolio />
    <KundaraManagement />
    <KundaraFAQ />
    <KundaraCTA />
    </>
  );
}