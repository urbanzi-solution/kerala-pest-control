export default function TrivandrumTreatments() {
  const treatments = [
    {
      title: "Termite Treatment in Trivandrum",
      desc:
        "Trivandrum’s laterite soil, high humidity, and widespread timber use make it one of the highest-risk termite environments in Kerala.",
      points: [
        "Pre-construction soil barrier treatment",
        "Post-construction drilling and injection",
        "In-ground baiting systems",
        "Wood treatment for structural timber",
        "Structural inspection report",
      ],
      areas: [
        "Kowdiar & Pattom — heritage properties",
        "Nalanchira — dense construction",
        "Kazhakootam & Sreekaryam — construction zones",
        "Nemom — high soil colony density",
      ],
      href: "/services/termite-treatment/",
      icon: "🐜",
    },

    {
      title: "Bed Bug Removal in Trivandrum",
      desc:
        "High mobility from Technopark workforce and hospitality sector has increased infestations across PGs and hotels.",
      points: [
        "Residual chemical + steam treatment",
        "Crack & crevice injection",
        "10–14 day follow-up visit",
        "Hotel & PG discreet protocols",
      ],
      areas: [
        "Technopark & Kazhakootam — PGs",
        "Sreekaryam & Karyavattom — hostels",
        "Hotels across the city",
      ],
      href: "/services/bed-bug-removal/",
      icon: "🛏️",
    },

    {
      title: "Cockroach Control in Trivandrum",
      desc:
        "German cockroaches thrive in humid kitchens and spread through shared drainage systems.",
      points: [
        "Odourless gel baiting",
        "No kitchen shutdown needed",
        "Drain treatment",
        "FSSAI-compliant documentation",
      ],
      areas: [
        "Apartment drainage systems",
        "Restaurants & kitchens",
        "Nalanchira older infrastructure",
      ],
      href: "/services/cockroach-control/",
      icon: "🪳",
    },

    {
      title: "Mosquito Management in Trivandrum",
      desc:
        "Backwater proximity and monsoon flooding create high mosquito breeding and disease risk.",
      points: [
        "Larviciding standing water",
        "ULV fogging",
        "Source reduction audit",
        "Monthly monsoon programs",
      ],
      areas: [
        "Kazhakootam & Nemom — construction zones",
        "Backwater areas",
        "Apartments with tanks & sumps",
      ],
      href: "/services/mosquito-management/",
      icon: "💧",
    },

    {
      title: "Rodent Control in Trivandrum",
      desc:
        "Rodent activity is driven by drainage systems, construction, and food waste.",
      points: [
        "Tamper-proof bait stations",
        "Fortnightly monitoring",
        "Structural proofing report",
        "FSSAI compliance",
      ],
      areas: [
        "Nalanchira — dense lanes",
        "Kowdiar — garden areas",
        "Technopark zones",
      ],
      href: "/services/rodent-control/",
      icon: "🐭",
    },

    {
      title: "Ant Control in Trivandrum",
      desc:
        "From garden ants to carpenter ants, infestations require targeted colony elimination.",
      points: [
        "Non-repellent gel baiting",
        "Perimeter spray",
        "Colony elimination",
      ],
      areas: [
        "Nemom — garden colonies",
        "Kazhakootam — new builds",
        "Timber homes",
      ],
      href: "/services/ant-control/",
      icon: "🐜",
    },
  ];

  return (
    <section className="bg-[#d7e3ec] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-emerald-900 text-center mb-14">
          Specialized Clinical Grade Treatments
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {treatments.map((item) => (
            <div
              key={item.title}
              className="bg-[#c7d6df] rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >

              {/* Icon */}
              <div className="text-2xl mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-[16px] font-extrabold text-slate-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-[13px] mb-4 leading-relaxed">
                {item.desc}
              </p>

              {/* What we provide */}
              <div className="mb-4">
                <p className="text-[12px] font-bold text-slate-800 mb-2 uppercase tracking-wide">
                  What we provide
                </p>
                <ul className="space-y-2 text-[12px] text-slate-700">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-green-700">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Areas */}
              <div className="mb-5">
                <p className="text-[12px] font-bold text-slate-800 mb-2 uppercase tracking-wide">
                  High Risk Areas
                </p>
                <ul className="space-y-2 text-[12px] text-slate-700">
                  {item.areas.map((area, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-emerald-700">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link */}
              <a
                href={item.href}
                className="text-emerald-800 text-[11px] font-bold tracking-wide uppercase mt-auto hover:underline"
              >
                FULL SERVICE DETAILS ↗
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}