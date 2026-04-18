import Image from "next/image";

const species = [
  {
    image: "/black-garden-ant.jpg",
    name: "Black Garden Ant",
    hazard: false,
    description:
      "Most common in Kerala homes. Nests outdoors in soil or under paving, forages indoors for sugar and starch. Trails in kitchens, pantries, and around waste bins.",
  },
  {
    image: "/red-fire-ant.jpg",
    name: "Red Fire Ant",
    hazard: true,
    description:
      "Increasingly prevalent across Kerala. Delivers a painful sting that can cause anaphylactic reactions. Do not disturb a mound — contact us immediately for treatment.",
  },
  {
    image: "/carpenter-ant.jpg",
    name: "Carpenter Ant",
    hazard: false,
    description:
      "Excavates timber to create nesting galleries. Prefers moist, ageing wood but expands into sound structural timber. Requires immediate professional treatment.",
  },
  {
    image: "/pharaoh-ant.jpg",
    name: "Pharaoh Ant",
    hazard: false,
    description:
      "Small, yellow ant found in healthcare and food environments. Colonies split (bud) when disturbed by repellent sprays, spreading the infestation. Gel bait is the only effective treatment.",
  },
];

export default function AntSpeciesGuide() {
  return (
    <section className="bg-[#f0f2f0] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[10px] font-semibold tracking-[0.28em] text-slate-400 uppercase mb-3">
            Scientific Classification
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-black tracking-tight">
            Species Identification Guide
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
          {species.map((s) => (
            <div key={s.name} className="flex gap-5 items-start">

              {/* Image */}
              <div className="relative w-36 h-36 shrink-0 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 pt-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-[17px] font-extrabold text-black">{s.name}</h3>
                  {s.hazard && (
                    <span className="text-[9px] font-bold tracking-[0.15em] uppercase bg-red-100 text-red-600 border border-red-200 px-2.5 py-1 rounded-full">
                      Hazard
                    </span>
                  )}
                </div>
                <p className="text-slate-500 text-[13px] leading-relaxed">{s.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}