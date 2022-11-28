import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";

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
        <SwiperSlide className={'flex flex-col items-center'}>
          <img className={'object-center'} src={props.img}/>
        </SwiperSlide>
        {/*<SwiperSlide>*/}
        {/*  <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide>*/}
        {/*  <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>*/}
        {/*</SwiperSlide>*/}

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
        <SwiperSlide>
            <img className={'object-center'} src={props.img}/>
        </SwiperSlide>
          <SwiperSlide>
              <img className={'object-center'} src={props.img}/>
          </SwiperSlide>
          <SwiperSlide>
            <img className={'object-center'} src={props.img}/>
        </SwiperSlide>
        {/*<SwiperSlide>*/}
        {/*  <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide>*/}
      </Swiper>
    </div>
  );
};

export default ProductSlider;