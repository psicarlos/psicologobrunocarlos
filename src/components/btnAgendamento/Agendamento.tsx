import React from 'react';

const Agendamento: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button className="hover:scale-110 duration-500 text-zinc-900 font-bold">
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className=" bg-btnContato p-3 rounded-xl"
      >
        {text}
      </a>
    </button>
  );
};

export default Agendamento;
