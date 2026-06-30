import Image from "next/image";

export default function WarningSigns() {
  const signs = [
    {
      title: "Mud Tubes on Walls or Foundation:",
      text: "These pencil-sized tunnels made of soil and termite saliva allow them to travel safely from the ground to your wood.",
    },
    {
      title: "Hollow-Sounding Wood:",
      text: "Tap your door frames, window sills, and skirting boards with a screwdriver handle. If it sounds hollow or papery, termites may have hollowed it out.",
    },
    {
      title: "Bubbling or Peeling Paint:",
      text: "Often mistaken for water damage, termites feed just under the surface of the paint, causing it to bubble or blister.",
    },
    {
      title: "Discarded Wings:",
      text: "After a heavy rain (especially near light sources at night), reproductive termites 'swarm' to start new colonies. They shed their wings once they find a mate.",
    },
    {
      title: "Frass (Termite Droppings):",
      text: "Drywood termites leave tiny, wood-colored pellets that look like small piles of sawdust or coffee grounds near wooden furniture.",
    },
    {
      title: "Sagging Floors or Hard-to-Open Doors:",
      text: "As termites eat the structural supports or door frames, the wood warps, making doors and windows stick.",
    },
  ];

  return (
    <section className="bg-[#f7f7fb] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <h2 className="mb-14 text-center text-3xl font-bold text-[#1565ff] md:text-4xl lg:text-[42px]">
          Warning Signs: Is Your Home Under Attack?
        </h2>

        {/* Main Layout */}
        <div className="grid items-center gap-20 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Side */}
          <div>
            <p className="mb-10 text-[17px] leading-8 text-gray-600">
              Termites are notoriously stealthy. Because they eat wood from
              the inside out, extensive damage is often done before the
              homeowner even realizes there is a problem. Look out for these
              early warning signs:
            </p>

            <div className="space-y-7">
              {signs.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Warning Icon */}
                  <svg
                    className="mt-1 h-6 w-6 flex-shrink-0 text-[#ff8b7b]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 3L2 21h20L12 3z" />
                    <path d="M12 9v5" />
                    <circle cx="12" cy="17" r="1" fill="currentColor" />
                  </svg>

                  <div>
                    <h3 className="text-[19px] font-bold text-gray-800">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[16px] leading-7 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">
              <div className="relative h-[470px] overflow-hidden rounded-xl">
                <Image
                  src="/header.jpg"
                  alt="Warning Signs"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}