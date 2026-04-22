"use client";

import { usePopup } from "@/components/PopupContext"; // ✅ import

export default function CTASection() {
  const { openPopup } = usePopup(); // ✅ get function

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="bg-gradient-to-r from-[#3b7cff] to-[#2a68e3] rounded-3xl py-16 px-8 text-center text-white">
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Ready for a Clinical Audit?
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto">
            Stop guessing. Get a precise identification and a fixed-cost
            treatment plan today.
          </p>

          {/* ✅ BUTTON FIXED */}
          <button
            onClick={openPopup}
            className="bg-gray-200 text-black font-semibold px-8 py-4 rounded-lg hover:bg-white transition"
          >
            Book a Free Inspection →
          </button>

        </div>

      </div>
    </section>
  );
}