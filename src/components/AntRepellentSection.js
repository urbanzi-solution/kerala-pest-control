const sciencePoints = [
  "No Detection Barrier",
  "Trophallaxis Transfer",
  "Colony Erasure",
];

export default function AntRepellentSection() {
  return (
    <section className="bg-[#8e8e8e] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* Left */}
        <div className="flex flex-col gap-7">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5">
              Why Repellent Sprays Make Ant Infestations Worse
            </h2>
            <p className="text-white text-[14px] leading-relaxed">
              Standard over-the-counter sprays are repellent: they kill ants on contact but create
              a chemical barrier that ants detect and avoid. The colony remains intact and foraging
              is merely redirected to new routes. In multi-room properties, repellent sprays cause
              the colony to relocate deeper into the structure.
            </p>
          </div>

          {/* Budding card */}
          <div className="bg-[#3b7cff] border-[#3b7cff] rounded-2xl p-7">
            <h3 className="text-white text-[15px] font-bold mb-4">
              The &ldquo;Budding&rdquo; Phenomenon
            </h3>
            <p className="text-white text-[13px] leading-relaxed italic">
              For Pharaoh ants specifically, repellent sprays trigger budding — the colony splits
              into multiple sub-colonies that disperse throughout the building. A single Pharaoh ant
              colony treated with repellent spray can become ten colonies within weeks. This is the
              most common reason repeated DIY treatment makes ant infestations worse over time.
            </p>
          </div>
        </div>

        {/* Right — white card */}
        <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col gap-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
              Our Science-First Approach
            </h3>
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-slate-200 shrink-0" stroke="currentColor" strokeWidth={1.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
          </div>

          <p className="text-slate-500 text-[14px] leading-relaxed">
            Kerala Pest Solutions exclusively uses non-repellent formulations. Ants cannot detect
            the active ingredient, so they cross treated zones, consume or contact the bait, and
            carry it back to the queen — eliminating the entire colony from within.
          </p>

          {/* Points */}
          <ul className="flex flex-col gap-3 mt-1">
            {sciencePoints.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#3b7cff] shrink-0" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="text-slate-700 text-[14px] font-semibold">{point}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}