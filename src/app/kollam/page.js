import KollamPageClient from "@/components/KollamPageClient";
import KollamChallenges from "@/components/KollamChallenges";
import KollamTreatments from "@/components/KollamTreatments";
import KollamCoverageAndWhyUs from "@/components/KollamCoverageAndWhyUs";
import ProfessionalStandards from "@/components/ProfessionalStandards";
import KollamFAQ from "@/components/KollamFAQ";
import KollamCTA from "@/components/KollamCTA";

// ✅ SEO METADATA (Enhanced - City Focused)
export const metadata = {
  title: "Pest Control in Kollam | Kerala Pest Solutions",

 description:
"Professional pest control across Kollam district. Termite treatment, bed bug removal, cockroach control, mosquito management, rodent control. Trusted local team. Free inspection."  ,
  keywords: [
    "Pest control Kollam",
    "Termite treatment Kollam",
    "Rodent control Kollam",
    "Home pest control Kollam",
    "Commercial pest control Kollam",
    "Cockroach control Kollam",
    "Pest control services Kerala",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/kollam/pest-control-kollam",
  },

  openGraph: {
    title: "Pest Control in Kollam | Kerala Pest Solutions",
    description:
      "Professional pest control across Kollam district. Termite treatment, bed bug removal, cockroach control, mosquito management, rodent control. Trusted local team. Free inspection.",
    url: "https://keralapestsolutions.com/kollam/pest-control-kollam",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control in Kollam",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pest Control in Kollam",
    description:
      "Trusted pest control services in Kollam for homes and businesses.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <KollamPageClient />
      <KollamChallenges />
      <KollamTreatments />
      <KollamCoverageAndWhyUs />
      <ProfessionalStandards />
      <KollamFAQ />
      <KollamCTA />
     
      
    </>
  );
}