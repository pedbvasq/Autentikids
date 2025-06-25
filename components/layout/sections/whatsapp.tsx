import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Icono oficial de WhatsApp

const WhatsAppButton = () => {
  const phoneNumber = "1234567890"; // Reemplaza con tu número de WhatsApp

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#88BBD6] text-white p-4 rounded-full shadow-lg shadow-[#88BBD6] flex items-center justify-center border-4 border-white transition-all transform hover:translate-y-1 hover:shadow-md active:translate-y-2 active:shadow-sm"
    >
      <FaWhatsapp size={32} className="drop-shadow-lg" />
    </a>
  );
};

export default WhatsAppButton;
