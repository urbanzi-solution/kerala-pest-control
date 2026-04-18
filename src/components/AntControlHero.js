import Image from "next/image";

export default function AntControlHero() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <div className="flex flex-col gap-6">

          {/* Badge */}
          <span className="inline-flex self-start bg-[#d5d5d5] text-black text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full">
            Ant Control Kerala
          </span>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-black leading-tight tracking-tight">
            Professional Ant<br />Control in Kerala
          </h1>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <p className="text-slate-600 text-[15px] leading-relaxed">
            Ant infestations are among the most persistent household problems in Kerala. A mature colony can contain hundreds of thousands of workers, forage across large distances from a central nest, and establish satellite colonies inside wall voids, under flooring, and within structural timber. The trail of ants visible in a kitchen represents a small fraction of the population — the vast majority remains hidden, protected, and completely unaffected by surface sprays.

            </p>
            <p className="text-slate-600 text-[15px] leading-relaxed">
             Kerala Pest Solutions provides targeted ant control for homes, food businesses, and commercial properties across Trivandrum and Kollam. Our methods address the colony rather than the foragers, because eliminating only the ants you can see guarantees the problem returns within days.

            </p>
          </div>

          {/* Blockquote */}
          <div className="border-l-4 border-black pl-5 py-1">
            <p className="text-slate-500 text-[14px] leading-relaxed italic">
              Kerala Pest Solutions provides targeted ant control for homes, food businesses, and
              commercial properties across Trivandrum and Kollam. Our methods address the colony
              rather than the foragers, because eliminating only the ants you can see guarantees
              the problem returns within days.
            </p>
          </div>
        </div>

        {/* Right — image */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
          {/*
            Replace src with your actual image e.g. /images/ant-control.jpg
            Place in /public/images/
          */}
          <Image
            src="/ant-control.jpg"
            alt="Professional ant control Kerala"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

      </div>
    </section>
  );
}