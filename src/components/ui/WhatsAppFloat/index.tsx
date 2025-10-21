"use client";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <a
        href="https://wa.me/918696136907"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-colors shadow-lg"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
};

export default WhatsAppFloat;