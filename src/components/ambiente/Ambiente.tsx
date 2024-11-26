import React from 'react';
import Image from 'next/image';
import Agendamento from '../btnAgendamento/Agendamento';

import Fachada from '@/img/clinica/fachada.jpg';
import Recepcao from '@/img/clinica/sala_espera.jpg';
import Atendimento from '@/img/clinica/sala_atendimento.jpg';

const Ambiente = () => {
  return (
    <section className="pb-24 pt-12 px-4 md:py-24 md:px-0 md:max-w-6xl md:mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Um ambiente seguro e com suporte profissional especializado.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className=" bg-transparent rounded-xl">
          <div>
            <Image
              alt="Fachada"
              className=""
              width={380}
              height={300}
              src={Fachada}
              style={{
                aspectRatio: '16/9 auto',
                objectFit: 'cover',
              }}
              priority
            />
            <p className="font-bold mb-2 text-center bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-stone-700 via-sky-900 to-green-600 border-colorDetails border-2 py-2 rounded-b-xl">
              Fachada
            </p>
          </div>
        </div>
        <div className=" bg-transparent rounded-xl">
          <div>
            <Image
              alt="Recepção"
              className=""
              width={380}
              height={300}
              src={Recepcao}
              style={{
                aspectRatio: '16/9 auto',
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
              alt="Sala de atendimento"
              className=""
              width={380}
              height={300}
              src={Atendimento}
              style={{
                aspectRatio: '16/9 auto',
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
