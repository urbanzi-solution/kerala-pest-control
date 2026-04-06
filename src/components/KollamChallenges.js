export default function KollamChallenges() {
  return (
    <section className="bg-[#d7e3ec] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">
            Why Kollam Has Specific Pest Challenges
          </h2>
          <div className="w-12 h-1 bg-emerald-700 rounded"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-sm">
            
            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-green-700 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 15l4-4 4 4 8-8" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-slate-900 mb-5">
              Climate & Geography
            </h3>

            {/* Points */}
            <ul className="space-y-4 text-sm text-slate-600">

              <li className="flex gap-3">
                <span className="text-green-600 mt-1">✔</span>
                <p>
                  <span className="font-semibold text-slate-800">Backwater Proximity:</span>{" "}
                  High moisture levels from Ashtamudi Lake encourage mosquito breeding and damp-wood termites.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="text-green-600 mt-1">✔</span>
                <p>
                  <span className="font-semibold text-slate-800">Laterite Soil:</span>{" "}
                  The porous nature of Kollam’s soil allows subterranean termites to travel long distances undetected.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="text-green-600 mt-1">✔</span>
                <p>
                  <span className="font-semibold text-slate-800">Humidity & Monsoons:</span>{" "}
                  Seasonal pest surges following heavy rainfalls in the coastal belt.
                </p>
              </li>

            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-sm">
            
            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-amber-700 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l3-3 3 3 4-4" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-slate-900 mb-5">
              Urban & Industrial Factors
            </h3>

            {/* Points */}
            <ul className="space-y-4 text-sm text-slate-600">

              <li className="flex gap-3">
                <span className="text-amber-600 mt-1">✔</span>
                <p>
                  <span className="font-semibold text-slate-800">Cashew Processing:</span>{" "}
                  Organic waste and processing environments attract specific stored-product pests and rodents.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="text-amber-600 mt-1">✔</span>
                <p>
                  <span className="font-semibold text-slate-800">Backwater Tourism:</span>{" "}
                  Resorts and houseboats require clinical-grade bed bug and mosquito management.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="text-amber-600 mt-1">✔</span>
                <p>
                  <span className="font-semibold text-slate-800">Port & Fish Markets:</span>{" "}
                  High-density areas like Tangasseri require aggressive rodent and fly control protocols.
                </p>
              </li>

            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}