'use client';

import React from 'react';
import Image from 'next/image';
// @ts-ignore
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Depo1 from '@/img/depoimentos/depo1.jpg';
import Depo2 from '@/img/depoimentos/depo2.jpg';
import Depo3 from '@/img/depoimentos/depo3.jpg';
import Depo4 from '@/img/depoimentos/depo4.jpg';
import Depo5 from '@/img/depoimentos/depo5.jpg';
import Depo6 from '@/img/depoimentos/depo6.jpg';
import Depo7 from '@/img/depoimentos/depo7.jpg';
import Depo8 from '@/img/depoimentos/depo8.jpg';
import Depo9 from '@/img/depoimentos/depo9.jpg';
import Depo10 from '@/img/depoimentos/depo10.jpg';
import Depoimento1 from '@/img/depoimentos/depoimento1.jpg';
import Depoimento2 from '@/img/depoimentos/depoimento2.jpg';
import Depoimento3 from '@/img/depoimentos/depoimento3.jpg';
import Depoimento4 from '@/img/depoimentos/depoimento4.jpg';
import Depoimento5 from '@/img/depoimentos/depoimento5.jpg';
import Depoimento6 from '@/img/depoimentos/depoimento6.jpg';
import Depoimento7 from '@/img/depoimentos/depoimento7.jpg';
import Depoimento8 from '@/img/depoimentos/depoimento8.jpg';

function SlideDepoiments() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // Exibe apenas um slide de cada vez
    slidesToScroll: 1, // Rola apenas um slide de cada vez
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container justify-center align-middle items-center">
      <Slider {...settings}>
        <div className="slide-item">
          <Image src={Depo1} alt="depoimento dos clientes" className=" px-2" />
        </div>
        <div className="slide-item">
          <Image src={Depo2} alt="depoimento dos clientes" className=" px-2" />
        </div>
        <div className="slide-item">
          <Image src={Depo3} alt="depoimento dos clientes" className=" px-2" />
        </div>
        <div className="slide-item">
          <Image src={Depo4} alt="depoimento dos clientes" className=" px-2" />
        </div>
        <div className="slide-item">
          <Image src={Depo5} alt="depoimento dos clientes" className=" px-2" />
        </div>
        <div className="slide-item">
          <Image src={Depo6} alt="depoimento dos clientes" className=" px-2" />
        </div>
        <div className="slide-item">
          <Image src={Depo7} alt="depoimento dos clientes" className=" px-2" />
        </div>
        <div className="slide-item">
          <Image src={Depo8} alt="depoimento dos clientes" className=" px-2" />
        </div>
        <div className="slide-item">
          <Image src={Depo9} alt="depoimento dos clientes" className=" px-2" />
        </div>
        <div className="slide-item">
          <Image src={Depo10} alt="depoimento dos clientes" className=" px-2" />
        </div>
        <div className="slide-item">
          <Image
            src={Depoimento1}
            alt="depoimento dos clientes"
            className=" px-2"
          />
        </div>
        <div className="slide-item">
          <Image
            src={Depoimento2}
            alt="depoimento dos clientes"
            className=" px-2"
          />
        </div>
        <div className="slide-item">
          <Image
            src={Depoimento3}
            alt="depoimento dos clientes"
            className=" px-2"
          />
        </div>
        <div className="slide-item">
          <Image
            src={Depoimento4}
            alt="depoimento dos clientes"
            className=" px-2"
          />
        </div>
        <div className="slide-item">
          <Image
            src={Depoimento5}
            alt="depoimento dos clientes"
            className=" px-2"
          />
        </div>
        <div className="slide-item">
          <Image
            src={Depoimento6}
            alt="depoimento dos clientes"
            className=" px-2"
          />
        </div>
        <div className="slide-item">
          <Image
            src={Depoimento7}
            alt="depoimento dos clientes"
            className=" px-2"
          />
        </div>
        <div className="slide-item">
          <Image
            src={Depoimento8}
            alt="depoimento dos clientes"
            className=" px-2"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SlideDepoiments;

//     <Slider {...settings}>

//       {/* <div className="flex flex-row w-[350px] h-[250px]">
//         <Image src={Depo1} width={350} height={250} />
//       </div>
//       <div className="flex flex-row w-[350px] h-[250px]">
//         <Image src={Depo1} width={350} height={250} />
//       </div>
//       <div className="flex flex-row w-[350px] h-[250px]">
//         <Image src={Depoimento1} width={350} height={250} />
//       </div>
//       <div className="flex flex-row w-[350px] h-[250px]">
//         <Image src={Depoimento1} width={350} height={250} />
//       </div> */}
//     </Slider>
//   );
// }
