import PunalurHero from "@/components/PunalurHero";
import PunalurChallenges from "@/components/PunalurChallenges";
import PunalurSolutions from "@/components/PunalurSolutions";
import PunalurServicePortfolio from "@/components/PunalurServicePortfolio";
import PunalurManagement from "@/components/PunalurManagement";
import PunalurFAQ from "@/components/PunalurFAQ";
import PunalurCTA from "@/components/PunalurCTA";

// ✅ SEO METADATA (Enhanced - Location Specific)
export const metadata = {
  title: "Pest Control Services in Punalur | Reliable & Safe Solutions",

  description:
    "Looking for pest control in Punalur? Kerala Pest Solutions offers safe, eco-friendly treatments for termites, rodents, cockroaches, and other pests for homes and businesses.",

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
    canonical: "https://keralapestsolutions.com/pest-control-punalur",
  },

  openGraph: {
    title: "Pest Control in Punalur | Kerala Pest Solutions",
    description:
      "Professional pest control services in Punalur for homes and businesses. Safe and effective solutions for termites, rodents, and insects.",
    url: "https://keralapestsolutions.com/pest-control-punalur",
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