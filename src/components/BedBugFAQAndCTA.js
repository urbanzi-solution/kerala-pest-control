"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How many visits does bed bug treatment require?",
    answer:
      "A minimum of two visits spaced 10 to 14 days apart is required. Visit 1 kills live bugs and applies residual treatment. Visit 2 eliminates nymphs that have hatched since Visit 1. No single-visit treatment can guarantee complete elimination.",
  },
  {
    question: "Do I need to throw away my mattress?",
    answer:
      "In most cases, no. Professional steam treatment combined with a mattress encasement is sufficient. Disposal is rarely necessary and your technician will advise if it is genuinely required.",
  },
  {
    question: "How did I get bed bugs if my home is clean?",
    answer:
      "Bed bugs have no association with cleanliness. They feed on blood and travel in luggage, clothing, and second-hand furniture. They are found in five-star hotels as often as budget properties.",
  },
  {
    question: "Can I treat bed bugs myself?",
    answer:
      "Over-the-counter sprays kill adults on contact but cannot penetrate egg casings, do not reach deep harborage sites, and are largely ineffective against resistant populations. DIY treatment delays professional intervention while the population grows.",
  },
  {
    question: "Will bed bugs come back after treatment?",
    answer:
      "A properly completed two-visit protocol eliminates the existing infestation. Re-infestation can only occur through a new introduction. We provide a 30-day warranty: retreatment is free if activity resumes within 30 days of the final visit.",
  },
];

export default function BedBugFAQAndCTA() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div>

      {/* ── FAQ ── */}
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

      {/* ── CTA ── */}
      <section className="bg-emerald-800 py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Ready to Sleep Peacefully?
          </h2>
          <p className="text-emerald-200/80 text-[15px] leading-relaxed max-w-lg">
            Join over 2,500+ satisfied families in Kerala who chose our clinical eradication
            protocol. Don&apos;t let a minor problem become a structural nightmare.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <button className="bg-red-800 hover:bg-red-700 text-white font-bold text-[14px] px-8 py-4 rounded-xl transition-colors duration-200">
              Book Your Treatment Now
            </button>
            <button className="bg-transparent hover:bg-emerald-700 text-white font-bold text-[14px] px-8 py-4 rounded-xl border border-white/40 transition-colors duration-200">
              Request Free Quote
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}