"use client";

import Link from "next/link";
import {
  Calendar,
  ShieldCheck,
  UserCheck,
  BookOpen,
  Bug,
  BedDouble,
  SprayCan,
  Droplets,
  MousePointer2,
  Workflow,
  Shield,
} from "lucide-react";

const amcFeatures = [
  {
    icon: <Calendar className="w-6 h-6 text-black" />,
    title: "Priority scheduling",
    description: "AMC clients are booked ahead of one-time service requests",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-black" />,
    title: "Guaranteed retreatment",
    description:
      "Guaranteed retreatment at no additional charge if activity is detected between visits",
  },
  {
    icon: <UserCheck className="w-6 h-6 text-black" />,
    title: "Consistent technician",
    description:
      "Consistent technician assignment where possible for continuity",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-black" />,
    title: "Maintenance logbook",
    description:
      "Maintenance logbook provided — useful for property sale or rental documentation",
  },
];

const relatedServices = [
  {
    icon: <Bug className="w-4 h-4 text-black" />,
    label: "Termite Treatment",
    href: "/services/termite",
  },
  {
    icon: <BedDouble className="w-4 h-4 text-black" />,
    label: "Bed Bug Removal",
    href: "/services/bed-bug",
  },
  {
    icon: <SprayCan className="w-4 h-4 text-black" />,
    label: "Cockroach Control",
    href: "/services/cockroach",
  },
  {
    icon: <Droplets className="w-4 h-4 text-black" />,
    label: "Mosquito Management",
    href: "/services/mosquito",
  },
  {
    icon: <MousePointer2 className="w-4 h-4 text-black" />,
    label: "Rodent Control",
    href: "/services/rodent",
  },
  {
    icon: <Workflow className="w-4 h-4 text-black" />,
    label: "Ant Control",
    href: "/services/ant",
  },
  {
    icon: <Shield className="w-4 h-4 text-black" />,
    label: "General Pest Control",
    href: "/services/general",
  },
];

export default function ResidentialAMCAndRelatedServices() {
  return (
    <div>

      {/* ── AMC Section ── */}
      <section className="bg-[#f0f4ee] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-5 tracking-tight">
            Annual Maintenance Contract (AMC)
          </h2>
          <p className="text-slate-500 text-[14px] max-w-2xl mx-auto leading-relaxed mb-12">
            Kerala&apos;s climate means pests are active year-round. Even a thoroughly treated
            property can be re-infested within weeks by neighbouring properties, incoming
            deliveries, or monsoon-season pest movement. An Annual Maintenance Contract (AMC)
            provides quarterly visits that replenish chemical barriers before they degrade,
            catching any new activity before it becomes an infestation.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {amcFeatures.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#e2e2e2] border border-[#dbdbdb] flex items-center justify-center">
                  {f.icon}
                </div>
                <div>
                  <p className="text-slate-900 text-[13px] font-bold mb-1.5">{f.title}</p>
                  <p className="text-slate-400 text-[12px] leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-black text-center mb-10">
            Related Services
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {relatedServices.map((service) => (
              <Link
                key={service.label}
                href={service.href}
                className="flex items-center gap-3 border border-slate-100 rounded-xl px-4 py-3.5 bg-slate-50 hover:[#3b7cff] hover:bg-[#dbdbdb] transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center shrink-0 group-hover:border-emerald-100">
                  {service.icon}
                </div>
                <span className="text-slate-600 text-[13px] font-medium group-hover:text-black transition-colors">
                  {service.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}   