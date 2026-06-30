import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function FinalCTA() {
  const steps = [
    "Call or WhatsApp us to arrange a free inspection at your home.",
    "Our professional technician will come to your property, inspect all areas, and provide you with a clear evaluation.",
    "We provide you with an easy-to-understand treatment plan and a set quote — no pressure, no commitments.",
    "Treatment is performed by trained professionals using safe, approved chemicals.",
    "You get a service certificate and warranty documentation.",
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

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Intro */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-[#1565ff] md:text-5xl">
            Is Your House at Risk?
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-8 text-gray-600">
            Protect your home, your family, and everything you love.
            Whether you are building a new home, living in an older
            property, or simply want complete peace of mind, Kerala Pest
            Solutions is here to help.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-10 shadow-sm">
          <h3 className="mb-10 text-center text-3xl font-bold text-[#1565ff]">
            What You Should Do Next
          </h3>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-5"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#1565ff] text-lg font-bold text-white">
                  {index + 1}
                </div>

                <div className="pt-1">
                  <p className="text-[17px] leading-8 text-gray-700">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-12 border-t border-gray-200"></div>

          {/* Contact */}
          <h3 className="mb-8 text-center text-3xl font-bold text-[#1565ff]">
            Contact Kerala Pest Solutions Today
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-[#f9fbff] p-5">
              <Phone className="text-[#1565ff]" size={28} />

              <div>
                <p className="font-semibold text-gray-800">
                  Call / WhatsApp
                </p>

                <p className="text-gray-600">
                  6282651476
                </p>

                <p className="text-gray-600">
                  9074368674
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-[#f9fbff] p-5">
              <Mail className="text-[#1565ff]" size={28} />

              <div>
                <p className="font-semibold text-gray-800">
                  Email
                </p>

                <p className="break-all text-gray-600">
                  keralapestcontrolinfo@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-[#f9fbff] p-5">
              <MapPin className="text-[#1565ff]" size={28} />

              <div>
                <p className="font-semibold text-gray-800">
                  Office
                </p>

                <p className="text-gray-600">
                  Karamana, Trivandrum
                </p>

                <p className="text-gray-600">
                  Serving Trivandrum & Kollam
                </p>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-14 rounded-xl bg-[#1565ff] px-8 py-10 text-center text-white">
            <CheckCircle
              className="mx-auto mb-5"
              size={48}
            />

            <h3 className="mb-4 text-3xl font-bold">
              Protect Your Most Valuable Asset
            </h3>

            <p className="mx-auto max-w-4xl text-lg leading-8 text-blue-100">
              Your home is your most valuable asset. Don't let termites
              take that away from you. We are experienced, certified,
              and genuinely committed to protecting your home the right
              way.
            </p>

            <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#1565ff] transition hover:scale-105">
              Contact Us Today
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}