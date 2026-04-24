import Service from "@/components/Service";
import ServiceGrid from "@/components/ServiceGrid";
import InterventionCards from "@/components/InterventionCards";
import Process from "@/components/Process";
import ServiceTable from "@/components/ServiceTable";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import ServiceFootprint from "@/components/ServiceFootprint";
import CTASection from "@/components/CTASection";

// ✅ SEO METADATA (Enhanced - Core Services Page)
export const metadata = {
  title: "Pest Control Services in Kerala | Kerala Pest Solutions",

  description:
"Professional pest control services for homes and businesses in Kerala. Termite treatment, bed bug removal, cockroach control, mosquito management, rodent control, ant control, and general pest control. Free inspection in Trivandrum and Kollam.",
  keywords: [
    "Pest control Kerala",
    "Pest control services Trivandrum",
    "Pest control Kollam",
    "Home pest control Kerala",
    "Commercial pest control Kerala",
    "Termite control Kerala",
    "Rodent control Kerala",
    "Mosquito control Kerala",
    "Cockroach control Kerala",
    "Best pest control company Kerala",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/pest-control-services",
  },

  openGraph: {
    title: "Pest Control Services in Kerala | Kerala Pest Solutions",
    description:
"Professional pest control services for homes and businesses in Kerala. Termite treatment, bed bug removal, cockroach control, mosquito management, rodent control, ant control, and general pest control. Free inspection in Trivandrum and Kollam.",
    url: "https://keralapestsolutions.com/pest-control-services",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control Services Kerala",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pest Control Services in Kerala",
    description:
      "Safe and reliable pest control solutions for homes and businesses.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <main>
      <Service />
      <ServiceGrid />
      <InterventionCards />
      <Process />
      <ServiceTable />
      <FeaturesSection />
      <FAQSection />
      <ServiceFootprint />
      <CTASection />
    </main>
  );
}