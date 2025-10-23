import React from 'react';
import Agendamento from '../btnAgendamento/Agendamento';

import BrigaIcon from '../icons/BrigaIcon';
import Reciprocidade from '../icons/Reciprocidade';
import Traicao from '../icons/Traicao';
import Pensamentos from '../icons/Pensamentos';

const Realidade = () => {
  return (
    <section className="py-24 px-4  md:max-w-6xl md:mx-auto bg-[#141A1B] md:px-24 rounded-3xl">
      <h2 className="text-2xl font-bold text-center text-gray-300">
        Bruno Carlos de Oliveira da Silva
      </h2>
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-300">
        CRP: 08/28594
      </h2>
      <h2 className="text-3xl font-bold mb-6 text-center text-colorDetails">
        Brigas intermináveis, distanciamento, frieza no relacionamento e na
        cama…
      </h2>
      <p className="mb-12 text-center text-lg">
        Se eu acabei de descrever o seu casamento, é muito provável que você
        esta passando por:
      </p>

      {/* CADA QUADRADO PARTE DE CIMA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" border-colorDetails border-2 rounded-2xl p-4">
          <div className="flex flex-row justify-center">
            <BrigaIcon />
            {/* className="w-12 h-12 mb-4" */}
          </div>
          <p className="mb-2">
            Uma imensa vontade de{' '}
            <span className=" font-bold text-colorDetails">
              não ficar em casa ou no mesmo ambiente
            </span>
            , ou não querer voltar para casa após um dia cansativo de trabalho.
          </p>
        </div>
        <div className="border-colorDetails border-2 rounded-2xl p-4">
          <div>
            <div className="flex flex-row justify-center">
              <Reciprocidade />
            </div>
            <p className="mb-2">
              Uma vida sem reciprocidade onde companheirismo e empatia não fazem
              parte da rotina do casal, pelo contrário,{' '}
              <span className=" font-bold text-colorDetails">
                o que reina é a impaciência!
              </span>
            </p>
          </div>
        </div>
        {/* CADA QUADRADO PARTE DE BAIXO */}
        <div className="border-colorDetails border-2 rounded-2xl p-4">
          <div className="flex flex-row justify-center">
            <Traicao />
          </div>
          <p className="mb-2">
            Um processo de{' '}
            <span className=" font-bold text-colorDetails">
              tentativa de superação de uma traição
            </span>{' '}
            ou situações que marcaram de maneira negativa o relacionamento.
          </p>
        </div>

        <div className="border-colorDetails border-2 rounded-2xl p-4">
          <div className="flex flex-row justify-center">
            <Pensamentos />
          </div>
          <p className="mb-2">
            Pensamentos e mais pensamentos{' '}
            <span className=" font-bold text-colorDetails">em se separar</span>,
            mas ainda acredita que existe algo a fazer que vocês ainda não
            tentaram.
          </p>
        </div>
      </div>
      <div className="text-center mt-12">
        <Agendamento text="AGENDE SUA CONSULTA" />
      </div>
    </section>
  );
};

export default Realidade;
