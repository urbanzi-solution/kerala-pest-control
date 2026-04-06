const pests = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-7 text-emerald-700" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    ),
    title: "Termite Risk in Kerala Homes",
    body1:
      "Independent homes and villas in Kerala face the highest termite risk of any property type. Direct soil contact at the foundation, timber used in roof structures, window frames, door frames, and staircases, and the mature gardens that surround most independent properties all create ideal conditions for subterranean termite colonies. Many older homes were built before pre-construction termite treatment was standard practice, and any original soil barrier treatment will have degraded over years or decades.Kerala Pest Solutions provides post-construction soil treatment via drilling and injection, wood treatment for exposed structural timbers, and in-ground baiting systems. Every termite job begins with a written structural inspection report identifying active infestation, damage zones, and mud tube pathways.",
   
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-7 text-emerald-700" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
    title: "Rodent Control for Homes",
    body1:
      ".Homes with gardens, proximity to open land, or older construction with structural gaps are at ongoing risk of rodent entry. Rats cause electrical fires by gnawing wiring, contaminate food, and carry serious diseases. Our residential rodent programme combines tamper-resistant bait stations, strategic trapping where needed, and a written proofing report identifying every entry point that requires sealing.",
    
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-7 text-emerald-700" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    title: "General Pest Control and AMC",
    body1:
      "For broad-spectrum protection against cockroaches, ants, silverfish, centipedes, and other crawling pests, our General Pest Control service provides a comprehensive IPM treatment. The most cost-effective option for ongoing protection is a quarterly Annual Maintenance Contract (AMC), which replenishes barriers before they degrade and catches new infestations before they establish.",
  },
];

export default function ResidentialHighestRiskPests() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3">
           Pest Control for Independent Houses and Villas
          </h2>
         
        </div>

        {/* Divider */}
        <div className="border-t border-slate-100 mb-10" />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
          {pests.map((pest) => (
            <div
              key={pest.title}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-100 flex flex-col gap-5"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                {pest.icon}
              </div>

              {/* Title */}
              <h3 className="text-[16px] font-extrabold text-emerald-900">{pest.title}</h3>

              {/* Body */}
              <div className="flex flex-col gap-4">
                <p className="text-slate-500 text-[13px] leading-relaxed">{pest.body1}</p>
                <p className="text-slate-500 text-[13px] leading-relaxed">{pest.body2}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}