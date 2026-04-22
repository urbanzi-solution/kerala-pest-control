import Image from "next/image";

export default function KollamHero({ openPopup }) {
  return (
    <div>

      {/* ── Hero ── */}
      <section className="bg-[#f7f8f8] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div className="flex flex-col gap-6">

            {/* Badge */}
            <span className="inline-flex self-start bg-blue-100 border  text-blue-700 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full">
              KOLLAM DIVISION
            </span>

            {/* Heading */}
            <h1 className="text-4xl lg:text-5xl font-extrabold text-black leading-tight tracking-tight">
              Pest Control<br />Kollam
            </h1>

            {/* Body */}
            <p className="text-slate-600 text-[15px] leading-relaxed max-w-md">
             Kollam is Kerala’s second-largest city by population and one of the state’s most historically significant port and commercial centres. The city spans a varied landscape — from the dense residential and commercial areas of the city centre to the backwater-adjacent localities of Asramam and Thevally, the cashew processing industrial areas, and the semi-rural residential development spreading southward toward Kottarakkara and Kundara. Each environment creates distinct pest challenges.


            </p>

            {/* CTA */}
            <button 
            onClick={openPopup}
            className="self-start bg-[#3067d5] hover:bg-[#3b7cff] text-white font-bold text-[13px] px-7 py-4 rounded-xl tracking-wide transition-colors duration-200">
              [ Book Your Free Kollam Inspection → ]
            </button>
          </div>

          {/* Right — circular image + floating card */}
          <div className="relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white">
              {/*
                Replace src with /images/trivandrum-pest.jpg
              */}
              <Image
                src="/kollam-pest.jpg"
                alt="Pest control equipment Trivandrum"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Floating card */}
           

          </div>
        </div>
      </section>

      {/* ── City of Contrasts ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold text-slate-900">A City of Contrasts</h2>
            <p className="text-slate-500 text-[14px] leading-relaxed">
              Kollam is Kerala’s second-largest city by population and one of the state’s most historically significant port and commercial centres. The city spans a varied landscape — from the dense residential and commercial areas of the city centre to the backwater-adjacent localities of Asramam and Thevally, the cashew processing industrial areas, and the semi-rural residential development spreading southward toward Kottarakkara and Kundara. Each environment creates distinct pest challenges.
Kerala Pest Solutions provides professional pest management across Kollam city and district.


            </p>
          </div>

          {/* Right — dark challenges card */}
          <div className="bg-[#3b7cff] rounded-2xl p-7 flex flex-col gap-5">
            <h3 className="text-white font-extrabold text-[16px]">Localized Challenges</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                <p className="text-white text-[13px] leading-relaxed">
                  Termite risks in Kundara&apos;s heritage timber.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44a23.91 23.91 0 0 0 1.153 6.06" />
                </svg>
                <p className="text-white text-[13px] leading-relaxed">
                  Cockroach migration in Kottarakkara high-rises.
                </p>
              </li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}