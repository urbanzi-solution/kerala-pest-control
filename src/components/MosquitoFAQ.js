"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How quickly does fogging work?",
    answer:
      "ULV fogging provides visible knockdown within minutes. Effects last approximately three to five days. For lasting control, fogging must be combined with larviciding to prevent the next mosquito generation from emerging.",
  },
  {
    question: "Is fogging harmful to humans or pets?",
    answer:
      "Occupants and pets should vacate during fogging and for 30 minutes afterwards. Once settled, all treated areas are safe. All formulations are government-approved.",
  },
  {
    question: "How often do I need mosquito treatment?",
    answer:
      "During monsoon season, monthly larviciding is recommended. Fogging can be conducted every four to six weeks or as needed. Your technician will recommend a schedule based on your property and local risk level.",
  },
  {
    question: "Can mosquitoes be completely eliminated?",
    answer:
      "Complete elimination is not achievable — mosquitoes are highly mobile and re-enter from surrounding areas. The goal is significant, sustained population reduction that materially lowers disease risk and bite frequency.",
  },
  {
    question: "What is the difference between fogging and larviciding?",
    answer:
      "Larviciding prevents adult mosquitoes from emerging by treating the breeding source. Fogging kills adults already present. For sustainable control, larviciding is the more effective long-term method. A properly designed programme uses both together.",
  },
];

export default function MosquitoFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 text-center tracking-tight mb-12">
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
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