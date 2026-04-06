import {
  BadgeCheck,
  UserCog,
  Search,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: <BadgeCheck size={28} />,
    title: "CIB&RC APPROVED",
    subtitle: "FORMULATIONS",
  },
  {
    icon: <UserCog size={28} />,
    title: "IPM-TRAINED",
    subtitle: "TECHNICIANS",
  },
  {
    icon: <Search size={28} />,
    title: "FREE SITE",
    subtitle: "INSPECTION",
  },
  {
    icon: <FileText size={28} />,
    title: "DETAILED DIGITAL",
    subtitle: "SERVICE REPORTS",
  },
];

export default function FeatureStrip() {
  return (
    <section className="bg-[#eef2f1] py-10">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {features.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              
              {/* Icon */}
              <div className="text-gray-500 mb-4">
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-xs tracking-widest text-gray-700 font-medium">
                {item.title}
              </p>
              <p className="text-xs tracking-widest text-gray-700 font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}