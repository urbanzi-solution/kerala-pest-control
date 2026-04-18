"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How often should a hotel have pest control visits in Kerala?",
    answer:
      "Monthly scheduled visits are the standard for hotel properties. Given the continuous guest turnover that brings new pest introduction risk, monthly visits allow us to catch and address any new activity before it establishes. For larger properties or those with a recent incident history, fortnightly visits may be recommended.",
  },
  {
    question: "A guest reported bed bugs. What should we do immediately?",
    answer:
      "Remove the room from inventory immediately. Do not launder the bedding yet — leave it in place for the inspection. Contact us for a same-day emergency inspection. We will confirm or rule out bed bugs, treat the room if confirmed, and inspect adjacent rooms as a precaution. Do not attempt to treat the room with over-the-counter products.",
  },
  {
    question: "Do you treat resort properties with outdoor areas?",
    answer:
      "Yes. Our mosquito management programme is specifically designed for properties with gardens, pools, and outdoor dining areas. We include larviciding of all water bodies, outdoor fogging, and a written source reduction audit identifying permanent changes to reduce breeding sites on the grounds.Yes. Our mosquito management programme is specifically designed for properties with gardens, pools, and outdoor dining areas. We include larviciding of all water bodies, outdoor fogging, and a written source reduction audit identifying permanent changes to reduce breeding sites on the grounds.",
  },
  {
    question: "Can you provide pest control records for star classification renewal?",
    answer:
      "Yes. We maintain complete service records and provide a consolidated annual pest control report at the end of each contract year. This includes all visit records, product usage, pest findings, and corrective actions taken — in the format required for most inspection audits.",
  },
  
];

export default function HotelFAQ() {
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