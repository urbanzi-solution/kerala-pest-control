"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    q: "How often should I schedule pest control service?",
    a: "For most homes, a general pest treatment every 3 to 4 months is enough to keep insects away. If your area has heavy termite, ant, or cockroach activity, a monthly or bi-monthly service gives better protection."
  },
  {
    q: "Do you provide pest control for apartments and commercial buildings?",
    a: "Yes. We handle pest control for apartments, independent houses, villas, hostels, offices, shops, showrooms, warehouses, factories, restaurants, and all types of commercial and industrial spaces."
  },
  {
    q: "Is the pest control treatment safe for kids and pets?",
    a: "Yes. We use eco-friendly and certified chemicals that are safe when used correctly. Families, children, elderly people, and pets can stay in the treated space after the recommended ventilation time."
  },
  {
    q: "How long does a typical treatment take?",
    a: "A standard home treatment takes 30 to 60 minutes depending on the size and pest severity. Termite treatments and deep cleaning services take longer because they require detailed inspection and application."
  },
  {
    q: "Do you offer termite control?",
    a: "Yes. We provide pre-construction and post-construction termite control with long-lasting barriers and advanced chemical treatments that protect your property from termite damage."
  },
  {
    q: "What pests do you cover?",
    a: "We handle termites, ants, cockroaches, mosquitoes, bed bugs, rats, spiders, flies, and general crawling insects. We also offer house cleaning services on request."
  },
  {
    q: "Do I need to leave the house during treatment?",
    a: "For most general pest control services, you do not need to leave. For heavy termite or bed bug treatments, stepping out for a short time may be recommended based on the technician's advice."
  },
  {
    q: "How long do the results last?",
    a: "Our treatments usually last 3 to 6 months depending on the type of pest. Termite treatments offer stronger protection and can last several years with proper maintenance."
  },
  {
    q: "Do you offer warranty?",
    a: "Yes. We provide service warranty for termite, cockroach, and ant treatments. If pests return during the warranty period, we offer a free re-service."
  },
  {
    q: "How can I book your service?",
    a: "You can call us at 6282651476, 9074368674, or 9895009472. We offer same-day inspection and fast service across Trivandrum including Karamana and Kazhakoottam."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full py-12 px-4 bg-gray-100 flex justify-center">
      <div className="w-full max-w-[1320px] bg-white rounded-xl p-8 md:p-6 sm:p-5">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] font-semibold text-gray-900">
            Frequently asked questions
          </h2>

          {openIndex === null ? (
            <Plus size={20} className="text-gray-800" />
          ) : (
            <Minus size={20} className="text-gray-800" />
          )}
        </div>

        {/* Content */}
        <div className="mt-6">
          {faqData.map((item, i) => (
            <div key={i} className="mb-5">

              {/* Question */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left py-4 text-[16px] font-medium text-gray-900"
              >
                <span>{item.q}</span>

                {openIndex === i ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i
                    ? "max-h-[500px] opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-2"
                }`}
              >
                <p className="text-gray-600 text-[14px] leading-relaxed pr-4 pb-2">
                  {item.a}
                </p>
              </div>

              {/* Divider */}
              {i !== faqData.length - 1 && (
                <div className="h-[1px] w-full bg-gray-200 mt-4" />
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}