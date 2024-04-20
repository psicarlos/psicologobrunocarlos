import React from 'react';
import Agendamento from '../btnAgendamento/Agendamento';

const Servicos = () => {
  return (
    <section className="py-24 px-4 md:px-0 md:max-w-6xl md:mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        O QUE VOCÊS PRECISAM É DE UM MÉTODO.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="flex bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-stone-700 via-sky-900 to-green-600 border-colorDetails border-2 rounded-2xl p-4">
          <div className="flex m-auto">
            <p className="font-bold">
              Foco nas mudanças de forma progressiva e prática.
            </p>
          </div>
        </div>
        <div className="flex bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-stone-700 via-sky-900 to-green-600 border-colorDetails border-2 rounded-2xl p-4">
          <div className="flex m-auto">
            <p className="font-bold ">Uma aborgem simples e objetiva.</p>
          </div>
        </div>
        <div className="flex bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-stone-700 via-sky-900 to-green-600 border-colorDetails border-2 rounded-2xl p-4">
          <div className="flex m-auto">
            <p className="font-bold">
              Acompanhamento entre os atendimentos visando potencializar os
              resultados.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Agendamento text="AGENDE SUA CONSULTA" />
      </div>
    </section>
  );
};

export default Servicos;
