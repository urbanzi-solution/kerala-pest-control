import KowdiarHero from "@/components/KowdiarHero";
import KowdiarChallenges from "@/components/KowdiarChallenges";
import KowdiarSolutions from "@/components/KowdiarSolutions";
import ComprehensiveServiceRange from "@/components/ComprehensiveServiceRange";
import KowdiarManagement from "@/components/KowdiarManagement";
import KowdiarCoverage from "@/components/KowdiarCoverage";
import KowdiarFAQ from "@/components/KowdiarFAQ";
import KowdiarCTA from "@/components/KowdiarCTA";

// ✅ SEO METADATA (Enhanced - Premium Location Targeting)
export const metadata = {
  title: "Pest Control in Kowdiar, Trivandrum | Kerala Pest Solutions",

  description:
    "Pest control in Kowdiar, Trivandrum. Termite treatment for heritage homes, rodent control for large garden properties, mosquito management. Free inspection.",

  keywords: [
    "Pest control Kowdiar",
    "Villa pest control Kowdiar",
    "Luxury home pest control Trivandrum",
    "Termite treatment Kowdiar",
    "Rodent control Kowdiar",
    "Cockroach control Kowdiar",
    "Premium pest control Trivandrum",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/pest-control-kowdiar",
  },

  openGraph: {
    title: "Pest Control in Kowdiar, Trivandrum | Kerala Pest Solutions",
    description:
      "Pest control in Kowdiar, Trivandrum. Termite treatment for heritage homes, rodent control for large garden properties, mosquito management. Free inspection.",
    url: "https://keralapestsolutions.com/pest-control-kowdiar",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control in Kowdiar",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pest Control in Kowdiar",
    description:
      "Premium pest control solutions for villas, apartments and businesses.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <KowdiarHero />
      <KowdiarChallenges />
      <KowdiarSolutions />
      <ComprehensiveServiceRange />
      <KowdiarManagement />
      <KowdiarCoverage />
      <KowdiarFAQ />
      <KowdiarCTA />
    </>
  );
}