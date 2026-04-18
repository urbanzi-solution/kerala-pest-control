const safetyPoints = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#3b7cff] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Odourless & Botanical Options",
    description:
      "Advanced botanical options and odourless gels are available for hospitals, kitchens, and sensitive environments.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#3b7cff] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "CIB&RC Registered",
    description:
      "All chemicals are legally compliant, scientifically proven for safety, and registered with the Central Insecticides Board.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#3b7cff] shrink-0 mt-0.5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    title: "Child & Pet Safety",
    description:
      "Treatments are targeted and low-toxicity. We ensure chemicals are applied only in areas inaccessible to children and pets.",
  },
];

export default function MaintenanceAndSafety() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Left — Maintenance Philosophy */}
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col gap-5">
          <h3 className="text-xl font-extrabold text-slate-900">Maintenance Philosophy</h3>

          {/* One-Time Treatment */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 flex flex-col gap-2">
            <div className="flex items-start justify-between gap-4">
              <p className="text-[14px] font-bold text-slate-800">One-Time Treatment</p>
              <span className="text-[12px] font-semibold text-slate-400 shrink-0">Standard</span>
            </div>
            <p className="text-slate-400 text-[12px] leading-relaxed">
              Best for immediate knockdown of visible infestations. Includes a 15-day efficacy
              guarantee.
            </p>
          </div>

          {/* Quarterly AMC — highlighted */}
          <div className="bg-white border-2 border-e[#3b7cff] rounded-xl p-5 flex flex-col gap-2">
            <div className="flex items-start justify-between gap-4">
              <p className="text-[14px] font-bold text-slate-800">Quarterly AMC</p>
              <div className="flex flex-col items-end gap-1 shrink-0">
                <span className="bg-[#3b7cff] text-white text-[8px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full">
                  Recommended
                </span>
                <span className="text-[#3b7cff] text-[13px] font-bold">Value+</span>
              </div>
            </div>
            <p className="text-slate-400 text-[12px] leading-relaxed">
              Continuous protection throughout the year with scheduled visits every 3 months.
              Higher savings and year-round peace of mind.
            </p>
          </div>
        </div>

        {/* Right — Uncompromising Safety */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              Uncompromising Safety
            </h2>
            <p className="text-slate-500 text-[14px] leading-relaxed">
              Your health is our priority. Our treatments are designed to be minimally disruptive
              to your daily routine while providing maximum lethality to pests.
            </p>
          </div>

          <ul className="flex flex-col gap-6">
            {safetyPoints.map((point) => (
              <li key={point.title} className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-xl bg-[#ffffff] flex items-center justify-center shrink-0">
                  {point.icon}
                </div>
                <div>
                  <p className="text-slate-800 text-[14px] font-bold mb-1">{point.title}</p>
                  <p className="text-slate-500 text-[13px] leading-relaxed">{point.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}