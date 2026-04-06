import Image from "next/image";

export default function TechnoparkEcosystem() {
  return (
    <section className="bg-[#e8f0f8] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            The Technopark Ecosystem Challenge
          </h2>
          <p className="text-slate-500 text-[14px] leading-relaxed max-w-xl mx-auto">
            Technopark&apos;s unique blend of high-density IT campuses, transient workforce
            housing, and tropical green buffers requires specialized intervention.
          </p>
        </div>

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

          {/* PG & Hostel — white */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col gap-5">
            <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-emerald-700" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
            </div>
            <div>
              <h3 className="text-[17px] font-extrabold text-slate-900 mb-3">
                PG & Hostel Transience
              </h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">
                The high movement of IT professionals between cities makes Technopark PGs hotspots
                for bed bug hitchhikers. Our protocols account for rapid turnover cycles.
              </p>
            </div>
          </div>

          {/* Canteen — dark emerald */}
          <div className="bg-emerald-700 rounded-2xl p-8 flex flex-col gap-5">
            <div className="w-11 h-11 rounded-xl bg-emerald-600/50 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5M6 10.608v3.272c0 .83.672 1.502 1.5 1.502h9c.828 0 1.5-.671 1.5-1.502v-3.272M8.25 19.5h7.5" />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-[17px] font-extrabold mb-3">
                Canteen Infrastructure
              </h3>
              <p className="text-emerald-100/75 text-[13px] leading-relaxed">
                Maintaining FSSAI standards in large-scale IT cafeterias requires zero-downtime,
                non-toxic gel solutions for cockroach management.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Electrical Infrastructure — light blue */}
          <div className="bg-[#ddeef8] rounded-2xl p-8 border border-blue-100 flex flex-col gap-5">
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-amber-600" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
            </div>
            <div>
              <h3 className="text-slate-900 text-[17px] font-extrabold mb-3">
                Electrical Infrastructure Protection
              </h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">
                The campus green buffers host rodent populations that threaten critical server
                cabling. Our rodent control focuses on perimeter exclusion and sensory barriers.
              </p>
            </div>
          </div>

          {/* Server room image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[5/2] shadow-md">
            {/*
              Replace src with /images/server-room.jpg
            */}
            <Image
              src="/server-room.jpg"
              alt="Server room cabling infrastructure"
              fill
              className="object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}