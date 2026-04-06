const checklistItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-emerald-700" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
    title: "Empty Pot Saucers",
    description: "Check saucers and drain trays weekly to remove standing water.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-emerald-700" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 1 7.107 9.877 7.5 7.5 0 0 1-14.785-2.377C4.5 6.505 7.875 3 12 3z" />
      </svg>
    ),
    title: "Cover Water Tanks",
    description: "Ensure all storage tanks are tightly sealed.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-emerald-700" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Clear Gutters",
    description: "Ensure drainage flows freely to prevent stagnant pools.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-emerald-700" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
    title: "Window Screens",
    description: "Use mesh screens to prevent indoor entry.",
  },
];

export default function MonsoonTimingAndSafety() {
  return (
    <section className="bg-[#eaf0ea] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">

        {/* ── Top row: Timing card + Checklist card ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Timing card — dark */}
          <div className="bg-emerald-800 rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden">
            {/* Decorative watermark */}
            <span className="absolute right-4 bottom-4 text-[110px] font-extrabold text-white/5 leading-none select-none pointer-events-none">
              ☁
            </span>

            {/* Calendar icon */}
            <div className="w-10 h-10 rounded-xl bg-emerald-700/60 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
            </div>

            <div>
              <h3 className="text-white text-xl font-extrabold leading-snug mb-4">
                Timing: Start Before the Monsoon
              </h3>
              <p className="text-emerald-100/75 text-[13px] leading-relaxed">
                The single most important piece of advice for Kerala property owners: begin your mosquito management programme in April or May, before the southwest monsoon arrives. Early larviciding and source reduction eliminates breeding infrastructure before populations can spike. Properties that begin treatment after monsoon onset are always managing a population that is already growing. For the northeast monsoon (October to December), restart or continue from September.

              </p>
            </div>

            {/* Expert advice row */}
            <div className="border-t border-emerald-700/60 pt-5 flex gap-3 items-start">
              <div className="w-7 h-7 rounded-lg bg-emerald-700/50 flex items-center justify-center shrink-0 mt-0.5">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-emerald-300" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                </svg>
              </div>
              <div>
                <p className="text-emerald-300 text-[11px] font-bold tracking-wide uppercase mb-1">
                  Expert Advice
                </p>
                <p className="text-emerald-100/70 text-[12px] leading-relaxed">
                  Fortifying your property before heavy rains prevent exponential population spikes
                  in Trivandrum and Kollam.
                </p>
              </div>
            </div>
          </div>

          {/* Prevention Checklist card — light */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col gap-6">
            <h3 className="text-emerald-800 text-xl font-extrabold">Prevention Checklist</h3>

            <ul className="flex flex-col gap-5">
              {checklistItems.map((item) => (
                <li key={item.title} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-800 text-[13px] font-bold mb-0.5">{item.title}</p>
                    <p className="text-slate-400 text-[12px] leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Safety Protocol Banner ── */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-8 py-6 flex gap-6 items-start">
          <div className="w-14 h-14 rounded-xl bg-emerald-800 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          </div>
          <div>
            <p className="text-slate-900 text-[15px] font-bold mb-2">Safety Protocol Requirements</p>
            <p className="text-slate-500 text-[13px] leading-relaxed">
              Your family&apos;s safety is our priority. ULV Fogging requires 30 minutes of property
              vacancy after treatment. Indoor Residual Spray requires 2-4 hours for complete
              settling. We use strictly approved residential formulations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}