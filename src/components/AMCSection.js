"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const benefits = [
  "Quarterly Professional Monitoring Inspections of entire premises.",
  "Monitoring of bait stations and soil barrier zones (if applicable).",
  "Zero-cost retreatment guarantee for any new activity during the term.",
  "Updated digital service report on every visit with trend analysis.",
];

export default function AMCSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");

  const pathname = usePathname();

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#c7c9cd] rounded-3xl border border-white px-10 py-14 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div>
            <span className="inline-block border border-white text-black text-[10px] font-semibold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-8">
              Guardian Program
            </span>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-black leading-tight mb-6">
              Annual Maintenance <br /> Contract (AMC)
            </h2>

            <p className="text-black text-[15px] leading-relaxed mb-10 max-w-md">
              Continuous vigilance for complete peace of mind. Termites are a recurring threat in
              Kerala; our AMC program provides active protection 365 days a year.
            </p>

            <ul className="flex flex-col gap-5">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-0.5 w-7 h-7 rounded-lg border border-white flex items-center justify-center">
                    ✔
                  </span>
                  <p className="text-black text-[14px]">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-slate-900 text-xl font-bold">
                Request AMC Quote
              </h3>
              <p className="text-slate-400 text-[13px] mt-1">
                Personalized protection plan
              </p>
            </div>

            <form
              action="https://script.google.com/macros/s/AKfycbzDgXr82qYpqFTrg-rdWYCdYNO-knWTOz0nLaeE9KKg2_BTuPdRybHha-9to0D3gg/exec"
              method="POST"
              target="_blank"
              className="flex flex-col gap-6"
            >

              {/* NAME */}
              <input
                name="entry.1111111111"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
                className="w-full text-gray-800 border-b pb-3"
              />

              {/* PHONE */}
              <input
                name="entry.2222222222"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                required
                className="w-full text-gray-800 border-b pb-3"
              />

              {/* PLACE */}
              <input
                name="entry.3333333333"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="Your Place (City,Area)"
                required
                className="w-full text-gray-800 border-b pb-3"
              />

              {/* SOURCE */}
              <input
                type="hidden"
                name="entry.4444444444"
                value="Termite Control Page"
              />

              {/* PATH */}
              <input
                type="hidden"
                name="entry.5555555555"
                value={pathname}
              />

              <button
                type="submit"
                className="bg-blue-600 text-white py-4 rounded-full"
              >
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}