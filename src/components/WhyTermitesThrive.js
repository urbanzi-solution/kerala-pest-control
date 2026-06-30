import {
  CloudRain,
  Mountain,
  Thermometer,
} from "lucide-react";

export default function WhyTermitesThrive() {
  return (
    <section className="relative overflow-hidden bg-[#FAFBFE] py-16">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E8EDF7 1px, transparent 1px),
            linear-gradient(to bottom, #E8EDF7 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl font-extrabold text-[#1665F5] lg:text-5xl">
          Understanding the Enemy: Why Termites Thrive in Kerala
        </h2>

        {/* Intro */}
        <div className="mx-auto mt-8 max-w-5xl space-y-5 text-[17px] leading-8 text-slate-600">
          <p>
            To defeat termites, you first need to understand them. In Kerala,
            the most destructive species is the{" "}
            <span className="font-semibold text-slate-700">
              subterranean termite.
            </span>{" "}
            Unlike drywood termites which live entirely inside wood,
            subterranean termites live in enormous underground colonies and
            build mud tubes to travel above ground in search of food
            (cellulose found in wood, paper, and fabrics).
          </p>

          <p>
            Here is why Kerala's environment is the "perfect storm" for termite
            activity:
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-[#E4EAF7] bg-[#F4F7FE] p-8 shadow-sm lg:p-10">
          <div className="space-y-10">
            {/* Item 1 */}
            <div className="flex gap-5">
              <div className="mt-1">
                <CloudRain
                  className="h-8 w-8 text-[#1665F5]"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1665F5]">
                  1. The Extended Monsoon and High Humidity
                </h3>

                <p className="mt-3 text-[16px] leading-8 text-slate-600">
                  Termites need moisture to survive. Without it, their thin
                  bodies dry out and they die. Kerala experiences almost six
                  months of monsoon rains and maintains an average humidity
                  above 80% year-round. This constant moisture softens wood and
                  allows termites to operate above ground far more easily than
                  in drier climates.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-5">
              <div className="mt-1">
                <Mountain
                  className="h-8 w-8 text-[#1665F5]"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1665F5]">
                  2. Laterite and Clay Soils
                </h3>

                <p className="mt-3 text-[16px] leading-8 text-slate-600">
                  The soil composition in much of Kerala (laterite and clay)
                  holds moisture exceptionally well. This creates deep, damp,
                  and secure environments for termite queens to build massive
                  colonies, sometimes housing millions of workers, completely
                  hidden beneath your foundation.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-5">
              <div className="mt-1">
                <Thermometer
                  className="h-8 w-8 text-[#1665F5]"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1665F5]">
                  3. Warm Temperatures
                </h3>

                <p className="mt-3 text-[16px] leading-8 text-slate-600">
                  Termites are cold-blooded. In colder regions, termite activity
                  slows down during winter. In Kerala's consistent tropical
                  heat, termites eat, breed, and destroy 24 hours a day, 365
                  days a year without stopping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}