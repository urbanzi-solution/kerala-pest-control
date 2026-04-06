"use client";

import { ShieldCheck } from "lucide-react";

export default function TermiteHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-green-950 text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/house.jpg" // replace with your image
          alt="background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-900 to-green-800 opacity-95"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Termite <span className="text-amber-400">Care</span>
            <br />
            for Kerala
          </h1>

          <p className="text-green-100 text-lg mb-6 max-w-xl">
            Did you know termites cause more property damage annually than floods
            and fires combined? In Kerala's high-humidity climate (exceeding
            70%), subterranean termites cause silent, catastrophic devastation
            to homes.
          </p>

          <p className="text-green-200 text-sm mb-10 max-w-xl">
            Warning signs like sagging door frames, buckling floorboards, or
            hollow-sounding wood panels are often the final indicators of
            deep-seated infestation. We provide CIB&RC-approved, surgical
            precision protection for your property legacy.
          </p>

          {/* CTA */}
          <button className="bg-amber-200 text-green-900 font-semibold px-8 py-4 rounded-full hover:bg-amber-300 transition">
            Book a Free Termite Inspection →
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10">
              <ShieldCheck className="text-white" />
            </div>
            <div>
              <p className="font-semibold">Government Approved</p>
              <p className="text-sm text-green-200">
                IPM Certified Specialists
              </p>
            </div>
          </div>

          <div className="space-y-5 text-sm">
            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-green-200">Methodology</span>
              <span className="font-semibold">CIB&RC Standard</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-green-200">Service Area</span>
              <span className="font-semibold">Trivandrum & Kollam</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-green-200">Response Time</span>
              <span className="font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                &lt; 24 Hours
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}