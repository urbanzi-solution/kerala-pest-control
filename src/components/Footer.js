"use client";

import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    Services: [
      { label: "Termite Control", href: "/services/termite-control" },
      { label: "Ant & Cockroach Control", href: "/services/ant-cockroach-control" },
      { label: "General Pest Control", href: "/services/general-pest-control" },
      { label: "House Cleaning", href: "/services/#" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Mission & Vision", href: "/#" },
      { label: "Careers", href: "/#" },
      { label: "Testimonials", href: "/testimonials" },
    ],
    Support: [
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Request a Quote", href: "/#" },
      { label: "Emergency Service", href: "/#" },
    ],
    Resources: [
      { label: "Blog", href: "/#" },
      { label: "Tips & Guides", href: "/#" },
      { label: "Case Studies", href: "/#" },
      { label: "Safety Guidelines", href: "/#" },
    ],
  };

  const socialLinks = [
    {
      href: "tel:9074368674",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 4.18 2 2 0 0 1 5.1 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.77.65 2.6a2 2 0 0 1-.45 2.11L9.1 9.1a16 16 0 0 0 6.8 6.8l1.67-1.67a2 2 0 0 1 2.11-.45c.83.31 1.7.53 2.6.65A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      href: "mailto:keralapestcontrolinfo@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      href: "https://linktr.ee/keralapestcontrolsolutions",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      href: "https://linktr.ee/keralapestcontrolsolutions",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0b0b0d] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* BRAND */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <div>
              <h2 className="font-bold text-lg mb-3">
                Kerala Pest Control Solutions
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Providing safe, eco-friendly, and effective pest management solutions across Trivandrum for homes, offices, and commercial spaces.
              </p>
            </div>

            <div className="text-sm text-gray-300 space-y-1">
              <p><span className="font-semibold text-white">Address:</span> Tc 20/2451 Nagammayya Street Karamana near police station 695002</p>
              <p><span className="font-semibold text-white">Phone:</span> 6282651476, 9074368674</p>
              <p><span className="font-semibold text-white">Email:</span> keralapestcontrolinfo@gmail.com</p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-[#0ea5e9] hover:border-[#0ea5e9] transition-all duration-300 hover:scale-110"
                >
                  <div className="w-4 h-4">{s.icon}</div>
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs uppercase tracking-widest mb-5 font-semibold text-gray-300">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-[#0ea5e9] transition duration-200"
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
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Kerala Pest Control Solutions. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-gray-400 text-sm hover:text-[#0ea5e9] transition"
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