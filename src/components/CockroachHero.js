import Image from "next/image";

export default function CockroachHero() {
  return (
    <section className="bg-[#eaf0ea] py-16 px-6 min-h-[520px] flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div className="flex flex-col gap-6">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 self-start bg-white border border-slate-200 text-slate-600 text-[10px] font-semibold tracking-[0.18em] uppercase px-4 py-2 rounded-full shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-emerald-600" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            FSSAI & ISO Compliant
          </span>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-extrabold text-emerald-900 leading-[1.08] tracking-tight">
            Professional<br />Cockroach Control<br />in Kerala
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-[15px] leading-relaxed max-w-md">
            Eradicate infestations with medical-grade precision. Our scientific approach targets
            the source using government-approved gel technology—safe for families, lethal for pests.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-[14px] px-7 py-4 rounded-xl transition-colors duration-200">
              Book a Cockroach Inspection
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>

            {/* Homes protected pill */}
            <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-5 py-3.5 shadow-sm">
              <div className="flex -space-x-1.5">
                <div className="w-6 h-6 rounded-full bg-emerald-700 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-white" />
              </div>
              <span className="text-[11px] font-bold tracking-[0.15em] text-slate-600 uppercase">
                5,000+ Homes Protected
              </span>
            </div>
          </div>
        </div>

        {/* Right — image + floating card */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
            {/*
              Replace src with your actual image e.g. /images/cockroach.jpg
              Place in /public/images/
            */}
            <Image
              src="/cockroach.jpg"
              alt="Close-up of cockroach"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Floating safety card */}
          <div className="absolute -bottom-5 left-4 bg-white rounded-2xl shadow-xl p-5 max-w-[230px] border border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-orange-600" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <p className="text-emerald-800 text-[11px] font-extrabold tracking-wide uppercase leading-tight">
                Clinical Safety<br />Protocol
              </p>
            </div>
            <p className="text-slate-500 text-[12px] leading-relaxed">
              Laboratory-grade formulations approved by the Central Insecticides Board (CIB) for
              indoor residential use.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}