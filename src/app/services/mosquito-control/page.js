import MosquitoHero from "@/components/MosquitoHero";
import MosquitoTypes from "@/components/MosquitoTypes";
import MosquitoMethodsAndInclusions from "@/components/MosquitoMethodsAndInclusions";
import MonsoonTimingAndSafety from "@/components/MonsoonTimingAndSafety";
import ServiceFootprint from "@/components/ServiceFootprint";
import MosquitoFAQ from "@/components/MosquitoFAQ";

// ✅ SEO METADATA (service + location optimized)
export const metadata = {
  title: "Mosquito Control Services in Kerala | Safe & Effective Solutions",
  description:
    "Professional mosquito control services in Kerala to reduce breeding and prevent diseases. Safe, effective solutions for homes and outdoor spaces.",
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