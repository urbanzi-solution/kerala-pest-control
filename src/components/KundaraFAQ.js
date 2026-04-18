"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you offer same-day pest control in Kundara?",
    answer:
      "We serve Kollam from our Trivandrum base. For urgent cases, we aim to respond same-day or next-day. Contact us directly by phone or WhatsApp for fastest scheduling.",
  },
  {
    question: "What is included in a free inspection?",
    answer:
      "Our technician visits your property, identifies the pest species present, assesses the severity and likely entry points or harborage sites, and provides a written quote for treatment. There is no call-out charge and no obligation to proceed.",
  },
  {
    question: "Do you provide treatment documentation?",
    answer:
      "Yes. Every service includes a written service report. AMC clients receive a cumulative treatment logbook suitable for property sale, rental records, or FSSAI compliance.",
  },
  {
    question: "Do you work with apartments and housing societies?",
    answer:
      "Yes. We serve individual flat owners and building management committees in Kundara. Building-wide contracts for mosquito and rodent management are available and more effective than individual unit treatments.",
  },
 
 
];

export default function KundaraFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-black text-center mb-12">
          Frequently Asked Questions — Pest Control in Kundara
        </h2>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-[#f8fafc] hover:bg-[#f1f5f9] transition"
              >
                <span className="font-semibold text-slate-800 text-[15px]">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-6 transition-all duration-300 ${
                  openIndex === index ? "max-h-96 py-5" : "max-h-0 overflow-hidden"
                }`}
              >
                <p className="text-slate-600 text-[14px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}