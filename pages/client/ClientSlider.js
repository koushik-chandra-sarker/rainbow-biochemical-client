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
            {
                client.loading?
                    <>

                    </>:
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
                                    !_.isEmpty(client.data) ?
                                        !_.isEmpty(client.data[0].clientSlider) ?
                                            client.data[0].clientSlider.map((v, i) => (
                                                <SwiperSlide>
                                                    <Image alt="clientSlider" height={100} width={1800} key={i} src={v.image} className={'h-128 w-full object-cover'}/>
                                                </SwiperSlide>
                                            ))

                                            : <>Content Not Found</>
                                        : <>Content Not Found</>
                                }
                                {/*<SwiperSlide>*/}
                                {/*    <Image src={'/assets/imgs/client1.jpg'} alt="logo"*/}
                                {/*           height={100}*/}
                                {/*           width={1500}*/}
                                {/*       i    className={'h-128 w-full object-cover '}*/}
                                {/*    />*/}
                                {/*</SwiperSlide>*/}
                                {/*<SwiperSlide>*/}
                                {/*    <Image src={'/assets/imgs/client2.jpg'} alt="logo"*/}
                                {/*           height={100}*/}
                                {/*           width={1500}*/}
                                {/*           className={'h-128 w-full object-cover'}*/}
                                {/*    />*/}
                                {/*</SwiperSlide>*/}
                                {/*<SwiperSlide>*/}
                                {/*    <Image src={'/assets/imgs/client3.jpg'} alt="logo"*/}
                                {/*           height={100}*/}
                                {/*           width={1500}*/}
                                {/*           className={'h-128 w-full object-cover'}*/}
                                {/*    />*/}
                                {/*</SwiperSlide>*/}
                                {/*<SwiperSlide>*/}
                                {/*    <Image src={'/assets/imgs/client1.jpg'} alt="logo"*/}
                                {/*           height={100}*/}
                                {/*           width={1500}*/}
                                {/*           className={'h-128 w-full object-cover'}*/}
                                {/*    />*/}
                                {/*</SwiperSlide>*/}
                            </Swiper>
                        </div>
                    </>
            }


        </>
    );
}
