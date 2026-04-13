import RestaurantsHero from "@/components/RestaurantsHero";
import RestaurantFoodBusinessStakes from "@/components/RestaurantFoodBusinessStakes";
import RestaurantTargetedSolutions from "@/components/ResraurantTargetedSolutions";
import RestaurantProgramme from "@/components/RestaurantProgramme";
import RestaurantDisruptionFreeAndChecklist from "@/components/RestaurantDisruptionFreeAndChecklist";
import RestaurantRelatedAndCTA from "@/components/RestaurantRelatedAndCTA";
import RestaurantFAQ from "@/components/RestaurantFAQ";

// ✅ SEO METADATA (UNIQUE for restaurant page)
export const metadata = {
  title: "Restaurant Pest Control in Trivandrum & Kollam | Hygienic & FSSAI Safe",

  description:
    "Professional restaurant pest control in Trivandrum & Kollam. Ensure hygiene with safe solutions for cockroaches, rodents, and kitchen pests.",

  keywords: [
    "Restaurant pest control Trivandrum",
    "Pest control Kollam restaurants",
    "Kitchen pest control Kerala",
    "Cockroach control restaurant Trivandrum",
    "Rodent control Kollam food business",
    "FSSAI pest control Kerala",
    "Food safety pest solutions Kerala",
  ],
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