export default function RodentCTA() {
  return (
    <section className="bg-emerald-950 py-28 px-6 text-center relative overflow-hidden">

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,_85,_50,_0.4)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-7">

        <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
          Protect Your Property and<br />Your Compliance Record
        </h2>

        <p className="text-emerald-100/60 text-[15px] leading-relaxed max-w-lg">
          Kerala Pest Solutions provides professional, documented rodent management that safeguards
          your health, your structure, and your business reputation.
        </p>

        <button className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-[15px] px-10 py-4 rounded-xl transition-colors duration-200">
          Book Your Rodent Control Programme →
        </button>

      </div>
    </section>
  );
}