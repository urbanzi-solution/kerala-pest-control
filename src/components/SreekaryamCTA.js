export default function SreekaryamCTA() {
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
              Ready to Solve Your Pest Problem in Sreekaryam?
            </h2>

            <p className="text-green-100 text-[15px] max-w-2xl mx-auto mb-8 leading-relaxed">
              Don't wait for a small infestation to become a structural nightmare.
              Get a professional, clinical assessment today.
            </p>

            {/* CTA Button */}
            <a
              href="/contact"
              className="inline-block bg-white hover:bg-gray-50 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Start Your Free Inspection Now
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}