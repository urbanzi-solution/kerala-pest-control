const items = [
  {
    id: "01",
    title: "Comprehensive Scientific Inspection",
    desc: "Identifying cockroach species, nesting sites, and moisture sources using specialized forensic tools.",
  },
  {
    id: "02",
    title: "Strategic Gel Bait Application",
    desc: "Targeted placement in hinges, electrical motors, and food prep voids where pests hide.",
  },
  {
    id: "03",
    title: "Residual Perimeter Shield",
    desc: "Creating a chemical barrier at plumbing penetrations and door frames to block entry.",
  },
  {
    id: "04",
    title: "Detailed Structural & Sanitation Report",
    desc: "A digital audit mapping out entry gaps and cleaning habits to ensure long-term success.",
  },
  {
    id: "05",
    title: "Follow-up & Retreatment Guarantee",
    desc: "A 6-month warranty: if they return within the period, we retreat for free. No questions asked.",
  },
];

export default function CockroachIncludes() {
  return (
    <section className="bg-[#e9eeec] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-emerald-800 mb-14">
          What’s Included in Every Cockroach Treatment
        </h2>

        {/* List */}
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-6 bg-white rounded-2xl px-6 py-6 shadow-sm hover:shadow-md transition"
            >
              
              {/* Number */}
              <div className="min-w-[56px] h-[56px] flex items-center justify-center rounded-xl bg-gray-100 text-emerald-700 font-semibold">
                {item.id}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-emerald-800 font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}