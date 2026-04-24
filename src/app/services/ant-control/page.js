import AntControlHero from "@/components/AntControlHero";
import AntFeaturesAndCTA from "@/components/AntFeaturesAndCTA";
import AntSpeciesGuide from "@/components/AntSpeciesGuide";
import AntRepellentSection from "@/components/AntRepellentSection";
import AntMethodologies from "@/components/AntMethodologies";
import AntProtocolAndCompliance from "@/components/AntProtocolAndCompliance";
import ServiceFootprint from "@/components/ServiceFootprint";
import AntFAQ from "@/components/AntFAQ";
import AntCTA from "@/components/AntCTA";

// ✅ SEO METADATA (Enhanced - Service Focused)
export const metadata = {
  title: "Professional Ant Control in Kerala | Kerala Pest Solutions",

  description:
    "Non-repellent gel bait ant control for homes and businesses in Trivandrum and Kollam. Eliminates the colony, not just the trail. Fire ant, carpenter ant and Pharaoh ant specialists. Free inspection.",

  keywords: [
    "Ant control Kerala",
    "Ant pest control Trivandrum",
    "Ant removal Kerala",
    "Home ant control Kerala",
    "Commercial ant control Kerala",
    "Eco friendly ant control Kerala",
    "Best ant control service Kerala",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/ant-control",
  },

  openGraph: {
    title: "Professional Ant Control in Kerala | Kerala Pest Solutions",
    description:
      "Non-repellent gel bait ant control for homes and businesses in Trivandrum and Kollam. Eliminates the colony, not just the trail. Fire ant, carpenter ant and Pharaoh ant specialists. Free inspection.",
    url: "https://keralapestsolutions.com/ant-control",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ant Control Services Kerala",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ant Control Services in Kerala",
    description:
      "Safe and effective ant removal services for homes and businesses.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <AntControlHero />
      <AntFeaturesAndCTA />
      <AntSpeciesGuide />
      <AntRepellentSection />
      <AntMethodologies />
      <AntProtocolAndCompliance />
      <ServiceFootprint />
      <AntFAQ />
      <AntCTA />
    </>
  );
}