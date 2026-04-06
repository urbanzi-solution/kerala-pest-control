export default function PunalurManagement() {
  return (
    <section className="bg-[#0d1f1a] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <div className="flex flex-col gap-7">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight">
            Why Punalur Properties<br/>Need Regular Management
          </h2>

          <p className="text-slate-400 text-[14px] leading-relaxed">
Kollam’s tropical climate means pest pressure in Punalur is year-round, not seasonal. One-time treatment provides temporary relief; a structured maintenance programme provides consistent, lasting protection.
Kerala Pest Solutions offers one-time treatments for immediate problems and quarterly Annual Maintenance Contracts (AMC) for ongoing protection. AMC clients receive priority scheduling and guaranteed retreatment at no additional cost if any activity is detected between scheduled visits.


          </p>

          {/* Stats row */}
          <div className="flex gap-8 mt-2">
            <div>
              <p className="text-3xl font-extrabold text-emerald-400 leading-none mb-1">365</p>
              <p className="text-[9px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                Days Protection
              </p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-emerald-400 leading-none mb-1">24h</p>
              <p className="text-[9px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                Response Time
              </p>
            </div>
          </div>
        </div>

        {/* Right — two cards */}
        <div className="grid grid-cols-2 gap-4">

          {/* Scheduled Visits — dark card */}
          <div className="bg-[#1a2f28] rounded-2xl p-8 flex flex-col items-center justify-center gap-5 border border-emerald-900/40 min-h-[220px]">
            <div className="w-12 h-12 rounded-xl bg-emerald-900/60 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-emerald-400" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
            </div>
            <p className="text-white font-bold text-[14px] text-center">Scheduled Visits</p>
          </div>

          {/* Guaranteed Results — emerald card */}
          <div className="bg-emerald-700 rounded-2xl p-8 flex flex-col items-center justify-center gap-5 min-h-[220px]">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/60 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <p className="text-white font-bold text-[14px] text-center">Guaranteed Results</p>
          </div>

        </div>

      </div>
    </section>
  );
}