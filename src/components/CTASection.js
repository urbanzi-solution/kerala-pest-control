export default function CTASection() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="bg-gradient-to-r from-green-800 to-green-600 rounded-3xl py-16 px-8 text-center text-white">
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Ready for a Clinical Audit?
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Stop guessing. Get a precise identification and a fixed-cost
            treatment plan today.
          </p>

          {/* Button */}
          <button className="bg-gray-200 text-green-800 font-semibold px-8 py-4 rounded-lg hover:bg-white transition">
            Book a Free Inspection →
          </button>

        </div>

      </div>
    </section>
  );
}