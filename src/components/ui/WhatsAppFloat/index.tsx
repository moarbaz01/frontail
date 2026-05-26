"use client";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <a
        href="https://wa.me/918696136907"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-3d block bg-primary text-white p-4 rounded-md hover:bg-primary/80 shadow-lg"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
};

export default WhatsAppFloat;
