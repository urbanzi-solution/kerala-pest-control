export default function ServiceCategories() {
  const categories = [
    {
      title: "Residential Pest Control",
      description:
        "Safe and effective pest control for homes, apartments, villas, and gated communities. We remove pests and ensure long-term protection.",
      features: [
        "Termite treatment",
        "Ant and cockroach control",
        "Bed bug treatment",
        "Mosquito and fly control",
      ],
    },
    {
      title: "Commercial Pest Control",
      description:
        "Professional pest management for offices, shops, showrooms, banks, and malls. We help maintain a clean and safe environment for your customers.",
      features: [
        "Office and showroom pest control",
        "Restaurant and café pest management",
        "Co-working space sanitization",
        "Scheduled AMC plans",
      ],
    },
    {
      title: "Industrial Pest Control",
      description:
        "High-standard pest control services for warehouses, godowns, factories, and food-processing units. Designed to meet safety and compliance standards.",
      features: [
        "Warehouse and storage pest control",
        "Factory pest management",
        "Rodent control solutions",
        "Long-term preventive maintenance",
      ],
    },
  ];

  return (
    <section className="bg-white px-5 py-20 md:py-16 sm:py-10">
      <div className="max-w-[1320px] mx-auto">

        {/* HEADER */}
        <div className="mb-12 text-left">
          <span className="inline-block bg-[#e4ecfb] text-[#3b7cff] text-sm font-medium px-5 py-2 rounded-xl mb-4">
            Pest-Free Spaces
          </span>

          <h2 className="text-3xl md:text-[38px] font-medium text-black">
            Our Pest Control Services
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {categories.map((category, index) => (
            <div
              key={index}
              className="
                bg-[#faf9f4]
                rounded-xl
                p-6 md:p-8 lg:p-10
                h-full
                transition
                hover:shadow-lg hover:-translate-y-1
              "
            >
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                {category.title}
              </h3>

              <p className="text-sm md:text-[15px] text-black leading-relaxed mb-6">
                {category.description}
              </p>

              <ul className="space-y-3">
                {category.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-black relative pl-5 leading-relaxed"
                  >
                    <span className="absolute left-0 top-0 text-lg leading-none">
                      •
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}