export default function ProfessionalStandards() {
  return (
    <section className="bg-[#3b7cff] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-10">
            Professional Standards & Accountability
          </h2>

          {/* Item 1 */}
          <div className="flex gap-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[#3b7cff] flex items-center justify-center">
              {/* Icon */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-1">
                IPM & CIB&RC Certified
              </h3>
              <p className="text-white text-sm leading-relaxed">
                Our treatments follow Integrated Pest Management principles using only
                Central Insecticide Board approved eco-friendly chemicals.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#3b7cff] flex items-center justify-center">
              {/* Icon */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M17 20h5V4H2v16h5" />
                <circle cx="12" cy="10" r="3" />
                <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
              </svg>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-1">
                Local Kollam Team
              </h3>
              <p className="text-white text-sm leading-relaxed">
                We don’t outsource. Our technicians are local experts who understand
                the geography and pest behavior of Kollam neighborhoods.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="bg-[#c5c5c5] backdrop-blur rounded-2xl p-8 shadow-lg">
          <h3 className="text-lg font-bold mb-4">
            Our Promise
          </h3>

          <p className="text-white italic leading-relaxed mb-6">
            “We bring a clinical, science-based approach to pest control.
            Every home in Kollam deserves the same standard of protection
            as a high-end hospital or luxury resort.”
          </p>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full "></div>
            <div>
              <p className="text-sm font-semibold">
                Director of Operations
              </p>
              <p className="text-xs text-black">
                Kerala Pest Solutions
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}