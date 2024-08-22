import Link from "next/link";
import React from "react";

interface NavElementsProps {
    text: string;
    link: string;
  }
const NavElements = ({text,link}: NavElementsProps) => {
  return (
    <Link href={link} className="relative">
    <button className="text-[16px] text-[rgba(0,0,0,.6)] font-roboto font-medium tracking-[1.5px] 
    after:content-[''] after:block after:h-[4px] after:bg-white after:w-[0%] after:absolute after:bottom-0
    after:transition-all after:duration-500 after:ease-in-out
    hover:after:w-full
">
      {text}
    </button>
  </Link>
  
  );
};

export default NavElements;
