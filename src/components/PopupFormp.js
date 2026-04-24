"use client";

import { useState, useEffect } from "react";

export default function PopupFormp({ open, setOpen, location }) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidPhone(phone)) {
      alert("Enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbz7jHiHx07PKLZY6rnDj5hFgBUJ2XqpeFy6-H865TNw1n-xbphqQnR5y_e5AoLx-ty_/exec",
        {
          method: "POST",
          body: new URLSearchParams({
            name,
            phone,
            place,
            source: `${location} Page`,
          }),
        }
      );

      if (res.ok) {
        setSuccess(true);
        setName("");
        setPhone("");
        setPlace("");

        // auto close after 2 sec
        setTimeout(() => {
          setOpen(false);
          setSuccess(false);
        }, 2000);
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (err) {
      alert("Network error");
    }

    setLoading(false);
  };

  const whatsappMessage = `Hi, I want to book a free inspection (${location}).
Name: ${name}
Phone: ${phone}
Place: ${place}`;

  const whatsappLink = `https://wa.me/9074368674?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={() => !loading && setOpen(false)}
    >
      <div
        className="bg-white w-[92%] max-w-md p-6 rounded-2xl shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl text-black font-bold text-center mb-4">
          Book Free Inspection ({location})
        </h2>

        {success ? (
          <div className="text-center">
            <p className="text-green-600 font-medium">
              ✅ Request submitted successfully!
            </p>
          </div>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
                className="border p-3 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                required
                className="border p-3 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
              />

              <input
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="Your Area"
                required
                className="border p-3 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white py-3 rounded-lg disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Request"}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-3 text-sm text-gray-500">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* WhatsApp */}
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