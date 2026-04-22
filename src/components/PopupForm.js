"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PopupForm({ open, setOpen }) {
  const pathname = usePathname();

  // ✅ Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [setOpen]);

  // ✅ Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={() => setOpen(false)} // ✅ click outside to close
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // ✅ prevent close when clicking inside
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-black hover:text-black text-xl"
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-2xl text-black font-bold mb-2 text-center">
          Book Free Inspection
        </h2>

        <p className="text-sm text-gray-500 text-center mb-4">
          Get expert pest control advice in minutes
        </p>

        {/* FORM */}
       <form
  action="https://script.google.com/macros/s/AKfycbz7jHiHx07PKLZY6rnDj5hFgBUJ2XqpeFy6-H865TNw1n-xbphqQnR5y_e5AoLx-ty_/exec"
  method="POST"
  target="_blank"
  className="space-y-4"
>
  {/* Name */}
  <input
    name="entry.1111111111"
    placeholder="Your Name"
    required
    defaultValue=""
    className="w-full text-gray-800 border p-3 rounded-lg"
  />

  {/* Phone */}
  <input
    name="entry.2222222222"
    placeholder="Phone Number"
    required
    defaultValue=""
    className="w-full text-gray-800 border p-3 rounded-lg"
  />

  {/* Place */}
  <input
    name="entry.3333333333"
    placeholder="Your Place (City/Area)"
    required
    defaultValue=""
    className="w-full text-gray-800 border p-3 rounded-lg"
  />

  {/* Hidden page source (optional but useful) */}
  <input
    type="hidden"
    name="entry.4444444444"
    value={pathname || ""}
  />

  <button className="bg-[#366fe2] text-white w-full py-3 rounded-lg hover:bg-[#3b7cff]">
    Submit
  </button>
</form>

        {/* DIVIDER */}
        <div className="flex items-center gap-2 my-4">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* WHATSAPP CTA */}
        <a
          href={`https://wa.me/91XXXXXXXXXX?text=Hi, I need pest control service. Page: ${pathname}`}
          target="_blank"
          className="block w-full text-center bg-[#25D366] hover:bg-[#1ebe5d] text-white py-3 rounded-lg font-semibold transition"
        >
          Chat on WhatsApp
        </a>

        {/* FOOT NOTE */}
        <p className="text-xs text-gray-400 text-center mt-3">
          We respect your privacy. No spam.
        </p>
      </div>
    </div>
  );
}