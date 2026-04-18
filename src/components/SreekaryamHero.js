import Image from "next/image";

export default function SreekaryamHero() {
  return (
    <section className="bg-[#f3f5f4] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <div className="flex flex-col gap-6">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 self-start bg-blue-100 border  text-blue-700 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full">
            <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-emerald-600" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Sreekaryam Specialty
          </span>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-black leading-tight tracking-tight">
            Pest Control<br />Sreekaryam
          </h1>

          {/* Body */}
          <p className="text-slate-600 text-[15px] leading-relaxed">
        
Sreekaryam is a rapidly developing area in Trivandrum’s north-eastern corridor, situated between the established residential areas of the city centre and the IT growth zones of Kazhakootam and Technopark. The area combines older residential plots with a wave of newer apartment construction and a significant student and young professional population connected to the University of Kerala campus at Karyavattom. This mix of property types and population creates a varied and evolving pest environment.
Kerala Pest Solutions is based in Trivandrum and provides professional pest management across Sreekaryam and its surrounding areas. Our technicians are familiar with the specific construction patterns, drainage infrastructure, and seasonal pest pressures in this part of the city.


          </p>

          {/* CTA + social proof */}
          <div className="flex flex-wrap items-center gap-5 mt-2">
            <button className="flex items-center gap-2 bg-[#3670e3] hover:bg-[#3b7cff] text-white font-bold text-[14px] px-7 py-4 rounded-xl transition-colors duration-200">
              Book a Free Inspection
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-emerald-400 border-2 border-white flex items-center justify-center">
                  <span style={{fontSize:"9px"}} className="text-white font-bold">JE</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center">
                  <span style={{fontSize:"9px"}} className="text-white font-bold">AS</span>
                </div>
              </div>
              <span className="text-slate-500 text-[13px] font-medium">500+ Local Projects</span>
            </div>
          </div>
        </div>

        {/* Right — image + floating card */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
            {/*
              Replace src with /images/kazhakootam.jpg
            */}
            <Image
              src="/sreekaryamHero.jpg"
              alt="Kazhakootam Kerala"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Floating eco card */}
          <div className="absolute bottom-4 left-4 bg-white rounded-2xl shadow-xl p-5 max-w-[230px] border border-slate-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-emerald-600" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>
              </div>
              <p className="text-slate-800 text-[13px] font-bold">Eco-Friendly Tech</p>
            </div>
            <p className="text-slate-400 text-[12px] leading-relaxed">
              Pet-safe and human-safe chemical barriers designed for Trivandrum&apos;s climate.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}