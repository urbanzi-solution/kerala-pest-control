export default function TVMCTASection() {
  return (
    <section className="bg-[#d7e3ec] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-4">
          Ready for a Pest-Free Home?
        </h2>

        {/* Subtext */}
        <p className="text-slate-600 text-[15px] mb-10 max-w-2xl mx-auto leading-relaxed">
          Get clinical-grade protection with our expert team in Trivandrum. 
          No hidden costs, just reliable science.
        </p>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

          {/* Button */}
          <a
            href="/contact"
            className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-4 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
          >
            [ Book Your Free Trivandrum Inspection → ]
          </a>

          {/* Contact Info */}
          <div className="text-left">
            <p className="text-emerald-700 font-semibold text-sm">
              Call Now: +91 0000 000 000
            </p>
            <p className="text-slate-500 text-xs">
              Available Mon-Sat, 9AM - 6PM
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}