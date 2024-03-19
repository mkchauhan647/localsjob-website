import React from "react";
import Image from "next/image";
import mobile from "@/public/banner1.gif";
const MobileAppBanner = () => {
  return (
    <div className=" container mx-auto pt-4  pb-1">
      <Image src={mobile} alt="mobile" className="w-full h-[auto]  " />

    </div>
  );
};

export default MobileAppBanner;
