import React from 'react';
import Waze from '../icons/Waze';
import Maps from '../icons/Maps';
import Uber from '../icons/Uber';

const Chegar = () => {
  return (
    <section className="py-24 px-4 md:px-0 md:w-full md:mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Como Chegar?</h2>

      <div className=" flex flex-row gap-8 justify-around">
        <div className=" p-4 hover:scale-110 duration-300">
          <a href="https://www.waze.com/ul?ll=-23.4449838%2C-51.9344187&navigate=yes&zoom=17">
            <span className="consulta">
              <Waze />
            </span>
          </a>
        </div>

        <div className="p-4 hover:scale-110 duration-300">
          <a href="https://www.google.com/maps/place/R.+Jouji+Nakamura,+166+-+Jardim+Novo+Horizonte,+Maring%C3%A1+-+PR,+87010-110/@-23.4449838,-51.9344187,3a,75y,351.89h,90.37t/data=!3m6!1e1!3m4!1sr4bl3cudqAF5o36A_WEwpg!2e0!7i16384!8i8192!4m5!3m4!1s0x94ecd0b288e9ee57:0x67d81b26cb27b871!8m2!3d-23.4448848!4d-51.9344689">
            <span className="consulta">
              <Maps />
            </span>
          </a>
        </div>

        <div className="p-4 hover:scale-110 duration-300">
          <a href="https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=Psicologo%20Bruno%20Carlos&dropoff[latitude]=-23.4449838&dropoff[longitude]=-51.9344187">
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
