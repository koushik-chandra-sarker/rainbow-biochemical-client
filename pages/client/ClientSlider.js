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
import {useSelector} from "react-redux";

export default function ClientSlider() {
    const client = useSelector(store => store.client)
    console.log(client)

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
                                {[1,1,1].map((v,i)=>(
                                    <SwiperSlide key={i}>
                                        <Image src={'/assets/imgs/client1.jpg'} alt="logo"
                                               height={100}
                                               width={1500}
                                               className={'h-128 w-full object-cover '}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

        </>
    );
}
