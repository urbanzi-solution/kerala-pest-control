import Image from "next/image";
import { AlertTriangle } from "lucide-react";

export default function MosquitoTypes() {
  return (
    <section className="bg-[#eef2f1] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Mosquitoes in Kerala Carry Real Disease Risk
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Understanding our adversary is the first step in clinical prevention.
          Kerala's climate supports two primary disease vectors.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            
            <div className="rounded-2xl overflow-hidden mb-6">
              <Image
                src="/aedes.jpg" // put in /public
                alt="Aedes mosquito"
                width={500}
                height={300}
                className="w-full h-[220px] object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aedes aegypti
            </h3>

            <span className="inline-block text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full mb-4">
              DENGUE & CHIKUNGUNYA VECTOR
            </span>

            <ul className="space-y-3 text-left text-sm text-gray-600">
              <li className="flex gap-2 items-start">
                <AlertTriangle size={16} className="text-red-500 mt-0.5" />
                Active during dawn and dusk hours
              </li>
              <li className="flex gap-2 items-start">
                <AlertTriangle size={16} className="text-red-500 mt-0.5" />
                Breeds in clean stagnant water (flower pots, trays, containers)
              </li>
              <li className="flex gap-2 items-start">
                <AlertTriangle size={16} className="text-red-500 mt-0.5" />
                Prefers indoor environments and shaded areas
              </li>
            </ul>

          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            
            <div className="rounded-2xl overflow-hidden mb-6">
              <Image
                src="/anopheles.jpg" // put in /public
                alt="Anopheles mosquito"
                width={500}
                height={300}
                className="w-full h-[220px] object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Anopheles
            </h3>

            <span className="inline-block text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full mb-4">
              MALARIA VECTOR
            </span>

            <ul className="space-y-3 text-left text-sm text-gray-600">
              <li className="flex gap-2 items-start">
                <AlertTriangle size={16} className="text-gray-500 mt-0.5" />
                Highly active during night hours
              </li>
              <li className="flex gap-2 items-start">
                <AlertTriangle size={16} className="text-gray-500 mt-0.5" />
                Breeds in larger water bodies, ponds, and marshes
              </li>
              <li className="flex gap-2 items-start">
                <AlertTriangle size={16} className="text-gray-500 mt-0.5" />
                Strong fliers, can travel long distances to feed
              </li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}