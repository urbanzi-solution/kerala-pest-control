"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown, FiPhone, FiMail } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

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
      href: "#",
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
      href: "#",
      children: [
        { label: "Trivandrum", href: "/trivandrum" },
        { label: "Kollam", href: "/kollam" },
      ],
    },
    { label: "Blogs", href: "#" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      
      {/* FULL WIDTH GLASS BAR */}
      <div className="w-full backdrop-blur-lg bg-white/50 border-b border-white/20 shadow-sm">
        
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="#">
            <Image src="/logo.webp" alt="logo" width={80} height={40} priority />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <div key={i} className="relative group">
                
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-sm font-medium transition ${
                    isActive(link.href)
                      ? "text-black"
                      : "text-black hover:text-gray-700"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <FiChevronDown className="text-xs mt-[2px]" />
                  )}
                </Link>

                {/* DROPDOWN */}
                {link.children && (
                  <div className="absolute left-0 top-full mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="w-60 bg-white/90 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 py-2">
                      {link.children.map((child, idx) => (
                        <Link
                          key={idx}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ICON BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            
            <a
              href="https://linktr.ee/keralapestcontrolsolutions"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-black backdrop-blur-md border border-white/30 
              hover:bg-white/10 transition shadow-sm"
            >
              <FiPhone size={16} />
            </a>

            <a
              href="mailto:keralapestcontrolinfo@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-black backdrop-blur-md border border-white/30 
              hover:bg-white/10 transition shadow-sm"
            >
              <FiMail size={16} />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 rounded-md hover:bg-white/30 transition"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white text-black z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5"
        >
          <FiX size={26} />
        </button>

        <div className="mt-16 px-6 space-y-5">
          {navLinks.map((link, i) => (
            <div key={i}>
              
              <div
                onClick={() =>
                  setOpenDropdown(openDropdown === i ? null : i)
                }
                className="flex justify-between items-center cursor-pointer text-lg font-medium"
              >
                <span>{link.label}</span>
                {link.children && <FiChevronDown />}
              </div>

              {link.children && openDropdown === i && (
                <div className="mt-2 ml-3 space-y-2">
                  {link.children.map((child, idx) => (
                    <Link
                      key={idx}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-gray-600 text-sm"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}
    </header>
  );
}