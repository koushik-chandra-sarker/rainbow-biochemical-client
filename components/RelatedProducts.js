import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

const RelatedProducts = ({products}) => {
  const {sub_category, category} = useRouter().query;
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "rgb(92,232,95)",
          "--swiper-pagination-color": "rgb(92,232,95)",
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="related-products-slider"
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 2,
          }
        }}
      >
        {
          products?.map((v, i) => (
            <SwiperSlide className={"h-full "} key={i}>
              <Link href={`/product-categories/${category}/${sub_category}/${v.id}`}
                    className={'flex flex-col bg-white items-center gap-5 p-5 cursor-pointer'}>
                <Image alt={'xcv'} src={v.thumbnail} height={2} width={1800}
                       className={"object-contain tablet:h-48 h-36"}/>
                <h2 className={'inline-block w-full whitespace-nowrap text-ellipsis overflow-hidden'}>{v.name}</h2>
              </Link>
            </SwiperSlide>

          ))}
      </Swiper>
    </div>
  );
};

export default RelatedProducts;