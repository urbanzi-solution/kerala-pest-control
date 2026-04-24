import ApartmentHero from "@/components/ApartmentHero";
import ApartmentDifference from "@/components/ApartmentDifference";
import ApartmentSolutions from "@/components/ApartmentSolutions";
import ApartmentRiskPest from "@/components/ApartmentRiskPest";
import ApartmentPestControl from "@/components/ApartmentPestControl";
import ApartmentFAQ from "@/components/ApartmentFAQ";
import ApartmentServiceCTA from "@/components/ApartmentServiceCTA";

export const metadata = {
  title: "Pest Control for Apartments Kerala | Housing Society Specialists | Kerala Pest Solutions",

  description:
    "Specialist pest management for apartments and housing societies in Trivandrum and Kollam. Building-wide programmes for cockroaches, termites, mosquitoes and more. Kerala Pest Solutions.",

  keywords: [
    "Apartment pest control Trivandrum",
    "Pest control Kollam",
    "Home pest control Kerala",
    "Cockroach control Trivandrum",
    "Termite treatment Kollam",
    "Rodent control Kerala",
    "Apartment pest solutions Trivandrum",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/apartment-pest-control",
  },

  openGraph: {
    title: "Pest Control for Apartments Kerala | Housing Society Specialists | Kerala Pest Solutions",
    description:
      "Specialist pest management for apartments and housing societies in Trivandrum and Kollam. Building-wide programmes for cockroaches, termites, mosquitoes and more. Kerala Pest Solutions.",
    url: "https://keralapestsolutions.com/apartment-pest-control",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Apartment Pest Control Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Apartment Pest Control in Trivandrum & Kollam",
    description:
      "Professional and eco-friendly pest control services for apartments.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <ApartmentHero />
      <ApartmentDifference />
      <ApartmentSolutions />
      <ApartmentRiskPest />
      <ApartmentPestControl />
      <ApartmentFAQ />
      <ApartmentServiceCTA />
    </>
  );
}