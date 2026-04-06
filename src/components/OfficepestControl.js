import Image from "next/image";

export default function OfficepestControl() {
  return (
    <div>

      

      {/* Divider */}
      <div className="border-t border-slate-100 mx-6 lg:mx-20" />

      {/* ── Is It Safe for My Family? ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left */}
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
             Pest Control for IT Parks and Large Campuses
            </h2>

            <p className="text-slate-500 text-[14px] leading-relaxed">
             Large IT campuses such as those in Technopark and Kazhakootam in Trivandrum present specific pest management challenges due to their scale, multiple canteen facilities, large landscaped grounds, and the density of employees creating continuous pest pressure. Kerala Pest Solutions provides campus-wide pest management contracts covering all buildings, canteen facilities, and external grounds with a consolidated service log and a single point of contact for the facilities management team.
            </p>

            {/* Botanical option card */}
           
          </div>

          {/* Right — two images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md">
              <Image
                src="/Of-safe.jpg"
                alt="Child and pet safe environment"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md mt-8">
              <Image
                src="/office-safe.jpg"
                alt="Professional pest control technician"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}