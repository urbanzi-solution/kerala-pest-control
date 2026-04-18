const areas = [
  ["Kazhakootam", "Karyavattom", "Technopark "],
  ["Pangappara","Ulloor",],
 
];

export default function SreekaryamCoverage() {
  return (
    <section className="bg-[#eff1f0] py-14 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black leading-tight">
            Comprehensive Coverage Across<br/>the Sreekaryam Corridor
          </h2>
          <p className="text-slate-500 text-[14px] leading-relaxed max-w-md">
            Our specialized mobile units are strategically stationed across the Sreekaryam
            technology belt to ensure a 60-minute response window for all IT parks and residential
            clusters.
          </p>
        </div>

        {/* Right — area grid */}
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          {areas.map((row, i) =>
            row.map((area, j) =>
              area ? (
                <div key={area} className="flex items-start gap-2">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#3b7cff] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <p className="text-slate-700 text-[13px] leading-snug">{area}</p>
                </div>
              ) : (
                <div key={"empty-" + i + j} />
              )
            )
          )}
        </div>

      </div>
    </section>
  );
}