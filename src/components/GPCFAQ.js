"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does a General Pest Control treatment last?",
    answer:
      "Approximately 90 days of residual protection under normal conditions. Our quarterly AMC replenishes barriers before they degrade, maintaining continuous protection year-round.",
  },
  {
    question: "Is the treatment safe for children and pets?",
    answer:
      "Yes. Once treated surfaces are dry — typically one to two hours — the area is completely safe. Botanical-based formulations are available on request for households with infants under six months.",
  },
  {
    question: "What pests are NOT covered under General Pest Control?",
    answer:
      "GPC covers common crawling and nuisance insects. Termites, bed bugs, rodents, and mosquitoes require specialised treatment protocols. See our individual service pages for each.",
  },
  {
    question: "How should I prepare for a GPC visit?",
    answer:
      "Clear access to kitchen cabinet interiors and under-appliance areas. Store food in sealed containers. No other preparation is required.",
  },
  {
    question: "I had treatment three months ago but pests are back. Is that normal?",
    answer:
      "Three months is approximately when standard residual treatment reaches the end of its effective life. A quarterly AMC schedules the follow-up visit before the barrier degrades, preventing re-establishment rather than responding to it after the fact.",
  },
];

export default function GPCFAQ() {
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