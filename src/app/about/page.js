import Community from "@/components/Community";
import ServiceCategories from "@/components/ServiceCategories";
import SolutionsSection from "@/components/SolutionsSection";
import StatsSection from "@/components/StatsSection";
import AboutFAQ from "@/components/AboutFAQ";
import AboutCTASection from "@/components/AboutCTASection";

export const metadata = {
  title: "About Us | Pest Control Experts in Trivandrum | Kerala Pest Solutions",
  description:
    "Learn about Kerala Pest Control Solutions in Trivandrum. Experienced pest control experts offering safe, eco-friendly treatments for homes and businesses.",

  keywords: [
    "pest control Trivandrum",
    "pest control Kerala",
    "termite control experts Trivandrum",
    "eco friendly pest control Kerala",
    "pest management company Trivandrum",
    "professional pest control services Kerala",
  ],

  authors: [{ name: "Kerala Pest Control Solutions" }],

  openGraph: {
    title: "About Kerala Pest Control Solutions | Trivandrum Pest Experts",
    description:
      "Discover Kerala Pest Control Solutions, trusted pest management experts in Trivandrum offering safe and effective pest control services.",
    url: "https://keralapestsolutions.com/about",
    siteName: "Kerala Pest Control Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Kerala Pest Control Solutions",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Kerala Pest Control Solutions",
    description:
      "Trusted pest control experts in Trivandrum providing safe and eco-friendly pest management solutions.",
    images: ["https://keralapestsolutions.com/assets/images/about-og.jpg"],
  },

  alternates: {
    canonical: "https://keralapestsolutions.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <SolutionsSection />
      <Community />
      <ServiceCategories />
      <StatsSection />
      <AboutFAQ />
      <AboutCTASection />
    </>
  );
}