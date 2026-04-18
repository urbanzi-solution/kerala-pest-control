import Image from "next/image";

export default function RestaurantTargetedSolutions() {
  return (
    <section className="bg-[#eeeeee] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-xl lg:text-3xl font-extrabold text-black tracking-widest uppercase mb-2">
            Targeted Solutions
          </h2>
          <p className="text-slate-400 text-[14px]">
            Specialized treatment protocols for high-risk kitchen pests.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Left column */}
          <div className="flex flex-col gap-4">

            {/* Cockroaches — large card */}
            <div className="bg-white rounded-2xl p-6 lg:p-7 border border-slate-100 shadow-sm flex flex-col gap-5 min-h-[200px] lg:min-h-[240px]">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <span className="text-[9px] font-bold tracking-[0.22em] text-slate-300 uppercase">
                  Core Risk 01
                </span>
              </div>

              <div>
                <h3 className="text-[16px] font-extrabold text-black mb-2">Cockroaches</h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">
                  The most common and most dangerous pest in food preparation environments. German
                  cockroaches breed rapidly in warm kitchen environments and are vectors for
                  Salmonella, E. coli, and other pathogens. They contaminate food surfaces,
                  equipment, and packaging simply by moving across them. Our treatment uses
                  odourless gel bait applied to harborage sites — no sprays, no kitchen shutdown,
                  no chemical odour.
                </p>
              </div>
            </div>

            {/* Two small cards — stacked on mobile, side by side on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Flies */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[14px] font-extrabold text-black mb-1.5">Flies</h3>
                  <p className="text-slate-400 text-[12px] leading-relaxed">
                    Flies in food preparation areas are both an FSSAI compliance issue and a direct
                    contamination risk. Kerala&apos;s climate makes fly pressure year-round, with a
                    peak during and after the monsoon season. We recommend UV fly traps for active
                    food preparation areas combined with external barrier treatment around waste and
                    drainage areas.
                  </p>
                </div>
              </div>

              {/* Ants */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[14px] font-extrabold text-black mb-1.5">Ants</h3>
                  <p className="text-slate-400 text-[12px] leading-relaxed">
                    Ants in food storage areas contaminate dry goods and are a common trigger for
                    customer complaints. Our non-repellent gel bait eliminates the colony rather
                    than redirecting it to another area of the restaurant.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right — Rodents image card */}
          <div className="relative rounded-2xl overflow-hidden min-h-[360px] lg:min-h-[460px] shadow-xl">
            <Image
              src="/pest-technician-wall.jpg"
              alt="Pest control technician installing bait station"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-emerald-950/55" />

            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <h3 className="text-white text-lg lg:text-xl font-extrabold mb-2">Rodents</h3>
              <p className="text-white text-[13px] leading-relaxed max-w-xs line-clamp-6 lg:line-clamp-none">
                Rats and mice in a food business contaminate stock, gnaw through packaging, and
                carry diseases including leptospirosis and salmonellosis. They are also a leading
                cause of unexplained electrical fires through cable gnawing. FSSAI inspectors treat
                any evidence of rodent activity as a critical finding. Our commercial rodent
                programme deploys tamper-resistant bait stations in back-of-house areas, storage
                rooms, and external perimeter zones, monitored fortnightly and documented in a
                service log.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}