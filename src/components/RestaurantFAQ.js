"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How often do restaurants need pest control in Kerala?",
    answer:
      "Monthly treatment visits are the standard for active food businesses. Kerala’s climate means pest pressure is year-round. Monthly intervals allow us to respond quickly to new activity and maintain effective barriers before they degrade. For FSSAI compliance, monthly documented visits are the minimum standard recommended.",
  },
  {
    question: "Do I need to close my restaurant for pest treatment?",
    answer:
      "No. We use gel bait as our primary treatment method in food preparation areas. Gel bait is applied inside appliance housings, under equipment, and in drainage areas — not on food contact surfaces. It requires no evacuation and produces no chemical odour. External perimeter spray treatments are scheduled outside operating hours.",
  },
  {
    question: "What documentation does FSSAI require for pest control?",
    answer:
      "FSSAI requires a signed contract with a licensed pest control operator, a service logbook with records of every visit, a bait station map, corrective action reports for any pest activity, and material safety data sheets for products used. Kerala Pest Solutions provides all of this as part of the standard service.",
  },
  {
    question: "A customer complained about seeing a cockroach. What should I do?",
    answer:
      "Contact us immediately for an emergency inspection. Do not attempt to treat the issue yourself with over-the-counter sprays — repellent sprays can drive cockroaches out of the kitchen into dining areas and make the infestation harder to treat professionally. We offer same-day response for active food business pest emergencies.",
  },
  
];

export default function RestaurantFAQ() {
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