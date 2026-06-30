export default function TermiteTreatmentDuration() {
  return (
    <section className="bg-[#f7f7fb] py-24">
      <div className="mx-auto max-w-6xl px-8">
        {/* Heading */}
        <h2 className="mb-8 text-center text-[40px] font-bold text-[#1463ff]">
          How Long Does Termite Treatment Last?
        </h2>

        {/* Introduction */}
        <p className="mb-10 text-[17px] leading-8 text-[#3f3f46]">
          This is the most common question we get. The honest answer:
          <span className="font-semibold">
            {" "}
            It depends, but generally 3 to 5 years for post-construction
            treatments in Kerala.
          </span>
        </p>

        <p className="mb-14 text-[17px] leading-8 text-[#3f3f46]">
          Unlike regular pest control for cockroaches (which might last
          months), termite treatments are meant to be long-term barriers.
          However, the heavy rains in Kerala can eventually dilute the
          chemical barrier in the soil over many years.
        </p>

        {/* Sub Heading */}
        <h3 className="mb-6 text-[24px] font-bold text-[#1463ff]">
          Why Termites Might Return:
        </h3>

        {/* Bullet List */}
        <ul className="space-y-5 text-[17px] leading-8 text-[#3f3f46]">
          <li className="flex items-start">
            <span className="mr-3 mt-2 text-[#ff8b61]">•</span>
            <span>
              <strong>Barrier Disruption:</strong> If you do landscaping,
              dig trenches for plumbing, or add an extension to your house,
              you break the chemical barrier in the soil.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 mt-2 text-[#ff8b61]">•</span>
            <span>
              <strong>Plumbing Leaks:</strong> Constant water leaking into
              the soil from a broken pipe washes away the termiticide.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 mt-2 text-[#ff8b61]">•</span>
            <span>
              <strong>Bridging:</strong> Termites can build mud tubes over
              the treated soil if they find a gap, such as a crack in the
              foundation.
            </span>
          </li>
        </ul>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-[18px] font-semibold text-[#1463ff]">
            This is why annual inspections are highly recommended even after
            treatment.
          </p>
        </div>
      </div>
    </section>
  );
}