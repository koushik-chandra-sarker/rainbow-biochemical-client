import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Slider from "react-slick";
import "./cardSlider.module.scss";
import Image from "next/image";

export default function CardSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    centerPadding: "20%",
    speed: 500,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          centerPadding: "20%",
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          centerPadding: "30px",
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className={'CardSlider '}>
        <Slider {...settings}>
          {[1, 1, 1, 1, 1, 1, 1].map((v, i) => (
            <div className={''} key={i}>
              <div className={'mobile:flex shadow-xl rounded-lg bg-white overflow-hidden'}>
                <div className={'mobile:w-1/2 w-full'}>
                  <Image src={'/assets/imgs/img2.jpg'} alt={"card"} height={100} width={1500}
                         className={'h-72 w-full'}/>
                </div>
                <div className={'mobile:w-1/2 w-full flex justify-center items-center '}>
                  <div className={'p-20'}>
                    <h2 className={'text-lg text-center'}>WE ARE WAITING FOR YOU AT OUR STAND</h2>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>

    </>
  );
}
