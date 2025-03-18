import Image from "next/image";
import styles from "./page.module.scss";
import BannerSwiper from "@/components/Swiper/BannerSwiper";

export default function Home() {
  const bannerImages = [
    "/images/banner/bannerImage_1.webp",
    "/images/banner/bannerImage_2.webp",
    "/images/banner/bannerImage_3.webp",
    "/images/banner/bannerImage_4.webp",
  ];

  return (
    <div className={styles.page_container}>
      <BannerSwiper images={bannerImages} />
    </div>
  );
}
