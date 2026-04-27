import PunalurHero from "@/components/PunalurHero";
import PunalurChallenges from "@/components/PunalurChallenges";
import PunalurSolutions from "@/components/PunalurSolutions";
import PunalurServicePortfolio from "@/components/PunalurServicePortfolio";
import PunalurManagement from "@/components/PunalurManagement";
import PunalurFAQ from "@/components/PunalurFAQ";
import PunalurCTA from "@/components/PunalurCTA";

// ✅ SEO METADATA (Enhanced - Location Specific)
export const metadata = {
  title: "Pest Control in Punalur, Kollam | Kerala Pest Solutions",

  description:
    "Pest control in Punalur, Kollam. Termite treatment for forest-adjacent properties, rodent control, mosquito management. Free inspection.",

  keywords: [
    "Pest control Punalur",
    "Termite treatment Punalur",
    "Rodent control Punalur",
    "Home pest control Punalur",
    "Commercial pest control Punalur",
    "Cockroach control Punalur",
    "Pest control Kollam district",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/kollam/punalur/pest-control-punalur",
  },

  openGraph: {
    title: "Pest Control in Punalur, Kollam | Kerala Pest Solutions",
    description:
      "Pest control in Punalur, Kollam. Termite treatment for forest-adjacent properties, rodent control, mosquito management. Free inspection.",
    url: "https://keralapestsolutions.com/kollam/punalur/pest-control-punalur",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control in Punalur",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pest Control in Punalur",
    description:
      "Trusted pest control services in Punalur for homes and businesses.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
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