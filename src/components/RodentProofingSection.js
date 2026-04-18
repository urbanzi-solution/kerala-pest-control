import Image from "next/image";

export default function RodentProofingSection() {
  return (
    <section className="bg-[#f0f2f0] py-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-sm border border-slate-100">

          {/* Left — text */}
          <div className="px-10 py-14 flex flex-col gap-6 justify-center">

            {/* Label */}
            <p className="text-[10px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
              Long-Term Solutions
            </p>

            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-extrabold text-black leading-tight">
              Why Rodent Control Without Proofing Always Fails
            </h2>

            {/* Body */}
            <div className="flex flex-col gap-5">
              <p className="text-slate-600 text-[14px] leading-relaxed">
                Rodent control that eliminates the existing population without identifying and sealing entry points is temporary. Kerala’s dense urban environment — open drainage systems, shared wall voids, and continuous urban construction — maintains constant rodent pressure from neighbouring properties. A successfully treated property that has not been proofed will be re-infested within weeks.
              </p>
              <p className="text-slate-600 text-[14px] leading-relaxed">
                This is why our programme always includes a written proofing report identifying every structural entry point, with prioritised recommendations for permanent sealing. Population control and proofing are not optional add-ons to each other — they are two halves of the same solution.

              </p>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative min-h-[420px] lg:min-h-0">
            {/*
              Replace src with your actual image e.g. /images/rodent-proofing.jpg
              Place in /public/images/
            */}
            <Image
              src="/rodent-proofing.jpg"
              alt="Red stop sign symbolizing rodent entry prevention"
              fill
              className="object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}