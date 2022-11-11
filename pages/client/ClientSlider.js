import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./clientSlider.module.scss";

// import required modules
import {Autoplay, Pagination} from "swiper";
import Image from "next/image";

export default function ClientSlider() {
    return (
        <>
            <div className={'clientSlider'}>
                <Swiper
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay,Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Image src={'/assets/imgs/client1.jpg'} alt="logo"
                               height={100}
                               width={1500}
                               className={'h-128 w-full object-cover '}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={'/assets/imgs/client2.jpg'} alt="logo"
                               height={100}
                               width={1500}
                               className={'h-128 w-full object-cover'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={'/assets/imgs/client3.jpg'} alt="logo"
                               height={100}
                               width={1500}
                               className={'h-128 w-full object-cover'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={'/assets/imgs/client1.jpg'} alt="logo"
                               height={100}
                               width={1500}
                               className={'h-128 w-full object-cover'}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    );
}
