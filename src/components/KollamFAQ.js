"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can you respond in Kollam?",
    answer:
      "We serve Kollam from our Trivandrum base and can typically schedule a free inspection within 24 to 48 hours of your enquiry. For urgent cases, contact us directly by phone or WhatsApp for the fastest response.",
  },
  {
    question: "Do you offer Annual Maintenance Contracts (AMC) in Kollam",
    answer:
      "Yes. We offer quarterly AMC programmes for general pest control, termite management, and rodent control across Kollam. AMC clients receive priority scheduling, a treatment logbook, and guaranteed retreatment at no additional charge if pest activity is detected between visits",
  },
  {
    question: "Are your treatments safe for children and pets?",
    answer:
      "Yes. We use CIB&RC-registered, low-volatility formulations. Re-entry times are typically one to two hours after treatment. For homes with infants or sensitive occupants, we offer botanical-based options on request.",
  },
  {
    question: "Do you cover apartments and housing societies in Kollam?",
    answer:
      "Yes. We work with individual flat owners, building management committees, and housing society secretaries. For mosquito control and rodent management in apartment complexes, building-wide contracts are more effective and cost-efficient than individual unit treatments.",
  },
  {
    question: "Can you provide documentation for FSSAI compliance in Kollam?",
    answer:
      "Yes. For food businesses in Kollam — restaurants, hotels, catering operations, food processing facilities — we provide signed service reports, bait station maps, and cumulative pest activity logs that meet FSSAI documentation requirements.",
  },
  {
    question: "How do I book pest control in Kollam?",
    answer:
      "Contact us using the form on our Contact page, by phone, or by WhatsApp. We will confirm an inspection appointment. Tell us your Kollam address, the pest you have seen, and the property type.",
  },
];

export default function KollamFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-emerald-900 text-center mb-12">
          Frequently Asked Questions — Pest Control in Kollam
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