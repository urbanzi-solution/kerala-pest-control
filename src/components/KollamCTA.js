"use client";

import KollamPopupForm from "./KollamPopupForm";
import { useState } from "react";

const badges = ["Free Inspection", "Odorless Chemicals", "Certified Experts"];

export default function KollamCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="bg-[#e8f0f8] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">

          <h2 className="text-3xl lg:text-4xl font-extrabold text-black leading-tight tracking-tight">
            Ready to Solve Your Pest Problem in Kollam?
          </h2>

          <p className="text-slate-500 text-[15px] leading-relaxed">
            Don&apos;t let pests compromise your home or business. Get a clinical inspection today.
          </p>

          {/* ✅ BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="bg-amber-800 hover:bg-amber-700 text-white font-bold text-[14px] px-10 py-4 rounded-xl transition-colors duration-200 mt-2"
          >
            Book Your Free Kollam Inspection
          </button>

          {/* BADGES */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-2">
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-emerald-600" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-slate-500 text-[13px]">{badge}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ✅ IMPORTANT: POPUP RENDER */}
      <KollamPopupForm open={open} setOpen={setOpen} />
    </>
  );
}