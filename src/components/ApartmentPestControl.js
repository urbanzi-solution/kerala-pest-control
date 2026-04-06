import Image from "next/image";

export default function ApartmentPestControl() {
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
             For Individual Flat Owners
            </h2>

            <p className="text-slate-500 text-[14px] leading-relaxed">
             If your housing society does not have a building-wide pest contract, we can treat your individual flat for cockroaches, ants, bed bugs, and general pest control. We will be direct with you about what this can achieve: individual flat treatment significantly reduces pest pressure within your flat, but re-infestation from shared drainage is likely without a building-wide programme. We provide a written recommendation to the society committee to consider a building-wide contract, which you can share with your committee if you choose.
            </p>

            {/* Botanical option card */}
           
          </div>
<div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md">
              <Image
                src="/APp-safe.jpg"
                alt="Child and pet safe environment"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md mt-8">
              <Image
                src="/APPARt-safe.jpg"
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