import Image from "next/image";

export default function GeneralPestCovers() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              What General Pest Control Covers
            </h2>
            <p className="text-slate-400 text-[14px]">
              Clinical solutions for common household invaders in the Kerala climate.
            </p>
          </div>
        </div>

        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">

          {/* Cockroaches card */}
          <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100 flex flex-col gap-4">
            <span className="self-start bg-[#dde3ef] text-[#3b7cff] text-[9px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full">
              Blattodea
            </span>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">Cockroaches</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed mb-4">
                We utilize targeted gel baiting technology. These baits are strategically placed in
                harborage areas, allowing the colony to feed and share the active ingredient,
                resulting in total elimination without the need to empty cupboards.
              </p>
              <ul className="flex flex-col gap-2">
                {["No need to empty cupboards", "Odourless and non-invasive"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#3b7cff] shrink-0" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="text-slate-500 text-[13px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4] lg:aspect-auto shadow-md">
            {/*
              Replace src with /images/pest-technician-cleaning.jpg
            */}
            <Image
              src="/pest-technician-cleaning.jpg"
              alt="Pest control technician at work"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Ants card */}
          <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100 flex flex-col gap-4">
            <span className="self-start bg-[#dde3ef] text-[#3b7cff] text-[9px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full">
              Formicidae
            </span>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">Ants</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">
                Standard sprays only kill visible ants. Our non-repellent formulations allow ants
                to carry the treatment back to the nest, destroying the source and the entire
                colony.
              </p>
            </div>
            <div className="mt-auto">
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-slate-200" stroke="currentColor" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44a23.91 23.91 0 0 0 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Silverfish card */}
          <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100 flex flex-col gap-4">
            <span className="self-start bg-[#dde3ef] text-[#3b7cff] text-[9px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full">
              Zygentoma
            </span>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">Silverfish</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">
                Kerala&apos;s high humidity levels create the perfect breeding ground for silverfish
                in closets and bookshelves. We treat damp areas and paper storage zones with
                specialized applications.
              </p>
            </div>
            <button className="self-start text-[#3b7cff] font-bold text-[13px] mt-auto hover:text-[#3370ea] transition-colors">
              Climate-Specific Treatment →
            </button>
          </div>

          {/* Centipedes dark card */}
          <div className="lg:col-span-2 bg-[#6bb3ee] rounded-2xl p-8 flex flex-col gap-5">
            <h3 className="text-xl font-extrabold text-white leading-snug">
              Centipedes, Millipedes & Spiders
            </h3>
            <p className="text-[#dde3ef] text-[13px] leading-relaxed max-w-lg">
              Our residual barrier sprays are designed for monsoon protection, preventing crawling
              insects like centipedes and millipedes from entering through cracks. For spiders, we
              focus on clearing webs and treating hidden corners to prevent re-infestation.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <div className="bg-[#3b7cff] rounded-xl p-4">
                <p className="text-3xl font-extrabold text-white mb-1">98%</p>
                <p className="text-[#f5f5f5] text-[10px] font-bold tracking-[0.15em] uppercase">
                  Barrier Efficacy
                </p>
              </div>
              <div className="bg-[#3b7cff] rounded-xl p-4">
                <p className="text-3xl font-extrabold text-white mb-1">100%</p>
                <p className="text-[#f5f5f5] text-[10px] font-bold tracking-[0.15em] uppercase">
                  Corners Covered
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}