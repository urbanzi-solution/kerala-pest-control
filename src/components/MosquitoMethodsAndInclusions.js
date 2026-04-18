import Image from "next/image";

const methods = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
      </svg>
    ),
    title: "Larviciding",
    badge: "Source Treatment",
    description: "The most cost-effective and environmentally responsible method. We identify and treat all standing water sources on the property with government-approved larvicides that kill mosquito larvae before they emerge as adults. One larvicide application prevents hundreds of adults from ever developing. Effective on gutters, overhead tanks, sumps, ornamental features, plant pot bases, and construction water.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
    title: "ULV Fogging",
    badge: "Adult Control",
    description: "Ultra-low volume fogging disperses a fine insecticide mist that provides immediate knockdown of adult mosquito populations. Effective before outdoor events, as an emergency response during a dengue cluster, or as a rapid population reduction measure. Effects last three to five days. Fogging must be combined with larviciding for sustainable control.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Indoor Residual Spray",
    badge: "Anopheles Control",
    description: "For Anopheles control, we apply a residual insecticide to internal wall surfaces and dark resting areas where mosquitoes settle during the day. The method recommended by the WHO and NVBDCP for malaria control.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Source Reduction Audit",
    badge: "Systematic Diagnostic",
    description: "A systematic survey of the entire property identifying every current and potential breeding site. The written audit report provides prioritised, actionable recommendations for permanent reductions in breeding habitat. The single most impactful long-term intervention available.",
  },
];

const inclusions = [
  "Property survey identifying all breeding sites",
  "Larval treatment of all identified water bodies",
  "ULV fogging of outdoor areas and indoor spaces as required",
  "Written source reduction audit report",
  "Monthly follow-up visits during monsoon season",
  "Building-wide coverage available for apartment societies",
];

export default function MosquitoMethodsAndInclusions() {
  return (
    <div>

      {/* ── Scientific Eradication Methods ── */}
      <section className="bg-[#f8f8f8] py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                Scientific Eradication Methods
              </h2>
              <p className="text-slate-500 text-[14px] max-w-md leading-relaxed">
                We utilize a 4-tier scientific approach to break the mosquito life cycle at every stage.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 self-start border border-slate-200 bg-white text-slate-600 text-[10px] font-bold tracking-[0.18em] uppercase px-4 py-2.5 rounded-xl shadow-sm whitespace-nowrap">
              <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-black" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              Biological & Chemical Integration
            </span>
          </div>

          {/* Method cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {methods.map((method) => (
              <div
                key={method.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-1">{method.title}</h3>
                  <p className="text-[10px] font-bold tracking-[0.15em] text-black uppercase mb-2">
                    {method.badge}
                  </p>
                  <p className="text-slate-500 text-[13px] leading-relaxed">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-[#dedede] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-black leading-tight mb-10">
              What&apos;s Included in Our Mosquito Programme

            </h2>

            <ul className="flex flex-col gap-3">
              {inclusions.map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-[#aeafb0] rounded-xl px-5 py-3.5">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black shrink-0" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="text-black text-[13px] font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — illustration */}
          <div className="relative rounded-2xl overflow-hidden aspect-square max-w-sm mx-auto lg:mx-0 bg-emerald-900/40">
            {/*
              Replace src with your actual image e.g. /images/technician-mosquito.png
              Place in /public/images/
            */}
            <Image
              src="/technician-mosquito.png"
              alt="Pest control technician with clipboard"
              fill
              className="object-cover object-center"
            />
          </div>

        </div>
      </section>

    </div>
  );
}