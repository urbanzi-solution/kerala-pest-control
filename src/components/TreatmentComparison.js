import Image from "next/image";

export default function TreatmentComparison() {
  return (
    <section className="bg-[#f7f7fb] py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <h2 className="mb-8 text-center text-[28px] font-bold text-[#1565ff]">
          Pre-Construction vs. Post-Construction Anti-Termite Treatment
        </h2>

        {/* Image Comparison */}
        <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left */}
            <div className="relative border-r border-gray-300">
              {/* Top Label */}
              <div className="absolute left-0 top-0 z-20 w-full bg-[#006cb8]/95 py-3 text-center text-lg font-bold tracking-wide text-white">
                PRE-CONSTRUCTION
              </div>

              <div className="relative h-[420px]">
                <Image
                  src="/preconstruction.jpg"
                  alt="Pre Construction"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Label */}
              <div className="absolute bottom-0 left-0 w-full bg-[#006cb8]/95 py-3 text-center">
                <h3 className="text-lg font-bold text-white">
                  PRE-CONSTRUCTION
                </h3>
                <p className="text-sm text-white">
                  Foundation Treatment & Barrier Application
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              {/* Top Label */}
              <div className="absolute left-0 top-0 z-20 w-full bg-[#6b6b6b]/95 py-3 text-center text-lg font-bold tracking-wide text-white">
                POST-CONSTRUCTION
              </div>

              <div className="relative h-[420px]">
                <Image
                  src="/post.webp"
                  alt="Post Construction"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Label */}
              <div className="absolute bottom-0 left-0 w-full bg-[#006cb8]/95 py-3 text-center">
                <h3 className="text-lg font-bold text-white">
                  POST-CONSTRUCTION
                </h3>
                <p className="text-sm text-white">
                  Targeted Drill & Inject Solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Blue Divider */}
        <div className="mx-auto my-10 h-[3px] w-40 rounded-full bg-[#1565ff]" />

        {/* Content */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <h3 className="mb-5 text-xl font-bold text-[#1565ff]">
              Pre-Construction (The Smart Choice)
            </h3>

            <p className="mb-6 text-[15px] leading-7 text-gray-700">
              If you are building a new home in Kerala, pre-construction
              termite treatment (ATT) is an absolute non-negotiable
              requirement. It is far easier and cheaper to treat the soil
              before the concrete goes down.
            </p>

            <ul className="space-y-5 text-[15px] leading-7 text-gray-700">
              <li>
                <strong>• Process:</strong> The soil in the foundation
                trenches, beneath, and the pillars are thoroughly drenched
                with termiticide before the concrete slab is poured. A
                chemical barrier is also applied around the external
                perimeter.
              </li>

              <li>
                <strong>• Advantage:</strong> Creates a continuous,
                invisible shield that termites simply cannot cross. No
                drilling required later.
              </li>

              <li>
                <strong>• Longevity:</strong> Often lasts 5 to 10 years or
                more.
              </li>
            </ul>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="mb-5 text-xl font-bold text-[#1565ff]">
              Post-Construction (The Rescue Operation)
            </h3>

            <p className="mb-6 text-[15px] leading-7 text-gray-700">
              If your home is already built and you are seeing problems,
              post-construction treatment is required.
            </p>

            <ul className="space-y-5 text-[15px] leading-7 text-gray-700">
              <li>
                <strong>• Process:</strong> Requires drilling through your
                flooring (tiles, marble, etc.) at the wall-floor junction
                to reach the soil beneath the slab. The chemical is injected,
                and the holes are sealed with matching cement or resin.
              </li>

              <li>
                <strong>• Advantage:</strong> The only way to stop an
                active infestation in an existing structure.
              </li>

              <li>
                <strong>• Challenge:</strong> Can be disruptive. Achieving
                a perfectly continuous barrier is harder because of existing
                walls and foundations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}