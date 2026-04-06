import Image from "next/image";

export default function ApartmentHero() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden flex items-center">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/apartment.jpg"
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
          <span className="inline-flex self-start border border-emerald-400/40 text-emerald-300 text-[10px] font-bold tracking-[0.22em] uppercase px-4 py-2 rounded-full">
            Industrial Precision
          </span>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
          Pest Control for Apartments and Housing<br />{" "}
                                         Societies in Kerala



          </h1>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <p className="text-emerald-100/70 text-[15px] leading-relaxed">
            Apartment living in Kerala creates pest management challenges that do not exist in independent houses. Shared drainage stacks, common walls, joint utility spaces, rooftop water tanks, and basement sumps connect every flat in a building to every other flat. A cockroach infestation in one unit can spread to all adjacent units within weeks via the shared drainage infrastructure. A mosquito breeding site in the rooftop tank sends adult mosquitoes into every flat on the building. And a termite colony established in the ground-floor soil can travel upward through wall voids to reach upper floors.
            </p>
            <p className="text-emerald-100/70 text-[15px] leading-relaxed">
            Kerala Pest Solutions specialises in apartment and housing society pest management across Trivandrum and Kollam. We work with individual flat owners for unit-level treatment, and with housing society committees for building-wide programmes that address the shared infrastructure where pests actually travel.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-2">
            <button className="bg-white hover:bg-slate-100 text-emerald-900 font-bold text-[13px] px-7 py-4 rounded-xl transition-colors duration-200">
              Book a Apartment Pest Assessment
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