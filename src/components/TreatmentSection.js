export default function TreatmentSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7fb] py-24">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(rgba(90,90,90,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(90,90,90,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <h2 className="mb-10 text-center text-[38px] font-bold tracking-tight text-[#1463ff]">
          Which Treatment is Right for You?
        </h2>

        {/* Main Card */}
        <div className="overflow-hidden rounded-lg border border-[#e6e8ef] bg-white shadow-sm">
          {/* Top */}
          <div className="grid md:grid-cols-2">
            {/* Left */}
            <div className="p-10">
              <h3 className="mb-5 text-[20px] font-bold leading-snug text-[#1463ff]">
                If you are building a new house:
              </h3>

              <p className="text-[17px] leading-8 text-[#4b5563]">
                Install comprehensive Pre-Construction Soil Treatment.
                Also, consider installing a reticulation system (a network
                of pipes laid under the foundation that allows for easy
                re-injection of chemicals years later without drilling).
              </p>
            </div>

            {/* Right */}
            <div className="border-l border-[#eceef4] p-10">
              <h3 className="mb-5 text-[20px] font-bold leading-snug text-[#1463ff]">
                If you live in an already built house with active termites:
              </h3>

              <p className="text-[17px] leading-8 text-[#4b5563]">
                You need the Chemical Barrier Method
                (Post-Construction Drill &amp; Fill). This is the fastest
                way to stop structural damage.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#eceef4]" />

          {/* Bottom */}
          <div className="p-10">
            <h3 className="mb-5 text-[20px] font-bold text-[#1463ff]">
              If you have valuable wooden furniture being attacked:
            </h3>

            <p className="max-w-5xl text-[17px] leading-8 text-[#4b5563]">
              You need targeted Wood Treatment. The infested wood should
              be injected, and all other furniture should be polished or
              sealed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}