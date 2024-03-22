import React from "react";
import Image from "next/image";
import banner from "@/public/banner.jpg";
import Contain from "../contain";

import image from "@/public/company1.jpg";

const TopJobs = () => {
  return (
    <>
    <div className="bg-whitesmoke mt-11 mb-3 relative">
      <div className="absolute inset-0 bg-black opacity-50  "></div>
      <Image
        src={banner}
        alt="person and urban landscape"
        className="z-0 h-150  xl:h-300 sm:h-[173px] md:h-[173px] bannerimage "
      />
      <div className="absolute pb-110 pl-236 gap-3 transform -translate-x-1/2 -translate-y-1/2 bg-rgb-0-0-0-0-2 sm:bg-transparent p-3 rounded-md">
        <div className="flex gap-x-2 items-center lg:pl-[25.5rem] lg:pb-[98px] md:pl-[240px] md:pb-[138px] sm:pl-[317px] sm:pb-[138px] imagebox">
          <Image alt="Job Image" src={image} width={80} height={80} />
          <div className="grid">
            <div className="flex justify-between text-0d64cc">
              <p className="font-[800] text-white"> Receptionist</p>
            </div>
            <p className="text-16px font-[600] mt-2 text-white">Siddhartha Bussiness Group..</p>
          </div>
        </div>
      </div>
     
    </div>

<Contain/>
</>
  );
};


export default TopJobs;
