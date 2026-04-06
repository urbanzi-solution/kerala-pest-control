const rates = [
  { service: "General Pest Control", oneTime: "Contact us for quote", amc: "Contact us for quote" },
  { service: "Termite Treatment", oneTime: "Contact us for quote", amc: "Contact us for quote" },
  { service: "Bed Bug Removal", oneTime: "Contact us for quote", amc: "Contact us for quote" },
  { service: "Cockroach Control", oneTime: "Contact us for quote", amc: "Contact us for quote" },
  { service: "Mosquito & Rodent", oneTime: "Contact us for quote", amc: "Contact us for quote" },
];

export default function TrivandrumRates() {
  return (
    <section className="bg-[#e8f0f8] py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h2 className="text-3xl font-extrabold text-emerald-900 text-center tracking-tight mb-10">
          Trivandrum Service Rates
        </h2>

        {/* Table card */}
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">

          {/* Header row */}
          <div className="grid grid-cols-3 bg-emerald-800 px-7 py-4">
            <p className="text-white text-[12px] font-bold">Service Description</p>
            <p className="text-white text-[12px] font-bold">One-Time Service</p>
            <p className="text-white text-[12px] font-bold">Quarterly AMC</p>
          </div>

          {/* Data rows */}
          {rates.map((row, i) => (
            <div
              key={row.service}
              className={"grid grid-cols-3 px-7 py-5 items-center " + (i !== rates.length - 1 ? "border-b border-slate-100" : "")}
            >
              <p className="text-slate-800 text-[13px] font-bold">{row.service}</p>
              <p className="text-slate-500 text-[13px]">{row.oneTime}</p>
              <p className="text-slate-500 text-[13px]">{row.amc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}