"use client";

import { usePopup } from "@/components/PopupContext"; // ✅ import
import Image from "next/image";

export default function HotelHero() {
  const { openPopup } = usePopup(); // ✅ use the hook

  return (
    <section className="relative min-h-[600px] w-full overflow-hidden flex items-center">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/Hotel.webp"
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
          Pest Control for Hotels and Hospitality <br />{" "}
                                         Properties in Kerala



          </h1>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <p className="text-white text-[15px] leading-relaxed">
            A single negative online review mentioning pests can cost a hotel dozens of future bookings. In the hospitality sector, a pest incident does not just create a bad guest experience — it creates a permanent, searchable, public record of that experience. Kerala Pest Solutions understands the commercial stakes that hotels, resorts, and serviced apartments face and provides pest management services designed around discretion, documented compliance, and genuine elimination.
            </p>
            <p className="text-white text-[15px] leading-relaxed">
            We work with hotels in Trivandrum and Kollam to maintain pest-free properties through structured prevention programmes, rapid-response protocols for active incidents, and the documentation required for FSSAI and tourism board compliance.
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