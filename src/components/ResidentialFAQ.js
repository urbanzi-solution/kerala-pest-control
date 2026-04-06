"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How often should a home have pest control in Kerala?",
    answer:
      "For year-round protection, we recommend a quarterly AMC. Kerala’s climate means pest pressure is continuous, not seasonal. If a quarterly programme is not feasible, an annual treatment at the start of the monsoon season combined with a follow-up in January provides a reasonable baseline of protection.",
  },
  {
    question: "My flat is clean. Why do I still have cockroaches?",
    answer:
      "Cockroaches in apartments are almost always entering via shared drainage infrastructure, not through poor hygiene. They travel from untreated flats and common areas through drainage stacks. Hygiene helps reduce food sources but cannot block drainage entry. Professional gel bait treatment targets the harborage sites where cockroaches live, not just the surfaces they walk across.",
  },
  {
    question: "How do I know if I have termites before the damage is visible?",
    answer:
      "Signs of termite activity include mud tubes along walls or foundations, hollow-sounding timber when tapped, discarded wings near windows after the monsoon season, and tiny piles of frass resembling sawdust near wooden elements. A professional inspection will identify early-stage activity long before structural damage becomes visible.",
  },
  {
    question: "Can you treat an occupied home?",
    answer:
      "Yes. Most of our residential treatments — particularly gel bait for cockroaches and ants — require no evacuation and can be carried out in a fully occupied home. Where a residual spray is included, occupants should vacate for two to three hours. We will confirm the specific requirements for your treatment at the time of booking.",
  },
  
];

export default function ResidentialFAQ() {
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