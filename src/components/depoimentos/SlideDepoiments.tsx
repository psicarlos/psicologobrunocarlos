'use client';

import React from 'react';
import Image from 'next/image';
// @ts-ignore
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
//         <Image src={Depoimento1} width={350} height={250} />
//       </div>
//       <div className="flex flex-row w-[350px] h-[250px]">
//         <Image src={Depoimento1} width={350} height={250} />
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
