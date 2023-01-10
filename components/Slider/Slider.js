import React, {useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import Image from 'next/image';
import cls from "classnames";
import Link from "next/link";
import _ from "lodash";

export default function Slider(props) {
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);
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
        modules={[Autoplay, Pagination]}
        onSlideChange={(swiper) => setActiveSliderIndex(swiper.activeIndex)}
        className="mySwiper home-slider"
      >
        {
          // {data && data.data && data.data[0].facebook}
          //   {data && data[0].homeSlider}
          props.slider?.map((v, i) => (
            <SwiperSlide key={i}>
              <div className={"relative  hidden mobile:block "}>
                <Image src={v.image} alt={v.title ? v.title : 'Home slider'}
                       height={500}
                       width={1800}
                       className={'w-full'}
                />
                {
                  !_.isNull(v.product) ?
                    <div className={'absolute top-2/4 left-40 z-20 animate__bounce'}>
                      <Link href={`/product-categories${v.product_url}`}
                            className={cls(" bg-blue-600 text-xl text-white rounded-3xl px-12 py-2 animate__animated ", activeSliderIndex === i ? "animate__slideInLeft" : "")}>Details
                      </Link>
                    </div>
                    :
                    <></>
                }

              </div>
              <div className={"relative block mobile:hidden"}>
                <Image src={v.image_mobile} alt={v.title ? v.title : 'Home Slider'}
                       height={500}
                       width={1000}
                       className={'w-full tablet:hidden block'}
                />
                {
                  !_.isNull(v.product) &&
                  <div className={'absolute top-2/4 left-40 z-20 animate__bounce'}>
                    <button
                      className={cls(" bg-blue-600 text-xl text-white rounded-3xl px-12 py-2 animate__animated ", activeSliderIndex === i ? "animate__slideInLeft" : "")}>Details
                    </button>
                  </div>
                }

              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
