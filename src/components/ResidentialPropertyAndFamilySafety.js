import Image from "next/image";

export default function ResidentialPropertyAndFamilySafety() {
  return (
    <div>

      {/* ── New Property Handovers ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-sm">

            {/* Left — image */}
            <div className="relative aspect-[4/3] lg:aspect-auto min-h-[300px]">
              <Image
                src="/new-property.jpg"
                alt="New empty property interior"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Right — content */}
            <div className="p-8 lg:p-10 flex flex-col gap-5 justify-center">
              <h2 className="text-2xl font-extrabold text-slate-900 leading-snug">
                Pest Control for New Property Handovers
              </h2>
              <p className="text-slate-500 text-[14px] leading-relaxed">
                A new property handover is the best time to establish pest protection before an infestation has a chance to establish. Kerala Pest Solutions provides a complete new-home treatment package that includes a general pest clean-out, pre-occupancy termite inspection, and structural gap assessment. Properties built on land that was previously agricultural or vacant for a period are at particular risk and should be inspected before occupancy.
              </p>

              <ul className="flex flex-col gap-3 mt-1">
                {["Clean-out treatment", "Termite inspection", "Gap assessment"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black shrink-0" stroke="currentColor" strokeWidth={2}>
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

      {/* Divider */}
      <div className="border-t border-slate-100 mx-6 lg:mx-20" />

      {/* ── Is It Safe for My Family? ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left */}
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
              Is It Safe for My Family?
            </h2>

            <p className="text-slate-500 text-[14px] leading-relaxed">
              Safety is the most common concern we hear from residential clients, particularly those with young children, infants, or pets. Kerala Pest Solutions uses only government-approved, CIB&RC-registered formulations. Our primary treatment products are odourless and low-volatility. Once treated surfaces are dry — typically one to two hours after the visit — the area is completely safe for normal use.
            </p>

            <p className="text-slate-500 text-[14px] leading-relaxed">
             For homes with infants, pregnant women, or occupants with respiratory sensitivities, we offer botanical-based formulations that use essential oils and mineral dusts rather than synthetic insecticides. These provide effective protection without any synthetic chemical exposure. Your technician will discuss this option during the inspection.
            </p>

            {/* Botanical option card */}
           
          </div>

          {/* Right — two images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md">
              <Image
                src="/family-safe.jpg"
                alt="Child and pet safe environment"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md mt-8">
              <Image
                src="/technician-safe.jpg"
                alt="Professional pest control technician"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}