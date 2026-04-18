const areas = [
  [
    { name: "Punalur", href: "/kollam/punalur" },
    { name: "Paravur", href: "/kollam/paravur" },
  ],
  [
    { name: "Kundara", href: "/kollam/kundara" },
    { name: "Kottarakara", href: "/kollam/kottarakara" },
  ],
  [
    { name: "Karunagapally", href: "/kollam/karunagapally" },
  ],
  
];

const whyUs = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    title: "Local Presence",
    description: "Native Trivandrum team familiar with city layout.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41" />
      </svg>
    ),
    title: "IPM Trained",
    description: "Integrated Pest Management certified technicians.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75" />
      </svg>
    ),
    title: "CIB&RC Formulations",
    description: "Using only registered and safe scientific agents.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0" />
      </svg>
    ),
    title: "Same-Day Service",
    description: "Rapid emergency response for urgent infestations.",
  },
];

export default function KollamCoverageAndWhyUs() {
  return (
    <div>

      {/* ── Service Coverage ── */}
      <section className="bg-[#e8f0f8] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-black leading-tight mb-8">
              Service Coverage in<br />Kollam
            </h2>

            {/* Areas */}
            <div className="flex flex-col gap-3 mb-5">
              {areas.map((row, i) => (
                <div key={i} className="grid grid-cols-2 gap-3">
                  {row.map((area) => (
                    <a
                      key={area.name}
                      href={area.href}
                      className="bg-white rounded-xl px-5 py-3.5 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 block"
                    >
                      <p className="text-slate-700 text-[13px] font-medium">
                        {area.name}
                      </p>
                    </a>
                  ))}
                </div>
              ))}
            </div>

            
          </div>

          {/* Right — REAL MAP */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md">

            {/* Google Map */}
            <iframe
              src="https://www.google.com/maps?q=Kollam&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Label */}
            <div className="absolute top-4 left-4 bg-white text-black text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm border">
              Active Citywide
            </div>

          </div>

        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-[#eeefef] py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-extrabold text-black text-center mb-14">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-[#e0eff8] rounded-2xl p-7 flex flex-col items-center text-center gap-4 border border-blue-100 hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>

                <div>
                  <p className="text-slate-800 text-[13px] font-bold mb-1">
                    {item.title}
                  </p>
                  <p className="text-slate-500 text-[12px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}