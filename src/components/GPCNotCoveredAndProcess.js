const notCovered = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-slate-300" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Termites",
    description: "Requires structural drilling and massive volumes of soil-barrier chemicals to reach underground colonies.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-slate-300" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
    title: "Bed bugs",
    description: "Requires high-frequency steam treatments and specialized upholstery-safe chemical penetration.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-slate-300" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44a23.91 23.91 0 0 0 1.153 6.06" />
      </svg>
    ),
    title: "Rodents",
    description: "Requires physical bait stations, tracking powder, and exclusion repairs for rats and mice.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-slate-300" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082" />
      </svg>
    ),
    title: "Mosquitoes",
    description: "Requires thermal fogging or ultra-low volume (ULV) misting to target airborne and resting populations.",
  },
];

const steps = [
  {
    number: "1",
    title: "Professional Inspection",
    description: "Technicians conduct a thorough assessment of entry points, moisture zones, and potential breeding grounds.",
  },
  {
    number: "2",
    title: "Targeted Gel Application",
    description: "Strategic spot treatment for cockroaches and ants in food zones, cabinets, and electrical junctions.",
  },
  {
    number: "3",
    title: "Residual Barrier Spray",
    description: "Creating a non-repellent defensive perimeter around the home's skirting and windows to stop new invaders.",
  },
  {
    number: "4",
    title: "Post-Service Briefing",
    description: "Detailed walkthrough of findings and preventative advice for long-term control and habitat management.",
  },
];

export default function GPCNotCoveredAndProcess() {
  return (
    <div>

      {/* ── What GPC Does NOT Cover ── */}
      <section className="bg-[#f0f2f0] py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3">
              What GPC Does{" "}
              <span className="text-red-500">NOT</span>{" "}
              Cover
            </h2>
            <p className="text-slate-500 text-[14px] leading-relaxed max-w-md">
              To maintain clinical standards, specialized infestations require distinct treatment
              protocols and deeper-infestation chemicals not included in a standard General Pest
              Control visit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {notCovered.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-slate-400 text-[12px] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-slate-200 mx-6 lg:mx-20" />

      {/* ── Four Stage Treatment Process ── */}
      <section className="bg-[#ffffff] py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              The Four-Stage Treatment Process
            </h2>
            <p className="text-slate-400 text-[14px]">
              Precision-engineered steps for a pest-free sanctuary.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-col gap-4">

                {/* Number + connector */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#3b7cff] flex items-center justify-center shrink-0">
                    <span className="text-white font-extrabold text-[15px]">{step.number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block flex-1 h-px bg-slate-300" />
                  )}
                </div>

                <div>
                  <h3 className="text-[14px] font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}