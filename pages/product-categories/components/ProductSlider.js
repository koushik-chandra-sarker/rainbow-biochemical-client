import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import _ from "lodash";
import Image from 'next/image';

const ProductSlider = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState();
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
        className="product_slider"
      >
        {
          !_.isEmpty(props.images) ?
            props.images.map((image, i) => (
              <SwiperSlide key={i}>
                <Image className={'object-content'} src={image.url} height={100} width={530}/>
              </SwiperSlide>
            )) :
            <SwiperSlide>
              <Image className={'object-center'} src={''}/>
            </SwiperSlide>


        }

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product_slider_thumb"
      >
        {
          !_.isEmpty(props.images) ?
            props.images.map((image, i) => (
              <SwiperSlide key={i} className={i === 0 ? "swiper-slide-thumb-active" : ""}>
                <Image className={'object-center'} src={image.url} height={2} width={100}/>
              </SwiperSlide>
            )) :
            <SwiperSlide>
              <Image className={'object-center'} src={''}/>
            </SwiperSlide>
        }
      </Swiper>
    </div>
  );
};

export default ProductSlider;