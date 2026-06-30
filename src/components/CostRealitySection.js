import {
  ShieldCheck,
  BadgeCheck,
  FlaskConical,
  Wrench,
  MapPin,
} from "lucide-react";

export default function CostRealitySection() {
  const reasons = [
    {
      icon: BadgeCheck,
      title: "Buyer/Envu Approved Chemicals:",
      text: "We use only premium, odorless, and highly effective termiticides (like Premise) that are safe for humans and pets once dry. No cheap agricultural pesticides.",
    },
    {
      icon: ShieldCheck,
      title: "Trained Technicians:",
      text: "Our team knows exactly where to drill, how deep to drill, and how to protect your expensive flooring from damage during the process.",
    },
    {
      icon: ShieldCheck,
      title: "Guaranteed Results:",
      text: "We offer comprehensive warranties on our post-construction and pre-construction treatments.",
    },
    {
      icon: FlaskConical,
      title: "Scientific Approach:",
      text: "We don't just spray randomly. We identify the termite species, locate the source, and use the exact right dosage of chemical.",
    },
    {
      icon: Wrench,
      title: "Clean Execution:",
      text: "We seal all drill holes neatly to match your floor color as closely as possible.",
    },
    {
      icon: MapPin,
      title: "Local Expertise:",
      text: "We understand Kerala's climate, soil types, and building styles better than national chains.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f7fb] py-24">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(rgba(120,120,120,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120,120,120,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <h2 className="mb-8 text-[42px] font-bold leading-tight text-[#1565ff]">
              The Real Cost Reality Check
            </h2>

            <div className="rounded-md border border-[#d9dde8] bg-white p-8">
              <p className="mb-8 text-[17px] leading-8 text-[#555]">
                Many homeowners hesitate to pay for professional termite
                treatment, opting for cheap DIY sprays instead. This is a
                costly mistake.
              </p>

              <ul className="space-y-6 text-[17px] leading-8 text-[#555]">
                <li className="flex gap-3">
                  <span className="mt-2 text-[#1565ff]">•</span>
                  <span>
                    A can of bug spray costs ₹300.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 text-[#1565ff]">•</span>
                  <span>
                    A professional termite treatment might cost between
                    ₹5,000 and ₹15,000 depending on the house size.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 text-[#1565ff]">•</span>
                  <span>
                    Replacing termite-destroyed kitchen cabinets, door
                    frames, and flooring will easily cost ₹50,000 to
                    ₹2,00,000+.
                  </span>
                </li>
              </ul>

              <p className="mt-8 text-[18px] font-semibold leading-8 text-[#1565ff]">
                Termite treatment is not an expense; it is insurance for
                your property.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="mb-8 text-[42px] font-bold leading-tight text-[#1565ff]">
              Why Homeowners Trust Kerala Pest Solutions
            </h2>

            <p className="mb-8 text-[17px] leading-8 text-[#555]">
              When you choose us, you are getting Kerala's leading pest
              management experts.
            </p>

            <div className="space-y-7">
              {reasons.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex gap-4">
                    <Icon
                      className="mt-1 flex-shrink-0 text-[#1565ff]"
                      size={22}
                      strokeWidth={2}
                    />

                    <p className="text-[17px] leading-8 text-[#555]">
                      <span className="font-semibold text-[#333]">
                        {item.title}
                      </span>{" "}
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}