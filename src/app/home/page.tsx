import ProductsList from "@/components/Products/ProductsList";
import BannerSwiper from "@/components/Swiper/BannerSwiper";


export default function Home() {
  const bannerImages = [
    "/images/banner/bannerImage_1.webp",
    "/images/banner/bannerImage_2.webp",
    "/images/banner/bannerImage_3.webp",
    "/images/banner/bannerImage_4.webp",
  ];

  return (
    <div className="page_container">
      <BannerSwiper images={bannerImages} />
      <ProductsList/>
    </div>
  );
}
