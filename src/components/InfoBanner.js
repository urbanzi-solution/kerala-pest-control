"use client";

import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function InfoBanner() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div className="mt-4 flex justify-center gap-2">{dots}</div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-gray-300 rounded-full transition-all duration-300"></div>
    ),
  };

  const infoItems = [
    {
      id: 1,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="10" y="5" width="20" height="30" stroke="#000" strokeWidth="2" />
          <rect x="15" y="10" width="4" height="4" fill="#000" />
          <rect x="21" y="10" width="4" height="4" fill="#000" />
          <rect x="15" y="18" width="4" height="4" fill="#000" />
          <rect x="21" y="18" width="4" height="4" fill="#000" />
        </svg>
      ),
      text: (
        <>
          <strong>Safe and Eco-Friendly Treatments</strong>
          <br />
          We use child safe, pet friendly and environmentally responsible pest control solutions.
        </>
      ),
    },
    {
      id: 2,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M5 20L20 8L35 20V32H5V20Z" stroke="#000" strokeWidth="2" />
          <rect x="16" y="22" width="8" height="10" fill="#000" />
        </svg>
      ),
      text: (
        <>
          <strong>Trusted by Homes and Businesses</strong>
          <br />
          We provide reliable pest control services for houses, apartments, offices and shops.
        </>
      ),
    },
    {
      id: 3,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="4" y="18" width="6" height="18" stroke="#000" strokeWidth="2" />
          <rect x="14" y="10" width="8" height="26" stroke="#000" strokeWidth="2" />
          <rect x="26" y="15" width="10" height="21" stroke="#000" strokeWidth="2" />
        </svg>
      ),
      text: (
        <>
          <strong>Fast Response and Expert Team</strong>
          <br />
          Our trained professionals offer quick service with long lasting pest protection.
        </>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-4">
      <div className="max-w-[1400px] mx-auto px-4">

        {/* ✅ Desktop View */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-center">
          {infoItems.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center gap-4 relative px-5 py-3"
            >
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                {item.icon}
              </div>

              <p className="text-sm text-gray-800 leading-relaxed">
                {item.text}
              </p>

              {/* Divider */}
              {index !== infoItems.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[60px] bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>

        {/* ✅ Mobile Slider */}
        <div className="block md:hidden">
          <Slider ref={sliderRef} {...settings}>
            {infoItems.map((item) => (
              <div key={item.id} className="px-4 outline-none">
                <div className="flex flex-col items-center text-center gap-3 py-3">
                  <div className="w-[50px] h-[50px] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <p className="text-sm text-gray-800 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}