import RestaurantsHero from "@/components/RestaurantsHero";
import RestaurantFoodBusinessStakes from "@/components/RestaurantFoodBusinessStakes";
import RestaurantTargetedSolutions from "@/components/ResraurantTargetedSolutions";
import RestaurantProgramme from "@/components/RestaurantProgramme";
import RestaurantDisruptionFreeAndChecklist from "@/components/RestaurantDisruptionFreeAndChecklist";
import RestaurantRelatedAndCTA from "@/components/RestaurantRelatedAndCTA";
import RestaurantFAQ from "@/components/RestaurantFAQ";

// ✅ SEO METADATA (Enhanced)
export const metadata = {
  title: "'Pest Control for Restaurants Kerala | FSSAI Compliant | Kerala Pest Solutions",

  description:
    "FSSAI-compliant pest management for restaurants, canteens, and food businesses across Trivandrum and Kollam. Gel bait only — no kitchen downtime. Kerala Pest Solutions.",

  keywords: [
    "Restaurant pest control Trivandrum",
    "Pest control Kollam restaurants",
    "Kitchen pest control Kerala",
    "Cockroach control restaurant Trivandrum",
    "Rodent control Kollam food business",
    "FSSAI pest control Kerala",
    "Food safety pest solutions Kerala",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/industries/pest-control-for-restaurants",
  },

  openGraph: {
    title: "'Pest Control for Restaurants Kerala | FSSAI Compliant | Kerala Pest Solutions",
    description:
      "FSSAI-compliant pest management for restaurants, canteens, and food businesses across Trivandrum and Kollam. Gel bait only — no kitchen downtime. Kerala Pest Solutions.",
    url: "https://keralapestsolutions.com/industries/pest-control-for-restaurants",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Restaurant Pest Control Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Restaurant Pest Control in Trivandrum & Kollam",
    description:
      "Ensure hygiene and food safety with expert pest control solutions for restaurants.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <RestaurantsHero />
      <RestaurantFoodBusinessStakes />
      <RestaurantTargetedSolutions />
      <RestaurantProgramme />
      <RestaurantDisruptionFreeAndChecklist />
      <RestaurantRelatedAndCTA />
      <RestaurantFAQ />
    </>
  );
}