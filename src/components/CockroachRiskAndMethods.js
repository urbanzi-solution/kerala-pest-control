const stats = [
  { value: "30+", label: "Pathogens Carried", color: "text-emerald-900" },
  { value: "99%", label: "Asthma Correlation", color: "text-orange-500" },
  { value: "24h", label: "Bacteria Spread", color: "text-emerald-900" },
  { value: "Rapid", label: "Colony Growth", color: "text-orange-500" },
];

const methods = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-emerald-700" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Professional Gel Bait",
    description:
      "Gel bait is the most effective professional tool for indoor cockroach control. Small dots of high-attractant bait are applied precisely inside cabinet hinges, under appliance housings, behind plumbing fixtures, and within every identified harborage site. Cockroaches consume the bait and return to the harborage, where they contaminate other individuals through direct contact and faecal droplets. This transfer effect spreads the active ingredient through the entire colony — eliminating individuals that never came into contact with the bait directly.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-emerald-700" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Residual Barrier Spray",
    description:
      "For heavy infestations or as perimeter treatment, we apply a government-approved residual insecticide to baseboards, door frames, drain surrounds, and wall-floor junctions. The residual formulation continues working for several weeks, neutralising cockroaches entering from external sources such as shared drainage.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-emerald-700" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: "Insect Growth Regulator (IGR)",
    description:
      "For persistent infestations, we incorporate an IGR into the treatment. IGRs disrupt the cockroach reproductive cycle by preventing nymphs from developing into breeding adults. Combined with gel bait, this addresses both the current population and future generations.",
  },
];

export default function CockroachRiskAndMethods() {
  return (
    <div>

      {/* ── Medical Risk Section ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left */}
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-emerald-900 leading-tight">
              More Than Just a Nuisance: A<br />Serious Medical Risk
            </h2>
            <p className="text-slate-600 text-[14px] leading-relaxed">
              Cockroaches, particularly the resilient{" "}
              <em className="font-semibold text-slate-800">German Cockroach</em>, are mobile
              reservoirs for bacteria. They carry pathogens like <strong>Salmonella</strong> and{" "}
              <strong>E. coli</strong> directly onto your food preparation surfaces and utensils.
            </p>
            <p className="text-slate-600 text-[14px] leading-relaxed">
              Beyond bacteria, cockroach droppings, saliva, and shedding skin contain potent
              allergens that are known{" "}
              <span className="text-orange-500 font-semibold">triggers for asthma</span> and
              chronic respiratory issues, especially in children living in the humid,
              moisture-rich climate of Kerala.
            </p>
            <p className="text-slate-600 text-[14px] leading-relaxed">
              In our local environment, populations grow at an exponential rate. A single pair can
              lead to thousands of offspring within months if not managed with professional
              intervention.
            </p>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4 mt-14">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 flex flex-col gap-2"
              >
                <p className={`text-4xl font-extrabold leading-none ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-[10px] font-bold tracking-[0.18em] text-slate-400 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alert Banner ── */}
      <div className="relative mx-4 lg:mx-32 rounded-3xl overflow-hidden">
  
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700" />

  {/* Soft Glow */}
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/20 blur-3xl rounded-full" />

  {/* Content */}
  <div className="relative px-6 md:px-12 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
    
    {/* Big faded symbol */}
    <span className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 text-[100px] md:text-[140px] font-extrabold text-white/5 select-none pointer-events-none">
      !
    </span>

    {/* Text */}
    <div className="max-w-xl">
      <p className="text-white font-semibold text-sm tracking-widest uppercase mb-3">
        Seeing Cockroaches During the Day?
      </p>

      <p className="text-emerald-100/90 text-sm md:text-base leading-relaxed">
        This is a serious warning sign. Cockroaches are nocturnal; seeing them in daylight
        usually means the harborage is overcrowded. Act now before the infestation escalates.
      </p>
    </div>

    {/* Button */}
    <button className="relative shrink-0 bg-white text-emerald-900 font-semibold text-xs tracking-wider uppercase px-7 py-3.5 rounded-xl transition-all duration-300 hover:bg-emerald-50 hover:shadow-lg hover:-translate-y-0.5">
      Free Inspection Now →
    </button>

  </div>
</div>

      {/* ── Scientifically Proven Methods ── */}
      <section className="bg-[#f0f2f0] py-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-emerald-900 tracking-tight mb-4">
              Scientifically Proven Methods
            </h2>
            <p className="text-slate-500 text-[14px] max-w-lg mx-auto leading-relaxed">
              Our Institutional quality service is delivered to your doorstep using the latest IPM
              (Integrated Pest Management) standards.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methods.map((method) => (
              <div
                key={method.title}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm flex flex-col gap-5"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-2">{method.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}