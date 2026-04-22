import KollamPageClient from "@/components/KollamPageClient";
import KollamChallenges from "@/components/KollamChallenges";
import KollamTreatments from "@/components/KollamTreatments";
import KollamCoverageAndWhyUs from "@/components/KollamCoverageAndWhyUs";
import ProfessionalStandards from "@/components/ProfessionalStandards";
import KollamFAQ from "@/components/KollamFAQ";
import KollamCTA from "@/components/KollamCTA";

// ✅ SEO METADATA (Enhanced - City Focused)
export const metadata = {
  title: "Pest Control Services in Kollam | Safe & Professional Solutions",

 description:
"Reliable pest control services in Kollam for homes and businesses. Get expert treatment for termites, rodents, and cockroaches with safe, long-lasting protection."  ,
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
    canonical: "https://keralapestsolutions.com/pest-control-kollam",
  },

  openGraph: {
    title: "Pest Control Services in Kollam | Kerala Pest Solutions",
    description:
      "Professional pest control services in Kollam for homes and businesses. Safe and effective solutions for termites, rodents, and insects.",
    url: "https://keralapestsolutions.com/pest-control-kollam",
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
    title: "Pest Control Services in Kollam",
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