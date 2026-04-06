import RestaurantsHero from "@/components/RestaurantsHero";
import RestaurantFoodBusinessStakes from "@/components/RestaurantFoodBusinessStakes";
import RestaurantTargetedSolutions from "@/components/ResraurantTargetedSolutions";
import RestaurantProgramme from "@/components/RestaurantProgramme";
import RestaurantDisruptionFreeAndChecklist from "@/components/RestaurantDisruptionFreeAndChecklist";

import RestaurantRelatedAndCTA from "@/components/RestaurantRelatedAndCTA";
import RestaurantFAQ from "@/components/RestaurantFAQ";
export default function Home() {
  return (
    <>
    <RestaurantsHero />
    <RestaurantFoodBusinessStakes/>
    <RestaurantTargetedSolutions />
    <RestaurantProgramme />
    <RestaurantDisruptionFreeAndChecklist />
    
    <RestaurantRelatedAndCTA />
    <RestaurantFAQ />
    </>
  );
}