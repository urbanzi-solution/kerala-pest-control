import TrivandrumPageClient from "@/components/TrivandrumPageClient";
import TrivandrumChallenges from "@/components/TrivandrumChallenges";
import TrivandrumTreatments from "@/components/TrivandrumTreatments";
import TrivandrumCoverageAndWhyUs from "@/components/TrivandrumCoverageAndWhyUs";
import TVMProfessionalStandards from "@/components/TVMProfessionalStandards";
import TVMFAQSection from "@/components/TVMFAQSection";
import TVMCTASection from "@/components/TVMCTASection";


// ✅ SEO METADATA (Enhanced - Main City Authority Page)
export const metadata = {
  title: "Pest Control in Trivandrum | Kerala Pest Solutions",

 description:
"Professional pest control across Trivandrum. Termite treatment, bed bug removal, cockroach control, mosquito management, rodent control, and ant control. Local office. Free inspection.",
  keywords: [
    "Pest control Trivandrum",
    "Pest control Thiruvananthapuram",
    "Termite treatment Trivandrum",
    "Cockroach control Trivandrum",
    "Rodent control Trivandrum",
    "Mosquito control Trivandrum",
    "Best pest control services Trivandrum",
    "Pest control Kerala",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/pest-control-trivandrum",
  },

  openGraph: {
    title: "Pest Control in Trivandrum | Kerala Pest Solutions",
    description:
"Professional pest control across Trivandrum. Termite treatment, bed bug removal, cockroach control, mosquito management, rodent control, and ant control. Local office. Free inspection.",
    url: "https://keralapestsolutions.com/pest-control-trivandrum",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control in Trivandrum",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pest Control in Trivandrum",
    description:
      "Professional pest control services for homes and businesses.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
     <TrivandrumPageClient />
      <TrivandrumChallenges />
      <TrivandrumTreatments />
      <TrivandrumCoverageAndWhyUs />
      <TVMProfessionalStandards />
      <TVMFAQSection />
      <TVMCTASection />
       
    </>
  );
}