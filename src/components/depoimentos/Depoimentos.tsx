import React from 'react';
import CheckMark from '../icons/CheckMark';
import CardDepoimento from './CardDepoimento';

const Depoimentos = () => {
  return (
    <section className="relative py-24 px-4 w-full md:px-0 md:mx-auto bg-heroDepoiments bg-cover rounded-[3rem]">
      <div className="absolute inset-0 bg-black opacity-80 rounded-[3rem]" />

      <h2 className="text-3xl font-bold mb-6 text-center relative z-10">
        O que meus pacientes dizem sobre mim:
      </h2>
      <div className="flex flex-col md:flex-row gap-2 justify-center mb-12 relative z-10">
        <div className="flex flex-row border-colorDetails border-2 py-1 px-4 rounded-xl m-auto md:-m-0">
          <CheckMark />
          Atendimento Presencial
        </div>
        <div className="flex flex-row border-colorDetails border-2 px-4 py-1 rounded-xl m-auto md:-m-0">
          <CheckMark />
          Atendimento Online
        </div>
      </div>
      <div className="flex w-full gap-2 px-2 relative z-10">
        <div className="  p-6 rounded-2xl gap-4">
          <CardDepoimento />
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
