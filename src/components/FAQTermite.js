"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I know if I have termites?",
    answer:
      "The most reliable signs are mud tubes along walls or foundations, hollow-sounding wood when tapped, discarded wings near windows or light sources, and frass (fine sawdust-like droppings) near timber. The absence of visible signs does not mean no infestation — a professional inspection is the only reliable confirmation.",
  },
  {
    question: "How long does post-construction treatment take?",
    answer:
      "A standard post-construction soil treatment for an average residential property takes one to two days. Larger properties or complex flooring configurations may require three days.",
  },
  {
    question: "How long does termite treatment last?",
    answer:
      "Pre-construction soil barriers typically provide eight to ten years. Post-construction barriers provide five to eight years. Baiting systems provide ongoing protection as long as stations are monitored. Our AMC ensures continuous coverage.",
  },
  {
    question: "Is termite treatment safe while my family is at home?",
    answer:
      "For baiting systems: yes, completely safe during installation and monitoring. For drilling and injection: occupants should vacate treated rooms for 24 hours, after which surfaces are safe. Your technician provides specific guidance for your property.",
  },
  {
    question: "Why does my newly built home need termite treatment?",
    answer:
      "New construction disturbs the existing termite population in the surrounding soil. Without pre-construction treatment, the disruption drives established termite colonies directly toward the new structure and its timber elements.",
  },
];

export default function FAQTermite() {
  const [openIndex, setOpenIndex] = useState(null);
const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
  return (
    <section className="bg-[#f0f2f0] py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] font-semibold tracking-[0.3em] text-slate-400 uppercase mb-4">
            Got Questions?
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-emerald-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-emerald-200 shadow-sm" : "border-slate-100"
                }`}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                >
                  <span
                    className={`text-[15px] font-semibold leading-snug transition-colors ${
                      isOpen ? "text-emerald-900" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* +/- icon */}
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isOpen ? "bg-emerald-900" : "bg-slate-100"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      className={`w-3.5 h-3.5 transition-colors ${
                        isOpen ? "text-white" : "text-slate-500"
                      }`}
                    >
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                      )}
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-7 pb-6">
                    <div className="w-8 h-0.5 bg-emerald-200 rounded-full mb-4" />
                    <p className="text-slate-500 text-[14px] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}