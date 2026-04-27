import Image from "next/image";

const foodFeatures = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "Audit-Ready File",
    description: "We provide the specific pest control logs and data sheets required for health and safety inspections.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Rapid Response",
    description: "Emergency priority call-outs for any rodent sighting in food preparation or storage areas.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "Trend Analysis",
    description: "Detailed reports showing activity patterns to help identify and stop risks before they become infestations.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "IPM Compliance",
    description: "Strict adherence to Integrated Pest Management as required by high-standard commercial food audits.",
  },
];

const preventionItems = [
  "Seal all gaps and holes larger than 6mm (pencil width)",
  "Install metal kick plates on the base of external doors",
  "Use heavy-duty mesh or metal drain covers for all waste lines",
  "Store all dry food in sealed, rodent-proof containers",
  "Clear perimeter vegetation and debris to remove hiding spots",
];

export default function RestaurantRodentSection() {
  return (
    <div>

      {/* ── For Restaurants & Food Businesses ── */}
      <section className="bg-[#eaf0ea] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div className="flex flex-col gap-6">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 self-start bg-red-50 border border-red-200 text-red-600 text-[10px] font-bold tracking-[0.18em] uppercase px-4 py-2 rounded-full">
              <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
              FSSAI Compliance Critical
            </span>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-black leading-tight">
              For Restaurants &<br />Food Businesses
            </h2>

            <p className="text-slate-600 text-[14px] leading-relaxed">
              Any evidence of rodent activity is a{" "}
              <strong className="text-slate-800">critical non-compliance</strong> under FSSAI
              regulations, potentially leading to immediate closure, heavy fines, and loss of
              reputation.
            </p>

            {/* Features 2x2 */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {foodFeatures.map((f) => (
                <div key={f.title} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-slate-800 text-[12px] font-bold mb-0.5">{f.title}</p>
                    <p className="text-slate-500 text-[11px] leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — kitchen image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
            {/*
              Replace src with your actual image e.g. /images/restaurant-kitchen.jpg
              Place in /public/images/
            */}
            <Image
              src="/restaurant-kitchen.webp"
              alt="Commercial restaurant kitchen"
              fill
              loading="lazy"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ── Prevention + Safety Protocols ── */}
      <section className="bg-[#eaf0ea] pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Prevention card — white */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm relative overflow-hidden">

            {/* Decorative watermark */}
            <svg viewBox="0 0 24 24" fill="none" className="absolute right-4 top-4 w-20 h-20 text-slate-100" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>

            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Prevention: What Matters Most</h3>
            </div>

            <ul className="flex flex-col divide-y divide-slate-100">
              {preventionItems.map((item, i) => (
                <li key={i} className="flex items-center justify-between py-3.5 gap-4">
                  <p className="text-slate-600 text-[13px] leading-relaxed">{item}</p>
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black shrink-0" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety Protocols card — dark */}
          <div className="bg-[#f8f8f8] rounded-2xl p-8 flex flex-col gap-7">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="text-lg font-extrabold text-black">Safety Protocols</h3>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-black uppercase mb-2">
                  Tamper-Resistance
                </p>
                <p className="text-black text-[13px] leading-relaxed">
                  All active treatments are housed in locked, industrial-grade stations that prevent
                  access by children and pets.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-black uppercase mb-2">
                  Strategic Placement
                </p>
                <p className="text-black text-[13px] leading-relaxed">
                  Stations are placed in unreachable or hidden locations, away from common foot
                  traffic, ensuring they remain undisturbed.
                </p>
              </div>
            </div>

            {/* Safety warning */}
            <div className="bg-[#3b7cff] rounded-xl p-4 border  mt-auto">
              <p className="text-white text-[11px] leading-relaxed italic">
                <strong className="not-italic text-white">Safety Warning:</strong> In case of
                accidental access or ingestion by humans or pets, please contact your local physician
                or veterinarian immediately and provide the specific product labels found in your
                provided service file.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}