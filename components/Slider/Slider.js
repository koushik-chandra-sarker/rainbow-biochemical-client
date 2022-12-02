import React, {useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import img1 from '../../public/assets/imgs/prfume_3_generated.jpg'
import img2 from '../../public/assets/imgs/perfume.jpg'
import img3 from '../../public/assets/imgs/sanitizer.jpg'
import img4 from '../../public/assets/imgs/cleaner.jpg'
import Image from 'next/image';
import cls from "classnames";

const sliderContent = [
  {
    img: img1,
    title: 'Perfume',
  },
  {
    img: img2,
    title: 'Perfume',
  },
  {
    img: img3,
    title: 'Sanitizer',
  },
  {
    img: img4,
    title: 'Cleaner',
  }
]

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
              <div className={"relative"}>
                <Image src={v.image} alt={v.title}
                       height={2}
                       width={1800}
                       className={'w-full'}
                />
                <div className={'absolute top-2/4 left-40 z-20 animate__bounce'}>
                  <button
                    className={cls(" bg-blue-600 text-xl text-white rounded-3xl px-12 py-2 animate__animated ", activeSliderIndex === i ? "animate__slideInLeft" : "")}>Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
