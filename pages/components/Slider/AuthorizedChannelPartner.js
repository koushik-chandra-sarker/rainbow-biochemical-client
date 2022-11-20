import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import Image from "next/image";
import img from '../../../public/assets/imgs/p2.jpg'

const AuthorizedChannelPartner = () => {
    return (
        <div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "rgb(92,232,95)",
                    "--swiper-pagination-color": "rgb(92,232,95)",
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay,Pagination, Navigation]}
                className="related-products-slider"
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 4,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 4,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 4,
                    }
                }}
            >
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((v, i) => (
                    <SwiperSlide className={"h-full"} key={i} >
                        <div className={'flex flex-col bg-white items-center gap-4 p-5 cursor-pointer'}>
                            <Image src={img} className={"object-contain tablet:h-24 h-24 w-32 "}/>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    );
};

export default AuthorizedChannelPartner;