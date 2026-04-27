import Image from "next/image";

export default function ResidentialTargetedSolutions() {
  return (
    <section className="bg-[#f1f1f1] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-xl lg:text-3xl font-extrabold text-black tracking-widest uppercase mb-2">
            Pest Control for Apartments and Multi-Storey Buildings
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Left column */}
          <div className="flex flex-col gap-4">

            {/* Mosquito — large card */}
            <div className="bg-white rounded-2xl p-6 lg:p-7 border border-slate-100 shadow-sm flex flex-col justify-between min-h-[200px] lg:min-h-[240px]">
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
              <div className="mt-5">
                <h3 className="text-[16px] font-extrabold text-black mb-2">
                  Mosquito Management for Housing Societies
                </h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">
                  Individual flat treatments are ineffective for mosquito control in apartment
                  buildings because mosquitoes breed and travel across rooftop tanks, basement
                  sumps, and common landscaping. Society-wide monthly larviciding during the monsoon
                  season, combined with source reduction in common areas, is the only approach that
                  delivers a meaningful and lasting reduction in mosquito populations across the
                  building.
                </p>
              </div>
            </div>

            {/* Two small cards — stacked on mobile, side by side on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Bed Bugs */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[14px] font-extrabold text-black mb-1.5">
                    Bed Bugs in Rented and PG Properties
                  </h3>
                  <p className="text-slate-400 text-[12px] leading-relaxed">
                    Rented apartments and paying guest accommodations with frequent tenant turnover
                    are at elevated bed bug risk. A single infested room can seed an entire property
                    within weeks. Our two-visit bed bug elimination protocol provides complete colony
                    elimination. We offer whole-property protocols for landlords and PG owners that
                    address every room in a single coordinated visit.
                  </p>
                </div>
              </div>

              {/* Cockroaches */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[14px] font-extrabold text-black mb-1.5">
                    Cockroach Control in Apartments
                  </h3>
                  <p className="text-slate-400 text-[12px] leading-relaxed">
                    The most common pest call from apartment properties in Trivandrum and Kollam. We
                    use professional gel bait applied to harborage sites inside kitchen cabinets,
                    under appliances, and behind plumbing fixtures. Gel bait is odourless, requires
                    no evacuation, and is safe in active kitchens.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right — image card */}
          <div className="relative rounded-2xl overflow-hidden min-h-[360px] lg:min-h-[460px] shadow-xl">
            <Image
              src="/Resi-technician-wall.webp"
              alt="Pest control technician installing bait station"
              fill
              loading="lazy"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-emerald-950/55" />

            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <h3 className="text-white text-lg lg:text-xl font-extrabold mb-2">
                The Shared Infrastructure Challenge
              </h3>
              <p className="text-white text-[13px] leading-relaxed max-w-xs line-clamp-6 lg:line-clamp-none">
                Apartment buildings present a pest management challenge that does not exist in
                independent houses: shared drainage stacks, common walls, and joint utility spaces
                create pathways through which pests travel between units. A perfectly treated flat
                on the third floor can be re-infested within weeks via the drainage stack from an
                untreated flat on the ground floor. This is why apartment pest control is most
                effective when managed at the building level rather than the individual unit level.
                Kerala Pest Solutions works with both individual flat owners and housing society
                management committees. For building-wide programmes, we coordinate treatment across
                all units and common areas with a single service log maintained for the entire
                property.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}