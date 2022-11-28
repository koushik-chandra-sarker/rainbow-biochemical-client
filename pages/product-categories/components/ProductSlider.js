import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import _ from "lodash";
import Image from 'next/image';

const ProductSlider = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "max-height": "400px",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 "
      >
      {
          !_.isEmpty(props.images)?
              props.images.map((image,i)=>(
                  <SwiperSlide key={i}>
                      <Image className={'object-content'} src={image.url} height={10} width={100}/>
                  </SwiperSlide>
              )):
                  <SwiperSlide>
                      <Image className={'object-center'} src={''}/>
                  </SwiperSlide>


      }

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={2}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-2"
      >
          {
              !_.isEmpty(props.images)?
                  props.images.map((image,i)=>(
                      <SwiperSlide key={i}>
                          <Image className={'object-center'} src={image.url} height={2} width={100}/>
                      </SwiperSlide>
                  )):
                  <SwiperSlide>
                      <Image className={'object-center'} src={''}/>
                  </SwiperSlide>
          }
      </Swiper>
    </div>
  );
};

export default ProductSlider;