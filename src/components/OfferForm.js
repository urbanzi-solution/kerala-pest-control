"use client";

import { useState } from "react";
import Image from "next/image";

export default function OfferForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("phoneNumber", formData.phoneNumber);
    payload.append("location", formData.location);
    payload.append(
      "time",
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    );

    try {
      setStatusMessage({ type: "", text: "" });

      await fetch(
        "https://script.google.com/macros/s/AKfycbyG09JpxLzLR_hCTvXPq07R1hCTFAzZtjf89w8G6GImiS2UeYNHDt7TlITMCzEzUaEs6Q/exec",
        {
          method: "POST",
          body: payload,
        }
      );

      setFormData({
        name: "",
        phoneNumber: "",
        location: "",
      });

      setStatusMessage({
        type: "success",
        text: "Booking request sent successfully! We will contact you soon.",
      });

      setTimeout(() => {
        setStatusMessage({ type: "", text: "" });
      }, 5000);
    } catch (error) {
      console.error(error);
      setStatusMessage({
        type: "error",
        text: "Failed to send request. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full bg-gray-100 py-16 px-4 flex justify-center">
      <div className="bg-white rounded-3xl w-full max-w-6xl flex flex-col md:flex-row items-center gap-8 overflow-hidden">

        {/* LEFT */}
        <div className="flex-1 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6 leading-snug">
            Book your <br /> Pest Control Service
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl text-gray-600 border border-gray-200 bg-gray-50 focus:outline-none focus:border-gray-400"
            />

            <input
              type="tel"
              name="phoneNumber"
              placeholder="10 Digit Phone Number*"
              pattern="[0-9]{10}"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl text-gray-600 border border-gray-200 bg-gray-50 focus:outline-none focus:border-gray-400"
            />

            <input
              type="text"
              name="location"
              placeholder="Location / Area*"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl text-gray-600 border border-gray-200 bg-gray-50 focus:outline-none focus:border-gray-400"
            />

            {/* STATUS */}
            {statusMessage.text && (
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium ${
                  statusMessage.type === "success"
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : "bg-red-100 text-red-700 border border-red-200"
                }`}
              >
                {statusMessage.type === "success" ? "✔" : "⚠"}
                {statusMessage.text}
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isLoading}
              className={`mt-2 w-full py-4 rounded-full font-medium transition ${
                isLoading
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
              }`}
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>

            {/* DISCLAIMER */}
            <p className="text-xs text-gray-500 mt-2 max-w-sm">
              By clicking ‘Submit’ you agree to our{" "}
              <strong>Privacy Policy</strong>. Our team will contact you with the
              best Kerala Pest Control Solutions.
            </p>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 relative w-full h-[300px] md:h-[500px]">
          <Image
            src="/img4.webp"
            alt="Pest Control"
            fill
            className="object-contain md:absolute md:bottom-0"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}