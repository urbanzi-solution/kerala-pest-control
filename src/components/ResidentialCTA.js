export default function ResidentialCTA() {
  return (
    <section className="bg-[#e5edf3] py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="bg-[#3b7cff] rounded-[40px] px-10 py-16 text-center shadow-lg relative overflow-hidden">

          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[radial-gradient(circle_at_top_left,white,transparent_60%)]"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-5 leading-tight">
             Ready to Protect Your Home?
            </h2>

            <p className="text-white text-[15px] max-w-2xl mx-auto mb-8 leading-relaxed">
             Contact Kerala Pest Solutions for a free inspection. We serve homes and apartments across Trivandrum and Kollam.
            </p>

            {/* CTA Button */}
            <a
              href="/contact"
              className="inline-block bg-[#e4e4e4] hover:bg-[#a7a7a9] text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Book Your Free Home Inspection
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}