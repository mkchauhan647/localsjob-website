import React from "react";
import Image from "next/image";
import mobile from "@/public/mobile.jpg";
const MobileAppBanner = () => {
  return (
    <div className="relative container mx-auto mb-6 py-6">
      <div className="px-4 sm:px-10 grid gap-y-4 md:flex items-center justify-center md:justify-between lg:justify-center lg:gap-14 ">
      <div className="flex flex-col  items-center md:items-start">
        <h1 className=" text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold text-[rgb(0,0,0,.7)]">
          Aba goji check garda job vetiyo
        </h1>
        <h2 className="  text-sm sm:text-base md:text-lg  font-medium text-[rgb(0,0,0,.7)]">
          Get our mobile app on android and ios
        </h2>
      </div>
      <Image src={mobile} alt="mobile" className=" max-w-[280px] sm:max-w-[350px] " />
    </div>
    </div>
  );
};

export default MobileAppBanner;
