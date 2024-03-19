import Link from "next/link";
import React from "react";

interface NavElementsProps {
    text: string;
    link: string;
  }
const NavElements = ({text,link}: NavElementsProps) => {
  return (
    <Link href={link}>
      <button className="text-[14px] text-[rgba(0,0,0,.6)]">{text}</button>
    </Link>
  );
};

export default NavElements;
