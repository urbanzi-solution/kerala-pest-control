"use client";
import { usePopup } from "@/components/PopupContext"; // ✅ import
export default function AntCTA() {
  const { openPopup } = usePopup(); // ✅ get function
  return (
    <section className="bg-[#3b7cff] py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">

        <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
          Target the Colony, Not Just the Trail
        </h2>

        <p className="text-white text-[15px] leading-relaxed">
          Kerala Pest Solutions&apos; non-repellent bait eliminates ant colonies from within.<br />
          Book your treatment across Trivandrum and Kollam today.
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