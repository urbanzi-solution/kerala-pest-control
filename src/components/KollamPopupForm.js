"use client";

import { useState, useEffect } from "react";

export default function KollamPopupForm({ open, setOpen }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-white w-[90%] max-w-md p-6 rounded-2xl shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-4 text-gray-400 text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl text-black font-bold text-center mb-4">
          Book Free Inspection (Kollam)
        </h2>

        {/* ✅ MACROSHIFT FORM */}
        <form
          action="https://script.google.com/macros/s/AKfycbz7jHiHx07PKLZY6rnDj5hFgBUJ2XqpeFy6-H865TNw1n-xbphqQnR5y_e5AoLx-ty_/exec"
          method="POST"
          className="flex flex-col gap-4"
          onSubmit={() => setLoading(true)}
        >
          <input
            name="name"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
            className="border text-gray-700 p-3 rounded-lg"
          />

          <input
            name="phone"
            value={phone || ""}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            required
            className="border text-gray-700 p-3 rounded-lg"
          />

          <input
            name="place"
            value={place || ""}
            onChange={(e) => setPlace(e.target.value)}
            placeholder="Your Area "
            required
            className="border text-gray-700 p-3 rounded-lg"
          />

          {/* ✅ TRACK SOURCE */}
          <input type="hidden" name="source" value="Kollam Page" />

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  );
}