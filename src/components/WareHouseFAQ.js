"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How often do warehouses need pest control visits?",
    answer:
      "Fortnightly monitoring visits for the rodent bait station network are standard for most warehouse facilities. Full pest treatment visits are typically monthly. For food and pharmaceutical warehouses with high compliance requirements, fortnightly full visits may be required.",
  },
  {
    question: "How do I prevent rodents from entering through the loading bay?",
    answer:
      "Loading bays are the most common rodent entry point in any warehouse. Key measures include: installing rodent-proof brush strips on all roller shutter doors, fitting metal kick plates to pedestrian doors, installing drain covers on all floor drains in the bay area, removing pallets and stock from ground contact where possible, and keeping the external area clear of vegetation and waste. Our proofing report will identify all specific entry points on your facility.",
  },
  {
    question: "We found grain weevils in our stock. What should we do?",
    answer:
      "Isolate the affected stock immediately and contact us for an emergency inspection. Do not move the affected stock to other parts of the facility as this will spread the infestation. We will assess the extent of the problem, identify the introduction source, and recommend the appropriate treatment — which may include targeted fumigation of the affected area.",
  },
  {
    question: "Can you provide pest control records for a client quality audit?",
    answer:
      "Yes. All of our documentation — service logbook, bait station map, corrective action reports, and material safety data sheets — is maintained in a format that satisfies most client quality audit requirements for pest control. We can provide a consolidated audit-ready documentation pack at any point during the contract.",
  },
  
];

export default function WareHouseFAQ() {
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