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
  title: "Pest Control Services in Nalanchira | Safe & Reliable Solutions",

  description:
    "Looking for pest control in Nalanchira? Kerala Pest Solutions offers safe, eco-friendly treatments for homes, hostels, and apartments with effective protection against termites, rodents, and insects.",

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
    canonical: "https://keralapestsolutions.com/pest-control-nalanchira",
  },

  openGraph: {
    title: "Pest Control in Nalanchira | Kerala Pest Solutions",
    description:
      "Professional pest control services in Nalanchira for homes, hostels, and apartments. Safe and effective pest management solutions.",
    url: "https://keralapestsolutions.com/pest-control-nalanchira",
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