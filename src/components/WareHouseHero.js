import Image from "next/image";

export default function WarehouseHero() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden flex items-center">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/warehouse.jpg"
          alt="Warehouse interior"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark green overlay */}
        <div className="absolute inset-0 bg-emerald-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl flex flex-col gap-6">

          {/* Badge */}
          <span className="inline-flex self-start border border-blue-700 text-blue-100 text-[10px] font-bold tracking-[0.22em] uppercase px-4 py-2 rounded-full">
            Industrial Precision
          </span>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Protect Your Warehouse{" "}
            <span className="text-white">Stock</span> and Your Compliance
          </h1>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <p className="text-white text-[15px] leading-relaxed">
              Warehouses and storage facilities face some of the highest pest risk of any commercial property type. Large floor areas with extensive racking create thousands of concealed harborage sites. Regular goods movement brings new pest introduction with every delivery. And the consequences of a pest infestation in a warehouse go beyond the premises: contaminated stock must be written off, clients who discover a pest problem may terminate contracts, and a single FSSAI inspection finding can shut down a food storage facility immediately.
            </p>
            <p className="text-white text-[15px] leading-relaxed">
              Kerala Pest Solutions provides structured pest management programmes for warehouses, godowns, cold stores, pharmaceutical storage facilities, and logistics hubs across Trivandrum and Kollam. Our approach combines systematic rodent control, stored product pest management, and the documented service records that client and regulatory audits require.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-2">
            <button className="bg-white hover:bg-slate-100 text-black font-bold text-[13px] px-7 py-4 rounded-xl transition-colors duration-200">
              Book a Warehouse Pest Assessment
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-bold text-[13px] px-7 py-4 rounded-xl border border-white/40 transition-colors duration-200">
              View Audit Protocols
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}