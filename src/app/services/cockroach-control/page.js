import CockroachHero from "@/components/CockroachHero";
import CockroachRiskAndMethods from "@/components/CockroachRiskAndMethods";
import CockroachIncludes from "@/components/CockroachIncludes";
import CommercialSection from "@/components/CommercialSection";
import ServiceFootprint from "@/components/ServiceFootprint";
import CockroachFAQ from "@/components/CockroachFAQ";
import CTAcocSection from "@/components/CTAcocSection";

// ✅ SEO METADATA (Enhanced - Service Focused)
export const metadata = {
  title: "Professional Cockroach Control in Kerala | Kerala Pest Solutions",

  description:
    "Gel bait cockroach control for homes, kitchens, and restaurants in Trivandrum and Kollam. Odourless, no evacuation required. FSSAI-compliant documentation. Free inspection.",

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
    title: "Professional Cockroach Control in Kerala | Kerala Pest Solutions",
    description:
      "Gel bait cockroach control for homes, kitchens, and restaurants in Trivandrum and Kollam. Odourless, no evacuation required. FSSAI-compliant documentation. Free inspection.",
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
    title: "Professional Cockroach Control in Kerala | Kerala Pest Solutions",
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