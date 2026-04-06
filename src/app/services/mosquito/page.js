import MosquitoHero from "@/components/MosquitoHero";
import MosquitoTypes from "@/components/MosquitoTypes";
import MosquitoMethodsAndInclusions from "@/components/MosquitoMethodsAndInclusions";
import MonsoonTimingAndSafety from "@/components/MonsoonTimingAndSafety";
import ServiceFootprint from "@/components/ServiceFootprint";
import MosquitoFAQ from "@/components/MosquitoFAQ";
export default function Home() {
  return (
    <>
    <MosquitoHero />
    <MosquitoTypes />
    <MosquitoMethodsAndInclusions/>
    <MonsoonTimingAndSafety />
    <ServiceFootprint />
    <MosquitoFAQ />
    </>
  );
}