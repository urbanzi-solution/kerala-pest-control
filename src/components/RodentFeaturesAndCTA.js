const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-emerald-700" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "CIB&RC Formulations",
    description:
      "Exclusively using government-approved, low-toxicity formulations for maximum safety and efficacy.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-emerald-700" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: "IPM-Trained",
    description:
      "Our technicians are specialized in Integrated Pest Management (IPM) protocols for scientific control.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-emerald-700" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    title: "Free Inspection",
    description:
      "Comprehensive on-site assessment followed by a detailed, transparent written quote for your property.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-emerald-700" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "Service Reports",
    description:
      "Digital documentation and compliance logs provided after every single professional intervention.",
  },
];

export default function RodentFeaturesAndCTA() {
  return (
    <div>

      {/* ── Feature Cards ── */}
      <section className="bg-gray-300 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm flex flex-col gap-5"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-gray-300 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-emerald-900 rounded-2xl px-10 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

            {/* Text */}
            <div className="max-w-xl">
              <p className="text-white text-2xl lg:text-3xl font-extrabold italic leading-snug mb-4">
                &ldquo;One Rat Sighting Is Never Just One Rat...&rdquo;
              </p>
              <p className="text-emerald-100/70 text-[14px] leading-relaxed">
                Rodents are social breeders. A single sighting often indicates a hidden, established
                colony. Contact us for a professional assessment before the population grows
                exponentially.
              </p>
            </div>

            {/* Button */}
            <button className="shrink-0 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-[14px] px-7 py-4 rounded-xl transition-colors duration-200 whitespace-nowrap">
              Book a Rodent Inspection →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}