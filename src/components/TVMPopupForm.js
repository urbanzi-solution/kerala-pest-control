"use client";

import { useState, useEffect } from "react";

export default function TVMPopupForm({ open, setOpen }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  if (!open) return null;

  const isValidPhone = (num) => /^[6-9]\d{9}$/.test(num);

  const handleSubmit = () => {
    if (!isValidPhone(phone)) {
      alert("Enter a valid 10-digit phone number");
      return false;
    }
    setLoading(true);
  };

  const whatsappMessage = `Hi, I want to book a free inspection.\nName: ${name}\nPhone: ${phone}\nPlace: ${place}`;

  const whatsappLink = `https://wa.me/9074368674?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={() => !loading && setOpen(false)}
    >
      <div
        className="bg-white w-[92%] max-w-md p-6 rounded-2xl shadow-xl relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-4 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-black text-center mb-4">
          Book Free Inspection
        </h2>

        {success ? (
          <div className="text-center">
            <p className="text-green-600 font-medium mb-4">
              ✅ Request submitted successfully!
            </p>
            <button
              onClick={() => setOpen(false)}
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <form
              action="https://script.google.com/macros/s/AKfycbz7jHiHx07PKLZY6rnDj5hFgBUJ2XqpeFy6-H865TNw1n-xbphqQnR5y_e5AoLx-ty_/exec"
              method="POST"
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
                className="border p-3 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                required
                className="border p-3 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                name="place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="Your Area / City"
                required
                className="border p-3 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input type="hidden" name="source" value="Trivandrum Page" />

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Request"}
              </button>
            </form>

            {/* OR DIVIDER */}
            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-3 text-sm text-gray-500">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600"
            >
              Chat on WhatsApp
            </a>
          </>
        )}
      </div>
    </div>
  );
}