"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does ant bait take to work?",
    answer:
      "Seven to fourteen days for complete colony elimination. Increased ant activity in the first few days is normal and means the treatment is working — foragers are actively collecting and distributing the bait.",
  },
  {
    question: "Should I clean up the bait dots?",
    answer:
      "No. Leave bait placements undisturbed for at least fourteen days. Cleaning them interrupts the transfer process before it is complete. Your technician removes remaining bait at the follow-up visit.",
  },
  {
    question: "Are fire ants dangerous?",
    answer:
      "Yes. Fire ant stings cause painful welts and can trigger anaphylactic reactions in sensitive individuals. Do not disturb a fire ant mound. Contact us promptly for a direct nest treatment.",
  },
  {
    question: "My upstairs neighbour has ants too — will one treatment work?",
    answer:
      "In multi-storey buildings, ant colonies often forage across multiple floors from a single nest in the wall void. Treatment must address the colony, not just individual floors. A coordinated treatment across both properties is significantly more effective.",
  },
  {
    question: "Are carpenter ants the same as termites?",
    answer:
      "No. Carpenter ants excavate timber for nesting but do not eat it. Termites consume wood as food. Both threaten structural timber but require completely different treatment methods. Our inspection will identify the species definitively.",
  },
];

export default function AntFAQ() {
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