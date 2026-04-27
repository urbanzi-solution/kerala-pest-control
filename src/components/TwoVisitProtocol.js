"use client";

import { usePopup } from "@/components/PopupContext"; // ✅ import

import Image from "next/image";

const visits = [
  {
    number: "01",
    title: "Visit 1: Multi-Method Strike",
    description: (
      <>
        The primary attack combines <strong>High-Pressure Steam (180°F)</strong> for instant kills,{" "}
        <strong>Crack & Crevice Injections</strong> for hidden colonies, and a{" "}
        <strong>Residual Chemical Spray</strong> to create a long-lasting lethal barrier.
      </>
    ),
    tags: ["Steam Treatment", "Crevice Injection", "Residual Barrier"],
  },
  {
    number: "02",
    title: "Visit 2: Non-Negotiable Interrupt (Day 10-14)",
    description: (
      <>
        This visit is critical to eliminate nymphs that hatched from eggs missed during Visit 1. We
        apply <strong>Insect Growth Regulators (IGR)</strong> to prevent any remaining bugs from
        maturing into reproducing adults, permanently breaking the cycle.
      </>
    ),
    tags: ["IGR Treatment", "Secondary Flush", "Cycle Termination"],
  },
];

export default function TwoVisitProtocol() {
  const { openPopup } = usePopup(); // ✅ use the popup context

  return (
    <section className="bg-[#e3e8e3] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div>
          <h2 className="text-4xl font-extrabold text-black leading-tight tracking-tight mb-6">
            Our Two-Visit<br />Elimination Protocol
          </h2>
          <p className="text-slate-600 text-[15px] leading-relaxed mb-12">
            One visit is never enough for a scientific eradication. Our mandatory protocol ensures
            that both active adults and future hatchlings are completely neutralized through a
            multi-method assault.
          </p>

          {/* Steps */}
          <div className="flex flex-col gap-10">
            {visits.map((visit) => (
              <div key={visit.number} className="flex gap-6">
                {/* Big number */}
                <span className="text-5xl font-extrabold text-black leading-none select-none shrink-0 w-14">
                  {visit.number}
                </span>

                <div className="flex flex-col gap-3">
                  <h3 className="text-[16px] font-bold text-black">{visit.title}</h3>
                  <p className="text-slate-600 text-[14px] leading-relaxed">{visit.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {visit.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-slate-300 text-slate-600 text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-5">

          {/* Image card */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[4/3] shadow-xl">
            {/*
              Replace src with your actual image, e.g. /images/professional-process.jpg
              Place it in /public/images/
            */}
            <Image
              src="/professional-process.webp"
              alt="Professional bed bug treatment process"
              fill
              loading="lazy"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-4 left-0 right-0 text-center text-white text-[14px] font-medium">
              Professional Process
            </p>
          </div>

          {/* Safety card */}
          <div className="bg-[#3b7cff] rounded-2xl p-8 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-white shrink-0"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
              <h3 className="text-white font-bold text-[16px]">Safety & Compliance</h3>
            </div>

            <p className="text-emerald-100/80 text-[13px] leading-relaxed">
              We use only government-approved, low-toxicity formulations that are safe for pets and
              children once dry. A mandatory 4-hour vacation time is required after treatment. We
              serve all areas including Technopark, Kazhakootam, Karunagappally, and Kottarakkara.
            </p>

            <button 
            onClick={openPopup}
            className="w-full bg-white hover:bg-slate-50 text-black font-bold text-[14px] py-4 rounded-xl transition-colors duration-200">
              Book Inspection Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}