import Image from "next/image";

export default function HostelService() {
  return (
    <div>

      {/* ── New Property Handovers ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-sm">

            {/* Left — image */}
            <div className="relative aspect-[4/3] lg:aspect-auto min-h-[300px]">
              <Image
                src="/hotel-property.webp"
                alt="New empty property interior"
                fill
                loading="lazy"
                className="object-cover object-center"
              />
            </div>

            {/* Right — content */}
            <div className="p-8 lg:p-10 flex flex-col gap-5 justify-center">
              <h2 className="text-2xl font-extrabold text-slate-900 leading-snug">
                Discretion Is Part of the Service
              </h2>
              <p className="text-slate-500 text-[14px] leading-relaxed">
              Our technicians arrive in unmarked vehicles where requested, carry identification, and are trained to work quietly and without attracting guest attention. Treatment schedules are agreed with management to avoid peak check-in and dining periods. We treat all guest-facing areas during low-occupancy windows wherever possible.
              </p>

              <ul className="flex flex-col gap-3 mt-1">
                {["Clean-out treatment", "Termite inspection", "Gap assessment"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#3b7cff] shrink-0" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="text-slate-700 text-[14px] font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

     

    </div>
  );
}