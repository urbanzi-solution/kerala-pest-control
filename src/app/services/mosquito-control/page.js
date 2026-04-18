import MosquitoHero from "@/components/MosquitoHero";
import MosquitoTypes from "@/components/MosquitoTypes";
import MosquitoMethodsAndInclusions from "@/components/MosquitoMethodsAndInclusions";
import MonsoonTimingAndSafety from "@/components/MonsoonTimingAndSafety";
import ServiceFootprint from "@/components/ServiceFootprint";
import MosquitoFAQ from "@/components/MosquitoFAQ";

// ✅ SEO METADATA (Enhanced - Service Focused)
export const metadata = {
  title: "Mosquito Control Services in Kerala | Safe & Effective Solutions",

  description:
    "Looking for mosquito control services in Kerala? Kerala Pest Solutions provides safe, eco-friendly treatments to reduce breeding and prevent mosquito-borne diseases in homes and outdoor spaces.",

  keywords: [
    "Mosquito control Kerala",
    "Mosquito pest control Trivandrum",
    "Mosquito control Kollam",
    "Outdoor mosquito control Kerala",
    "Mosquito treatment Kerala",
    "Dengue mosquito control Kerala",
    "Best mosquito control service Kerala",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/mosquito-control",
  },

  openGraph: {
    title: "Mosquito Control Services in Kerala | Kerala Pest Solutions",
    description:
      "Professional mosquito control solutions for homes and outdoor spaces. Safe and effective disease prevention.",
    url: "https://keralapestsolutions.com/mosquito-control",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mosquito Control Services Kerala",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mosquito Control Services in Kerala",
    description:
      "Safe and effective mosquito control for homes and outdoor areas.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <MosquitoHero />
      <MosquitoTypes />
      <MosquitoMethodsAndInclusions />
      <MonsoonTimingAndSafety />
      <ServiceFootprint />
      <MosquitoFAQ />
    </>
  );
}