import React from 'react';
import Waze from '../icons/Waze';
import Maps from '../icons/Maps';
import Uber from '../icons/Uber';

const Chegar = () => {
  return (
    <section className="py-12 px-4 md:py-24 md:px-0 md:w-full md:mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Como Chegar?</h2>

      <div className=" flex flex-row gap-8 justify-around">
        <div className=" p-4 hover:scale-110 duration-300">
          <a href="https://www.waze.com/ul?ll=-23.4438794%2C-51.9361382&navigate=yes&zoom=17">
            <span className="consulta">
              <Waze />
            </span>
          </a>
        </div>

        <div className="p-4 hover:scale-110 duration-300">
          <a href="https://www.google.com/maps/place/R.+Prof.+Giampero+Monacci,+337+-+Jardim+Novo+Horizonte,+Maring%C3%A1+-+PR,+87010-090/@-23.4438794,-51.9361382,17z/data=!4m16!1m9!3m8!1s0x94ecd0b2da7ccaf9:0x26a5050eca04f245!2sR.+Prof.+Giampero+Monacci,+337+-+Jardim+Novo+Horizonte,+Maring%C3%A1+-+PR,+87010-090!3b1!8m2!3d-23.4440144!4d-51.93609!10e5!16s%2Fg%2F11hb7qfvc_!3m5!1s0x94ecd0b2da7ccaf9:0x26a5050eca04f245!8m2!3d-23.4440144!4d-51.93609!16s%2Fg%2F11hb7qfvc_?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D">
            <span className="consulta">
              <Maps />
            </span>
          </a>
        </div>

        <div className="p-4 hover:scale-110 duration-300">
          <a href="https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=Psicologo%20Bruno%20Carlos&dropoff[latitude]=-23.4438794&dropoff[longitude]=-51.9361382">
            <span className="consulta">
              <Uber />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Chegar;
