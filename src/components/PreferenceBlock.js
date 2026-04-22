"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BsShieldCheck,
  BsBug,
  BsPersonSquare,
  BsHeadset,
  BsPeopleFill,
} from "react-icons/bs";

export default function PreferenceBlock() {
  const [isHandleNav, setIsHandleNav] = useState(false);

  const handleNavigateToJobPreferences = () => {
    setIsHandleNav(!isHandleNav);
  };

  /* ✅ TEMP COMPONENT */
  const JobPreferencesTwo = () => (
    <div className="p-6 text-center ">
      <h2 className="text-xl font-semibold mb-2">Booking Form</h2>
      <p>This is your form modal. Replace with real component.</p>
    </div>
  );

  const cardOne = {
    headingText: "Why Choose Our Pest Control Service",
    subHeadingText:
      "We offer safe and long lasting termite and Kerala Pest Control Solutions using certified chemicals and modern techniques. Our trained technicians ensure your home stays protected with reliable, eco friendly treatments.",
    chips: [
      "Certified Technicians",
      "Eco Friendly Chemicals",
      "Guaranteed Protection",
    ],
  };

  const cardTwo = {
    image: "/img2.png", // ⚠️ make sure this exists in /public
  };

  const cardThree = [
    {
      icon: <BsShieldCheck className="text-black text-xl" />,
      title: "Termite Warranty",
      desc: "Enjoy long term protection with our anti termite warranty plans.",
    },
    {
      icon: <BsBug className="text-black text-xl" />,
      title: "Fast Treatment",
      desc: "Quick response and same day service for urgent pest issues.",
    },
    {
      icon: <BsShieldCheck className="text-black text-xl" />,
      title: "Safe For Families",
      desc: "We use safe, odorless treatments suitable for kids and pets.",
    },
    {
      icon: <BsPersonSquare className="text-black text-xl" />,
      title: "Dedicated Expert",
      desc: "A trained technician handles your treatment from start to finish.",
    },
    {
      icon: <BsHeadset className="text-black text-xl" />,
      title: "Support",
      desc: "We offer reliable post service support and follow up inspections.",
    },
    {
      icon: <BsPeopleFill className="text-black text-xl" />,
      title: "Professional Team",
      desc: "Our experienced team ensures every treatment is done with precision.",
    },
  ];

 return (
  <section className="bg-white w-full">

    <div className="max-w-[1375px] mx-auto px-5 py-20 md:py-16 sm:py-10">

      {/* ================= MODAL ================= */}
      {isHandleNav && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]">
          <div className="bg-white rounded-xl p-5 w-[90%] md:w-[70%] lg:w-1/2 h-[80vh] overflow-y-auto relative shadow-xl">

            <button
              onClick={handleNavigateToJobPreferences}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 hover:text-black text-xl"
            >
              ×
            </button>

            <JobPreferencesTwo />
          </div>
        </div>
      )}

      {/* ================= GRID ================= */}
      {!isHandleNav && (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.5fr] gap-4">

          {/* LEFT PANEL */}
          <div className="bg-[#faf9f4] text-black rounded-2xl p-8 flex flex-col">
            <h2 className="text-[28px] font-bold mb-4 text-[#1a1a1a]">
              {cardOne.headingText}
            </h2>

            <p className="text-[16px] mb-6 text-[#1a1a1a]">
              {cardOne.subHeadingText}
            </p>

            <div className="flex flex-wrap gap-3">
              {cardOne.chips.map((chip, i) => (
                <button
                  key={i}
                  className="w-full sm:w-auto flex items-center bg-white rounded-full px-4 py-2 text-sm hover:bg-gray-100 transition"
                >
                  <span className="mr-2 font-bold">+</span>
                  {chip}
                </button>
              ))}
            </div>

          
          </div>

          {/* IMAGE PANEL */}
          <div className="relative rounded-2xl overflow-hidden bg-[#1a1a1a] min-h-[400px] lg:min-h-[600px]">
            <Image
              src={cardTwo.image}
              alt="pest control"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT PANEL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cardThree.map((item, index) => {
              const bgColors = [
                "bg-[#faf9f4]",
                "bg-[#f4f5fae2]",
                "bg-[#f4f5fae2]",
                "bg-[#d1d5ea]",
                "bg-[#faf9f4]",
                "bg-[#faf4f5]",
              ];

              return (
                <div
                  key={index}
                  className={`rounded-2xl p-6 flex items-center ${bgColors[index]}`}
                >
                  <div className="mr-4 flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-[16px] font-semibold mb-1 text-[#1a1a1a]">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-[#1a1a1a]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

    </div>
  </section>
);
}