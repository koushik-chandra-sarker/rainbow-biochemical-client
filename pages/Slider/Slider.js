import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.module.scss";

// import required modules
import {Autoplay, Pagination} from "swiper";
// import img from '../../public/assets/imgs/img.png'
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
                modules={[Autoplay,Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className={''}>
                    <Image src={'/assets/imgs/img2.jpg'} alt="logo"
                           height={2}
                           width={1800}
                           className={'h-screen w-full '}
                    />

                </SwiperSlide>
                <SwiperSlide className={''}>
                    <Image src={'/assets/imgs/img1.jpg'} alt="logo"
                           height={2}
                           width={1800}
                           className={'h-screen w-full'}
                    />
                </SwiperSlide>

                <SwiperSlide className={''}>
                    <Image src={'/assets/imgs/img3.jpg'} alt="logo"
                           height={2}
                           width={1800}
                           className={'h-screen w-full'}
                    />
                </SwiperSlide>
                <SwiperSlide className={''}>
                    <Image src={'/assets/imgs/img4.jpg'} alt="logo"
                           height={2}
                           width={1800}
                           className={'h-screen w-full'}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
