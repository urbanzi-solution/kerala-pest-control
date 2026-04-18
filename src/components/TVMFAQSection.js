"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can you respond in Trivandrum?",
    answer:
      "Because we are based in Trivandrum, we can typically schedule a free inspection within 24 hours of your enquiry. For urgent cases — active termite swarms, severe rodent activity, or bed bug emergencies — same-day visits are often possible. Contact us directly by phone or WhatsApp for fastest response.",
  },
  {
    question: "Do you offer Annual Maintenance Contracts (AMC) in Trivandrum?",
    answer:
      "Yes. We offer quarterly AMC programmes for general pest control, termite management, and rodent control across all areas of Trivandrum. AMC clients receive priority scheduling, a treatment logbook, and guaranteed retreatment at no additional charge if any pest activity is detected between scheduled visits.",
  },
  {
    question: "Are your treatments safe for children and pets?",
    answer:
      "Yes. We use CIB&RC-registered, low-volatility formulations. Re-entry times are typically one to two hours. For homes with infants or highly sensitive occupants, we offer botanical-based formulations on request. Your technician will provide specific re-entry guidance based on the treatment carried out.",
  },
  {
    question: "Do you cover apartment buildings and housing societies in Trivandrum?",
    answer:
      "Yes. We work with individual flat owners, building management committees, and housing society secretaries. For mosquito control and rodent management in apartment complexes, building-wide contracts are significantly more effective than individual flat treatments and more cost-effective per unit.",
  },
  {
    question: "Can you treat both my home and my office in Trivandrum?",
    answer:
      "Yes. We provide both residential and commercial pest management across Trivandrum. For businesses, we provide FSSAI-compliant documentation and treatment schedules that work within your operating hours.",
  },
  {
    question: "How do I book a pest control service in Trivandrum?",
    answer:
      "Contact us using the form on our Contact page, by phone, or by WhatsApp. Tell us your location, the pest you have seen, and the property type. We will confirm an inspection appointment, typically within 24 hours.",
  },
];

export default function TVMFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-black text-center mb-12">
          Frequently Asked Questions — Pest Control in Trivandrum
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