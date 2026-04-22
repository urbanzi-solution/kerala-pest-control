"use client";

import Image from "next/image";

export default function TrivandrumHero({ openPopup }) {
  return (
    <div>

      {/* ── Hero ── */}
      <section className="bg-[#f3f3f3] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div className="flex flex-col gap-6">

            <span className="inline-flex self-start bg-blue-100 text-blue-700 text-[10px] font-bold px-4 py-2 rounded-full">
              Established Trivandrum Care
            </span>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-black">
              Pest Control<br />Trivandrum
            </h1>

            <p className="text-slate-600 text-[15px] max-w-md">
              Trivandrum is a city of contrasts: heritage neighbourhoods with century-old timber construction, dense mid-rise residential colonies, government quarter settlements, and rapidly expanding IT corridors around Technopark and Kazhakootam. Each environment presents its own pest profile. The older bungalows of Kowdiar and Pattom face termite-compromised structural timber. The high-density apartment blocks of Kazhakootam face cockroach migration through shared drainage. The PG accommodations around Technopark face recurring bed bug pressure from a transient IT workforce.
Kerala Pest Solutions operates from a base in Trivandrum. 
            </p>

            {/* ✅ FIXED BUTTON */}
            <button
              onClick={openPopup}
              className="self-start bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-4 rounded-xl"
            >
              Book Your Free Trivandrum Inspection →
            </button>

          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white">
              <Image
                src="/tri.jpg"
                alt="Pest control equipment Trivandrum"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"  // ✅ FIX warning
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}