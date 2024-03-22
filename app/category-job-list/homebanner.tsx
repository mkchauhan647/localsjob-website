import React from "react";
import Image from "next/image";
import banner from "@/public/banner.jpg";
import { FiSearch } from "react-icons/fi";
const HomeBanner = () => {
  return (

    <div className="relative w-full ">
        <div className="absolute inset-0 bg-black opacity-50"></div>


  
      <Image src={banner} alt="person and urban landscape" className="z-0 h-[150px] sm:h-full xl:h-[300px] " />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgb(0,0,0,.2)] sm:bg-transparent p-3 rounded-md">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-xl md:text-3xl xl:text-2xl font-bold text-white">Explored Top Skilled Professionals For your Work </h1>
          <h2 className=" text-base md:text-xl  font-semibold text-white">
          15K+ Professionals are register 

          </h2>
        </div>
        <div className="mt-5 md:mt-8 xl:mt-10">
          <div className="relative ">
            <div className="absolute inset-y-0 right-0 flex items-center px-3 text-white">
              <FiSearch />
            </div>
            <input
              className="bg-[#0d64cc] border  rounded-md min-w-[280px] sm:min-w-[375px] xl:min-w-[600px] text-[8px] sm:text-xs outline-none p-2 text-white placeholder:text-gray-300"
              placeholder="Manager"
            />
          </div>
        </div>
      </div>
    </div>



  );
};

export default HomeBanner;
