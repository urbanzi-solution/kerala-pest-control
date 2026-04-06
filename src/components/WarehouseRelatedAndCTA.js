import Link from "next/link";

const relatedServices = [
  {
    name: "Industrial Fumigation for Export Stocks",
    href: "/services/fumigation",
  },
  {
    name: "Pre-construction Termite Reticulation",
    href: "/services/termite-reticulation",
  },
  {
    name: "Electronic Fly Killers (EFK) Installation",
    href: "/services/efk",
  },
];

const areas = [
  { name: "Trivandrum (TVM)", href: "/trivandrum" },
 
   
  { name: "Kollam", href: "/kollam" },
];

export default function WarehouseRelatedAndCTA() {
  return (
    <div>

      {/* ── Related Services + Areas ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Related Services */}
          <div>
            <h3 className="text-[15px] font-extrabold text-emerald-900 mb-1">
              Related Services
            </h3>
            <div className="w-10 h-0.5 bg-emerald-700 rounded-full mb-6" />

            <ul className="divide-y divide-slate-100">
              {relatedServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex items-center justify-between py-4 text-slate-500 text-[13px] hover:text-emerald-700 transition-colors duration-200 group"
                  >
                    {service.name}

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-500 transition-colors shrink-0 ml-4"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas We Serve */}
          <div>
            <h3 className="text-[15px] font-extrabold text-emerald-900 mb-1">
              Areas We Serve
            </h3>
            <div className="w-10 h-0.5 bg-emerald-700 rounded-full mb-6" />

            <div className="grid grid-cols-2 gap-3">
              {areas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-slate-600 text-[13px] font-medium hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-200"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-white pb-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-2xl py-20 px-8 text-center relative overflow-hidden">

            {/* Decorative lines */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute top-0 left-0 w-40 h-full border-r border-white transform -skew-x-12" />
              <div className="absolute top-0 left-20 w-40 h-full border-r border-white transform -skew-x-12" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-7">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Audit-Ready Pest Management<br />for Your Warehouse
              </h2>

              <Link
                href="/contact"
                className="bg-white hover:bg-slate-100 text-emerald-900 font-bold text-[11px] tracking-[0.2em] uppercase px-10 py-4 rounded-xl transition-all duration-200 hover:shadow-md"
              >
                Request a Site Survey
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}