import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./Slider.scss";
// import required modules
import {Autoplay, Pagination} from "swiper";
import img1 from '../../../public/assets/imgs/prfume_3_generated.jpg'
import img2 from '../../../public/assets/imgs/perfume.jpg'
import img3 from '../../../public/assets/imgs/sanitizer.jpg'
import img4 from '../../../public/assets/imgs/cleaner.jpg'
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
        className="mySwiper home-slider"
      >
        <SwiperSlide className={''}>
          <Image src={img2} alt="logo"
                 height={2}
                 width={1800}
                 className={'w-full'}
          />

        </SwiperSlide>
        <SwiperSlide className={''}>
          <Image src={img1} alt="logo"
                 className={' w-full'}
          />
        </SwiperSlide>

        <SwiperSlide className={''}>
          <Image src={img3} alt="logo"
                 className={'w-full'}
          />
        </SwiperSlide>
        <SwiperSlide className={''}>
          <Image src={img4} alt="logo"
                 className={' w-full'}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
