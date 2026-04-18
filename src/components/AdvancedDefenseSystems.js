const solutions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Pre-Construction Soil Barrier Treatment",
    description:
      "The most cost-effective and thorough protection available. A chemical barrier is created in the soil surrounding and beneath the structure before the foundation slab is poured, creating an unbroken zone that subterranean termites cannot cross. We treat at the foundation excavation stage, the backfill stage, and the surface soil around the perimeter. A treatment certificate is provided on completion.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Post-Construction Drilling and Injection",
    description:
      "For completed buildings, we drill into the flooring at regular intervals, inject a government-approved termiticide into the soil below, and seal the drill holes. The same process is applied to the wall-floor junction on the external perimeter. This method is highly effective for active infestations and for properties that did not receive pre-construction treatment.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44a23.91 23.91 0 001.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.778 3.778 0 01.4-2.25m0 0a5.002 5.002 0 019.448 0M9.683 5.764a5.002 5.002 0 019.448 0" />
      </svg>
    ),
    title: "Termite Baiting System",
    description:
      "For properties where drilling is not feasible, we install in-ground bait stations around the property perimeter at regular intervals. Worker termites consume the bait and share it with the colony through natural feeding behaviour, leading to colony-wide elimination over weeks to months. Stations are monitored quarterly and bait is replenished as required.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    title: "Wood Treatment",
    description:
      "Exposed timber elements — roof trusses, window frames, door frames, wooden flooring — are treated with a residual wood preservative that kills termites on contact and protects the timber from future attack. Typically carried out alongside soil treatment for comprehensive coverage.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Structural Inspection and Written Report",
    description:
      "Every termite engagement begins with a full structural inspection. Our written report identifies active infestation zones, mud tube pathways, damaged structural elements, and high-risk areas. Valuable for treatment planning, insurance, and property sale documentation.",
  },
];

export default function AdvancedDefenseSystems() {
  return (
    <section className="bg-[#f0f2f0] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] font-semibold tracking-[0.3em] text-slate-400 uppercase mb-5">
            Our Solutions
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-5 tracking-tight">
            Advanced Defense Systems
          </h2>
          <p className="text-slate-500 text-[15px] max-w-lg mx-auto leading-relaxed">
            Science-led protocols designed for maximum structural integrity and long-term protection.
          </p>
        </div>

        {/* Cards grid — 3 cols on lg, wraps naturally */}
        <div className="flex flex-wrap justify-center gap-5">
  {solutions.map((solution) => (
    <div
      key={solution.title}
      className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col gap-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-[#3b7cff] flex items-center justify-center shrink-0 group-hover:bg-[#528af9] transition-colors duration-200">
        {solution.icon}
      </div>

      {/* Divider */}
      <div className="w-8 h-0.5 bg-black rounded-full" />

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[15px] font-bold text-slate-900 leading-snug">
          {solution.title}
        </h3>
        <p className="text-slate-500 text-[13px] leading-relaxed">
          {solution.description}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}