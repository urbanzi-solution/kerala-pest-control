"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, X, Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "General Pest Control", href: "/services/general-pest-control" },
      { label: "Termite Control", href: "/services/termite-control" },
      { label: "Cockroach Control", href: "/services/cockroach-control" },
      { label: "Rodent Control", href: "/services/rodent-control" },
      { label: "Mosquito Control", href: "/services/mosquito-control" },
      { label: "Bed Bug Treatment", href: "/services/bed-bugs-control" },
      { label: "Ant Control", href: "/services/ant-control" },
    ],
  },
  {
    label: "Industries",
    href: "/#",
    children: [
      { label: "Residential", href: "/industries/pest-control-for-residential" },
      { label: "Restaurants", href: "/industries/pest-control-for-restaurants" },
      { label: "Hotels", href: "/industries/pest-control-for-hotels" },
      { label: "Warehouses", href: "/industries/pest-control-for-warehouses" },
      { label: "Offices", href: "/industries/pest-control-for-offices" },
      { label: "Apartments", href: "/industries/pest-control-for-apartment" },
    ],
  },
  {
    label: "Locations",
    href: "/#",
    children: [
      { label: "Trivandrum", href: "/trivandrum" },
      { label: "Kollam", href: "/kollam" },
    ],
  },
  { label: "Blogs", href: "/#" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-base lg:text-lg font-semibold text-green-900"
        >
          KERALA PEST SOLUTIONS
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-gray-700 text-[14px] font-medium">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <div className="flex items-center gap-1 cursor-pointer hover:text-green-700">
                  <Link href={link.href}>{link.label}</Link>
                  <ChevronDown size={14} />
                </div>

                {/* Dropdown */}
                <div className="absolute left-0 top-full mt-3 w-56 bg-white shadow-xl rounded-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-5 py-2.5 text-[13px] text-slate-600 hover:bg-green-50 hover:text-green-700"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-green-700"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/#"
          className="hidden md:block bg-green-700 hover:bg-green-800 text-white text-[13px] px-5 py-2.5 rounded-lg font-medium"
        >
          Free Inspection
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-5 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">

          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                
                {/* FIXED ROW */}
                <div className="flex items-center justify-between py-3">
                  
                  {/* Clickable link */}
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[14px] font-medium text-slate-700 hover:text-green-700"
                  >
                    {link.label}
                  </Link>

                  {/* Dropdown toggle */}
                  <button onClick={() => toggleDropdown(link.label)}>
                    <ChevronDown
                      size={16}
                      className={
                        "transition-transform " +
                        (openDropdown === link.label
                          ? "rotate-180 text-green-700"
                          : "")
                      }
                    />
                  </button>

                </div>

                {/* Dropdown Items */}
                {openDropdown === link.label && (
                  <div className="pl-4 flex flex-col gap-1 mb-2 border-l-2 border-green-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-2.5 text-[13px] text-slate-500 hover:text-green-700"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-[14px] font-medium text-slate-700 border-b border-slate-50"
              >
                {link.label}
              </Link>
            )
          )}

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-green-700 hover:bg-green-800 text-white text-[14px] font-semibold px-5 py-3.5 rounded-xl text-center"
          >
            Free Inspection
          </Link>
        </div>
      )}
    </header>
  );
}