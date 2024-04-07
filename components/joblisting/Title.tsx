import { TitleProps } from "@/config/dataProps";
import React from "react";

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1 className="text-base sm:text-xl text- my-2 font-semibold text-[rgb(0,0,0,.7)]">
      {title}
    </h1>
  );
};

export default Title;
