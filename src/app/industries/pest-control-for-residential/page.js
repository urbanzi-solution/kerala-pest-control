import ResidentialHero from "@/components/ResidentialHero";
import ResidentialDifference from "@/components/ResidentialDifference";
import ResidentialHighestRiskPests from "@/components/ResidentialHighestRiskPests";
import ResidentialTargetedSolutions from "@/components/ResidentialTargetedSolutions";
import ResidentialPropertyAndFamilySafety from "@/components/ResidentialPropertyAndFamilySafety";
import ResidentialAMCAndRelatedServices from "@/components/ResidentialAMCAndRelatedServices";
import ResidentialFAQ from "@/components/ResidentialFAQ";
import ResidentialCTA from "@/components/ResidentialCTA";

// ✅ SEO METADATA (Enhanced)
export const metadata = {
  title: "Residential Pest Control Kerala | Kerala Pest Solutions",

  description:
    "Professional residential pest control for homes and apartments across Trivandrum and Kollam. Safe for children and pets. Free inspection. Kerala Pest Solutions.",

  keywords: [
    "Residential pest control Trivandrum",
    "Home pest control Kollam",
    "Termite treatment home Kerala",
    "Cockroach control Trivandrum house",
    "Rodent control Kollam home",
    "Family safe pest control Kerala",
    "Home pest solutions Trivandrum",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/industries/pest-control-for-residential",
  },

  openGraph: {
    title: "Residential Pest Control Kerala | Kerala Pest Solutions",
    description:
      "Professional residential pest control for homes and apartments across Trivandrum and Kollam. Safe for children and pets. Free inspection. Kerala Pest Solutions.",
    url: "https://keralapestsolutions.com/industries/pest-control-for-residential",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Residential Pest Control Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Residential Pest Control in Trivandrum & Kollam",
    description:
      "Safe and eco-friendly pest control services to protect your home and family.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <ResidentialHero />
      <ResidentialDifference />
      <ResidentialHighestRiskPests />
      <ResidentialTargetedSolutions />
      <ResidentialPropertyAndFamilySafety />
      <ResidentialAMCAndRelatedServices />
      <ResidentialFAQ />
      <ResidentialCTA />
    </>
  );
}