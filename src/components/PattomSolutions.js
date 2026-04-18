import Image from "next/image";

const portfolio = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
    label: "Bed Bug Remediation",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    label: "Rodent Management",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    label: "Mosquito Management",
  },
];

export default function PattomSolutions() {
  return (
    <section className="bg-[#e8f0f8] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-black text-center tracking-tight mb-10">
          Specialized Solutions for Pattom
        </h2>

        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">

          {/* Termite card — dark with image overlay */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-end">
            {/* BG image */}
            <div className="absolute inset-0">
              <Image
                src="/termite-patton.jpg"
                alt="Termite close up"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-emerald-950/70" />
            </div>
            <div className="relative z-10 p-8 flex flex-col gap-4 -mt-10">
              <h3 className="text-white text-xl font-extrabold leading-snug">
                Termite Treatment in Pattom
              </h3>
              <p className="text-white text-[13px] leading-relaxed max-w-md">
              Pattom’s older independent houses are among the most termite-vulnerable properties in Trivandrum. Many were built with teak and hardwood structural elements that attract termite colonies, on laterite soil with no original soil treatment or with treatment that has long degraded. Subterranean colonies can have been active inside wall cavities and roof structures for years before any visible sign appears.
We provide full structural inspections with written reports identifying active infestation zones, mud tube pathways, and any structural damage. Post-construction soil treatment via drilling and injection creates a renewed barrier beneath and around the property. Wood treatment is applied to exposed structural timber. An AMC with annual inspection ensures the barrier is maintained.


              </p>
              <button className="self-start bg-[#3b7cff] hover:bg-[#3670e3] text-white font-bold text-[13px] px-6 py-3 rounded-xl transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Cockroach card — white */}
          <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm flex flex-col gap-4 justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-gray-50 border flex items-center justify-center mb-5 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44a23.91 23.91 0 0 0 1.153 6.06" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-xl font-extrabold mb-3">Cockroach Control</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">
               Pattom’s older drainage infrastructure provides a network through which cockroach populations move freely between adjacent properties. A treatment confined to one property’s interior is unlikely to hold long-term when the source population lives in the shared drainage system serving the street.
Our gel bait treatment eliminates the internal colony. Our structural recommendation report identifies the plumbing penetrations, drain junction gaps, and wall openings through which cockroaches are re-entering — and provides specific sealing recommendations. Addressing both the infestation and the structural entry points is essential for long-term control in an older, connected neighbourhood like Pattom.


              </p>
            </div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-black uppercase">
              Non-Toxic Gel Technology
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Mosquito card — dark green */}
          <div className="bg-[#b6b6b6] rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
            <div>
              <h3 className="text-white text-xl font-extrabold mb-4">Ant Control in Pattom</h3>
              <p className="text-white text-[13px] leading-relaxed">
               The mature gardens of Pattom’s independent houses support well-established outdoor ant colonies — black garden ants foraging from soil under paving, and carpenter ants nesting in the timber roof structures and window frames that characterise the area’s heritage properties. Carpenter ants in structural timber are a serious concern that requires prompt treatment.
Our non-repellent gel bait and perimeter spray eliminate colonies rather than relocating them. For carpenter ants in structural timber, we combine chemical treatment with a structural assessment report identifying the moisture damage or timber decay that is providing the nesting site — addressing the underlying cause, not just the symptom.


              </p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-8 h-8 rounded-lg bg-[#d1d1d1] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082" />
                </svg>
              </div>
              <p className="text-[9px] font-bold tracking-[0.2em] text-black uppercase">
                Comprehensive 3-Stage Control
              </p>
            </div>
          </div>

          {/* Full Service Portfolio */}
          <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm flex flex-col gap-5">
            <div>
              <h3 className="text-slate-900 text-[16px] font-extrabold mb-1">Full Service Portfolio</h3>
              <p className="text-slate-400 text-[12px]">Precision treatment for every Trivandrum home.</p>
            </div>
            <ul className="flex flex-col gap-3">
              {portfolio.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#c3c2c2] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-slate-700 text-[13px] font-medium">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Illustration card */}
          <div className="relative rounded-2xl overflow-hidden bg-emerald-100 min-h-[280px]">
            <Image
              src="/pattom.jpg"
              alt="Home pest control illustration"
              fill
              className="object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}