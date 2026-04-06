import { Microscope, GraduationCap, MapPin } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Item 1 */}
        <div className="flex flex-col items-center md:items-start">
          <Microscope className="text-green-700 w-10 h-10 mb-4" />
          <h3 className="text-2xl text-black font-semibold mb-3">
            Scientific Formulations
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We use only CIB&RC approved formulations, ensuring maximum efficacy
            with minimal environmental footprint. Our cocktails are targeted
            specifically to the species identified on-site.
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center md:items-start">
          <GraduationCap className="text-green-700 w-10 h-10 mb-4" />
          <h3 className="text-2xl text-black font-semibold mb-3">
            IPM Trained Experts
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our technicians are not just applicators; they are trained in
            Integrated Pest Management (IPM), a decision-making process that
            emphasizes non-chemical tactics first.
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center md:items-start">
          <MapPin className="text-green-700 w-10 h-10 mb-4" />
          <h3 className="text-2xl text-black font-semibold mb-3">
            Kerala Local Intelligence
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We understand the specific pest cycles of the Malabar coast, from
            monsoon termite swells to coastal rodent patterns unique to
            Trivandrum and Kollam.
          </p>
        </div>

      </div>
    </section>
  );
}