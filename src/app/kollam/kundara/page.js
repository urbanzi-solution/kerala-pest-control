import KundaraHero from "@/components/KundaraHero";
import KundaraChallenges from "@/components/KundaraChallenges";
import KundaraSolutions from "@/components/KundaraSolutions";
import KundaraServicePortfolio from "@/components/KundaraServicePortfolio";
import KundaraManagement from "@/components/KundaraManagement";
import KundaraFAQ from "@/components/KundaraFAQ";
import KundaraCTA from "@/components/KundaraCTA";

// ✅ SEO METADATA (Enhanced - Location Specific)
export const metadata = {
  title: "Pest Control in Kundara | Safe & Professional Services",

  description:
    "Looking for pest control in Kundara? Kerala Pest Solutions provides safe, eco-friendly treatments for termites, rodents, cockroaches, and other pests for homes and businesses.",

  keywords: [
    "Pest control Kundara",
    "Termite treatment Kundara",
    "Rodent control Kundara",
    "Home pest control Kundara",
    "Commercial pest control Kundara",
    "Cockroach control Kundara",
    "Pest control Kollam district",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/pest-control-kundara",
  },

  openGraph: {
    title: "Pest Control in Kundara | Kerala Pest Solutions",
    description:
      "Professional pest control services in Kundara for homes and businesses. Safe and effective solutions for termites, rodents, and insects.",
    url: "https://keralapestsolutions.com/pest-control-kundara",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control in Kundara",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pest Control in Kundara",
    description:
      "Trusted pest control services in Kundara for homes and businesses.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

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