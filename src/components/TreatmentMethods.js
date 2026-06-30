import Image from "next/image";

export default function TreatmentMethods() {
  return (
    <section className="relative overflow-hidden bg-[#f8f9fc] py-16">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right,#e8edf6 1px,transparent 1px),
            linear-gradient(to bottom,#e8edf6 1px,transparent 1px)
          `,
          backgroundSize: "34px 34px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}
        <h2 className="text-center text-[32px] font-extrabold text-[#1565F7]">
          The 4 Core Termite Treatment Methods
        </h2>

        <p className="mx-auto mt-4 max-w-4xl text-center text-[15px] leading-7 text-slate-500">
          There is no one-size-fits-all solution for termites. Depending on
          whether your home is under construction, already built, or actively
          infested, we create a customized treatment plan.
        </p>

        {/* Card 1 */}
        <div className="mt-12 rounded-sm border border-[#dbe4f3] bg-[#f7f9fd] p-6">

          <div className="grid items-center gap-8 md:grid-cols-2">

            <div>

              <h3 className="text-[18px] font-bold text-[#1565F7]">
                1. The Chemical Barrier Method (Drill-Fill-Seal)
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                This is the most common and effective method for existing homes.
                The goal is to create an invisible chemical wall around your
                home's foundation.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-5 text-[15px] leading-7 text-slate-600">
                <li>
                  We drill holes every 12–18 inches around the perimeter.
                </li>

                <li>
                  Professional termiticide is injected deep into the soil.
                </li>

                <li>
                  Holes are sealed with matching cement after treatment.
                </li>

                <li>
                  Creates a continuous protective barrier.
                </li>

                <li>
                  Best solution for existing buildings.
                </li>
              </ul>

            </div>

            <div>

              <Image
                src="/chemical.jpeg"
                alt="Chemical Barrier"
                width={650}
                height={400}
                className="w-full rounded-sm border border-slate-300 object-cover"
              />

            </div>

          </div>

        </div>

        {/* Card 2 */}

        <div className="mt-8 rounded-sm border border-[#dbe4f3] bg-[#f7f9fd] p-6">

          <div className="grid items-center gap-8 md:grid-cols-2">

            <div>

              <Image
                src="/baiting.avif"
                alt="Baiting"
                width={650}
                height={420}
                className="w-full rounded-sm border border-slate-300 object-cover"
              />

            </div>

            <div>

              <h3 className="text-[18px] font-bold text-[#1565F7]">
                2. Termite Baiting Systems
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Rather than creating a barrier, bait stations eliminate the
                colony itself.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-5 text-[15px] leading-7 text-slate-600">
                <li>Bait stations are installed around your property.</li>

                <li>Workers feed on bait and return to the colony.</li>

                <li>The slow-acting bait spreads to the queen.</li>

                <li>The entire colony gradually collapses.</li>

                <li>Excellent for environmentally sensitive locations.</li>
              </ul>

            </div>

          </div>

        </div>

        {/* Card 3 */}

        <div className="mt-8 rounded-sm border border-[#dbe4f3] bg-[#f7f9fd] p-6">

          <div className="grid items-center gap-8 md:grid-cols-2">

            <div>

              <h3 className="text-[18px] font-bold text-[#1565F7]">
                3. Wood Treatment
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Direct treatment of wooden structures to prevent termite attack
                and eliminate infestations already present.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-5 text-[15px] leading-7 text-slate-600">
                <li>Surface spraying and brushing.</li>

                <li>Deep penetration into timber.</li>

                <li>Protects furniture, doors and frames.</li>

                <li>Ideal before painting or polishing.</li>

                <li>Long-lasting wood protection.</li>
              </ul>

            </div>

            <div>

              <Image
                src="/wood.jpg"
                alt="Wood Treatment"
                width={650}
                height={400}
                className="w-full rounded-sm border border-slate-300 object-cover"
              />

            </div>

          </div>

        </div>

        {/* Card 4 */}

        <div className="mt-8 rounded-sm border border-[#dbe4f3] bg-[#f7f9fd] p-6">

          <h3 className="text-[18px] font-bold text-[#1565F7]">
            4. Anti-Termite Spray (Spot Treatment)
          </h3>

          <p className="mt-5 text-[15px] leading-7 text-slate-600">
            For minor, localized infestations where termites are visible, a
            direct spot treatment can immediately eliminate active insects.
            While effective for isolated cases, it should not be considered a
            complete solution for subterranean termite colonies hidden beneath
            the ground.
          </p>

        </div>

      </div>
    </section>
  );
}