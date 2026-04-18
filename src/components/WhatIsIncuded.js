const inclusions = [
  "Full internal and external perimeter inspection using thermal imaging and moisture meters.",
  "Comprehensive written report and customized treatment plan tailored to your site.",
  "Application of CIB&RC-registered termiticide with documented chemical volumes.",
  "Sealing of all precision drill holes with color-matching cement for a seamless finish.",
  "Certificate of treatment and detailed service logs for your property records.",
  "Mandatory post-treatment follow-up visit after 15-30 days to ensure efficacy.",
];

export default function WhatIsIncluded() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-black leading-tight mb-10">
            What's Included in Every Termite Service
          </h2>

          <ul className="flex flex-col gap-6">
            {inclusions.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                {/* Circle check icon */}
                <span className="mt-0.5 shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5 text-black"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.5 12.5l2.5 2.5 4.5-5"
                    />
                  </svg>
                </span>
                <p className="text-slate-600 text-[15px] leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — dark card */}
        <div className="bg-[#c7c9cd] rounded-2xl p-10 flex flex-col justify-between gap-8 min-h-[320px]">
          <div>
            <h3 className="text-black text-xl font-bold mb-4">Safety & Compliance</h3>
            <p className="text-black text-[14px] leading-relaxed">
              Your family's safety is our priority. All treatments use synthetic pyrethroid or
              fipronil-based formulations that are low-odor and CIB&RC-registered. We observe a
              strict 2-4 hour re-entry period for maximum safety. Our technicians are IPM-certified
              and follow the highest environmental standards.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20" />

          {/* Badge row */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-black"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>
            <p className="text-black text-[11px] font-bold tracking-[0.2em] uppercase">
              Certified & Insured Professionals
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}