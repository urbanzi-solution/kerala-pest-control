import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Initial Site Survey and Risk Assessment",
    description:
      "Every new restaurant client begins with a structured site survey. We inspect all kitchen areas, food storage zones, waste management areas, drainage, and the building perimeter. We identify pest species present, assess the infestation severity, and produce a written risk report with priority-rated recommendations for both treatment and physical proofing.",
  },
  {
    number: "02",
    title: "Scheduled Treatment Visits",
    description:
      "We recommend monthly treatment visits for active food businesses in Kerala. Monthly visits allow us to respond quickly to any new activity and ensure that the chemical barriers and bait stations are maintained at effective levels. For businesses in food courts or areas with high adjacent pest pressure, fortnightly visits may be recommended.",
  },
  {
    number: "03",
    title: "Service Documentation",
    description:
      "Every visit is documented in a pest control service logbook maintained at your premises. The logbook includes the date and time of each visit, the technician name, the pests targeted, the products applied, the application zones, and the findings for that visit. This is the document that an FSSAI inspector will ask to see. It should be available on-site at all times.",
  },
  {
    number: "04",
    title: "Corrective Action Reports",
    description:
      "If any evidence of pest activity is found during a scheduled visit, we issue a Corrective Action Report (CAR) identifying the activity, the likely cause, the immediate treatment applied, and the recommended structural or sanitation actions required to prevent recurrence. CARs are part of your compliance documentation.",
  },
];

export default function RestaurantProgramme() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Left */}
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-emerald-900 leading-tight">
            Our Restaurant Pest<br />Control Programme
          </h2>

          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5 items-start">
                {/* Number badge */}
                <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
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
            src="/rest-technician.jpg"
            alt="Warehouse pest control technician"
            fill
            className="object-cover object-center"
          />

        </div>

      </div>
    </section>
  );
}