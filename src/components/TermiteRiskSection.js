import Image from "next/image";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-red-500" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
    title: "Invisible Destruction",
    description:
      "Termites can bypass concrete slabs through structural cracks as thin as 1/32nd of an inch, remaining undetected for years while consuming structural timber.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-slate-500" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Moisture Trap",
    description:
      "Tropical rains trap moisture beneath foundations, creating a permanent breeding environment for subterranean colonies regardless of surface weather.",
  },
];

export default function TermiteRiskSection() {
  return (
    <section className="bg-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left — Image card */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0 shadow-2xl">
            <Image
              src="/termite-damage.webp"
              alt="Termite-damaged wood sample showing structural damage"
              fill
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-amber-800/20 to-transparent" />

            {/* Humidity badge */}
            <div className="absolute bottom-5 left-5 bg-white rounded-xl px-5 py-4 shadow-lg">
              <p className="text-3xl font-bold text-slate-900 leading-none">70%+</p>
              <p className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase mt-1">
                Average Humidity in Kerala
              </p>
            </div>
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex flex-col gap-6">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-400 uppercase">
            Environmental Context
          </p>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-black leading-tight">
            Why Termite Risk Is Exceptionally High in Kerala
          </h2>

          <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
            <p>
              Kerala&apos;s unique tropical climate is a paradise for{" "}
              <em className="font-semibold text-slate-800">Coptotermes gestroi</em>, the Asian
              subterranean termite. With relative humidity consistently above 70%, your property&apos;s
              foundation becomes an ideal nesting ground.
            </p>
            <p>
              The state&apos;s red laterite soil and abundant monsoon rains create the perfect
              subterranean highway. Termites build complex mud tubes to traverse foundations, often
              remaining undetected behind paint or wooden panels until structural failure occurs.
              Monsoon saturation creates permanent moisture reservoirs under building foundations,
              accelerating colony growth cycles.
            </p>
          </div>

          {/* Feature cards */}
          <div className="flex flex-col gap-4 mt-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 items-start bg-slate-50 border border-slate-100 rounded-xl px-5 py-4"
              >
                <div className="mt-0.5 shrink-0 bg-white rounded-lg p-2 shadow-sm border border-slate-100">
                  {feature.icon}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{feature.title}</p>
                  <p className="text-slate-500 text-[13px] leading-relaxed mt-0.5">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}