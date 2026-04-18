import Image from "next/image";

export default function RestaurantsHero() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden flex items-center">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/restuarnt.jpg"
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
          <h1 className="text-4xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
            Pest Control for Restaurants and{" "}
             Food Businesses in Kerala

          </h1>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <p className="text-emerald-100/70 text-[15px] leading-relaxed">
              For any food business, a pest sighting is not just a hygiene problem — it is an immediate threat to your FSSAI licence, your reputation, and your revenue. A cockroach in the kitchen or a rat near food storage can trigger a closure order from the Food Safety and Standards Authority of India (FSSAI) on the same day it is reported. And in the age of social media, a photograph of a pest in a restaurant reaches thousands of people within hours.
            </p>
            <p className="text-emerald-100/70 text-[15px] leading-relaxed">
              Kerala Pest Solutions provides professional, FSSAI-compliant pest management for restaurants, hotel kitchens, canteens, bakeries, food processing units, and catering operations across Trivandrum and Kollam. Our methods are specifically selected for food environments — no strong-odour sprays, no kitchen downtime, and full documentation for every visit.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-2">
            <button className="bg-white hover:bg-slate-100 text-black font-bold text-[13px] px-7 py-4 rounded-xl transition-colors duration-200">
              Book a Restaurants Pest Assessment
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