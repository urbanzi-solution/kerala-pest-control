export default function FurnitureProtection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7fb] py-24">
      {/* Background Grid */}
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
        {/* Heading */}
        <h2 className="mb-10 text-center text-[42px] font-bold text-[#1565ff]">
          How to Protect Wooden Furniture from Termites in Kerala
        </h2>

        {/* Intro */}
        <p className="mb-12 text-[18px] leading-8 text-[#404040]">
          Kerala is famous for its beautiful teak and rosewood furniture.
          While these hard woods are naturally resistant, they are not
          immune. Softer woods (like plywood used in modern wardrobes) are
          highly vulnerable.
        </p>

        {/* Point 1 */}
        <div className="mb-10">
          <h3 className="mb-3 text-[28px] font-bold text-[#1565ff]">
            1. Move Furniture Away from Walls
          </h3>

          <p className="text-[18px] leading-8 text-[#404040]">
            Subterranean termites usually enter furniture through the
            walls. Keep beds, wardrobes, and sofas at least 2-3 inches
            away from the wall to prevent direct contact.
          </p>
        </div>

        {/* Point 2 */}
        <div className="mb-10">
          <h3 className="mb-3 text-[28px] font-bold text-[#1565ff]">
            2. Ensure Cross Ventilation
          </h3>

          <p className="text-[18px] leading-8 text-[#404040]">
            During the monsoon, close your windows during heavy rain, but
            open them when the sun is out. Damp, stagnant air encourages
            termite activity. Sun exposure is a natural termite deterrent.
          </p>
        </div>

        {/* Point 3 */}
        <div className="mb-10">
          <h3 className="mb-3 text-[28px] font-bold text-[#1565ff]">
            3. Seal and Polish
          </h3>

          <p className="text-[18px] leading-8 text-[#404040]">
            Termites prefer raw, untreated wood. Applying a good quality
            wood polish, varnish, or paint creates a hard outer shell that
            deters drywood termites.
          </p>
        </div>

        {/* Point 4 */}
        <div className="mb-14">
          <h3 className="mb-3 text-[28px] font-bold text-[#1565ff]">
            4. Watch for Early Signs
          </h3>

          <p className="text-[18px] leading-8 text-[#404040]">
            If you see a sudden pile of what looks like coffee grounds or
            sand near your wooden almirah, don't sweep it away—call an
            expert. That is drywood termite frass.
          </p>
        </div>

        {/* Warning Box */}
        <div className="rounded-md border border-[#ffd1d1] bg-[#fff5f5] p-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-2xl text-[#ff8d8d]">⚠</span>

            <h4 className="text-xl font-bold text-[#ff8d8d]">
              Important Note on Storage:
            </h4>
          </div>

          <p className="text-[18px] leading-8 text-[#404040]">
            Never store old cardboard boxes, stacks of newspapers, or
            scrap lumber directly on the floor, especially in dark store
            rooms. This is a five-star buffet for termites.
          </p>
        </div>
      </div>
    </section>
  );
}