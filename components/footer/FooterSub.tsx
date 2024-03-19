import React from "react";
import logo from "@/public/localsjob-logo.png";
import Image from "next/image";
import Link from "next/link";
import SubFooterTitle from "./SubFooterTitle";
const FooterSub = () => {
  return (
    <div className="border-t-[1px] border-[#515051]">
      <div className="container mx-auto flex md:flex-row flex-col items-center justify-between py-6  px-4 sm:px-6 lg:px-52 gap-3">
        {/* <SubFooterTitle/> */}
        <Link href={'/'}>
        <Image src={logo} alt="logo" className="w-28 h-8" />
        </Link>
        <div>
          <p className="text-[white] text-[14px]  font-normal my-2 xl:my-0">
             <span className="text-[white]">Terms | Privacy | © 2024 All Right Reserved. LocalsJob</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSub;

