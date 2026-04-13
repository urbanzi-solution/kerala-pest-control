"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      label: "Years of Expertise",
      number: 15,
      suffix: "Y+",
      sub: "Trusted in Pest Control",
    },
    {
      label: "Happy Customers",
      number: 25,
      suffix: "K+",
      sub: "Homes and Businesses",
    },
    {
      label: "Pests Eliminated",
      number: 500,
      suffix: "K+",
      sub: "Safe and Effective Treatments",
    },
    {
      label: "Services Completed",
      number: 100,
      suffix: "K+",
      sub: "Reliable and On Time",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-[400px]
        flex items-center justify-center
        bg-[url('/img3.png')] bg-cover bg-center
        text-white
      "
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 w-full px-5 py-24">
        <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT */}
          <div className="flex-1 text-left lg:text-left text-center">
            <h2 className="
              text-2xl md:text-3xl font-medium leading-relaxed
              lg:border-l-4 border-[#3b7cff] lg:pl-5
              max-w-[450px] mx-auto lg:mx-0
            ">
              By the Numbers <br /> Our Pest Control Impact
            </h2>
          </div>

          {/* RIGHT */}
          <div className="flex-1 w-full">

            <div className="
              grid grid-cols-2 lg:grid-cols-4
              gap-6 md:gap-10
            ">

              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">

                  <p className="text-sm opacity-80 mb-1 min-h-[40px]">
                    {stat.label}
                  </p>

                  <h3 className="text-3xl md:text-5xl font-medium leading-tight">
                    {visible ? <CountUp end={stat.number} duration={2} /> : 0}
                    {stat.suffix}
                  </h3>

                  <p className="text-sm md:text-base opacity-90 mt-1">
                    {stat.sub}
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