"use client";

import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    Services: [
      { label: "Termite Control", href: "/services/termite-control" },
      { label: "Ant & Cockroach Control", href: "/services/ant-cockroach-control" },
      { label: "General Pest Control", href: "/services/general-pest-control" },
      { label: "House Cleaning", href: "/services/house-cleaning" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Mission & Vision", href: "/mission" },
      { label: "Careers", href: "/careers" },
      { label: "Testimonials", href: "/testimonials" },
    ],
    Support: [
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Request a Quote", href: "/quote" },
      { label: "Emergency Service", href: "/emergency" },
    ],
    Resources: [
      { label: "Blog", href: "/blog" },
      { label: "Tips & Guides", href: "/guides" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Safety Guidelines", href: "/safety" },
    ],
  };

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* BRAND */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <div>
              <h2 className="font-bold text-lg mb-3">
                Kerala Pest Control Solutions
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Providing safe, eco-friendly, and effective pest management solutions across
                Trivandrum for homes, offices, and commercial spaces.
              </p>
            </div>

            <div className="text-sm text-gray-300 space-y-1">
              <p>
                <span className="font-bold text-white">Office address:</span>{" "}
                Tc 20/2451 Nagammayya Street Karamana near police station 695002
              </p>
              <p>
                <span className="font-bold text-white">Phone:</span>{" "}
                6282651476, 9074368674
              </p>
              <p>
                <span className="font-bold text-white">Email:</span>{" "}
                keralapestcontrolinfo@gmail.com
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              {[
                {
                  href: "tel:6282651476",
                  icon: (
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2..." />
                    </svg>
                  ),
                },
                {
                  href: "mailto:keralapestcontrolinfo@gmail.com",
                  icon: (
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>
                  ),
                },
                {
                  href: "https://facebook.com",
                  icon: (
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 2h-3a5 5 0 0 0-5 5..." />
                    </svg>
                  ),
                },
                {
                  href: "https://instagram.com",
                  icon: (
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                    </svg>
                  ),
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/15 text-gray-400 hover:text-white hover:border-white/30 transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs uppercase tracking-widest mb-5 font-semibold">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Kerala Pest Control Solutions. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-gray-400 text-sm hover:text-white transition"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}