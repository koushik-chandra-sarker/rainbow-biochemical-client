import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.module.scss";

// import required modules
import {Autoplay, Pagination} from "swiper";
import img1 from '../../../public/assets/imgs/prfume_3_generated.jpg'
import img2 from '../../../public/assets/imgs/perfume.jpg'
import img3 from '../../../public/assets/imgs/sanitizer.jpg'
import Image from 'next/image';

export default function Slider() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper HomeSlider"
      >
        <SwiperSlide className={''}>
          <Image src={img2} alt="logo"
                 height={2}
                 width={1800}
                 className={'h-screen w-full object-cover'}
          />

        </SwiperSlide>
        <SwiperSlide className={''}>
          <Image src={img1} alt="logo"
                 className={'h-screen w-full object-cover'}
          />
        </SwiperSlide>

        <SwiperSlide className={''}>
          <Image src={img3} alt="logo"
                 className={'h-screen w-full object-cover'}
          />
        </SwiperSlide>
        <SwiperSlide className={''}>
          <Image src={'/assets/imgs/img2.jpg'} alt="logo"
                 height={2}
                 width={1800}
                 className={'h-screen w-full object-cover'}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
