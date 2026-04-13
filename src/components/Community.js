"use client";

import Image from "next/image";

const communityData = [
  {
    id: 1,
    title: "Our Expert Team",
    image: "/abt1.jpeg",
    description:
      "Our team of certified pest control professionals is trained to handle residential and commercial properties safely and effectively. We prioritize safety, efficiency, and long-term prevention in every service we provide.",
  },
  {
    id: 2,
    title: "Safe & Eco-Friendly Solutions",
    image: "/abt2.jpeg",
    description:
      "We use environmentally responsible pest control methods that are safe for families, pets, and the surrounding environment. Our goal is to protect your property without compromising health or nature.",
  },
  {
    id: 3,
    title: "Community Engagement",
    image: "/abt3.jpg",
    description:
      "We actively educate our local community on pest prevention, hygiene practices, and eco-friendly control methods. Our workshops and awareness campaigns help residents and businesses maintain pest-free environments.",
  },
];

export default function Community() {
  return (
    <section className="min-h-screen bg-black text-white py-14 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-10 md:mb-16">
          <h1 className="text-2xl md:text-[28px] font-semibold mb-4 tracking-tight">
            Our Community
          </h1>

          <p className="text-sm md:text-[14px] text-gray-300 leading-relaxed max-w-3xl">
            We are committed to protecting homes and businesses while fostering
            awareness about safe and sustainable pest control practices. Our
            efforts focus on educating, preventing, and serving communities with
            care and professionalism.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-14 md:gap-20">
          {communityData.map((section, index) => (
            <div
              key={section.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center"
            >
              {/* Image */}
              <div
                className={`relative w-full h-[260px] sm:h-[320px] md:h-[400px] bg-[#1a1a1a] overflow-hidden ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text */}
              <div
                className={`flex flex-col gap-4 md:gap-5 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {section.title}
                </h2>

                <p className="text-sm md:text-[14px] text-gray-300 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}