import {
  Microscope,
  ClipboardList,
  BriefcaseMedical,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    icon: <Microscope size={26} />,
    title: "01. Inspection",
    desc: "Comprehensive audit using thermal imaging and moisture meters.",
  },
  {
    icon: <ClipboardList size={26} />,
    title: "02. Quote",
    desc: "Detailed scientific report and transparent fixed-cost estimation.",
  },
  {
    icon: <BriefcaseMedical size={26} />,
    title: "03. Treatment",
    desc: "Precision execution using eco-optimized, targeted formulations.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "04. Follow-up",
    desc: "Post-service validation and long-term preventative measures.",
  },
];
export default function Process() {
  return (
    <section className="bg-[#5f87bf] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold">
          The Clinical Pathway
        </h2>
        <p className="text-gray-300 mt-3">
          Every intervention follows a rigorous 4-stage scientific protocol.
        </p>

        {/* Steps */}
        <div className="relative mt-16">
          
          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-gray-300" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                
                {/* Icon Box */}
                <div className="w-16 h-16 bg-[#3b7cff] rounded-lg flex items-center justify-center mb-6 z-10">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg">{step.title}</h3>

                {/* Desc */}
                <p className="text-gray-300 text-sm mt-2 max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}