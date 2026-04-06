import Image from "next/image";

export default function Service() {
  return (
    <section className="bg-[#f5f7f6] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            CIB&RC APPROVED FORMULATIONS
          </div>

          <h1 className="text-4xl md:text-6x1 lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Pest Control Services in<br/>{" "}
            <span className="text-green-700 italic">
              Kerala
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
           Kerala Pest Solutions provides specialist pest control services for residential and commercial properties across Trivandrum and Kollam. Every service we offer is built on Integrated Pest Management (IPM) principles: we inspect first, diagnose accurately, and apply targeted treatments that address the source of the problem — not just its visible symptoms.
 Whether you know exactly what pest you have or you’re not yet sure, this is the right place to start.

          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md">
              Book a Free Inspection →
            </button>

            <button className="bg-white hover:bg-mist-100 text-black px-6 py-3 rounded-md">
              View Methodology
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/lab.jpg"
              alt="Lab"
              width={600}
              height={700}
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-5 text-white">
            <p className="italic text-sm">
              "True eradication requires a scientific understanding..."
            </p>
            <p className="mt-2 text-xs">— CHIEF ENTOMOLOGIST</p>
          </div>
        </div>
      </div>
    </section>
  );
}