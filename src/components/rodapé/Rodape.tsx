import React from 'react';
import Whatsapp from '../icons/Whatsapp';
import Instagram from '../icons/Instagram';
import Youtube from '../icons/Youtube';
import Link from 'next/link';
import Tiktok from '../icons/Tiktok';

const Rodape = () => {
  return (
    <div className="flex flex-col w-full md:px-6 md:pb-8 items-center justify-between">
      <div className="flex flex-col w-full md:grid md:grid-cols-2 gap-8">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="footer-info">
            <h3 className=" text-2xl text-center px-1">
              Me acompanhe nas redes
            </h3>

            <div className="flex flex-row gap-4 p-2 justify-around">
              <a
                href="https://www.tiktok.com/@psicologobrunocarlos?_t=8ldZoIxRJsE&_r=1"
                target="_blank"
                className="tiktok hover:scale-125 duration-300"
              >
                <Tiktok />
              </a>

              <a
                href="https://wa.me/5544991269022?text=Ola!%20Gostaria%20de%20marcar%20um%20atendimento."
                className="whatsapp hover:scale-125 duration-300"
                target="_blank"
              >
                <Whatsapp />
              </a>

              {/* <a
                href="https://www.instagram.com/psicologobrunocarlos/"
                target="_blank"
                className="instagram hover:scale-125 duration-300"
              >
                <Instagram />
              </a> */}

              <a
                href="https://www.youtube.com/channel/UC1ExqJlPyZFRnxlORU-9C5w"
                target="_blank"
                className="youtube hover:scale-125 duration-300"
              >
                <Youtube />
              </a>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-1 justify-center">
          <h4 className=" text-2xl text-center">Links úteis</h4>

          <Link
            href="/politica-de-seguranca"
            className=" text-base p-4 text-center"
          >
            Política de privacidade
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-center">
          &copy; Copyright{' '}
          <strong>
            <span>Psicólogo Bruno Carlos</span>
          </strong>
          . Todos os direitos reservados.
        </div>

        <div className=" text-sm italic text-center text-colorDetails pb-4">
          Criado por <a href="https://pablosantos.dev">Pablo Santos</a>
        </div>
      </div>
    </div>
  );
};

export default Rodape;
