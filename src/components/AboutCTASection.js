"use client";

import { useState } from "react";

export default function AboutCTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      window.location.href = `/contact?email=${encodeURIComponent(email)}`;
    }
  };

  return (
    <section className="bg-white px-5 pb-20 pt-0 md:py-16 sm:py-10">
      <div className="max-w-[1320px] mx-auto">

        <div
          className="
          bg-gradient-to-br from-[#2d1b2e] via-[#3b7cff] to-green-400
          rounded-[32px]
          px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20
          flex flex-col lg:flex-row
          items-center justify-between
          gap-10 lg:gap-14
          text-white
          overflow-hidden
        "
        >

          {/* LEFT TEXT */}
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              Protect Your Home and Business from Pests
            </h2>

            <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed">
              Get safe and effective Kerala Pest Control Solutions with expert
              inspection and treatment. Quick quote in minutes.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="
              flex flex-col sm:flex-row
              items-center gap-4
              w-full lg:w-auto
            "
          >

            {/* INPUT */}
            <div
              className="
              flex items-center gap-3
              bg-white/95
              px-5 py-4
              rounded-2xl
              w-full sm:min-w-[300px]
              shadow-lg
              focus-within:shadow-xl
              transition
            "
            >
              <input
                type="email"
                placeholder="Enter your location"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="
                  w-full bg-transparent outline-none
                  text-black text-sm md:text-base font-medium
                  placeholder:text-gray-400
                "
              />
            </div>

            {/* BUTTON */}
     <button
  type="submit"
  className="
    inline-flex items-center justify-center gap-2
    bg-gray-900 hover:bg-black
    text-white
    px-6 py-3
    rounded-xl
    text-sm md:text-base font-semibold
    shadow-md hover:shadow-lg
    transition-all duration-300
    w-full sm:w-auto
    whitespace-nowrap
  "
>
  <svg
    className="w-5 h-5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>

  <span className="whitespace-nowrap">Get Quote</span>
</button>
          </form>

        </div>
      </div>
    </section>
  );
}