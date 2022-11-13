import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./cardSlider.module.scss";
import { FreeMode, Pagination } from "swiper";
import Image from "next/image";
import {CaretLeftOutlined, RightOutlined} from "@ant-design/icons";

export default function CardSlider() {
    return (
        <>
            <div className={'CardSlider text-blue-'}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {[1,1,1,1,1,1,1].map((v,i)=>(
                        <SwiperSlide className={''}>
                            <div className={'mobile:flex'}>
                                <div className={'mobile:w-1/2 w-full'}>
                                    <Image src={'/assets/imgs/img2.jpg'} alt={"card"} height={100} width={1500}  className={'h-72 w-full rounded-l-xl'}/>
                                </div>
                                <div className={'mobile:w-1/2 w-full flex relative'}>
                                    <div className={'text-4xl pt-32 items-center -ml-6 text-white'}>
                                        <CaretLeftOutlined/>
                                    </div>
                                    <div className={'-ml-3 bg-white border-y border-r border-gray-200 rounded-r-xl'}>
                                        <h2 className={'text-lg text-center pt-10 px-2'}>WE ARE WAITING FOR YOU AT OUR STAND</h2>
                                        <div className={'text-center mt-32'}>
                                            <button className={'text-red-600 justify-center text-sm font-semibold  items-center ml-4 '}>READ MORE
                                                <span className={' font-semibold mt-0'}><RightOutlined/></span>
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
