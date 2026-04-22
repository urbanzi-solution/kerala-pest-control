"use client";


import TVMPopupForm from "@/components/TVMPopupForm";
import { useState } from "react";
export default function TVMCTASection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[#d7e3ec] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-4">
          Ready for a Pest-Free Home?
        </h2>

        <p className="text-slate-600 text-[15px] mb-10 max-w-2xl mx-auto">
          Get clinical-grade protection with our expert team in Trivandrum.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

          {/* ✅ BUTTON OPENS POPUP */}
          <button
            onClick={() => setOpen(true)}
            className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-4 rounded-full"
          >
            Book Your Free Trivandrum Inspection →
          </button>

          <div className="text-left">
            <p className="text-emerald-700 font-semibold text-sm">
              Call Now: +91 0000 000 000
            </p>
            <p className="text-slate-500 text-xs">
              Mon-Sat, 9AM - 6PM
            </p>
          </div>

        </div>

        {/* ✅ POPUP FORM */}
        <TVMPopupForm open={open} setOpen={setOpen} />

      </div>
    </section>
  );
}