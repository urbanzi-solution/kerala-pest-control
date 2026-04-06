import Image from "next/image";

const hotelFeatures = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-emerald-400" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
    title: "Discreet Scheduling",
    description: "Unmarked vehicles and equipment bags to maintain guest privacy and brand reputation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-emerald-400" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
    title: "Rolling Schedules",
    description: "Preventative rotation protocols for high-occupancy dorms and PG facilities.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-emerald-400" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Rapid Response",
    description: "Emergency localized treatment to bring offline rooms back into service within 24 hours.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-emerald-400" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    title: "Staff Briefing",
    description: "Training for housekeeping teams to spot early signs of infestation before guests do.",
  },
];

const preventionTips = [
  { label: "Encase Mattress", description: "Use certified bed bug-proof mattress and box spring encasements." },
  { label: "Inspect Hotels", description: "Check headboards and luggage racks immediately upon hotel check-in." },
];

const preventionCards = [
  { label: "Inspect Furniture", description: "Thoroughly examine second-hand furniture before bringing it indoors." },
  { label: "Report Bites", description: "Alert professionals immediately if you notice unexplained rows of red bites." },
];

const checklist = [
  "Seal cracks in walls, window frames, and around baseboards.",
  "Wash bedding at the highest possible temperature (60°C+) regularly.",
  "Keep luggage away from carpeted areas after returning from travel.",
];

export default function HotelsAndPrevention() {
  return (
    <div>

      {/* ── Hotels & PG Section ── */}
      <section className="bg-[#0d1f1a] rounded-2xl mx-4 lg:mx-10 my-6 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[420px]">

          {/* Left content */}
          <div className="lg:col-span-2 p-10 lg:p-12 flex flex-col justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5">
                Hotels and PG Accommodation
              </h2>
              <p className="text-slate-400 text-[14px] leading-relaxed max-w-lg">
                Hotels, hostels, and PG accommodations face specific challenges: the reputation risk of a guest complaint, the operational constraint of minimising room downtime, and the ongoing risk of re-introduction from guest luggage.

              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {hotelFeatures.map((f) => (
                <div key={f.title} className="flex gap-3 items-start">
                  <div className="mt-0.5 shrink-0 w-7 h-7 rounded-lg bg-emerald-900/60 flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-white text-[13px] font-semibold mb-1">{f.title}</p>
                    <p className="text-slate-400 text-[12px] leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <button className="bg-emerald-400 hover:bg-emerald-300 text-emerald-900 font-bold text-[13px] px-6 py-3.5 rounded-xl transition-colors duration-200">
                Commercial Consultation
              </button>
            </div>
          </div>

          {/* Right decorative */}
          <div className="hidden lg:flex items-center justify-center bg-[#111f1a] p-10 opacity-40">
            <svg viewBox="0 0 120 90" fill="none" className="w-40 text-slate-500" stroke="currentColor" strokeWidth={2}>
              <rect x="10" y="30" width="100" height="55" rx="4" />
              <rect x="20" y="10" width="35" height="25" rx="2" />
              <rect x="65" y="10" width="35" height="25" rx="2" />
              <circle cx="60" cy="57" r="10" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Prevention After Treatment ── */}
      <section className="bg-[#e8f0e8] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — tip cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              {preventionTips.map((tip) => (
                <div key={tip.label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-red-400 mb-3" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                  </svg>
                  <p className="text-slate-800 text-[13px] font-bold mb-1">{tip.label}</p>
                  <p className="text-slate-400 text-[12px] leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 mt-6">
              {preventionCards.map((card) => (
                <div key={card.label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-red-400 mb-3" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                  </svg>
                  <p className="text-slate-800 text-[13px] font-bold mb-1">{card.label}</p>
                  <p className="text-slate-400 text-[12px] leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — text + checklist */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-emerald-900 leading-tight mb-5">
              Prevention After Treatment
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
              Eradication is only the first step. Long-term success depends on vigilance and
              preventing re-introduction. We provide a post-treatment success kit to all our clients.
            </p>

            <ul className="flex flex-col gap-4">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-white" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <p className="text-slate-700 text-[14px] font-medium leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}