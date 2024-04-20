import React from 'react';
import Image from 'next/image';
import Agendamento from '../btnAgendamento/Agendamento';

import Estacionamento from '@/img/clinica/estacionamento.jpg';
import Recepcao from '@/img/clinica/recepcao.jpg';
import Atendimento1 from '@/img/clinica/sala-de-atendimento-1.jpg';

const Ambiente = () => {
  return (
    <section className="py-24 px-4 md:px-0 md:max-w-6xl md:mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Um ambiente seguro e com suporte profissional especializado.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className=" bg-transparent rounded-xl">
          <div>
            <Image
              alt="Estacionamento"
              className=""
              width={380}
              height={200}
              src={Estacionamento}
              style={{
                aspectRatio: '200/200',
                objectFit: 'cover',
              }}
              priority
            />
            <p className="font-bold mb-2 text-center bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-stone-700 via-sky-900 to-green-600 border-colorDetails border-2 py-2 rounded-b-xl">
              Estacionamento
            </p>
          </div>
        </div>
        <div className=" bg-transparent rounded-xl">
          <div>
            <Image
              alt="Estacionamento"
              className=""
              width={380}
              height={200}
              src={Recepcao}
              style={{
                aspectRatio: '200/200',
                objectFit: 'cover',
              }}
              priority
            />
            <p className="font-bold mb-2 text-center bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-stone-700 via-sky-900 to-green-600 border-colorDetails border-2 py-2 rounded-b-xl">
              Recepção
            </p>
          </div>
        </div>
        <div className="bg-transparent rounded-xl">
          <div>
            <Image
              alt="Estacionamento"
              className=""
              width={380}
              height={200}
              src={Atendimento1}
              style={{
                aspectRatio: '200/200',
                objectFit: 'cover',
              }}
              priority
            />
            <p className="font-bold mb-2 text-center bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-stone-700 via-sky-900 to-green-600 border-colorDetails border-2 py-2 rounded-b-xl">
              Sala de Atendimento
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Agendamento text="AGENDE SEU ATENDIMENTO" />
      </div>
    </section>
  );
};

export default Ambiente;
