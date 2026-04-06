import Image from "next/image";

export default function RodentControlHero() {
  return (
    <section className="bg-emerald-900 py-20 px-6 min-h-[560px] flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <div className="flex flex-col gap-6">

          {/* Badge */}
          <span className="inline-flex items-center self-start border border-emerald-600/50 text-emerald-300 text-[10px] font-semibold tracking-[0.22em] uppercase px-4 py-2 rounded-full">
            Clinical Grade Pest Management
          </span>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Professional<br />Rodent Control<br />in Kerala
          </h1>

          {/* Body */}
          <p className="text-emerald-100/70 text-[14px] leading-relaxed">
            Rats and mice are not a nuisance pest. They are a serious, multi-dimensional threat: a
            public health hazard through the diseases they carry, including leptospirosis and
            salmonellosis; a structural danger through the electrical wiring and plumbing they gnaw;
            a financial liability for food businesses through stock contamination; and a compliance
            risk under FSSAI food safety regulations. The black rat and Norway rat are the dominant
            species in Kerala&apos;s urban centres, while house mice are prevalent across residential
            properties and food storage facilities.
          </p>

          <p className="text-emerald-100/70 text-[14px] leading-relaxed">
            Rat and mouse control for homes, restaurants, and businesses in{" "}
            <strong className="text-white font-bold">Trivandrum</strong> and{" "}
            <strong className="text-white font-bold">Kollam</strong>. Tamper-resistant stations,
            proofing reports, monitored programmes. FSSAI-compliant.
          </p>

          {/* CTA */}
          <div className="mt-2">
            <button className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-[14px] px-7 py-4 rounded-xl transition-colors duration-200">
              Book Your Rodent Control Programme
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right — image */}
        <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0 shadow-2xl">
          {/*
            Replace src with your actual image e.g. /images/rodent-technician.jpg
            Place in /public/images/
          */}
          <Image
            src="/rodent-technician.jpg"
            alt="Professional rodent control technician"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Subtle dark gradient at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent" />
        </div>

      </div>
    </section>
  );
}