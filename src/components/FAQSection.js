"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "Do you provide pest control for both homes and businesses?",
      answer:
        "Yes. Kerala Pest Solutions works with individual homeowners, apartment management committees, restaurants, hotels, offices, warehouses, and institutional properties including hostels and university facilities. Every service is available for both residential and commercial properties. Commercial clients receive FSSAI-compliant documentation as standard.",
    },
    {
      question:
        "Which pest control service do I need if I have more than one pest?",
      answer:
        "If you have multiple crawling or nuisance insects — cockroaches, ants, silverfish, centipedes — our General Pest Control service addresses all of them in a single visit. If you have a specific specialist pest such as termites, bed bugs, or rodents alongside common insects, we recommend booking the specialist service first, and adding a General Pest Control visit to address the secondary pests.",
    },
    {
      question: "Are your treatments safe for children and pets?",
      answer:
        "Yes. We use government-approved, low-volatility formulations applied at label-prescribed rates. Re-entry times vary by service — typically one to two hours for general treatments, four to six hours for bed bug chemical treatments. Your technician will provide specific guidance for every service carried out. Botanical-based alternatives are available on request for households with infants.",
    },
    {
      question: "How much does pest control cost in Kerala?",
      answer:
        "Pricing depends on the pest, property size, infestation severity, and treatment type. We provide a written quote following a free inspection — before any treatment is agreed and with no obligation to proceed. There are no call-out charges for inspections across Trivandrum and Kollam.",
    },
    {
      question: "Do you offer Annual Maintenance Contracts (AMC)?",
      answer:
        "Yes. We offer quarterly AMC programmes for general pest control, termite management, and rodent control. AMC clients receive priority scheduling, guaranteed retreatment at no additional cost if activity is detected between visits, and a maintained service logbook. An AMC is the most cost-effective way to maintain a consistently pest-free property in Kerala’s climate.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-black font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-2xl p-5 shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-bold text-black text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
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