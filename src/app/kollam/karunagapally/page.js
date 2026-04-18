import KarunagapallyHero from "@/components/KarunagapallyHero";
import KarunagapallyChallenges from "@/components/KarunagapallyChallenges";
import KarunagapallySolutions from "@/components/KarunagapallySolutions";
import KarunagapallyServicePortfolio from "@/components/KarunagapallyServicePortfolio";
import KarunagapallyManagement from "@/components/KarunagapallyManagement";
import KarunagapallyFAQ from "@/components/KarunagapallyFAQ";
import KarunagapallyCTA from "@/components/KarunagapallyCTA";

// ✅ SEO METADATA (Enhanced - Location Specific)
export const metadata = {
  title: "Pest Control in Karunagapally | Safe & Professional Services",

  description:
    "Looking for pest control in Karunagapally? Kerala Pest Solutions offers safe, eco-friendly treatments for termites, rodents, cockroaches, and more for homes and businesses.",

  keywords: [
    "Pest control Karunagapally",
    "Termite treatment Karunagapally",
    "Rodent control Karunagapally",
    "Home pest control Karunagapally",
    "Commercial pest control Karunagapally",
    "Cockroach control Karunagapally",
    "Pest control services Kollam district",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/pest-control-karunagapally",
  },

  openGraph: {
    title: "Pest Control in Karunagapally | Kerala Pest Solutions",
    description:
      "Professional pest control services in Karunagapally for homes and businesses. Safe and effective solutions for termites, rodents, and insects.",
    url: "https://keralapestsolutions.com/pest-control-karunagapally",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control in Karunagapally",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pest Control in Karunagapally",
    description:
      "Trusted pest control services in Karunagapally for homes and businesses.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <KarunagapallyHero />
      <KarunagapallyChallenges />
      <KarunagapallySolutions />
      <KarunagapallyServicePortfolio />
      <KarunagapallyManagement />
      <KarunagapallyFAQ />
      <KarunagapallyCTA />
    </>
  );
}