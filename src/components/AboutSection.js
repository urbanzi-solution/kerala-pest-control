import Link from "next/link";
import { IoPlayOutline } from "react-icons/io5";

export default function AboutSection() {
  return (
    <section className="bg-gray-100 py-16 md:py-20 flex items-center">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block text-black text-sm font-medium px-4 py-2 rounded-full border border-gray-300 mb-6">
            ABOUT OUR COMPANY
          </span>

          <h2 className="text-3xl text-black md:text-4xl lg:text-4xl font-medium leading-tight mb-5">
            Trusted & Budget-Friendly Termite and Pest Solutions
          </h2>

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            We provide high-quality pest and termite control services at affordable prices.
            Our trained professionals use safe, certified and long-lasting treatment methods
            to protect homes and businesses while ensuring complete peace of mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md text-sm font-medium transition"
            >
              Contact Us
            </Link>

            <Link
              href="/services"
              className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-md text-sm font-medium hover:bg-blue-50 transition"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md">

            <div className="relative h-[300px] md:h-[400px] overflow-hidden border border-gray-200 rounded-lg">

              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://sipc.in/images/banner-01.webp')",
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">

                {/* Play Button */}
                <button className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition shadow-lg">
                  <IoPlayOutline className="text-blue-500 text-2xl md:text-3xl ml-1" />
                </button>

                {/* Duration */}
                <span className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded">
                  2:10
                </span>
              </div>
            </div>

            <p className="text-center text-sm md:text-base mt-5 text-gray-800">
              Watch how our affordable and effective treatments protect your property
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}