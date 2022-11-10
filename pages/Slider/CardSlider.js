import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./cardSlider.module.scss";

// import required modules
import {Autoplay, FreeMode, Pagination} from "swiper";
import Image from "next/image";
import {RightOutlined} from "@ant-design/icons";

export default function CardSlider() {
    return (
        <>
            <div className={'card-slider mt-10'}>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={1}
                    freeMode={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode,Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {[1,1,1,1,1,1,1].map((v,i)=>(
                        <SwiperSlide className={' '}>
                            <div className={'flex shadow-2xl pr-4'}>
                                <div className={'w-1/2'}>
                                    <Image src={'/assets/imgs/img2.jpg'} alt={"card"} height={100} width={1500}  className={'h-72 w-full rounded-l-xl'}/>
                                </div>
                                <div className={'w-1/2 bg-gray-200 rounded-r-xl'}>
                                    <h2 className={'text-lg text-center pt-10 px-2'}>WE ARE WAITING FOR YOU AT OUR STAND</h2>
                                    <button className={'text-red-600 pt-36 pl-20 text-center'}>READ MORE<RightOutlined /></button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    );
}
