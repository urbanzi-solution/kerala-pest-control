const threats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
    title: "Health Hazard",
    description: (
      <>
        Carriers of dangerous pathogens including <strong>leptospirosis</strong> and{" "}
        <strong>salmonellosis</strong>, posing direct risks to occupants.
      </>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
    title: "Structural Danger",
    description:
      "Gnawing on electrical cables causes severe fire hazards, equipment failure, and insulation damage.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    title: "Financial Liability",
    description:
      "Contamination of food stocks and structural repairs leading to massive, unrecoverable inventory loss.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Compliance Risk",
    description: (
      <>
        Rodent activity in food premises leads to immediate <strong>FSSAI penalties</strong>, legal
        action, and closure.
      </>
    ),
  },
];

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    label: "Elimination",
    description: "Rapid population knockdown using safe, clinical methods.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    label: "Proofing",
    description: "Structural fortification to prevent rodent re-entry.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    label: "Monitoring",
    description: "Ongoing professional oversight and detailed reports.",
  },
];

export default function RodentThreatSection() {
  return (
    <section className="bg-[#d7d7d7] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Left */}
        <div className="flex flex-col gap-7">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-black leading-tight mb-3">
              Beyond a Nuisance: A<br />Multi-Dimensional Threat
            </h2>
            <div className="w-12 h-1 bg-black rounded-full" />
          </div>

          <p className="text-slate-600 text-[15px] italic leading-relaxed">
            &ldquo;Rats and mice are not a nuisance pest... They are a serious, multi-dimensional
            threat to your environment.&rdquo;
          </p>

          {/* Threat cards grid */}
          <div className="grid grid-cols-2 gap-4">
            {threats.map((threat) => (
              <div
                key={threat.title}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  {threat.icon}
                </div>
                <div>
                  <p className="text-slate-900 text-[13px] font-bold mb-1">{threat.title}</p>
                  <p className="text-slate-500 text-[12px] leading-relaxed">{threat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col gap-6 ">
          <p className="text-slate-600 text-[15px] leading-relaxed">
            Kerala Pest Solutions provides professional rodent control for homes, restaurants,
            warehouses, and industrial facilities. We address local infestations of the{" "}
            <strong className="text-slate-800">Black rat</strong>,{" "}
            <strong className="text-slate-800">Norway rat</strong>, and{" "}
            <strong className="text-slate-800">house mice</strong> with clinical precision.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-3 gap-4 text-center">
            {pillars.map((pillar) => (
              <div key={pillar.label} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#e1e5ed] flex items-center justify-center">
                  {pillar.icon}
                </div>
                <p className="text-[10px] font-bold tracking-[0.18em] text-slate-700 uppercase">
                  {pillar.label}
                </p>
                <p className="text-slate-400 text-[11px] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}