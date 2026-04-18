const challenges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
    title: "Climate & Geography",
    description:
      "High humidity, intense monsoon spikes, and specific laterite soil profiles create perfect breeding grounds for termites and mosquitoes in the Thiruvananthapuram district.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "Urban Development Factors",
    description:
      "Rapid construction near Technopark, shared drainage systems in older colonies, and high IT workforce transience lead to quick spread of infestations.",
  },
];

export default function TrivandrumChallenges() {
  return (
    <section className="bg-[#e8f0f8] py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why Trivandrum Faces Unique Challenges
          </h2>
          <p className="text-slate-500 text-[14px]">
            Understanding the intersection of Kerala&apos;s ecology and urban growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((item) => (
            <div
              key={item.title}
              className="bg-[#ddeef8] rounded-2xl p-8 flex gap-5 items-start border border-blue-100"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-full bg-[#cbcbcb] flex items-center justify-center shrink-0 mt-0.5">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-[15px] font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}