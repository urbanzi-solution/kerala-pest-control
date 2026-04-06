"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you carry out office pest treatment outside working hours?",
    answer:
      "Yes. After-hours treatment is available for all commercial clients. We can schedule visits in the evening after staff have left or early in the morning before the building opens. The building is ready for normal use within the standard re-entry time for the products applied.",
  },
  {
    question: "What is included in a commercial pest control service logbook?",
    answer:
      "The service logbook records every visit date and time, the technician name, the pest species targeted, the products applied, the specific areas treated, the findings of that visit, and any corrective actions recommended. It is the primary document reviewed during FSSAI, NASSCOM, or other compliance audits.",
  },
  {
    question: "Can you service all floors of a multi-storey office building?",
    answer:
      "Yes. We provide a full-building service that covers every floor, with specific attention to the canteen, pantry areas, server and plant rooms, and the building perimeter on each visit. For very large buildings, we work with the facilities manager to develop a structured visit route that ensures full coverage within the scheduled visit duration.",
  },
  {
    question: "We have an IT campus with multiple buildings. Can you manage all of them?",
    answer:
      "Yes. We provide campus-wide contracts for multi-building properties covering all buildings, canteen facilities, and external grounds. A single consolidated service log is maintained and a single point of contact from our side manages the entire contract.",
  },
  
];

export default function OfficeFAQ() {
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
                <span className={`text-[15px] font-semibold ${openIndex === i ? "text-emerald-800" : "text-emerald-900"}`}>
                  {faq.question}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`w-4 h-4 text-emerald-700 shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
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