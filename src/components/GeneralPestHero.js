import Image from "next/image";

export default function GeneralPestHero() {
  return (
    <section className="bg-[#eaf0ea] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <div className="flex flex-col gap-6">

          {/* Label */}
          <p className="text-[10px] font-bold tracking-[0.25em] text-emerald-700 uppercase">
            Clinical Grade Protection
          </p>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-black leading-tight tracking-tight">
            General Pest<br />Control Kerala
          </h1>

          {/* Body */}
          <p className="text-slate-600 text-[15px] leading-relaxed">
           Most residential and commercial properties in Kerala do not face a single pest problem in isolation. A kitchen harbouring cockroaches often shares space with silverfish in the bathrooms and ants trailing through structural gaps. Addressing each pest individually is inefficient, disruptive, and expensive. Kerala Pest Solutions’ General Pest Control (GPC) service provides a comprehensive, broad-spectrum solution designed to eliminate multiple pest species in a single, professional visit.

          </p>
            <p className="text-slate-600 text-[15px] leading-relaxed">
                Our GPC service is built on an Integrated Pest Management (IPM) framework — the professional standard for responsible pest control. This approach combines targeted gel baiting, residual barrier spray, and environmental advice to deliver long-term prevention with the minimum necessary chemical intervention.
</p>
          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-[14px] px-7 py-4 rounded-xl transition-colors duration-200">
              Request Free Inspection
            </button>
            <div className="flex items-center gap-2 text-slate-500 text-[13px]">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-emerald-600 shrink-0" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Free inspection across Trivandrum and Kollam
            </div>
          </div>
        </div>

        {/* Right — image + floating card */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
            {/*
              Replace src with your actual image e.g. /images/general-pest-technician.jpg
              Place in /public/images/
            */}
            <Image
              src="/general-pest-technician.jpg"
              alt="General pest control technician"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Floating IPM card */}
          <div className="absolute bottom-4 left-4 bg-white rounded-2xl shadow-xl p-5 max-w-[260px] border border-slate-100">
            <p className="text-[9px] font-bold tracking-[0.2em] text-emerald-600 uppercase mb-2">
              The IPM Framework
            </p>
            <p className="text-slate-500 text-[12px] leading-relaxed">
              We combine targeted gel baiting, residual barrier sprays, and environmental advice to
              eliminate pests at the root cause, rather than just treating symptoms.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}