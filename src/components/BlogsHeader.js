import Link from "next/link";

export default function BlogsHeader() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('/header.jpg')",
        }}
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/20"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-6xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/90 px-6 py-2 shadow-md backdrop-blur-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB] md:text-sm">
              EVERYTHING YOU NEED TO KNOW | BY KERALA PEST SOLUTIONS
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-[42px] font-extrabold leading-tight text-[#2563EB] md:text-[72px]">
            The Complete Kerala Homeowner&apos;s Guide
            <br />
            to Termite Treatment
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white-700 md:text-2xl">
            Secure your investment against destructive subterranean threats
            with sentinel-grade protection engineered for Kerala&apos;s unique
            climate challenges.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-[#2563EB] px-10 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#1D4ED8]"
            >
              Request Free Inspection
            </Link>

            <a
              href="tel:6282651476"
              className="rounded-lg border border-gray-300 bg-white px-10 py-4 font-semibold text-[#2563EB] shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-50"
            >
              Call 6282651476
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}