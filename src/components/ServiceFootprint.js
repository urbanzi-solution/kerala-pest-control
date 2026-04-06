import { Map, Building } from "lucide-react";

export default function ServiceFootprint() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        <h2 className="text-4xl text-black font-semibold mb-14">
          Service Footprint
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Trivandrum */}
          <div className="bg-gray-200 rounded-2xl p-10 text-center shadow-sm hover:shadow-md transition">
            <Map className="w-10 h-10 text-green-700 mx-auto mb-6" />
            
            <h3 className="text-2xl text-black font-semibold mb-3">
              Trivandrum Service Area
            </h3>
            
            <p className="text-gray-600 italic mb-6">
              Kazhakoottam, Technopark, Karyavattom, Sreekaryam, Pattom, Kowdiar, Nalanchira, Nemom 
            </p>

            <a
              href="/trivandrum"
              className="text-green-700 font-bold tracking-wide hover:underline"
            >
              VIEW LOCAL HUB →
            </a>
          </div>

          {/* Kollam */}
          <div className="bg-gray-200 rounded-2xl p-10 text-center shadow-sm hover:shadow-md transition">
            <Building className="w-10 h-10 text-green-700 mx-auto mb-6" />
            
            <h3 className="text-2xl text-black font-semibold mb-3">
              Kollam Service Area
            </h3>
            
            <p className="text-gray-600 italic mb-6">
              Karunagappally, Kottarakkara, Kundara, Paravur, Punalur
            </p>

            <a
              href="/kollam"
              className="text-green-700 font-bold tracking-wide hover:underline"
            >
              VIEW LOCAL HUB →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}