import Image from "next/image";

export default function CockroachHero() {
  return (
    <section className="bg-[#f0f2f3] py-20 px-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <div className="flex flex-col gap-6">

          {/* Label */}
          <p className="text-[10px] font-bold tracking-[0.25em] text-[#3b7cff] uppercase">
            Clinical Grade Protection
          </p>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-black leading-tight tracking-tight">
            Cockroach Pest<br />Control Kerala
          </h1>

          {/* Body */}
          <p className="text-slate-600 text-[15px] leading-relaxed">
          Cockroaches are the most common and medically significant pest in Kerala homes, restaurants, and commercial kitchens. They move freely between drains, waste areas, and food preparation surfaces, contaminating everything they contact. A single German cockroach carries thousands of bacteria on its body. Their droppings and shed skins are well-documented triggers for asthma and allergic reactions, particularly in children. In Kerala’s warm, humid conditions, a population of ten cockroaches can exceed ten thousand individuals within six months.

          </p>
            <p className="text-slate-600 text-[15px] leading-relaxed">
              Kerala Pest Solutions provides targeted, lasting cockroach control using gel bait treatment — the professional standard for colony elimination. Our treatment reaches the harborage sites where cockroaches actually live, not just the surfaces where they forage.
</p>
          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button className="bg-[#3b7cff] hover:bg-[#4c86fb] text-white font-bold text-[14px] px-7 py-4 rounded-xl transition-colors duration-200">
              Request Free Inspection
            </button>
            <div className="flex items-center gap-2 text-slate-500 text-[13px]">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#3b7cff] shrink-0" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Free inspection across Trivandrum and Kollam
            </div>
          </div>
        </div>

        {/* Right — image + floating card */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
            {/*
              Replace src with your actual image e.g. /images/general-pest-technician.jpg
              Place in /public/images/
            */}
            <Image
              src="/cockroach.jpg"
              alt="cockroach"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Floating IPM card */}
          <div className="absolute bottom-4 left-4 bg-white rounded-2xl shadow-xl p-5 max-w-[260px] border border-slate-100">
            <p className="text-[9px] font-bold tracking-[0.2em] text-[#3b7cff] uppercase mb-2">
              The IPM Framework
            </p>
            <p className="text-slate-500 text-[12px] leading-relaxed">
              We combine targeted gel baiting, residual barrier sprays, and environmental advice to
              eliminate pests at the root cause, rather than just treating symptoms.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}