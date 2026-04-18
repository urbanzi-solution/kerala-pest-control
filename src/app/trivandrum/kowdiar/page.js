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
  title: "Pest Control Services in Kowdiar | Premium Home & Villa Solutions",

  description:
    "Looking for pest control in Kowdiar? Kerala Pest Solutions offers premium, eco-friendly treatments for villas, apartments, and businesses with safe, discreet and long-lasting results.",

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
    title: "Pest Control in Kowdiar | Premium Solutions by Kerala Pest Solutions",
    description:
      "Premium pest control services in Kowdiar for villas and apartments. Safe, discreet and effective solutions for long-term protection.",
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