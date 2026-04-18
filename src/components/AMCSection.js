"use client";

import { useState } from "react";

const benefits = [
  "Quarterly Professional Monitoring Inspections of entire premises.",
  "Monitoring of bait stations and soil barrier zones (if applicable).",
  "Zero-cost retreatment guarantee for any new activity during the term.",
  "Updated digital service report on every visit with trend analysis.",
];

export default function AMCSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#c7c9cd] rounded-3xl border border-white px-10 py-14 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            {/* Badge */}
            <span className="inline-block border border-white text-black text-[10px] font-semibold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-8">
              Guardian Program
            </span>

            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-extrabold text-black leading-tight mb-6">
              Annual Maintenance <br /> Contract (AMC)
            </h2>

            {/* Description */}
            <p className="text-black text-[15px] leading-relaxed mb-10 max-w-md">
              Continuous vigilance for complete peace of mind. Termites are a recurring threat in
              Kerala; our AMC program provides active protection 365 days a year to ensure your
              home remains termite-free even as soil conditions shift.
            </p>

            {/* Benefits list */}
            <ul className="flex flex-col gap-5">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-0.5 shrink-0 w-7 h-7 rounded-lg border border-white flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-4 h-4 text-black"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5l2.5 2.5 4.5-5" />
                    </svg>
                  </span>
                  <p className="text-black text-[14px] leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Quote form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-slate-900 text-xl font-bold">Request AMC Quote</h3>
              <p className="text-slate-400 text-[13px] mt-1">Personalized protection plan</p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="full name"
                  className="w-full border-b border-slate-200 pb-3 text-slate-700 text-[15px] placeholder:text-slate-300 focus:outline-none focus:border-emerald-600 transition-colors bg-transparent"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 90000 00000"
                  className="w-full border-b border-slate-200 pb-3 text-slate-700 text-[15px] placeholder:text-slate-300 focus:outline-none focus:border-emerald-600 transition-colors bg-transparent"
                />
              </div>

              {/* Submit */}
              <button
                onClick={() => console.log({ name, phone })}
                className="mt-2 w-full bg-[#3b7cff] hover:bg-[#4a83f7] text-white font-semibold text-[15px] py-4 rounded-full transition-colors duration-200"
              >
                Send Request
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}