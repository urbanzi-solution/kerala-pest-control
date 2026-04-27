"use client";

import { usePopup } from "@/components/PopupContext"; // ✅ import

import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function MosquitoHero() {
  const { openPopup } = usePopup(); // ✅ use the popup context


  return (
    <section className="bg-[#eef2f1] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Tag */}
          <p className="text-xs tracking-widest uppercase bg-gray-200 text-gray-600 inline-block px-3 py-1 rounded-full mb-4">
            Expert Vector Control
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-gray-900">Professional Mosquito</span><br />
            <span className="text-black">Management in Kerala</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-8 max-w-lg">
           Kerala’s tropical climate — warm year-round temperatures, two annual monsoon seasons, high rainfall, and extensive backwater systems — makes it one of India’s highest-risk environments for mosquito-borne disease. Dengue fever, chikungunya, and malaria are endemic to the region. During and after each monsoon season, mosquito populations can spike dramatically, turning outdoor spaces and even indoor rooms into active health risks.
          </p>

          {/* Button */}
          <button
            onClick={openPopup}
            className="bg-[#3b7cff] hover:bg-[#346fe6] text-white font-semibold px-6 py-3 rounded-xl transition flex items-center gap-2"
          >
            Get a Mosquito Management Assessment →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          
          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/mosquito.webp" // place in /public
              alt="Mosquito"
              width={450}
              height={500}
              loading="lazy"
              className="object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
            <ShieldCheck className="text-green-600" size={18} />
            <div className="text-xs">
              <p className="text-gray-500">SAFETY STATUS</p>
              <p className="font-semibold text-gray-900">WHO Grade Safety</p>
            </div>
          </div>

        </div>
      </div>

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-4 gap-6">
        
        {[
          {
            title: "Government-Approved Formulations (CIB&RC)",
            desc: "Certified non-toxic solutions compliant with central and state health standards.",
          },
          {
            title: "IPM-Trained Technicians",
            desc: "Experts specialized in Integrated Pest Management for tropical environments.",
          },
          {
            title: "Free Inspection, Written Quote",
            desc: "Transparent pricing with a comprehensive onsite site analysis.",
          },
          {
            title: "Service Report (FSSAI audits)",
            desc: "Digital documentation of every job, perfect for commercial compliance audits.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="w-10 h-10 bg-green-100 text-green-700 flex items-center justify-center rounded-lg mb-4">
              ✓
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}