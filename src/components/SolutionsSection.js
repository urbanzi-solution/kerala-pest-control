"use client";

import {
  PestControl,
  BugReport,
  VerifiedUser,
  Engineering,
} from "@mui/icons-material";
export default function SolutionsSection() {
const aboutItems = [
  {
    icon: <PestControl className="text-[#000000] text-3xl" />,
    title: "Our Mission",
    description:
      "To provide safe, effective, and eco-friendly Kerala Pest Control Solutions to protect homes, businesses, and the environment.",
  },
  {
    icon: <BugReport className="text-[#000000] text-3xl" />,
    title: "Our Vision",
    description:
      "To become the most trusted pest management company by combining innovative techniques, advanced technology, and exceptional service.",
  },
  {
    icon: <VerifiedUser className="text-[#000000] text-3xl" />,
    title: "Why Choose Us",
    description:
      "Experienced professionals using safe and environmentally responsible methods. Comprehensive pest control services for residential and commercial properties.",
  },
  {
    icon: <Engineering className="text-[#000000] text-3xl" />,
    title: "Our Expertise",
    description:
      "Specialized in termite management, rodent control, and treatment of common household pests using modern, safe solutions.",
  },
];

  return (
    <section className="bg-white px-5 py-20 md:py-16 sm:py-10 mt-12">
      <div className="max-w-[1320px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* LEFT - STICKY IMAGE */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[100px]">

              <div className="relative rounded-[100px_0_100px_0] overflow-hidden mb-10 lg:mb-0">
                <img
                  src="/about-us.png"
                  alt="Kerala Pest Control Solutions"
                  className="w-full h-full object-cover"
                />

                {/* BADGE */}
                <div className="absolute bottom-5 left-5 bg-white px-6 py-4 rounded-xl shadow-lg">
                  <div className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-none mb-1">
                    10K+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium leading-tight">
                    Homes & Businesses Protected
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-7 lg:pl-10">

            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-gray-900 mb-5">
              About Kerala Pest Solutions
            </h1>

            <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-8">
              <strong>Kerala Pest Solutions</strong> is a professional pest
              management company based in Trivandrum.{" "}
              <strong>Established in 2007</strong>, we provide comprehensive pest
              control services for homes, offices, and commercial spaces.
            </p>

            <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-8">
              We specialize in termite control, rodent management, and treatment
              for common household pests using safe and eco-friendly methods. Our
              skilled technicians ensure effective prevention and eradication of
              pests while maintaining the highest safety standards.
            </p>

            <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-10">
              Our commitment to customer satisfaction, long-term protection, and
              environmentally responsible practices has earned us the trust of
              thousands of clients.{" "}
              <strong>PestControl Solutions</strong> stands for reliability,
              professionalism, and peace of mind.
            </p>

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {aboutItems.map((item, index) => (
                <div key={index}>

                  <div className="w-14 h-14 bg-[#ebe8db] rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>

                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}