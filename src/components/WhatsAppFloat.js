"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919876543210" // 🔴 replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center 
                 w-14 h-14 bg-green-500 rounded-full shadow-lg 
                 hover:bg-green-600 transition"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}