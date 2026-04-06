import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Scheduled Preventive Visits",
    description:
      "Monthly preventive visits covering all guest floors, kitchen areas, back-of-house zones, and external perimeter. Each visit is documented in a service logbook maintained on-site. We provide advance notice of every scheduled visit so that housekeeping and management can coordinate access without disrupting guest experience.",
  },
  {
    number: "02",
    title: "Rapid Response for Active Incidents",
    description:
      "When a guest reports a pest sighting or housekeeping identifies an active infestation, time is critical. Kerala Pest Solutions provides same-day or next-day response for active hotel pest incidents across Trivandrum and Kollam. The room is treated and cleared before it is returned to inventory. We provide written clearance documentation for your records.",
  },
  {
    number: "03",
    title: "Staff Training",
    description:
      "The most effective hotels treat pest management as an operational discipline, not just a third-party service. We provide a brief training session for housekeeping staff covering bed bug detection, early cockroach sighting identification, and the internal reporting protocol to follow when pest evidence is found. This creates an early-warning system that catches incidents before they escalate.",
  },
  {
    number: "04",
    title: "Compliance Documentation",
    description:
      "Every service visit is documented. We maintain records of every treatment carried out, every product applied, every pest finding, and every corrective action taken. At the end of each contract year, we provide a consolidated annual pest control report suitable for tourism board inspections, star classification audits, and FSSAI renewal.",
  },
  {
    number: "05",
    title: "Discretion Is Part of the Service",
    description:
      "Our technicians arrive in unmarked vehicles where requested, carry identification, and are trained to work quietly and without attracting guest attention. Treatment schedules are agreed with management to avoid peak check-in and dining periods. We treat all guest-facing areas during low-occupancy windows wherever possible.",
  },
];

export default function HotelProgramme() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Left */}
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-emerald-900 leading-tight">
            Our Hotel Pest<br />Management Programme
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
          */}9
          <Image
            src="/hotl-technician.jpg"
            alt="Warehouse pest control technician"
            fill
            className="object-cover object-center"
          />

        </div>

      </div>
    </section>
  );
}