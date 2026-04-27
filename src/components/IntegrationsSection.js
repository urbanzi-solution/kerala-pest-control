"use client";

import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function IntegrationsSection() {
  const integrationLogos = [
     {
      name: "Microtech",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNu11jYK_ykzZ7f7vOyLcszN2KbISkP3YvuQ&s",
    },
    {
      name: "Tata",
      src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
    },
    {
      name: "Infosys",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    },
  ];
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-20 px-5 md:py-16 sm:py-10 bg-white">
      <div className="max-w-[1320px] mx-auto">
        
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* LEFT */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-100 p-12 md:p-8 rounded-xl h-full">
              
              <h2 className="text-[32px] md:text-[24px] lg:text-[28px] font-medium text-gray-800 leading-snug mb-6">
                Protecting Trivandrum <br />
                with Affordable Pest Control
              </h2>

              <p className="text-[15px] md:text-[14px] text-black leading-relaxed mb-8">
                We deliver budget-friendly and high-quality termite and pest
                control services across Trivandrum. Our certified team uses
                safe, modern and long-lasting treatment methods to protect homes
                and businesses from all major pest problems.
              </p>

              <Link
                href="/about"
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-md text-[15px] md:text-[14px] font-medium hover:bg-blue-600 transition"
              >
                Learn More About Our Work
              </Link>

            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            
            <h3 className="text-[32px] md:text-[24px] lg:text-[28px] font-medium text-black leading-snug mb-8">
              Trusted Brands <br /> We Work With
            </h3>

            {/* SLIDER */}
            <div className="mb-8">
              <Slider {...sliderSettings}>
                {integrationLogos.map((logo, index) => (
                  <div key={index} className="px-2">
                    <div className="flex items-center justify-center h-[80px]">
                      
                      <div className="flex items-center justify-center w-full h-full p-4 bg-white rounded-lg">
                        <Image
                          src={logo.src}
                          alt={logo.name}
                          width={120}
                          height={45}
                          loading="lazy"
                          className="object-contain max-h-[45px] opacity-80"
                        />
                      </div>

                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            <Link
              href="/services"
              className="inline-block border-2 border-blue-500 text-blue-500 px-7 py-3 rounded-md text-[15px] md:text-[14px] font-medium"
            >
              Safe and Certified Chemicals
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}