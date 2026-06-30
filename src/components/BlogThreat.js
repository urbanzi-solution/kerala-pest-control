import Image from "next/image";
import { Flame } from "lucide-react";

export default function BlogThreat() {
  return (
    <section className="bg-[#F6F8FC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <div className="flex items-center gap-6">
              <Flame
                size={54}
                strokeWidth={2}
                className="flex-shrink-0 text-[#FF7B72]"
              />

              <h2 className="text-4xl font-bold leading-tight text-[#1565F5] md:text-6xl">
                The Threat: Why Kerala is a
                <br />
                Termite Hotspot
              </h2>
            </div>

            <div className="mt-12 space-y-8 text-[21px] leading-[44px] text-gray-600">
              <p>
                Living in Kerala means enjoying lush greenery and beautiful
                monsoons. But this very climate creates a hidden nightmare for
                homeowners: termites. The combination of high humidity, heavy
                rainfall, and warm temperatures makes Kerala the perfect
                breeding ground for subterranean termites.
              </p>

              <p>
                If you've noticed mud tubes on your walls, hollow-sounding
                door frames, discarded wings near your windows, or damaged
                wooden furniture, you're not alone. This guide explains
                everything homeowners in Kerala need to know before termites
                destroy their investment.
              </p>

              <p>
                Learn why termites thrive in Kerala, how to identify early
                warning signs, and the most effective treatment methods
                available today. Whether you're building a new home or
                protecting an existing one, this guide will help you make
                informed decisions.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center pt-10 lg:pt-16">
            <Image
              src="/termite.webp"
              alt="Termite Treatment"
              width={720}
              height={520}
              priority
              className="h-[440px] w-full max-w-[680px] rounded-3xl object-cover shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}