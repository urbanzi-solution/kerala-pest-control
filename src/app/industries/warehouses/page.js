import WarehouseHero from "@/components/WareHouseHero";
import WareHouseHighestRiskPests from "@/components/WareHouseHighestRiskPests";
import WarehouseProgramme from "@/components/WarehouseProgramme";
import WareAuditReadyDocumentation from "@/components/WareAuditReadyDocumentation";
import WarehouseRelatedAndCTA from "@/components/WarehouseRelatedAndCTA";
import WareHouseFAQ from "@/components/WareHouseFAQ";
export default function Home() {
  return (
    <>
    <WarehouseHero />
    <WareHouseHighestRiskPests/>
    <WarehouseProgramme />
    <WareAuditReadyDocumentation/>
    <WarehouseRelatedAndCTA />
    <WareHouseFAQ />    
    </>
  );
}