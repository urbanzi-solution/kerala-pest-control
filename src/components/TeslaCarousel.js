"use client";

import { useState } from "react";
import Link from "next/link";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function TeslaCarousel() {
  const slides = [
    {
      title: "Budget-Friendly Eco-Friendly Pest Control",
      subtitle:
        "Affordable, safe and long-lasting pest solutions for homes and businesses",
      img: "/banner1.png",
      btn1: { label: "Get Quote", href: "/contact" },
      btn2: { label: "Our Services", href: "/services" },
    },
    {
      title: "Quality Pest Control by Certified Experts",
      subtitle:
        "Professional treatments using safe chemicals and modern techniques",
      img: "/banner2.png",
      btn1: { label: "Book Service", href: "/contact" },
      btn2: { label: "About Us", href: "/about" },
    },
    {
      title: "Disinfection & Sanitization Services",
      subtitle:
        "Cost-effective sanitization with guaranteed quality and safety",
      img: "/banner3.png",
      btn1: { label: "Schedule Now", href: "/contact" },
      btn2: { label: "Know More", href: "/services" },
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          {/* Overlay (optional for better text visibility) */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute top-[40%] w-full text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-semibold mb-5">
              {slide.title}
            </h1>

            <p className="text-sm md:text-lg mb-6 max-w-2xl mx-auto">
              {slide.subtitle}
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href={slide.btn1.href}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm md:text-base transition"
              >
                {slide.btn1.label}
              </Link>

              <Link
                href={slide.btn2.href}
                className="bg-white text-black px-6 py-2 rounded-md text-sm md:text-base transition hover:bg-gray-200"
              >
                {slide.btn2.label}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/70 hover:bg-white w-10 h-10 rounded-md flex items-center justify-center"
      >
        <IoChevronBack className="text-xl" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/70 hover:bg-white w-10 h-10 rounded-md flex items-center justify-center"
      >
        <IoChevronForward className="text-xl" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}