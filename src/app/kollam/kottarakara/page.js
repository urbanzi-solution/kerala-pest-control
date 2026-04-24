import KottarakaraHero from "@/components/KottarakaraHero";
import KottarakaraChallenges from "@/components/KottarakaraChallenges";
import KottarakaraSolutions from "@/components/KottarakaraSolutions";
import KottarakkaraServicePortfolio from "@/components/KottarakkaraServicePortfolio";
import KottarakaraManagement from "@/components/KottarakaraManagement";
import KottarakaraFAQ from "@/components/KottarakaraFAQ";
import KottarakaraCTA from "@/components/KottarakaraCTA";

// ✅ SEO METADATA (Enhanced - Location Specific)
export const metadata = {
  title: "Pest Control in Kottarakkara, Kollam | Kerala Pest Solutions",

  description:
    "Pest control in Kottarakkara, Kollam. Termite treatment for older homes, cockroach control, rodent management. Professional IPM service. Free inspection.",

  keywords: [
    "Pest control Kottarakkara",
    "Termite treatment Kottarakkara",
    "Rodent control Kottarakkara",
    "Home pest control Kottarakkara",
    "Commercial pest control Kottarakkara",
    "Cockroach control Kottarakkara",
    "Pest control Kollam district",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/pest-control-kottarakkara",
  },

  openGraph: {
    title: "Pest Control in Kottarakkara, Kollam | Kerala Pest Solutions",
    description:
      "Pest control in Kottarakkara, Kollam. Termite treatment for older homes, cockroach control, rodent management. Professional IPM service. Free inspection.",
    url: "https://keralapestsolutions.com/pest-control-kottarakkara",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control in Kottarakkara",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pest Control in Kottarakkara",
    description:
      "Trusted pest control services in Kottarakkara for homes and businesses.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

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