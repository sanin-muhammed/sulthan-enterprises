"use client";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  images?: string[];
};

export default function BannerSwiper({ images }: Props) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="banner_image_swiper"
      >
        {images?.length &&
          images?.map((image: any, index: any) => (
            <SwiperSlide
              key={index}
              className="image_div"
            >
              <img
                src={image}
                alt={`banner ${index}`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
