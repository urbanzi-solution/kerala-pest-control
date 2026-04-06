import KottarakaraHero from "@/components/KottarakaraHero";
import KottarakaraChallenges from "@/components/KottarakaraChallenges";
import KottarakaraSolutions from "@/components/KottarakaraSolutions";
import KottarakkaraServicePortfolio from "@/components/KottarakkaraServicePortfolio";
import KottarakaraManagement from "@/components/KottarakaraManagement";
import KottarakaraFAQ from "@/components/KottarakaraFAQ";
import KottarakaraCTA from "@/components/KottarakaraCTA";
export default function Home() {
  return (
    <>
    <KottarakaraHero />
    <KottarakaraChallenges />
    <KottarakaraSolutions />
    <KottarakkaraServicePortfolio />
    <KottarakaraManagement />
    <KottarakaraFAQ />
    <KottarakaraCTA />
    </>
  );
}