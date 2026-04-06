"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold mb-4 tracking-wide">
              Kerala Pest Solutions
            </h2>
            <p className="text-slate-300 text-[13px] leading-relaxed">
              Professional pest control services across Trivandrum and Kollam.
              Safe, scientific, and long-term pest management for homes,
              restaurants, apartments, and commercial spaces.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[14px] font-semibold mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2 text-[13px] text-slate-300">
              <li><Link href="/services/ipm" className="hover:text-white">General Pest Control</Link></li>
              <li><Link href="/services/termite" className="hover:text-white">Termite Treatment</Link></li>
              <li><Link href="/services/cockroach" className="hover:text-white">Cockroach Control</Link></li>
              <li><Link href="/services/rodent" className="hover:text-white">Rodent Control</Link></li>
              <li><Link href="/services/mosquito" className="hover:text-white">Mosquito Management</Link></li>
              <li><Link href="/services/bed-bugs" className="hover:text-white">Bed Bug Removal</Link></li>
              <li><Link href="/services/ant" className="hover:text-white">Ant Control</Link></li>
            </ul>
          </div>

          {/* Industries ✅ NEW */}
          <div>
            <h3 className="text-[14px] font-semibold mb-4 uppercase tracking-wider">
              Industries
            </h3>
            <ul className="space-y-2 text-[13px] text-slate-300">
              <li><Link href="/industries/residential" className="hover:text-white">Residential Homes</Link></li>
              <li><Link href="/industries/restaurants" className="hover:text-white">Restaurants & Kitchens</Link></li>
              <li><Link href="/industries/hotels" className="hover:text-white">Hotels & Hospitality</Link></li>
              <li><Link href="/industries/warehouses" className="hover:text-white">Warehouses & Logistics</Link></li>
              <li><Link href="/industries/offices" className="hover:text-white">Offices & Commercial Spaces</Link></li>
              <li><Link href="/industries/apartment" className="hover:text-white">Apartments & Societies</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-[14px] font-semibold mb-4 uppercase tracking-wider">
              Locations
            </h3>
            <ul className="space-y-2 text-[13px] text-slate-300">
              <li><Link href="/trivandrum" className="hover:text-white">Trivandrum</Link></li>
              <li><Link href="/kollam" className="hover:text-white">Kollam</Link></li>
              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[14px] font-semibold mb-4 uppercase tracking-wider">
              Contact
            </h3>

            <div className="space-y-3 text-[13px] text-slate-300">

              <p>📍 Trivandrum & Kollam, Kerala</p>

              <p>
                📞{" "}
                <a href="tel:+919876543210" className="hover:text-white">
                  +91 98765 43210
                </a>
              </p>

              <p>
                💬{" "}
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  className="hover:text-white"
                >
                  WhatsApp Chat
                </a>
              </p>

              <p>
                ✉️{" "}
                <a
                  href="mailto:info@keralapestsolutions.com"
                  className="hover:text-white"
                >
                  info@keralapestsolutions.com
                </a>
              </p>

            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-block mt-5 bg-white text-emerald-900 text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-100 transition"
            >
              Book Free Inspection
            </Link>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-emerald-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-[12px] text-slate-400">
            © {new Date().getFullYear()} Kerala Pest Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-[12px] text-slate-400">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}