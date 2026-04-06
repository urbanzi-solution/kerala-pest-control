"use client";

import Link from "next/link";
import {
  Bug,
  Shield,
  Wind,
  Mouse,
  Flower,
  Bed,
} from "lucide-react";

const services = [
  {
    icon: <Bug size={22} />,
    title: "TERMITE TREATMENT",
    desc: "Prevent catastrophic structural damage with our multi-layered defense utilizing soil-barrier technology and targeted colony baiting systems.",
    href: "/services/termite",
  },
  {
    icon: <Bed size={22} />,
    title: "BED BUG REMOVAL",
    desc: "A specialized two-visit clinical protocol ensuring complete lifecycle disruption from eggs to adults for immediate relief and long-term peace.",
    href: "/services/bed-bugs",
  },
  {
    icon: <Bug size={22} />,
    title: "COCKROACH CONTROL",
    desc: "Deployment of targeted advanced gel baits and clinical pheromone traps designed for maximum efficiency in kitchens and sensitive storage areas.",
    href: "/services/cockroach",
  },
  {
    icon: <Wind size={22} />,
    title: "MOSQUITO MANAGEMENT",
    desc: "Protect your family from vector-borne diseases with seasonal ULV cold fogging and source reduction protocols tailored for the Kerala monsoon.",
    href: "/services/mosquito",
  },
  {
    icon: <Mouse size={22} />,
    title: "RODENT CONTROL",
    desc: "Scientific proofing and sealing of structural entry points combined with tamper-resistant monitoring stations for sustainable rodent management.",
    href: "/services/rodent",
  },
  {
    icon: <Flower size={22} />,
    title: "ANT CONTROL",
    desc: "Precision baiting strategies that leverage worker behavior to transport clinical formulations directly to the queen, ensuring total colony collapse.",
    href: "/services/ant",
  },
];

export default function ServiceGrid() {
  return (
    <section className="bg-[#eef2f1] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Targeted Interventions
          </h2>
          <p className="text-gray-600 mt-3">
            Select a specialized treatment plan to view our clinical approach and protocols.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((item, i) => (
            <Link key={i} href={item.href} className="block">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer">
                
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-700 mb-5">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 tracking-wide mb-3">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Link text */}
                <div className="mt-6 text-green-700 text-sm font-semibold">
                  LEARN PROTOCOL →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Wide Card */}
        <Link href="/services/ipm" className="block">
          <div className="mt-4 bg-white rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-700">
                <Shield size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  GENERAL PEST CONTROL
                </h3>
                <p className="text-gray-600 text-sm mt-1 max-w-xl">
                  A holistic Integrated Pest Management framework involving quarterly clinical audits, preventative sealing, and eco-optimized barrier treatments.
                </p>
              </div>
            </div>

            <div className="text-green-700 font-semibold text-sm whitespace-nowrap">
              VIEW FULL PROGRAM →
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
}