import PunalurHero from "@/components/PunalurHero";
import PunalurChallenges from "@/components/PunalurChallenges";
import PunalurSolutions from "@/components/PunalurSolutions";
import PunalurServicePortfolio from "@/components/PunalurServicePortfolio";
import PunalurManagement from "@/components/PunalurManagement";
import PunalurFAQ from "@/components/PunalurFAQ";
import PunalurCTA from "@/components/PunalurCTA";

// ✅ SEO METADATA (150–160 chars, location optimized)
export const metadata = {
  title: "Pest Control Services in Punalur | Reliable & Safe Solutions",
  description:
    "Professional pest control services in Punalur delivering safe and effective solutions for homes and businesses. Keep your space pest-free with experts.",
};

export default function Home() {
  return (
    <>
      <PunalurHero />
      <PunalurChallenges />
      <PunalurSolutions />
      <PunalurServicePortfolio />
      <PunalurManagement />
      <PunalurFAQ />
      <PunalurCTA />
    </>
  );
}