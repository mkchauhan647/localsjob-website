import React from "react";
import { TitleProps } from "./job-trend/HotJobs";


const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1 className="text-base sm:text-xl text- my-2 font-semibold text-[rgb(0,0,0,.7)]">
      {title}
    </h1>
  );
};

export default Title;
