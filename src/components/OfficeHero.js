 "use client";

import { usePopup } from "@/components/PopupContext"; // ✅ import
 import Image from "next/image";

export default function OfficeHero() {
  const { openPopup } = usePopup(); // ✅ use the hook
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden flex items-center">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/Office.webp"
          alt="Warehouse interior"
          fill
          loading="lazy"
  
          className="object-cover object-center"
        />
        {/* Dark green overlay */}
        <div className="absolute inset-0 bg-emerald-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl flex flex-col gap-6">

          {/* Badge */}
          <span className="inline-flex self-start border border-blue-700 text-blue-100 text-[10px] font-bold tracking-[0.22em] uppercase px-4 py-2 rounded-full">
            Industrial Precision
          </span>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
          Control Pest Control for Offices and Commercial <br />{" "}
                                         Spaces in Kerala


          </h1>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <p className="text-white text-[15px] leading-relaxed">
             A pest sighting in a workplace creates an immediate health and safety concern, disrupts productivity, and can damage client confidence if witnessed during a business meeting or site visit. In Trivandrum, where a large proportion of commercial property is occupied by IT companies, financial services, and government offices, the expectation of a professionally maintained workplace environment is high.
            </p>
            <p className="text-white text-[15px] leading-relaxed">
            Kerala Pest Solutions provides scheduled, documented pest management for offices, IT campuses, coworking spaces, banks, and commercial buildings across Trivandrum and Kollam. Our service is structured for minimal disruption: treatments are carried out during non-working hours where possible, all products are odourless, and every visit is documented.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-2">
            <button 
             onClick={openPopup}
             className="bg-white hover:bg-slate-100 text-black font-bold text-[13px] px-7 py-4 rounded-xl transition-colors duration-200">
              Book a office Pest Assessment
            </button>
           
          </div>

        </div>
      </div>

    </section>
  );
}