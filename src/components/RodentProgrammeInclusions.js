const inclusions = [
  "Full inspection: species ID, run mapping, burrow and entry point survey",
  "Bait station or trap deployment based on physical evidence",
  "Written proofing report with prioritised entry point list",
  "Monitoring visits every 7–14 days",
  "Programme continues until 3 consecutive clear monitoring checks",
  "FSSAI-compliant documentation available for food businesses",
];

export default function RodentProgrammeInclusions() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[10px] font-semibold tracking-[0.28em] text-black uppercase mb-3">
            Comprehensive Protection
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-black leading-tight">
            What&apos;s Included in Your Programme
          </h2>
        </div>

        {/* Checklist */}
        <div className="flex flex-col gap-4">
          {inclusions.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-gray-300 border  rounded-2xl px-6 py-5"
            >
              {/* Check icon */}
              <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#3b7cff] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-3.5 h-3.5 text-white"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <p className="text-black text-[14px] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}