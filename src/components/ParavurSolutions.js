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
    label: "Cockroach Control",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    label: "Ant Control Solutions",
  },
];

export default function ParavurSolutions() {
  return (
    <section className="bg-[#e8f0f8] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-black text-center tracking-tight mb-10">
          Specialized Solutions for Paravur
        </h2>

        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">

          {/* Termite card — dark with image overlay */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-end">
            {/* BG image */}
            <div className="absolute inset-0">
              <Image
                src="/termite-paraa.jpg"
                alt="Termite close up"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-emerald-950/70" />
            </div>
            <div className="relative z-10 p-8 flex flex-col gap-4 -mt-10">
              <h3 className="text-white text-xl font-extrabold leading-snug">
             Termite Treatment in Paravur
              </h3>
              <p className="text-white text-[13px] leading-relaxed max-w-md">
             Paravur’s lakeshore humidity and the town’s older timber-framed residential and commercial properties create elevated termite risk. The high moisture content in soil near the lake accelerates subterranean termite colony activity and increases the rate of structural damage once a colony establishes.
We provide full structural inspections, post-construction soil treatment, and wood treatment for exposed timber. For new builds near the lake, pre-construction treatment is especially important given the elevated soil moisture and colony density.


              </p>
              <button className="self-start bg-[#3b7cff] hover:bg-[#3875f1] text-white font-bold text-[13px] px-6 py-3 rounded-xl transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Cockroach card — white */}
          <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm flex flex-col gap-4 justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#dedfe3] border  flex items-center justify-center mb-5 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44a23.91 23.91 0 0 0 1.153 6.06" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-xl font-extrabold mb-3">Rodent Control in Paravur</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">
           Paravur’s fishing community infrastructure, fish processing operations, and waterfront market create significant rodent pressure that affects adjacent residential and commercial properties. The Norway rat, which burrows and thrives near water, is prevalent in the lakeside and waterfront areas of the town.
Our programme deploys bait stations on confirmed run pathways and treats garden burrows where present. The proofing report identifies all structural entry points. For properties near the waterfront or fish market, a quarterly AMC is recommended to manage the ongoing outdoor rodent pressure.

              </p>
            </div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-emerald-600 uppercase">
              Non-Toxic Gel Technology
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Mosquito card — dark green */}
          <div className="bg-[#3b7cff] rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
            <div>
              <h3 className="text-white text-xl font-extrabold mb-4">Mosquito Management in Paravur</h3>
              <p className="text-white text-[13px] leading-relaxed">
           Paravur’s position on Ashtamudi Lake creates one of the most challenging mosquito management environments in Kollam district. The lake and its associated backwaters, reed beds, and tidal areas provide ideal Anopheles mosquito breeding habitat year-round. Aedes mosquitoes breed in the town’s residential water collections, making Paravur a dual-vector risk environment.
Our programme begins with a source reduction audit identifying all controllable breeding sites on the property and in adjacent areas. Larviciding treats all water bodies on the property. ULV fogging provides adult knockdown.


              </p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-8 h-8 rounded-lg bg-[#dedfe1] flex items-center justify-center shrink-0">
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
              <p className="text-slate-400 text-[12px]">Precision treatment for every Kollam home.</p>
            </div>
            <ul className="flex flex-col gap-3">
              {portfolio.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#d6d7d8] flex items-center justify-center shrink-0">
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
              src="/home-paravur.png"
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