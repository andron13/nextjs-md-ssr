'use client';

import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ArrowLeft from './ui/LeftArrow';
import ArrowRight from './ui/RightArrow';
import first from '../../public/assets/img/food_1.jpg';
import second from '../../public/assets/img/food_2.jpg';
import third from '../../public/assets/img/food_3.jpg';

export default function Slider() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{ nextEl: '.myNext', prevEl: '.myPrev' }}
        pagination={{
          clickable: true,
          el: '.myPag',
          modifierClass: 'myPag-',
        }}
        scrollbar={{ draggable: true }}
        className="max-w-[670px] rounded-[35px]"
      >
        <SwiperSlide>
          <Image src={first} className="mySlide" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={second} className="mySlide" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={third} className="mySlide" alt="" />
        </SwiperSlide>
        <div className="flex w-full justify-center gap-5 mt-10">
          <button className="myPrev p-2 cursor-pointer">
            <ArrowLeft />
          </button>
          <div className="myPag flex justify-around items-center gap-[10px]"></div>
          <button className="myNext p-2 cursor-pointer">
            <ArrowRight />
          </button>
        </div>
      </Swiper>
    </div>
  );
}
