import OfficeHero from "@/components/OfficeHero";
import OfficeTargetedSolutions from "@/components/OfficeTargetSolutions";
import OfficeProgramme from "@/components/OfficeProgramme";
import OfficepestControl from "@/components/OfficepestControl";
import OfficeFAQ from "@/components/OfficeFAQ";
import OfficeServiceCTA from "@/components/OfficeServiceCTA";

// ✅ SEO METADATA (Enhanced)
export const metadata = {
  title: "Office Pest Control in Trivandrum & Kollam | Safe Workplace Solutions",

  description:
    "Looking for office pest control in Trivandrum & Kollam? Kerala Pest Solutions provides safe, professional treatments to protect workplaces from rodents, termites, and insects.",

  keywords: [
    "Office pest control Trivandrum",
    "Pest control Kollam offices",
    "Commercial pest control Kerala",
    "Termite treatment office Trivandrum",
    "Rodent control Kollam office",
    "Workplace pest solutions Kerala",
    "Corporate pest control services Kerala",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/office-pest-control",
  },

  openGraph: {
    title: "Office Pest Control in Trivandrum & Kollam",
    description:
      "Professional pest control services for offices. Keep your workplace safe from rodents, termites, and insects.",
    url: "https://keralapestsolutions.com/office-pest-control",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Office Pest Control Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Office Pest Control in Trivandrum & Kollam",
    description:
      "Safe and reliable pest control solutions for offices and workplaces.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <OfficeHero />
      <OfficeTargetedSolutions />
      <OfficeProgramme />
      <OfficepestControl />
      <OfficeFAQ />
      <OfficeServiceCTA />
    </>
  );
}