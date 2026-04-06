export default function KollamTreatments() {
  const treatments = [
    {
      title: "Termite Treatment in Kollam",
      desc: "Kollam's laterite and alluvial soil, combined with high humidity and prevalent timber use, creates ideal conditions for infestations.",
      points: [
        "Pre-construction soil barrier",
        "Post-construction drilling & injection",
        "In-ground baiting & wood treatment",
        "Comprehensive written inspection",
      ],
      href: "/services/termite",
      icon: "🐜",
    },
    {
      title: "Bed Bug Removal in Kollam",
      desc: "Specialized protocols for hospitality, including backwater tourism and budget hotels, plus PG accommodations.",
      points: [
        "Residual chemical & steam treatment",
        "Crack & crevice injection",
        "10–14 day follow-up elimination",
        "Commercial hotel & PG protocols",
      ],
      href: "/services/bed-bugs",
      icon: "🛏️",
    },
    {
      title: "Cockroach Control in Kollam",
      desc: "Targeting high-pressure areas including the cashew industry, fish markets, restaurants, and food businesses.",
      points: [
        "Odourless advanced gel baiting",
        "No kitchen evacuation needed",
        "Specialized drainage treatment",
        "FSSAI-compliant protocols",
      ],
      href: "/services/cockroach",
      icon: "🪳",
    },
    {
      title: "Mosquito Management in Kollam",
      desc: "Managing risks associated with backwater systems, paddy cultivation, and urban construction.",
      points: [
        "Integrated Larviciding",
        "Advanced ULV fogging",
        "Source reduction audit",
        "Monthly monsoon programmes",
      ],
      href: "/services/mosquito",
      icon: "💧",
    },
    {
      title: "Rodent Control in Kollam",
      desc: "Addressing challenges in port areas, fish markets, and cashew factories.",
      points: [
        "Tamper-resistant bait stations",
        "Fortnightly monitoring visits",
        "Professional proofing reports",
        "FSSAI-compliant documentation",
      ],
      href: "/services/rodent",
      icon: "🐭",
    },
    {
      title: "Ant Control in Kollam",
      desc: "Comprehensive elimination of garden ants, fire ants, and carpenter ants.",
      points: [
        "Non-repellent gel baiting",
        "Perimeter barrier spray",
        "Colony source elimination",
        "Targeted nest treatment",
      ],
      href: "/services/ant",
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

              {/* Points */}
              <ul className="space-y-2 text-[12px] text-slate-700 mb-5">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-700">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

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