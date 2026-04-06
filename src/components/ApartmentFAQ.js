"use client";

import { useState } from "react";

const faqs = [
  {
    question: "My flat is clean but I keep getting cockroaches. Why?",
    answer:
      "In apartment buildings, cockroaches almost always enter via the shared drainage stack — not through poor hygiene. No amount of cleaning will prevent cockroaches from emerging from a drainage pipe. Individual flat treatment will eliminate the current population, but re-infestation will continue until the drainage infrastructure and adjacent units are treated. A building-wide programme is the lasting solution.",
  },
  {
    question: "How do I persuade my housing society to get building-wide pest control?",
    answer:
      "The most effective argument is cost per flat. Building-wide contracts are significantly cheaper per unit than individual flat treatments. We can prepare a cost comparison document for the society committee that shows the per-flat cost of a building-wide contract versus independent individual treatment. Contact us and we will prepare this for you.",
  },
  {
    question: "Does a new apartment need termite treatment?",
    answer:
      "Yes, particularly if the building is in a growth corridor where recent construction activity has disturbed the surrounding soil. Pre-construction soil treatment should have been applied before the foundation slab was poured — but this is not always done, and the quality varies. We recommend a structural inspection within the first two years of occupancy for all new apartments in Trivandrum’s expanding areas.",
  },
  {
    question: "Can you treat my flat without treating all the other flats?",
    answer:
      "Yes. We can treat your individual flat for any pest. The treatment will significantly reduce the pest population in your flat and provide a period of residual protection. We will always tell you honestly if building-wide treatment would give substantially better results for your specific situation.",
  },
  
];

export default function ApartmentFAQ() {
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