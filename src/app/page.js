import TeslaCarousel from "@/components/TeslaCarousel";
import InfoBanner from "@/components/InfoBanner";

import AboutSection from "@/components/AboutSection";
import ServiceGrid from "@/components/ServiceGrid";
import IntegrationsSection from "@/components/IntegrationsSection";
import ServiceCategories from "@/components/ServiceCategories";
import PreferenceBlock from "@/components/PreferenceBlock";
import ClientLogos from "@/components/ClientLogos";
import StatsSection from "@/components/StatsSection";


import FaqAccordion from "@/components/FaqAccordion";
import OfferForm from "@/components/OfferForm";

/* ✅ SEO METADATA (App Router way) */
export const metadata = {
  title: "'Professional Pest Control in Kerala | Kerala Pest Solutions",
  description:
"Kerala Pest Solutions provides professional pest control across Trivandrum and Kollam. Termite treatment, bed bug removal, cockroach control, rodent management and more. Call for a free inspection.",
  keywords: [
    "pest control Trivandrum",
    "termite control Trivandrum",
    "pest control Kerala",
    "sanitization services Trivandrum",
    "disinfection Kerala",
    "cockroach control",
    "rodent control",
    "mosquito control",
    "bed bug treatment",
    "residential pest control",
    "commercial pest control",
    "eco friendly pest control",
  ],

  authors: [{ name: "Your Pest Control Company" }],

  metadataBase: new URL("https://keralapestsolutions.com"),

  openGraph: {
    title:
      "'Professional Pest Control in Kerala | Kerala Pest Solutions",
    description:
      "Kerala Pest Solutions provides professional pest control across Trivandrum and Kollam. Termite treatment, bed bug removal, cockroach control, rodent management and more. Call for a free inspection.",
    url: "https://keralapestsolutions.com",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "/assets/images/og-image.jpg", // better use local image
        width: 1200,
        height: 630,
        alt: "Professional Pest Control Services in Kerala",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "'Professional Pest Control in Kerala | Kerala Pest Solutions",
    description:
      "Kerala Pest Solutions provides professional pest control across Trivandrum and Kollam. Termite treatment, bed bug removal, cockroach control, rodent management and more. Call for a free inspection.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://keralapestsolutions.com",
  },
};

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* HERO FIRST */}
      <TeslaCarousel />

      <InfoBanner />
      

      <AboutSection />
      <ServiceGrid />
      <IntegrationsSection />

      <ServiceCategories />

      <PreferenceBlock />
<ClientLogos />
      <StatsSection />

      

      

      <FaqAccordion />

      <OfferForm />

    </main>
  );
}