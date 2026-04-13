import WarehouseHero from "@/components/WareHouseHero";
import WareHouseHighestRiskPests from "@/components/WareHouseHighestRiskPests";
import WarehouseProgramme from "@/components/WarehouseProgramme";
import WareAuditReadyDocumentation from "@/components/WareAuditReadyDocumentation";
import WarehouseRelatedAndCTA from "@/components/WarehouseRelatedAndCTA";
import WareHouseFAQ from "@/components/WareHouseFAQ";

// ✅ SEO METADATA (UNIQUE for warehouse page)
export const metadata = {
  title: "Warehouse Pest Control in Trivandrum & Kollam | Safe Storage Solutions",

  description:
    "Expert warehouse pest control in Trivandrum & Kollam. Protect goods from rodents, insects, and contamination with safe, audit-ready solutions.",

  keywords: [
    "Warehouse pest control Trivandrum",
    "Pest control Kollam warehouse",
    "Storage pest control Kerala",
    "Rodent control warehouse Trivandrum",
    "Industrial pest control Kollam",
    "Warehouse hygiene pest solutions Kerala",
    "Audit ready pest control warehouse Kerala",
  ],
};

export default function Home() {
  return (
    <>
      <WarehouseHero />
      <WareHouseHighestRiskPests />
      <WarehouseProgramme />
      <WareAuditReadyDocumentation />
      <WarehouseRelatedAndCTA />
      <WareHouseFAQ />
    </>
  );
}