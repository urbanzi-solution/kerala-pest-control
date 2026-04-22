"use client";

import { useState } from "react";

export default function TeslaForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = new FormData();
    payload.append("firstName", formData.firstName);
    payload.append("lastName", formData.lastName);
    payload.append("email", formData.email);
    payload.append("phoneNumber", formData.phoneNumber);
    payload.append("message", formData.message);
    payload.append(
      "time",
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    );

    try {
      setStatusMessage({ type: "", text: "" });

      await fetch(
        "https://script.google.com/macros/s/AKfycbzDgXr82qYpqFTrg-rdWYCdYNO-knWTOz0nLaeE9KKg2_BTuPdRybHha-9to0D3gg/exec",
        {
          method: "POST",
          body: payload,
        }
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        agreeTerms: false,
      });

      setStatusMessage({
        type: "success",
        text: "Message sent successfully! We will get back to you soon.",
      });

      setTimeout(() => {
        setStatusMessage({ type: "", text: "" });
      }, 5000);
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white py-16 px-5 mt-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* ================= FORM ================= */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold text-gray-900 mb-10">
            Connect with us...
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-5">

              {/* First Name */}
              <div className="flex flex-col">
                <label className="text-sm text-gray-500 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                  className="bg-gray-100 text-gray-600 px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label className="text-sm text-gray-500 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
                  className="bg-gray-100 text-gray-600 px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm text-gray-500 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter email"
                  className="bg-gray-100 text-gray-600 px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-sm text-gray-500 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                  placeholder="10 digit number"
                  className="bg-gray-100 text-gray-600 px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us your requirements..."
                className="bg-gray-100 text-gray-600 px-4 py-3 rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
                className="mt-1 w-5 h-5 accent-black"
              />
              <p className="text-sm text-gray-500">
                I agree to the{" "}
                <span className="underline cursor-pointer">
                  terms and conditions
                </span>
              </p>
            </div>

            {/* STATUS */}
            {statusMessage.text && (
              <div
                className={`p-4 rounded-md text-sm ${
                  statusMessage.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {statusMessage.text}
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={!formData.agreeTerms || isLoading}
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition disabled:bg-gray-300"
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>

            <p className="text-xs text-gray-500 text-center italic">
              Professional pest control services require trained technicians.
            </p>
          </form>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex flex-col items-center justify-center">

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm w-full max-w-md mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Contact Information
            </h3>

            <p className="text-gray-600 text-sm mb-2">
              <strong>Office:</strong> Tc 20/2451 Nagammayya Street Karamana
            </p>

            <p className="text-gray-600 text-sm mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:6282651476" className="text-blue-600">
                6282651476
              </a>
            </p>

            <p className="text-gray-600 text-sm mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:keralapestcontrolinfo@gmail.com"
                className="text-blue-600"
              >
                keralapestcontrolinfo@gmail.com
              </a>
            </p>
          </div>

          <img
            src="/contact.png"
            alt="contact"
            className="max-w-md w-full object-contain"
          />
        </div>

      </div>
    </div>
  );
}