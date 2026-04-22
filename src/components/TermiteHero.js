"use client";

import { usePopup } from "@/components/PopupContext"; // ✅ import

import Image from "next/image";

export default function TermiteHero() {
  const { openPopup } = usePopup(); // ✅ use the popup context

  return (
    <section className="bg-[#f0f2f3] py-20 px-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <div className="flex flex-col gap-6">

          {/* Label */}
          <p className="text-[10px] font-bold tracking-[0.25em] text-[#3b7cff] uppercase">
            Clinical Grade Protection
          </p>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-black leading-tight tracking-tight">
            Termite Pest<br />Control Kerala
          </h1>

          {/* Body */}
          <p className="text-slate-600 text-[15px] leading-relaxed">
          Termites cause more structural damage to Indian homes than floods and fires combined. In Kerala, where year-round humidity above 70%, warm soil temperatures, and the widespread use of timber in both heritage and modern construction converge, subterranean termite colonies can silently destroy the structural integrity of a building within three to five years. By the time visible signs appear — a sagging door frame, a hollow-sounding wall panel, or a swarm of winged insects near a light source — significant and costly damage has already been done.

          </p>
            <p className="text-slate-600 text-[15px] leading-relaxed">
               Kerala Pest Solutions provides comprehensive termite treatment for residential and commercial properties across Trivandrum and Kollam. Our approach combines government-approved soil barrier treatments, targeted baiting systems, and structural inspections to eliminate active colonies and prevent new infestations from establishing.
</p>
          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button
              onClick={openPopup}
              className="bg-[#3b7cff] hover:bg-[#4c86fb] text-white font-bold text-[14px] px-7 py-4 rounded-xl transition-colors duration-200"
            >
              Request Free Inspection
            </button>
            <div className="flex items-center gap-2 text-slate-500 text-[13px]">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#3b7cff] shrink-0" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Free inspection across Trivandrum and Kollam
            </div>
          </div>
        </div>

        {/* Right — image + floating card */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
            {/*
              Replace src with your actual image e.g. /images/general-pest-technician.jpg
              Place in /public/images/
            */}
            <Image
              src="/termite-pest-technician.jpg"
              alt="General pest control technician"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Floating IPM card */}
          <div className="absolute bottom-4 left-4 bg-white rounded-2xl shadow-xl p-5 max-w-[260px] border border-slate-100">
            <p className="text-[9px] font-bold tracking-[0.2em] text-[#3b7cff] uppercase mb-2">
              The IPM Framework
            </p>
            <p className="text-slate-500 text-[12px] leading-relaxed">
              We combine targeted gel baiting, residual barrier sprays, and environmental advice to
              eliminate pests at the root cause, rather than just treating symptoms.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}