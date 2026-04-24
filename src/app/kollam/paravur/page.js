import ParavurHero from "@/components/ParavurHero";
import ParavurChallenges from "@/components/ParavurChallenges";
import ParavurSolutions from "@/components/ParavurSolutions";
import ParavurServicePortfolio from "@/components/ParavurServicePortfolio";
import ParavurManagement from "@/components/ParavurManagement";
import ParavurFAQ from "@/components/ParavurFAQ";
import ParavurCTA from "@/components/ParavurCTA";

// ✅ SEO METADATA (Enhanced - Location Specific)
export const metadata = {
  title: "'Pest Control in Paravur, Kollam | Kerala Pest Solutions",

  description:
    "Pest control in Paravur, Kollam. Mosquito management near Ashtamudi Lake, termite treatment, cockroach control. Free inspection.",

  keywords: [
    "Pest control Paravur",
    "Termite treatment Paravur",
    "Rodent control Paravur",
    "Home pest control Paravur",
    "Commercial pest control Paravur",
    "Cockroach control Paravur",
    "Pest control Kollam district",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/pest-control-paravur",
  },

  openGraph: {
    title: "'Pest Control in Paravur, Kollam | Kerala Pest Solutions",
    description:
      "Pest control in Paravur, Kollam. Mosquito management near Ashtamudi Lake, termite treatment, cockroach control. Free inspection.",
    url: "https://keralapestsolutions.com/pest-control-paravur",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control in Paravur",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pest Control in Paravur",
    description:
      "Trusted pest control services in Paravur for homes and businesses.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <ParavurHero />
      <ParavurChallenges />
      <ParavurSolutions />
      <ParavurServicePortfolio />
      <ParavurManagement />
      <ParavurFAQ />
      <ParavurCTA />
    </>
  );
}