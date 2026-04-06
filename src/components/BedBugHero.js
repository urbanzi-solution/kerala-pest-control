"use client";

import Image from "next/image";

export default function BedBugHero() {
  return (
    <section className="bg-[#e8f0e8] py-14 lg:py-20 px-5 lg:px-6 lg:min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-5">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 self-start border border-red-300 bg-white text-red-700 text-[9px] sm:text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full">
            <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993" />
            </svg>
            Urgent Intervention Required
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-emerald-900 leading-tight tracking-tight">
            Bed Bug Removal <br className="hidden sm:block" />
            Kerala
          </h1>

          {/* Description */}
          <p className="text-slate-700 text-[14px] lg:text-[15px] leading-relaxed">
            Bed bugs are among the most psychologically distressing and technically challenging pest problems a household or business can face. A single female lays up to five eggs per day on concealed surfaces. Their flat bodies allow them to hide in mattress seams, headboard joints, electrical sockets, and behind skirting boards — places that over-the-counter sprays cannot reach.
          </p>

          <p className="text-slate-500 text-[13px] lg:text-[14px] leading-relaxed italic">
            Kerala Pest Solutions provides systematic, evidence-based bed bug removal for homes, apartments, PG accommodations, hotels, and serviced apartments across Trivandrum and Kollam. Our mandatory two-visit protocol targets every life stage — egg, nymph, and adult — ensuring complete elimination.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-3">
            <button className="w-full sm:w-auto bg-red-800 hover:bg-red-700 text-white font-semibold text-[14px] px-6 py-3.5 rounded-xl transition">
              Book Same-Day Inspection
            </button>
            <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-emerald-900 font-semibold text-[14px] px-6 py-3.5 rounded-xl border border-slate-200 transition">
              View Scientific Process
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-4 mt-3">

            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-emerald-700" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
              </svg>
              <span className="text-[12px] text-slate-600">Govt. Approved</span>
            </div>

            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-emerald-700" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
              <span className="text-[12px] text-slate-600">IPM Certified</span>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] max-w-sm mx-auto shadow-xl">

            <Image
              src="/technician.jpg"
              alt="Certified pest control technician"
              fill
              className="object-cover object-top"
              priority
            />

            {/* Overlay testimonial */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm px-5 py-4">
              <p className="text-slate-700 text-[12px] italic leading-relaxed mb-1">
                “Their clinical approach saved our hotel’s reputation.”
              </p>
              <p className="text-emerald-700 text-[11px] font-semibold">
                — Operations Manager, Trivandrum
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}