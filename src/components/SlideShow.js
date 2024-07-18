import React from 'react'

import { Swiper, SwiperSlide, } from 'swiper/react';
import image1 from '../components/Image/Banner-1.jpg';
import image2 from '../components/Image/Banner-2.jpg';
import image3 from '../components/Image/Banner-3.jpg';

// import image4 from '../components/Image/Resolute-UI-Banner-1.jpg';
import {  Pagination,Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SlideShow = () => {
  const swiperSlides = document.querySelectorAll('.swiper-slide');
  const navButtons = document.querySelectorAll('.swiper-button-prev, .swiper-button-next');
  
  swiperSlides.forEach((slide) => {
    slide.addEventListener('mouseover', () => {
      navButtons.forEach((button) => {
        button.style.opacity = 1;
      });
    });
  
    slide.addEventListener('mouseout', () => {
      navButtons.forEach((button) => {
        button.style.opacity = 0;
      });
    });
  });
  
  navButtons.forEach((button) => {
    button.addEventListener('mouseover', () => {
      button.style.opacity = 1;
    });
  
    button.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget || !e.relatedTarget.classList.contains('swiper-button-prev') && !e.relatedTarget.classList.contains('swiper-button-next')) {
        button.style.opacity = 0;
      }
    });
  });

  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation ]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        enabled: true,
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={4000}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
      navigation={true}
    >
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src={image1}
            alt="Slide 1"
            className=" w-full md:h-[700px] h-[300px] object-cover"
          />
          <div className="absolute max-w-[1300px] mx-auto md:left-[8%] top-1/2 -translate-y-1/2 p-6 text-white">
            <h2 className="md:text-4xl font-semibold text-xl mb-2 capitalize">Fueling Innovation, <br />Empowering Tomorrow</h2>
            {/* <a href='/Pitch'>
            <button className='bg-[#0F4769] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-3 uppercase'>contact us</button>
            </a> */}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src={image2}
            alt="Slide 2"
            className="w-full md:h-[700px] h-[300px] object-cover"
          />
          <div className="absolute md:left-[9%] top-1/2 -translate-y-1/2 p-6 text-white">
            <h2 className="md:text-4xl font-semibold mb-2 text-xl capitalize">Progress<br/> is vitality</h2>
            
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src={image3}
            alt="Slide 3"
            className="w-full md:h-[700px] h-[300px] object-cover"
          />
          <div className="absolute md:left-[9%] top-1/2 -translate-y-1/2 p-6 text-white">
            <h2 className="md:text-4xl font-semibold mb-2 text-xl capitalize">Powering Possibilities,<br />Shaping Futures</h2>
            
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SlideShow