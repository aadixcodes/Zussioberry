'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css'; // <-- we'll put custom arrow styles here

const slides = [
  {
    bg: "/assets/Banner1.png",
    content: (
      <div className="text-center px-4 py-10 sm:py-16 md:py-24 flex flex-col items-center justify-center w-full h-full">
        <h1 className="font-[heading-1] text-3xl sm:text-4xl md:text-6xl mb-4 leading-tight sm:leading-tight md:leading-[1.1]">
          Cool Your Mind With <br className="hidden sm:block" /> Fruit Juice!
        </h1>
        <p className="mb-6 max-w-md sm:max-w-lg md:max-w-xl mx-auto text-base sm:text-lg md:text-xl text-[inter] font-[para]">
          Zussioberry serves fresh juices, shakes, and smoothies made with
          the finest ingredients for every craving. Zussioberry serves fresh
          juices, shakes, and smoothies made with the finest ingredients for
          every craving.
        </p>

        <a
          href="/menu"
          className="bg-[#23aa5d] cursor-pointer px-5 py-2 sm:px-6 sm:py-2.5 text-white rounded-lg hover:bg-green-600 text-base sm:text-lg font-[para] transition inline-block"
        >
          Explore Now
        </a>
      </div>
    ),
  },

  {
    bg: "/assets/contactBanner.png",
    content: (
      <div className="text-center px-4 py-10 sm:py-16 md:py-24 flex flex-col items-center justify-center w-full h-full">
        <h1 className="font-[heading-1] text-3xl sm:text-4xl md:text-6xl mb-4 leading-tight sm:leading-tight md:leading-[1.1]">
        Get In Touch <br /> With Us!
        </h1>
        <p className="mb-6 max-w-md sm:max-w-lg md:max-w-xl mx-auto text-base sm:text-lg md:text-xl text-[inter] font-[para]">
          Have questions or want to know more? Contact Zussioberry for franchise, feedback, or support.
          We're here to help you with all your juice and smoothie needs!
        </p>
        <a
          href="/contact"
          className="bg-[#23aa5d] cursor-pointer px-5 py-2 sm:px-6 sm:py-2.5 text-white rounded-lg hover:bg-green-600 text-base sm:text-lg font-[para] transition inline-block"
        >
          Contact Us
        </a>
      </div>
    ),
  },
];

const Slider = () => {
  return (
    <div className="relative w-full min-h-[80vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full min-h-[80vh] bg-cover bg-center relative"
              style={{ backgroundImage: `url('${slide.bg}')` }}
            >
              {/* Per-slide Content */}
              {/* Remove pointer-events-none so text can be selected and buttons can be clicked */} 
              <div className="absolute inset-0 flex items-center gap-4 justify-center text-white z-10">
                {slide.content}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
