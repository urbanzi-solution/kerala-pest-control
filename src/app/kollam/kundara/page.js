import KundaraHero from "@/components/KundaraHero";
import KundaraChallenges from "@/components/KundaraChallenges";
import KundaraSolutions from "@/components/KundaraSolutions";
import KundaraServicePortfolio from "@/components/KundaraServicePortfolio";
import KundaraManagement from "@/components/KundaraManagement";
import KundaraFAQ from "@/components/KundaraFAQ";
import KundaraCTA from "@/components/KundaraCTA";

// ✅ SEO METADATA (Enhanced - Location Specific)
export const metadata = {
  title: "Pest Control in Kundara, Kollam | Kerala Pest Solutions",

  description:
    "Pest control in Kundara, Kollam. Termite treatment, cockroach control, general pest management. Professional IPM service. Free inspection.",

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
    title: "Pest Control in Kundara, Kollam | Kerala Pest Solutions",
    description:
      "Pest control in Kundara, Kollam. Termite treatment, cockroach control, general pest management. Professional IPM service. Free inspection.",
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