export default function RestaurantFoodBusinessStakes() {
  return (
    <section className="bg-[#f7f7f7] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Left */}
        <div className="flex flex-col gap-6">
          <p className="text-[10px] font-bold tracking-[0.28em] text-slate-400 uppercase">
            Regulatory Environment
          </p>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-black leading-tight">
            The Stakes Are Higher<br />for Food Businesses
          </h2>

          <div className="flex flex-col gap-4">
            <p className="text-slate-600 text-[14px] leading-relaxed">
             FSSAI’s Food Safety and Standards (Licensing and Registration) Regulations require all food businesses to maintain documented pest control programmes as part of their Good Manufacturing Practice (GMP) compliance. During a scheduled or surprise audit, inspectors check for evidence of pest activity, physical proofing measures, and pest control service records. Any evidence of active infestation is categorised as a critical non-compliance — the highest severity level — and can result in immediate suspension of the licence.
Beyond compliance, the reputational damage from a pest incident in a food business can be permanent. Kerala Pest Solutions understands this and structures our restaurant pest control service around documentation, discretion, and guaranteed response times.

            </p>
          </div>
        </div>

        {/* Right — two feature cards */}
        <div className="flex flex-col gap-4">

          {/* Audit Ready */}
          <div className="bg-slate-100 rounded-2xl p-6 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-extrabold tracking-[0.18em] text-black uppercase mb-2">
                Audit-Ready 24/7
              </p>
              <p className="text-slate-500 text-[13px] leading-relaxed">
                Our documentation meets the strictest health department inspections in Kerala.
              </p>
            </div>
          </div>

          {/* Zero Tolerance */}
          <div className="bg-slate-100 rounded-2xl p-6 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-extrabold tracking-[0.18em] text-black uppercase mb-2">
                Zero Tolerance
              </p>
              <p className="text-slate-500 text-[13px] leading-relaxed">
                Proactive elimination of nests before they become visible infestations.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}