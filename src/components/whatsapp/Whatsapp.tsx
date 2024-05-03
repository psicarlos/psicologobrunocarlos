import React from 'react';
import Whatsapp from '../icons/Whatsapp';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5544991269022?text=Ola!%20Gostaria%20de%20marcar%20um%20atendimento."
      title="Contato pelo WhatsApp"
      className="fixed bottom-8 right-8 bg-green-500 text-white px-4 py-2 rounded-full shadow-md focus:outline-none hover:bg-green-700"
      target=" blank"
    >
      <Whatsapp />
    </a>
  );
};

export default WhatsAppButton;
