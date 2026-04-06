const rows = [
  {
    feature: "Efficiency",
    pre: "99.9% Prevention",
    post: "Corrective & Protective",
  },
  {
    feature: "Relative Cost",
    pre: "Low (Built-in)",
    post: "Variable (Scope-based)",
  },
  {
    feature: "Optimal Timing",
    pre: "Before slab casting",
    post: "Anytime post-completion",
  },
  {
    feature: "Longevity",
    pre: "Up to 10 Years",
    post: "5 to 8 Year Warranty",
  },
];

export default function ComparisonTable() {
  return (
    <section className="bg-[#f0f2f0] py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-emerald-900 text-center mb-12 tracking-tight">
          Pre-Construction vs. Post-Construction
        </h2>

        {/* Table card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">

          {/* Header row */}
          <div className="grid grid-cols-3 bg-emerald-900 px-8 py-5">
            <p className="text-[11px] font-bold tracking-[0.18em] text-white/70 uppercase">Feature</p>
            <p className="text-[11px] font-bold tracking-[0.18em] text-white/70 uppercase">Pre-Construction</p>
            <p className="text-[11px] font-bold tracking-[0.18em] text-white/70 uppercase">Post-Construction</p>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 px-8 py-6 items-center ${
                i !== rows.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              <p className="text-[11px] font-bold tracking-[0.15em] text-emerald-900 uppercase">
                {row.feature}
              </p>
              <p className="text-[15px] text-slate-600">{row.pre}</p>
              <p className="text-[15px] text-slate-600">{row.post}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}