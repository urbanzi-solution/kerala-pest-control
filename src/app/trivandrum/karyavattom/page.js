import KaryavattomHero from "@/components/KaryavattomHero";
import KaryavattomChallenges from "@/components/KaryavattomChallenges";
import KaryavattomSolutions from "@/components/KaryavattomSolutions";
import KaryavattomManagement from "@/components/KaryavattomManagement";
import KaryavattomCoverage from "@/components/KaryavattomCoverage";
import KaryavattomFAQ from "@/components/KaryavattomFAQ";
import KaryavattomCTA from "@/components/KaryavattomCTA";

// ✅ SEO METADATA (Enhanced - Location Specific)
export const metadata = {
  title: "Pest Control Services in Karyavattom | Safe & Reliable Solutions",

  description:
    "Looking for pest control in Karyavattom? Kerala Pest Solutions provides safe, eco-friendly treatments for termites, rodents, cockroaches, and other pests for homes and businesses.",

  keywords: [
    "Pest control Karyavattom",
    "Termite treatment Karyavattom",
    "Rodent control Karyavattom",
    "Home pest control Karyavattom",
    "Commercial pest control Karyavattom",
    "Cockroach control Karyavattom",
    "Pest control Trivandrum",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/pest-control-karyavattom",
  },

  openGraph: {
    title: "Pest Control in Karyavattom | Kerala Pest Solutions",
    description:
      "Professional pest control services in Karyavattom for homes and businesses. Safe and effective solutions for termites, rodents, and insects.",
    url: "https://keralapestsolutions.com/pest-control-karyavattom",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control in Karyavattom",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pest Control in Karyavattom",
    description:
      "Trusted pest control services in Karyavattom for homes and businesses.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <KaryavattomHero />
      <KaryavattomChallenges />
      <KaryavattomSolutions />
      <KaryavattomManagement />
      <KaryavattomCoverage />
      <KaryavattomFAQ />
      <KaryavattomCTA />
    </>
  );
}