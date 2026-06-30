import HeaderBlog from "@/components/HeaderBlog";
import BlogThreat from "@/components/BlogThreat";
import WhyTermitesThrive from "@/components/WhyTermitesThrive";
import TreatmentMethods from "@/components/TreatmentMethods";
import TreatmentSection from "@/components/TreatmentSection";
import TermiteTreatmentDuration from "@/components/TermiteTreatmentDuration";
import TreatmentComparison from "@/components/TreatmentComparison";
import FurnitureProtection from "@/components/FurnitureProtection";
import WarningSigns from "@/components/WarningSigns";
import CostRealitySection from "@/components/CostRealitySection";
import FinalCTA from "@/components/FinalCTA";

export default function Page() {
  return (
    <div>
        <HeaderBlog />
        <BlogThreat />
        <WhyTermitesThrive />
        <TreatmentMethods />
        <TreatmentSection />
        <TermiteTreatmentDuration />
        <TreatmentComparison />
        <FurnitureProtection />
        <WarningSigns />
        <CostRealitySection />
        <FinalCTA />
    </div>    
  );
}