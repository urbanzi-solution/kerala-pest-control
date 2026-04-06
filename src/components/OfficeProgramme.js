import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Initial Site Survey and Risk Assessment",
    description:
      "We begin every commercial contract with a full building inspection covering all floors, canteen and pantry areas, server rooms, electrical plant rooms, loading bays, and the building perimeter. We identify the pest species present or likely to be present, assess the risk level for each area, and produce a written risk report with a prioritised treatment plan.",
  },
  {
    number: "02",
    title: "Scheduled Preventive Visits",
    description:
      "Monthly visits are standard for most commercial properties in Kerala. Each visit follows a structured route covering all identified risk areas. Findings, products applied, and any corrective actions recommended are recorded in a service logbook maintained at the property.",
  },
  {
    number: "03",
    title: "After-Hours Treatment Option",
    description:
      "For offices where even odourless treatment products could cause concern if applied during working hours, we offer after-hours scheduling. Our technicians can work in the building after the last staff member has left and before the first staff member arrives. The building is ready for normal use the following morning.",
  },
  {
    number: "04",
    title: "Canteen and Food Area Compliance",
    description:
      "If your office canteen is subject to FSSAI licensing — which applies to any canteen serving food to employees beyond a basic exemption threshold — we provide the same FSSAI-compliant documentation package that we provide to restaurant clients: service logbook, bait station map, corrective action reports, and material safety data sheets.",
  },
];

export default function OfficeProgramme() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Left */}
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-emerald-900 leading-tight">
            Our Office Pest<br />Management Programme
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
            src="/offi-technician.jpg"
            alt="Warehouse pest control technician"
            fill
            className="object-cover object-center"
          />

        </div>

      </div>
    </section>
  );
}