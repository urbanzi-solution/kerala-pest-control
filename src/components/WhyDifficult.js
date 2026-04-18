const factors = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 1 7.107 9.877 7.5 7.5 0 0 1-14.785-2.377C4.5 6.505 7.875 3 12 3z" />
      </svg>
    ),
    title: "Egg Immunity",
    description:
      " Bed bug eggs are cemented to surfaces and are unaffected by most contact insecticides. Effective treatment must address eggs through steam or through residuals that remain active long enough to kill newly hatched nymphs.",
    tag: {
      label: "10-14 Day Hatch Cycle",
      color: "text-red-700",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-red-600" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
      ),
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Insecticide Resistance",
    description:
      " Bed bug populations have developed significant resistance to pyrethroids — the active ingredient in most DIY sprays. Professional formulations rotate active ingredients to overcome this resistance.",
    tag: {
      label: "IPM Certified Formulations",
      color: "text-black",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-black" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "Harborage Depth",
    description:
      "Bed bugs live in seams, inside headboards, behind wallpaper, under carpet edges, and inside electrical sockets. A surface spray kills a fraction of the population and leaves the colony largely intact.",
    tag: {
      label: "Structural Penetration",
      color: "text-black",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-black" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
        </svg>
      ),
    },
  },
];

export default function WhyDifficult() {
  return (
    <section className="bg-[#ebefeb] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-black tracking-tight mb-5">
            Why Bed Bugs Are Difficult to Eliminate
          </h2>
          <p className="text-slate-500 text-[15px] max-w-xl mx-auto leading-relaxed">
            Standard pest control often fails because bed bugs are biologically engineered
            for survival. We address the three critical factors that make them so resilient.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {factors.map((factor) => (
            <div
              key={factor.title}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between gap-8"
            >
              {/* Top */}
              <div className="flex flex-col gap-6">
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  {factor.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{factor.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed">{factor.description}</p>
                </div>
              </div>

              {/* Bottom tag */}
              <div className={`flex items-center gap-2 ${factor.tag.color}`}>
                {factor.tag.icon}
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase">
                  {factor.tag.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}