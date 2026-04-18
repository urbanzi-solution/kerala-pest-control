import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Facility Risk Assessment",
    description:
      "Every warehouse contract begins with a full facility inspection covering the entire floor area, racking systems, loading bay areas, canteen and toilet facilities, the building perimeter, and any outdoor storage areas. We map all identified rodent entry points, rodent runways, and any current pest activity. The output is a written risk report and a detailed site map showing the proposed bait station layout.",
  },
  {
    number: "02",
    title: "Bait Station Network Deployment",
    description:
      "We deploy a network of tamper-resistant bait stations across the facility based on the risk assessment findings. Every station is assigned a number and recorded on the bait station map. The map is updated whenever stations are added, removed, or relocated. This map is a key document for client and regulatory audits.",
  },
  {
    number: "03",
    title: "Fortnightly Monitoring Visits",
    description:
      "Every bait station is inspected on each fortnightly visit. Consumed bait is replenished. Any stations showing signs of heavy activity are investigated for the entry point driving that activity. The findings of each visit — stations inspected, bait consumed, live animals caught, corrective actions taken — are recorded in the service logbook.",
  },
  {
    number: "04",
    title: "Incoming Stock Inspection Protocol",
    description:
      "For food and pharmaceutical warehouses, incoming stock inspection is a critical control point. We work with warehouse management to establish a written incoming goods inspection procedure that checks for evidence of stored product pest activity in all incoming deliveries. This prevents the introduction of new infestations from contaminated supplier stock.",
  },
];

export default function WarehouseProgramme() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Left */}
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-black leading-tight">
            Our Warehouse Pest<br />Management Programme
          </h2>

          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5 items-start">
                {/* Number badge */}
                <div className="w-10 h-10 rounded-xl bg-[#d5d5d5] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-[11px] font-extrabold tracking-wide">
                    {step.number}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[15px] font-extrabold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image + stat */}
        <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
          {/*
            Replace src with /images/warehouse-technician.jpg
          */}
          <Image
            src="/warehouse-technician.jpg"
            alt="Warehouse pest control technician"
            fill
            className="object-cover object-center"
          />

          {/* Stat overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#3b7cff] backdrop-blur-sm px-7 py-5">
            <p className="text-white text-3xl font-extrabold leading-none mb-1">100%</p>
            <p className="text-white text-[10px] font-bold tracking-[0.22em] uppercase">
              Audit Compliance Rate
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}