import { CheckCircle } from "lucide-react";

export default function CTAcocSection() {
  return (
    <section className="bg-[#e9eeec] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg px-6 md:px-16 py-14 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-800 mb-4">
          Eliminate the Colony Forever
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Stop using temporary fixes for a permanent problem. Get a scientific,
          long-term solution today.
        </p>

        {/* Button */}
        <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-lg px-10 py-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
          Book Cockroach Control Now
        </button>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600">
          
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-emerald-600" />
            <span>FREE FOLLOW-UP</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-emerald-600" />
            <span>CIB CERTIFIED</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-emerald-600" />
            <span>KERALA-WIDE SERVICE</span>
          </div>

        </div>

      </div>
    </section>
  );
}