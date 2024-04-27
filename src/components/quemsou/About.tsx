import React from 'react';
import Image from 'next/image';
import Bruno from '@/img/Bruno.png';

const About = () => {
  return (
    <section className="py-12 px-4 md:py-24 md:px-0 md:max-w-6xl md:mx-auto">
      <div className=" flex flex-col md:grid md:grid-cols-2 gap-8 ">
        <div className="flex flex-col gap-4 justify-center">
          <p className="text-4xl font-bold">OLÁ!</p>
          <p>
            Aqui quem fala é o Psicólogo Bruno Carlos, trabalho especialmente
            com o foco em atendimento clínico para casais e adultos com demandas
            de relacionamento. Aqui, você encontrará informações sobre os
            atendimentos, o que esperar de uma primeira sessão e claro, onde
            poderá me encontrar. Mas é claro que se achar melhor, você poderá
            clicar em qualquer um dos botões espalhados pela página de “agende
            sua consulta” que você será direcionado para o WhatsApp onde com
            prazer vou esclarecer suas dúvidas a respeito do processo de
            psicoterapia.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Image
            className=" rounded-full m-auto shadow-shadowOne md:shadow-shadowTow"
            src={Bruno}
            alt="Psicólogo Bruno Carlos"
            width={380}
            height={120}
            priority
          />
          <p className="text-sm italic text-center">CRP: 08/28594.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
