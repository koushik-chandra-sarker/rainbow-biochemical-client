import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.module.scss";

// import required modules
import { Pagination } from "swiper";

import img1 from "./Image/download.jpeg";

export default function Slider() {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className={'h-72 w-full'}>
                    <img  className={'h-124 w-full'} src={img1}/>
                </SwiperSlide>


            </Swiper>
        </>
    );
}
