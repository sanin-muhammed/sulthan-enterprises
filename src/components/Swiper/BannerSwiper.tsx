"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  images?: string[];
};

export default function BannerSwiper({ images }: Props) {
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      modules={[Pagination]}
      className="banner_image_swiper"
    >
      {images?.map((image: string, index: number) => (
        <SwiperSlide
          key={index}
          className="image_div"
        >
         
          <Image
            src={image}
            alt={`banner ${index}`}
            fill
            style={{ objectFit: "cover" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
