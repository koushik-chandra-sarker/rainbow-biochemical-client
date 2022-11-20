import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import img1 from '../../../public/assets/imgs/prfume_3_generated.jpg'
import img2 from '../../../public/assets/imgs/perfume.jpg'
import img3 from '../../../public/assets/imgs/sanitizer.jpg'
import img4 from '../../../public/assets/imgs/cleaner.jpg'
import Image from 'next/image';

export default function Slider() {
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
        className="mySwiper home-slider"
      >
        <SwiperSlide>
          <div className={"relative"}>
            <Image src={img2} alt="logo"
                   height={2}
                   width={1800}
                   className={'w-full'}
            />
            <div className={'absolute top-2/4 left-1/4 z-10 animate__bounce'}>
              <button className={" bg-blue-600 text-white rounded-3xl px-8 py-2  "} >Details</button>
            </div>
          </div>


        </SwiperSlide>
        <SwiperSlide>
          <div className={'relative'}>
            <Image src={img1} alt="logo"
                   className={' w-full'}
            />
          </div>
          <div className={'absolute top-2/4 left-1/4 z-10 animate__bounce'}>
            <button className={" bg-blue-600 text-white rounded-3xl px-8 py-2  "} >Details</button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={'relative'}>
            <Image src={img3} alt="logo"
                   className={'w-full'}
            />
          </div>
          <div className={'absolute top-2/4 left-1/4 z-10 animate__bounce'}>
            <button className={" bg-blue-600 text-white rounded-3xl px-8 py-2  "} >Details</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={'relative'}>
            <Image src={img4} alt="logo"
                   className={' w-full'}
            />
          </div>
          <div className={'absolute top-2/4 left-1/4 z-10 animate__bounce'}>
            <button className={" bg-blue-600 text-white rounded-3xl px-8 py-2  "} >Details</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
