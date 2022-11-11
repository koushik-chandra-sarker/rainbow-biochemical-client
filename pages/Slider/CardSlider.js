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
import {CaretLeftOutlined, RightOutlined} from "@ant-design/icons";

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
                        <SwiperSlide className={''}>
                            <div className={'flex pr-4  hover:scale-75 ease-in duration-500'}>
                                <div className={'w-1/2'}>
                                    <Image src={'/assets/imgs/img2.jpg'} alt={"card"} height={100} width={1500}  className={'h-72 w-full rounded-l-xl'}/>
                                </div>
                                <div className={'w-1/2 flex  relative'}>
                                    <div className={'text-4xl pt-32 items-center -ml-8 text-white'}>
                                        <CaretLeftOutlined/>
                                    </div>
                                    <div className={'-ml-3 bg-white rounded-r-xl'}>
                                        <h2 className={'text-lg text-center pt-10 px-2'}>WE ARE WAITING FOR YOU AT OUR STAND</h2>
                                        <div className={'text-center mt-32'}>
                                            <button className={'text-red-600 justify-center text-sm  items-center ml-4 '}>READ MORE
                                                <RightOutlined/>
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    );
}
