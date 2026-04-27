"use client";

import { usePopup } from "@/components/PopupContext"; // ✅ import
import Image from "next/image";

export default function ResidentialHero() {
  const { openPopup } = usePopup(); // ✅ use the hook
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden flex items-center">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/residential.webp"
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
          Residential Pest Control in <br />{" "}
                                         Kerala

          </h1>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <p className="text-emerald-100/70 text-[15px] leading-relaxed">
             Your home is where your family sleeps, cooks, and lives. The presence of pests in a residential property is not a cosmetic inconvenience — it is a genuine health risk. Cockroaches contaminate food surfaces. Termites destroy the structural elements that keep the building standing. Rodents carry leptospirosis and gnaw through electrical wiring. Bed bugs disrupt sleep and spread rapidly through soft furnishings.
            </p>
            <p className="text-emerald-100/70 text-[15px] leading-relaxed">
             Kerala Pest Solutions provides professional residential pest management for independent homes, apartments, villas, and housing societies across Trivandrum and Kollam. Every treatment is selected for the specific pest and property type — not a generic spray applied to every job.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-2">
            <button 
            onClick={openPopup}
            className="bg-white hover:bg-slate-100 text-black font-bold text-[13px] px-7 py-4 rounded-xl transition-colors duration-200">
              Book a Residential Pest Assessment
            </button>
            
          </div>

        </div>
      </div>

    </section>
  );
}