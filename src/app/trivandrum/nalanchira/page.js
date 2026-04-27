import NalanchiraHero from "@/components/NalanchiraHero";
import NalanchiraChallenges from "@/components/NalanchiraChallenges";
import NalanchiraSolutions from "@/components/NalanchiraSolutions";
import ComprehensiveServiceRange from "@/components/ComprehensiveServiceRange";
import NalanchiraManagement from "@/components/NalanchiraManagement";
import NalanchiraCoverage from "@/components/NalanchiraCoverage";
import NalanchiraFAQ from "@/components/NalanchiraFAQ";
import NalanchiraCTA from "@/components/NalanchiraCTA";

// ✅ SEO METADATA (Enhanced - Residential + Student Area Targeting)
export const metadata = {
  title: "Pest Control in Nalanchira, Trivandrum | Kerala Pest Solutions",

  description:
    "Pest control in Nalanchira, Trivandrum. Cockroach control for dense older neighbourhood, termite treatment, rodent management. Free inspection.",

  keywords: [
    "Pest control Nalanchira",
    "Hostel pest control Nalanchira",
    "Apartment pest control Nalanchira",
    "Termite treatment Nalanchira",
    "Rodent control Nalanchira",
    "Cockroach control Nalanchira",
    "Pest control Trivandrum",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/trivandrum/nalanchira/pest-control-nalanchira",
  },

  openGraph: {
    title: "Pest Control in Nalanchira, Trivandrum | Kerala Pest Solutions",
    description:
      "Pest control in Nalanchira, Trivandrum. Cockroach control for dense older neighbourhood, termite treatment, rodent management. Free inspection.",
    url: "https://keralapestsolutions.com/trivandrum/nalanchira/pest-control-nalanchira",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control in Nalanchira",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pest Control in Nalanchira",
    description:
      "Trusted pest control services for homes, hostels, and apartments.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <NalanchiraHero />
      <NalanchiraChallenges />
      <NalanchiraSolutions />
      <ComprehensiveServiceRange />
      <NalanchiraManagement />
      <NalanchiraCoverage />
      <NalanchiraFAQ />
      <NalanchiraCTA />
    </>
  );
}