"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I know if I have rats or mice?",
    answer:
      "Rats leave raisin-sized droppings (15–20mm), gnaw marks on hard surfaces, and dark greasy smear marks along walls. Mice leave smaller, rice-grain-sized droppings and are more commonly heard in wall cavities at night. Both produce an unmistakeable ammonia-like odour at high population densities.",
  },
  {
    question: "How long does a rodent control programme take?",
    answer:
      "Most residential programmes reach clearance — three consecutive monitoring visits with zero activity — within three to four weeks. Larger commercial properties or severe infestations may take six to eight weeks.",
  },
  {
    question: "Will rats come back after treatment?",
    answer:
      "If structural entry points are not sealed, re-infestation is highly likely within weeks due to continuous external rodent pressure. Our proofing report provides everything needed to seal your property permanently.",
  },
  {
    question: "Is rodenticide safe if I have children and pets?",
    answer:
      "Our tamper-resistant stations prevent access by children and non-target animals. As a precaution, stations are placed in inaccessible locations wherever possible. Contact a physician or vet immediately if contact with rodenticide is suspected.",
  },
  {
    question: "Do I need a pest contract for my restaurant?",
    answer:
      "Yes, for FSSAI compliance. A documented programme with a signed logbook, service reports, and a site map of bait station locations is required during audits. We provide all required documentation as standard in our commercial programme.",
  },
];

export default function RodentFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto">

        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 text-center tracking-tight mb-12">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-slate-100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
              >
                <span className={`text-[15px] font-semibold ${openIndex === i ? "text-black" : "text-black"}`}>
                  {faq.question}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`w-4 h-4 text-black shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {openIndex === i && (
                <p className="text-slate-500 text-[14px] leading-relaxed pb-5">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}