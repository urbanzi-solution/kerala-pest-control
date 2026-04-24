import WarehouseHero from "@/components/WareHouseHero";
import WareHouseHighestRiskPests from "@/components/WareHouseHighestRiskPests";
import WarehouseProgramme from "@/components/WarehouseProgramme";
import WareAuditReadyDocumentation from "@/components/WareAuditReadyDocumentation";
import WarehouseRelatedAndCTA from "@/components/WarehouseRelatedAndCTA";
import WareHouseFAQ from "@/components/WareHouseFAQ";

// ✅ SEO METADATA (Enhanced)
export const metadata = {
  title: "Pest Control for Warehouses Kerala | Rodent & Stored Product Pest Specialists | Kerala Pest Solutions",

  description:
    "'Professional pest management for warehouses, godowns, and logistics facilities in Trivandrum and Kollam. Rodent control, stored product pest management. Kerala Pest Solutions.",

  keywords: [
    "Warehouse pest control Trivandrum",
    "Pest control Kollam warehouse",
    "Storage pest control Kerala",
    "Rodent control warehouse Trivandrum",
    "Industrial pest control Kollam",
    "Warehouse hygiene pest solutions Kerala",
    "Audit ready pest control warehouse Kerala",
  ],

  alternates: {
    canonical: "https://keralapestsolutions.com/warehouse-pest-control",
  },

  openGraph: {
    title: "Pest Control for Warehouses Kerala | Rodent & Stored Product Pest Specialists | Kerala Pest Solutions",
    description:
      "'Professional pest management for warehouses, godowns, and logistics facilities in Trivandrum and Kollam. Rodent control, stored product pest management. Kerala Pest Solutions.",
    url: "https://keralapestsolutions.com/warehouse-pest-control",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Warehouse Pest Control Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Warehouse Pest Control in Trivandrum & Kollam",
    description:
      "Professional pest control solutions to keep warehouses safe, clean, and compliant.",
    images: ["https://keralapestsolutions.com/about-og.jpg"],
  },
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