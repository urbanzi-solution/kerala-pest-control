"use client";

import Image from "next/image";

export default function ClientLogos() {
  const logos = [
    {
      name: "Microtech",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNu11jYK_ykzZ7f7vOyLcszN2KbISkP3YvuQ&s",
    },
    {
      name: "Microtech",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNu11jYK_ykzZ7f7vOyLcszN2KbISkP3YvuQ&s",
    },
  ];

  return (
    <section className="bg-white py-20 px-5 md:py-16 sm:py-10">
      <div className="max-w-[1320px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-8">
          <h2 className="text-[20px] md:text-[12px] font-semibold tracking-[1.5px] md:tracking-[1px] text-gray-700 uppercase">
            Trusted Partners in Pest Protection
          </h2>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-y-10 gap-x-16 md:gap-x-10 sm:gap-x-8 max-w-[1200px] mx-auto">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-2 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={50}
                className="object-contain max-h-[50px] md:max-h-[40px] sm:max-h-[35px]"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}