import OfficeHero from "@/components/OfficeHero";
import OfficeTargetedSolutions from "@/components/OfficeTargetSolutions";
import OfficeProgramme from "@/components/OfficeProgramme";
import OfficepestControl from "@/components/OfficepestControl";
import OfficeFAQ from "@/components/OfficeFAQ";
import OfficeServiceCTA from "@/components/OfficeServiceCTA";

// ✅ SEO METADATA (Enhanced)
export const metadata = {
  title: "Pest Control for Offices Kerala | IT Parks & Commercial Spaces | Kerala Pest Solutions",

  description:
    "'Professional pest control for offices, IT campuses, and commercial spaces in Trivandrum and Kollam. Scheduled service, zero disruption, full documentation. Kerala Pest Solutions.",

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
    title: "Pest Control for Offices Kerala | IT Parks & Commercial Spaces | Kerala Pest Solutions",
    description:
      "'Professional pest control for offices, IT campuses, and commercial spaces in Trivandrum and Kollam. Scheduled service, zero disruption, full documentation. Kerala Pest Solutions.",
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