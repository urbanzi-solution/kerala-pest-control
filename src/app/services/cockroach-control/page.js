import CockroachHero from "@/components/CockroachHero";
import CockroachRiskAndMethods from "@/components/CockroachRiskAndMethods";
import CockroachIncludes from "@/components/CockroachIncludes";
import CommercialSection from "@/components/CommercialSection";
import ServiceFootprint from "@/components/ServiceFootprint";
import CockroachFAQ from "@/components/CockroachFAQ";
import CTAcocSection from "@/components/CTAcocSection";

// ✅ SEO METADATA (Enhanced - Service Focused)
export const metadata = {
  title: "Cockroach Control Services in Kerala | Safe & Effective Removal",

  description:
    "Looking for cockroach control services in Kerala? Kerala Pest Solutions offers safe, eco-friendly treatments to eliminate cockroach infestations in homes and businesses with long-lasting results.",

  keywords: [
    "Cockroach control Kerala",
    "Cockroach pest control Trivandrum",
    "Cockroach removal Kollam",
    "Kitchen pest control Kerala",
    "Home cockroach control Kerala",
    "Commercial cockroach control Kerala",
    "Best cockroach control service Kerala",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/cockroach-control",
  },

  openGraph: {
    title: "Cockroach Control Services in Kerala | Kerala Pest Solutions",
    description:
      "Professional cockroach control services for homes and businesses in Kerala. Safe and effective long-term solutions.",
    url: "https://keralapestsolutions.com/cockroach-control",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Cockroach Control Services Kerala",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cockroach Control Services in Kerala",
    description:
      "Safe and effective cockroach removal services for homes and businesses.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <CockroachHero />
      <CockroachRiskAndMethods />
      <CockroachIncludes />
      <CommercialSection />
      <ServiceFootprint />
      <CockroachFAQ />
      <CTAcocSection />
    </>
  );
}