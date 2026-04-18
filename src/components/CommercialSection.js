import Image from "next/image";
import {
  Utensils,
  FileText,
  ClipboardList,
  Zap,
  ShieldCheck,
  Droplet,
  Box,
  Sparkles,
} from "lucide-react";

export default function CommercialSection() {
  return (
    <section className="bg-gray-200 text-black">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <p className="text-xs tracking-widest uppercase bg-white/10 inline-block px-3 py-1 rounded-full mb-4">
            Institutional Partner
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            For Restaurants and Food Businesses
          </h2>

          <p className="text-black mb-8 max-w-xl">
            We understand that a cockroach sighting in a commercial kitchen is a
            business-critical event. Our FSSAI-compliant protocols focus on
            discreet, rapid elimination without affecting your operations.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            
            <div className="flex gap-3">
              <Utensils size={18} />
              <div>
                <p className="font-semibold">Active Kitchen Safe</p>
                <p className="text-black">
                  Treatments designed for busy environments, no need to shut down prep areas.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <FileText size={18} />
              <div>
                <p className="font-semibold">FSSAI Compliance</p>
                <p className="text-black">
                  Full audit documentation and chemical logs for health inspectors.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <ClipboardList size={18} />
              <div>
                <p className="font-semibold">Flexible Contracts</p>
                <p className="text-black">
                  Proactive monthly or quarterly maintenance programs.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Zap size={18} />
              <div>
                <p className="font-semibold">Rapid Response</p>
                <p className="text-black">
                  Priority 4-hour response for commercial emergencies.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/kitchen.jpg" // put image in /public
              alt="Commercial kitchen"
              width={600}
              height={500}
              className="object-cover w-full h-[420px]"
            />
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="bg-[#e9e9e9] text-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          {/* LEFT BOX */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-black mb-6">
              Prevention Strategies
            </h3>

            <div className="space-y-5 text-sm">
              
              <div className="flex gap-3">
                <ShieldCheck size={18} />
                <div>
                  <p className="font-semibold">Seal Structural Gaps</p>
                  <p className="text-gray-600">
                    Use silicone sealant for gaps around pipes, baseboards, and cabinets.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Droplet size={18} />
                <div>
                  <p className="font-semibold">Fix All Leaks</p>
                  <p className="text-gray-600">
                    Eliminate moisture sources under sinks and AC drainage pipes.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Box size={18} />
                <div>
                  <p className="font-semibold">Store Food Securely</p>
                  <p className="text-gray-600">
                    Use airtight containers; avoid leaving food exposed overnight.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Sparkles size={18} />
                <div>
                  <p className="font-semibold">Clean Behind Appliances</p>
                  <p className="text-gray-600">
                    Degrease and clean under refrigerators and stoves regularly.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT BOX */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-black mb-6">
              Service Safety & Protocols
            </h3>

            <div className="space-y-5 text-sm">

              <div className="bg-orange-50 rounded-xl p-4">
                <p className="font-semibold text-orange-700">
                  No Evacuation Required
                </p>
                <p className="text-gray-600 mt-1">
                  Our gel baiting system is non-volatile. No airborne residue,
                  and no need to vacate during or after service.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-4">
                <p className="font-semibold text-green-700">
                  Pet & Child Safe
                </p>
                <p className="text-gray-600 mt-1">
                  Formulations are placed in inaccessible crevices. Allow 2-hour
                  drying time for treated areas.
                </p>
              </div>

            </div>

            <p className="text-xs text-gray-500 mt-6">
              Approved by Central Insecticides Board (CIB)
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}