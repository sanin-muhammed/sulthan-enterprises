"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Splash = () => {
  const router = useRouter();
  return (
    <div
      className="splash_page"
      onClick={() => router.push("/home")}
    >
      <div className="splash_img_div">
        <Image
          fill
          src="/images/sulthan_enterprise_logo_2.png"
          className="splash_img"
          objectFit="contain"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Splash;
