import Image from "next/image";

function Card({
  label,
  title,
  desc,
  covers,
  notIncluded,
  image,
  reverse = false,
}) {
  return (
    <div className="bg-[#eef2f1] rounded-3xl overflow-hidden p-6 md:p-10">
      <div
        className={`grid md:grid-cols-2 gap-10 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* TEXT */}
        <div className={`${reverse ? "md:order-2" : ""}`}>
          <p className="text-green-700 text-xs tracking-widest font-semibold mb-3">
            {label}
          </p>

          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
            {title}
          </h2>

          <p className="text-gray-600 mb-6 max-w-md">{desc}</p>

          <div className="flex gap-10 text-sm">
            {/* Covers */}
            <div>
              <p className="font-semibold text-gray-800 mb-2">
                WHAT IT COVERS
              </p>
              <ul className="space-y-1 text-gray-600">
                {covers.map((item, i) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>
            </div>

            {/* Not Included */}
            <div>
              <p className="font-semibold text-gray-800 mb-2">
                NOT INCLUDED
              </p>
              <ul className="space-y-1 text-gray-600">
                {notIncluded.map((item, i) => (
                  <li key={i}>✖ {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 text-green-700 font-semibold text-sm cursor-pointer">
            Full details, methods, and FAQ →
          </div>
        </div>

        {/* IMAGE */}
        <div className={`${reverse ? "md:order-1" : ""}`}>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/pic.jpg"
              alt={title}
              width={600}
              height={400}
              className="w-full h-[300px] md:h-[350px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default function InterventionCards() {
  return (
    <section className="bg-[#e9eeec] py-16 space-y-10">
      <div className="max-w-7xl mx-auto px-6 space-y-10">

        {/* Card 1 */}
        <Card
          label="STRUCTURAL INTEGRITY"
          title="Subterranean Termite Eradication"
          desc="A multi-layered defense utilizing soil-barrier technology and targeted baiting systems designed to eliminate the entire colony, including the queen."
          covers={[
            "Foundations & Crawlspaces",
            "Internal Woodwork",
            "Garden Perimeter",
          ]}
          notIncluded={[
            "Pre-existing structural rot",
            "Drywood termite treatment",
          ]}
          image="/termite.jpg"
        />

        {/* Card 2 (Reverse) */}
        <Card
          label="HOLISTIC PROTECTION"
          title="General Pest Proactive Maintenance"
          desc="A quarterly clinical audit and treatment plan focusing on the exclusion and prevention of common Kerala household pests including ants and spiders."
          covers={[
            "Entry-point Sealing",
            "Tonal Crack Treatments",
            "External Perimeter Spray",
          ]}
          notIncluded={[
            "Heavy infestation clearing",
            "Bird control services",
          ]}
          image="/leaf.jpg"
          reverse
        />
      </div>
    </section>
  );
}