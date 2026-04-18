export default function NemomChallenges() {
  return (
    <section className="bg-[#e8f0f8] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Left */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-black mb-3">
              Pest Challenges Specific to Nemom
            </h2>
            <div className="w-10 h-1 bg-amber-800 rounded-full" />
          </div>

          <p className="text-slate-600 text-[14px] leading-relaxed">
        Properties in Nemom face a distinctive pest profile shaped by the area’s transition from agricultural land. Former paddy fields and agricultural plots have high subterranean termite colony densities in the soil — significantly higher than long-established urban areas. New construction in this environment that has not incorporated pre-construction treatment is particularly vulnerable. The remaining open agricultural land around Nemom’s residential pockets acts as a reservoir for rodents, mosquitoes, and other pests that continuously pressure adjacent properties.
          </p>
        </div>

        {/* Right — challenge cards */}
        <div className="grid grid-cols-2 gap-4 mt-2">

          {/* Construction Sites */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
              </svg>
            </div>
            <div>
              <p className="text-slate-800 text-[13px] font-bold mb-1.5">Construction Sites</p>
              <p className="text-slate-400 text-[12px] leading-relaxed">
                High risk for mosquito breeding in stagnant sumps.
              </p>
            </div>
          </div>

          {/* Apartment Risks */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
            </div>
            <div>
              <p className="text-slate-800 text-[13px] font-bold mb-1.5">Apartment Risks</p>
              <p className="text-slate-400 text-[12px] leading-relaxed">
                Shared plumbing facilitating pest migration.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}