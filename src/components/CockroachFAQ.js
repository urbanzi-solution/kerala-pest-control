"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does cockroach treatment take?",
    a: "A standard residential gel bait treatment takes one to two hours. The premises can be used immediately after application with no downtime.",
  },
  {
    q: "Why do I still see cockroaches after treatment?",
    a: "Seeing cockroaches for five to ten days after gel bait application is normal — the colony is actively consuming and distributing the bait. Numbers should reduce significantly within two weeks.",
  },
  {
    q: "Why do cockroaches keep coming back after I spray?",
    a: "Standard sprays are repellent — cockroaches detect them and find new routes rather than being eliminated. Our gel bait is non-repellent, so cockroaches carry it back to the queen and eliminate the colony from within.",
  },
  {
    q: "Do I need to clear my kitchen before treatment?",
    a: "Clear access to cabinet interiors and the areas under appliances. No need to remove everything. If a spray is also applied, food items on treated surfaces should be covered.",
  },
  {
    q: "Is treatment safe with young children at home?",
    a: "Gel bait is applied in small quantities in concealed locations. No evacuation is required. If a residual spray is also used, children should stay out of the treated area for the re-entry period specified by your technician.",
  },
];

export default function CockroachFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#e9eeec] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-black mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center"
              >
                <span className="font-semibold text-gray-900">
                  {item.q}
                </span>
                <span className="text-black text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}