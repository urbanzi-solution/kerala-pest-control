const checklist = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black shrink-0 mt-0.5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      </svg>
    ),
    text: "Inspection: species identification, trail mapping, nest location",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black shrink-0 mt-0.5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
    text: "Non-repellent gel bait applied at harborage and trail points",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black shrink-0 mt-0.5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    text: "Non-repellent perimeter spray as required",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black shrink-0 mt-0.5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
      </svg>
    ),
    text: "Direct nest treatment where accessible",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black shrink-0 mt-0.5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125" />
      </svg>
    ),
    text: "Written sealing and sanitation recommendations",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black shrink-0 mt-0.5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
    text: "Follow-up visit confirming colony elimination",
  },
];

const preventionTips = [
  "Store sugar, honey, and ripe fruit in sealed containers",
  "Seal gaps around plumbing with silicone",
  "Wipe down surfaces after food prep to remove trails",
  "Fix water leaks promptly — moisture attracts ants",
];

export default function AntProtocolAndCompliance() {
  return (
    <div>

      {/* ── Protocol + Compliance ── */}
      <section className="bg-[#d7d9d7] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — checklist card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <h3 className="text-xl font-extrabold text-slate-900 mb-7">Ant Protocol Checklist</h3>
            <ul className="flex flex-col gap-4">
              {checklist.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  {item.icon}
                  <p className="text-slate-600 text-[13px] leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — compliance + prevention */}
          <div className="flex flex-col gap-8">

            {/* Food Business Compliance */}
            <div>
              <h3 className="text-xl font-extrabold text-black mb-3">
                Food Business Compliance
              </h3>
              <p className="text-slate-500 text-[14px] leading-relaxed mb-5">
                Any ant species in a food preparation area is a contamination risk and FSSAI
                concern. Our gel bait protocol is safe in active commercial kitchens with no
                operational downtime, and service documentation is provided as standard.
              </p>

              {/* Compliance mini cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                  <p className="text-slate-800 text-[13px] font-bold mb-1">Zero Downtime</p>
                  <p className="text-slate-400 text-[12px] leading-relaxed">
                    Treatments integrated into active kitchen operations.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                  <p className="text-slate-800 text-[13px] font-bold mb-1">Audit Ready</p>
                  <p className="text-slate-400 text-[12px] leading-relaxed">
                    Full documentation for FSSAI and health inspections.
                  </p>
                </div>
              </div>
            </div>

            {/* Home Prevention Tips */}
            <div>
              <h3 className="text-[15px] font-extrabold text-black mb-4">
                Home Prevention Tips
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {preventionTips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-black mt-1 text-xs shrink-0">•</span>
                    <p className="text-slate-500 text-[13px] leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety Banner ── */}
      <section className="bg-[#f0f2f0] pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#3b7cff] rounded-2xl px-8 py-8 flex gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#a5a5a6] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-white" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-[16px] mb-2">Safety Information</p>
              <p className="text-white text-[13px] leading-relaxed">
                Gel bait is safe in occupied homes and active kitchens. Applied in small quantities
                at concealed locations. No evacuation required. Perimeter sprays require 30 to 60
                minutes drying time before re-entry.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}