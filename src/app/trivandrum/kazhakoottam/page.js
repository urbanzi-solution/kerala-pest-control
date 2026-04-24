import KazhakoottamHero from "@/components/KazhakoottamHer0";
import KazhakootamChallenges from "@/components/KazhakootamChallenges";
import KazhakootamSolutions from "@/components/KazhakootamSolutions";
import KazhakootamManagement from "@/components/KazhakootamManagement";
import KazhakootamCoverage from "@/components/KazhakootamCoverage";
import KazhakkoottamFAQ from "@/components/KazhakkoottamFAQ";
import KazhakootamCTA from "@/components/KazhakootamCTA";

// ✅ SEO METADATA (Location Specific)
export const metadata = {
  title: "Pest Control in Kazhakootam, Trivandrum | Kerala Pest Solutions",

  description:
    "Professional pest control in Kazhakootam, Trivandrum. Termite treatment for new construction, cockroach control for apartments, mosquito management during monsoon season. Free inspection.",

  keywords: [
    "Pest control Kazhakkoottam",
    "Termite treatment Kazhakkoottam",
    "Rodent control Kazhakkoottam",
    "Home pest control Kazhakkoottam",
    "Commercial pest control Kazhakkoottam",
    "Cockroach control Kazhakkoottam",
    "Pest control Trivandrum",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/pest-control-kazhakkoottam",
  },

  openGraph: {
    title: "Pest Control in Kazhakootam, Trivandrum | Kerala Pest Solutions",
    description:
      "Professional pest control in Kazhakootam, Trivandrum. Termite treatment for new construction, cockroach control for apartments, mosquito management during monsoon season. Free inspection.",
    url: "https://keralapestsolutions.com/pest-control-kazhakkoottam",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control in Kazhakootam",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pest Control in Kazhakkoottam",
    description:
      "Trusted pest control services in Kazhakkoottam for homes and businesses.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <KazhakoottamHero />
      <KazhakootamChallenges />
      <KazhakootamSolutions />
      <KazhakootamManagement />
      <KazhakootamCoverage />
      <KazhakkoottamFAQ />
      <KazhakootamCTA />
    </>
  );
}