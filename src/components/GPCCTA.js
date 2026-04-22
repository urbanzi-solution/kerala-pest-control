"use client";

import { usePopup } from "@/components/PopupContext"; // ✅ import
export default function GPCCTA() {
   const { openPopup } = usePopup(); // ✅ get function
  return (
    <section className="bg-[#3b7cff] py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">

        <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
          Year-Round Pest-Free Living in Kerala
        </h2>

        <p className="text-white text-[15px] leading-relaxed">
          Experience the clinical precision of Kerala&apos;s most trusted pest control specialists.
          From IT parks to private residences, we deliver excellence.
        </p>

        <button
            onClick={openPopup}
            className="bg-gray-200 text-black font-semibold px-8 py-4 rounded-lg hover:bg-white transition"
          >
            Book a Free Inspection →
          </button>

      </div>
    </section>
  );
}