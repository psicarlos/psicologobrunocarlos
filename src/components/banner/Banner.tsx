import React from 'react';
import Image from 'next/image';
import Bruno from '@/img/Bruno.png';

const Banner = () => {
  return (
    <section className="flex flex-rol w-full px-4 items-center justify-between text-sm lg:flex md:px-24 bg-gradient-to-b from-bgFundo via-blue-900 to-transparent">
      <div className=" md:max-w-6xl md:mx-auto">
        <div className="flex flex-col gap-2">
          <div className="pt-16 pb-12 px-4 md:px-0 md:mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-0">
              <div className="md:w-2/3">
                <h1 className="text-2xl md:text-4xl font-bold mb-2 font-titleFont text-center md:text-start">
                  AJUDO CASAIS A DESCOMPLICAREM SEUS RELACIONAMENTOS.
                </h1>
                <h2 className="text-xl mb-6 font-titleFont font-bold text-center md:text-start text-btnContato">
                  De forma prática!
                </h2>
              </div>
              <div className="md:w-1/3">
                <Image
                  className=" rounded-full m-auto shadow-shadowOne md:shadow-shadowTow"
                  src={Bruno}
                  alt="Psicólogo Bruno Carlos"
                  width={320}
                  height={120}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
