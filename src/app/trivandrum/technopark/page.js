import TechnoparkHero from "@/components/TechnoparkHero";
import TechnoparkEcosystem from "@/components/TechnoparkEcosystem";
import TechnoparkSolutions from "@/components/TechnoparkSolutions";
import TechnoparkManagement from "@/components/TechnoparkManagement";
import TechnoparkCoverage from "@/components/TechnoparkCoverage";
import TechnoparkFAQ from "@/components/TechnoparkFAQ";
import TechnoparkCTA from "@/components/TechnoparkCTA";

// ✅ SEO METADATA (Enhanced - IT Park + Commercial Targeting)
export const metadata = {
  title: "Pest Control in Technopark, Trivandrum | Kerala Pest Solutions",

  description:
    "Pest control in Technopark, Trivandrum. Bed bug removal for PG and rented accommodation, cockroach control for office canteens, rodent management for campuses. Free inspection.",

  keywords: [
    "Pest control Technopark",
    "Office pest control Technopark Trivandrum",
    "Commercial pest control Technopark",
    "IT office pest control Trivandrum",
    "Cockroach control office Technopark",
    "Rodent control office Trivandrum",
    "Pest control Trivandrum",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/trivandrum/technopark/pest-control-technopark",
  },

  openGraph: {
    title: "Pest Control in Technopark Trivandrum | Kerala Pest Solutions",
    description:
      "Pest control in Technopark, Trivandrum. Bed bug removal for PG and rented accommodation, cockroach control for office canteens, rodent management for campuses. Free inspection.",
    url: "https://keralapestsolutions.com/trivandrum/technopark/pest-control-technopark",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control in Technopark",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pest Control in Technopark Trivandrum",
    description:
      "Trusted pest control services for IT offices and commercial spaces.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <TechnoparkHero />
      <TechnoparkEcosystem />
      <TechnoparkSolutions />
      <TechnoparkManagement />
      <TechnoparkCoverage />
      <TechnoparkFAQ />
      <TechnoparkCTA />
    </>
  );
}