import PattomHero from "@/components/PattomHero";
import PattomChallenges from "@/components/PattomChallenges";
import PattomSolutions from "@/components/PattomSolutions";
import ComprehensiveServiceRange from "@/components/ComprehensiveServiceRange";
import PattomManagement from "@/components/PattomManagement";
import PattomCoverage from "@/components/PattomCoverage";
import PattomFAQ from "@/components/PattomFAQ";
import PattomCTA from "@/components/PattomCTA";

// ✅ SEO METADATA (Enhanced - Residential + Commercial + Clinic Targeting)
export const metadata = {
  title: "Pest Control in Pattom, Trivandrum | Kerala Pest Solutions",

  description:
    "'Pest control in Pattom, Trivandrum. Termite treatment for older heritage homes, cockroach control, ant control. Local Trivandrum team. Free inspection",

  keywords: [
    "Pest control Pattom",
    "Clinic pest control Pattom",
    "Office pest control Pattom",
    "Home pest control Pattom",
    "Termite treatment Pattom",
    "Rodent control Pattom",
    "Cockroach control Pattom",
    "Pest control Trivandrum",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/trivandrum/pattom/pest-control-pattom",
  },

  openGraph: {
    title: "Pest Control in Pattom, Trivandrum | Kerala Pest Solutions",
    description:
      "'Pest control in Pattom, Trivandrum. Termite treatment for older heritage homes, cockroach control, ant control. Local Trivandrum team. Free inspection",
    url: "https://keralapestsolutions.com/trivandrum/pattom/pest-control-pattom",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control in Pattom",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pest Control in Pattom",
    description:
      "Trusted pest control services for homes, clinics, and offices.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <PattomHero />
      <PattomChallenges />
      <PattomSolutions />
      <ComprehensiveServiceRange />
      <PattomManagement />
      <PattomCoverage />
      <PattomFAQ />
      <PattomCTA />
    </>
  );
}