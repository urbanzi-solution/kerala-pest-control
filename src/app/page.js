import TeslaCarousel from "@/components/TeslaCarousel";
import InfoBanner from "@/components/InfoBanner";
import AboutSection from "@/components/AboutSection";
import ServiceCategories from "@/components/ServiceCategories";
import PreferenceBlock from "@/components/PreferenceBlock";
import StatsSection from "@/components/StatsSection";
import ClientLogos from "@/components/ClientLogos";
import IntegrationsSection from "@/components/IntegrationsSection";
import FaqAccordion from "@/components/FaqAccordion";
import OfferForm from "@/components/OfferForm";

/* ✅ SEO METADATA (App Router way) */
export const metadata = {
  title: "Expert Pest Control Services in Trivandrum | Kerala Pest Solutions",
  description:
    "Get reliable, eco-friendly pest and termite control services in Trivandrum. Safe for homes and businesses. Guaranteed results by certified professionals.",

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
      "Expert Pest Control Services in Trivandrum | Kerala Pest Solutions",
    description:
      "Get reliable, eco-friendly pest and termite control services in Trivandrum. Safe for homes and businesses.",
    url: "https://keralapestsolutions.com",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "/assets/images/og-image.jpg", // better use local image
        width: 1200,
        height: 630,
        alt: "Professional Pest Control Services in Trivandrum",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Expert Pest Control Services in Trivandrum | Kerala Pest Solutions",
    description:
      "Eco-friendly pest control services in Trivandrum with guaranteed results.",
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

      <ServiceCategories />

      <PreferenceBlock />

      <StatsSection />

      <ClientLogos />

      <IntegrationsSection />

      <FaqAccordion />

      <OfferForm />

    </main>
  );
}