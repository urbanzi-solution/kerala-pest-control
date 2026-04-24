import MosquitoHero from "@/components/MosquitoHero";
import MosquitoTypes from "@/components/MosquitoTypes";
import MosquitoMethodsAndInclusions from "@/components/MosquitoMethodsAndInclusions";
import MonsoonTimingAndSafety from "@/components/MonsoonTimingAndSafety";
import ServiceFootprint from "@/components/ServiceFootprint";
import MosquitoFAQ from "@/components/MosquitoFAQ";

// ✅ SEO METADATA (Enhanced - Service Focused)
export const metadata = {
  title: "'Professional Mosquito Management in Kerala | Kerala Pest Solutions",

  description:
    "'Dengue and chikungunya prevention through professional mosquito management in Trivandrum and Kollam. Larviciding, fogging, source reduction audits. Monthly monsoon programmes.",

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
    title: "Professional Mosquito Management in Kerala | Kerala Pest Solutions",
    description:
      "'Dengue and chikungunya prevention through professional mosquito management in Trivandrum and Kollam. Larviciding, fogging, source reduction audits. Monthly monsoon programmes.",
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
    title: "Professional Mosquito Management in Kerala | Kerala Pest Solutions",
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