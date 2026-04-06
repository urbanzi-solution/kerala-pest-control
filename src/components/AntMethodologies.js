import Image from "next/image";

const methodologies = [
  {
    image: "/gel-bait.jpg",
    title: "Non-Repellent Gel Bait",
    description:
      "Small dots of non-repellent gel bait are placed along foraging trails. Workers share it through trophallaxis, eliminating the queen over 7–14 days. Odourless and safe in food prep areas.",
  },
  {
    image: "/perimeter-spray.jpg",
    title: "Perimeter Shielding",
    description:
      "For outdoor ant control, we apply a non-repellent residual spray. Ants carry the active ingredient back to the nest, preventing new foraging routes.",
  },
  {
    image: "/direct-treatment.jpg",
    title: "Direct Nest Treatment",
    description:
      "Where nests are accessible in soil or under paving, we apply a direct drench for immediate colony elimination. Primary for fire ant mounds.",
  },
];

export default function AntMethodologies() {
  return (
    <section className="bg-[#f0f2f0] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-emerald-900 text-center tracking-tight mb-14">
          Applied Methodologies
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methodologies.map((method) => (
            <div key={method.title} className="flex flex-col gap-4">

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
                {/*
                  Replace each src with your actual image paths e.g.:
                  /images/gel-bait.jpg
                  /images/perimeter-spray.jpg
                  /images/direct-treatment.jpg
                  Place in /public/images/
                */}
                <Image
                  src={method.image}
                  alt={method.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-[16px] font-extrabold text-emerald-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">
                  {method.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}