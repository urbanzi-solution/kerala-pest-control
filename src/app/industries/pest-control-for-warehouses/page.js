import WarehouseHero from "@/components/WareHouseHero";
import WareHouseHighestRiskPests from "@/components/WareHouseHighestRiskPests";
import WarehouseProgramme from "@/components/WarehouseProgramme";
import WareAuditReadyDocumentation from "@/components/WareAuditReadyDocumentation";
import WarehouseRelatedAndCTA from "@/components/WarehouseRelatedAndCTA";
import WareHouseFAQ from "@/components/WareHouseFAQ";

// ✅ SEO METADATA (Enhanced)
export const metadata = {
  title: "Warehouse Pest Control in Trivandrum & Kollam | Safe Storage Solutions",

  description:
    "Looking for warehouse pest control in Trivandrum & Kollam? Kerala Pest Solutions provides safe, audit-ready treatments to protect stored goods from rodents, insects, and contamination.",

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
    title: "Warehouse Pest Control in Trivandrum & Kollam",
    description:
      "Protect your warehouse and stored goods with safe, audit-ready pest control solutions.",
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