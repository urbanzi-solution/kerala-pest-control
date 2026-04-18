"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you offer same-day pest control in Kazhakootam?",
    answer:
      "Yes. Because Kerala Pest Solutions is based in Trivandrum, same-day inspections are often available for urgent cases such as active termite swarms, severe rodent activity, or bed bug emergencies. Contact us directly by phone or WhatsApp to check same-day availability.",
  },
  {
    question: "What is included in a free inspection?",
    answer:
      "Our technician visits your property, identifies the pest species present, assesses the severity and likely entry points or harborage sites, and provides a written quote for treatment. There is no call-out charge and no obligation to proceed.",
  },
  {
    question: "Do you work with apartment buildings and housing societies?",
    answer:
      "Yes. We work with individual flat owners, building management committees, and housing society secretaries in Kazhakootam. For mosquito control and rodent management, building-wide contracts are more effective and more cost-effective than individual unit treatments.",
  },
  {
    question: "Do you provide treatment documentation?",
    answer:
      "Yes. Every service includes a written service report. AMC clients receive a cumulative treatment logbook, which is accepted for property sale, rental agreements, and FSSAI compliance audits",
  },
  {
    question: "How do I book pest control in Kazhakootam?",
    answer:
      "Use the contact form on our website, call us, or message us on WhatsApp. Tell us your address, the pest you have seen, and the property type. We will confirm an inspection appointment, typically within 24 hours.",
  },
 
];

export default function KazhakkoottamFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-black text-center mb-12">
          Frequently Asked Questions — Pest Control in Kazhakkoottam
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