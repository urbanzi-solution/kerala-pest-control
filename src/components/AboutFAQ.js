"use client";

import { useState } from "react";

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What types of pest control services do you offer?",
      answer:
        "We provide residential, commercial, and industrial Kerala Pest Control Solutions including termite management, rodent control, and treatment for common household pests.",
    },
    {
      id: 2,
      question: "Are your pest control methods safe for my family and pets?",
      answer:
        "Yes, we use eco-friendly and non-toxic treatments that are safe for humans and pets while effectively eliminating pests.",
    },
    {
      id: 3,
      question: "How often should pest control services be scheduled?",
      answer:
        "For optimal protection, we recommend quarterly treatments for residential properties and customized schedules for commercial spaces based on infestation risk.",
    },
    {
      id: 4,
      question: "Do you offer termite prevention and treatment?",
      answer:
        "Absolutely. Our specialized termite solutions include inspection, prevention, and effective treatment for long-lasting protection.",
    },
    {
      id: 5,
      question: "Can you handle large commercial properties?",
      answer:
        "Yes, we have experience managing pest control for commercial buildings, warehouses, and industrial sites with customized strategies and timely service.",
    },
    {
      id: 6,
      question: "Do you provide guarantees or follow-up services?",
      answer:
        "We stand by our work with follow-up inspections and treatment guarantees to ensure your property remains pest-free.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-5 flex items-center md:py-16 sm:py-10 bg-white">
      <div className="max-w-[1320px] mx-auto w-full">

        {/* Header */}
        <div className="text-left mb-16 bg-white p-12 pb-0 rounded-[32px] md:p-10 sm:p-6">
          <div className="inline-block text-[12px] font-semibold text-[#3b7cff] uppercase tracking-wide mb-4 px-3 py-1 bg-indigo-50 rounded-md">
            FAQ
          </div>

          <h2 className="text-[48px] font-bold text-gray-900 mb-5 leading-tight md:text-[40px] sm:text-[32px]">
            Frequently Asked Questions
          </h2>

          <p className="text-[16px] text-gray-900 leading-relaxed max-w-[600px] md:text-[15px] sm:text-[14px]">
            Frequently Asked Questions offers quick answers to common queries,
            guiding users through features and functionalities effortlessly.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-2 gap-7 bg-white p-12 rounded-[32px] md:grid-cols-1 md:p-10 sm:p-6 sm:gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className="transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-start gap-4 p-5 text-left bg-gray-100 rounded-xl transition ${
                    isOpen ? "bg-purple-50" : ""
                  }`}
                >
                  <span className="text-[16px] font-medium text-black leading-relaxed flex-1">
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span className="w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-black" : "text-black"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 5V19M5 12H19" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-4">
                    <p className="text-[14px] text-gray-500 leading-relaxed sm:text-[13px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}