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
import {useGetSiteDetailsQuery} from "../../services/siteDetails/siteDetailsApi";

export default function ClientSlider() {
    const {data} = useGetSiteDetailsQuery();
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
                                {
                                    data && data[0].careerSlider.map((v,i)=>(
                                    <SwiperSlide key={i}>
                                        <Image src={v.image} alt="logo"
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
