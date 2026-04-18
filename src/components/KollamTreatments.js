"use client";

import {
  FiShield,
  FiHome,
  FiAlertTriangle,
  FiDroplet,
  FiTarget,
  FiGrid,
} from "react-icons/fi";

export default function KollamTreatments() {
  const treatments = [
    {
      title: "Termite Treatment in Kollam",
      desc: "Kollam's laterite and alluvial soil, combined with high humidity and prevalent timber use, creates ideal conditions for infestations.",
      icon: <FiShield />, // termite protection
      points: [
        "Pre-construction soil barrier",
        "Post-construction drilling & injection",
        "In-ground baiting & wood treatment",
        "Comprehensive written inspection",
      ],
      href: "/services/termite",
    },
    {
      title: "Bed Bug Removal in Kollam",
      desc: "Specialized protocols for hospitality, including backwater tourism and budget hotels, plus PG accommodations.",
      icon: <FiHome />, // home/bed context
      points: [
        "Residual chemical & steam treatment",
        "Crack & crevice injection",
        "10–14 day follow-up elimination",
        "Commercial hotel & PG protocols",
      ],
      href: "/services/bed-bugs",
    },
    {
      title: "Cockroach Control in Kollam",
      desc: "Targeting high-pressure areas including the cashew industry, fish markets, restaurants, and food businesses.",
      icon: <FiAlertTriangle />, // contamination risk
      points: [
        "Odourless advanced gel baiting",
        "No kitchen evacuation needed",
        "Specialized drainage treatment",
        "FSSAI-compliant protocols",
      ],
      href: "/services/cockroach",
    },
    {
      title: "Mosquito Management in Kollam",
      desc: "Managing risks associated with backwater systems, paddy cultivation, and urban construction.",
      icon: <FiDroplet />, // water breeding
      points: [
        "Integrated Larviciding",
        "Advanced ULV fogging",
        "Source reduction audit",
        "Monthly monsoon programmes",
      ],
      href: "/services/mosquito",
    },
    {
      title: "Rodent Control in Kollam",
      desc: "Addressing challenges in port areas, fish markets, and cashew factories.",
      icon: <FiTarget />, // targeting rodents
      points: [
        "Tamper-resistant bait stations",
        "Fortnightly monitoring visits",
        "Professional proofing reports",
        "FSSAI-compliant documentation",
      ],
      href: "/services/rodent",
    },
    {
      title: "Ant Control in Kollam",
      desc: "Comprehensive elimination of garden ants, fire ants, and carpenter ants.",
      icon: <FiGrid />, // colony/network structure
      points: [
        "Non-repellent gel baiting",
        "Perimeter barrier spray",
        "Colony source elimination",
        "Targeted nest treatment",
      ],
      href: "/services/ant",
    },
  ];

  return (
    <section className="bg-[#d7e3ec] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl lg:text-4xl font-extrabold text-black text-center mb-14">
          Specialized Clinical Grade Treatments
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {treatments.map((item) => (
            <div
              key={item.title}
              className="bg-[#c7d6df] rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >

              {/* ONLY ICON CHANGED */}
              <div className="text-2xl mb-4 text-black">
                {item.icon}
              </div>

              <h3 className="text-[16px] font-extrabold text-slate-900 mb-2">
                {item.title}
              </h3>

              <p className="text-slate-600 text-[13px] mb-4 leading-relaxed">
                {item.desc}
              </p>

              <ul className="space-y-2 text-[12px] text-slate-700 mb-5">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-black">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href={item.href}
                className="text-[#3b7cff] text-[11px] font-bold tracking-wide uppercase mt-auto hover:underline"
              >
                FULL SERVICE DETAILS ↗
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}