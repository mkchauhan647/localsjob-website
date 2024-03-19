import React from "react";
const subFooterData = ["Privacy", "Terms", "Legal"];
const SubFooterTitle = () => {
  return (
    <div className="flex items-center md:gap-[48px] justify-center md:justify-start gap-[22px]">
      {subFooterData.map((data, index) => (
        <p
          key={index}
          className="text-[#97A6B7] md:text-[14px] text-[12px] font-normal max-w-[192px]"
        >
          {data}
        </p>
      ))}
    </div>
  );
};

export default SubFooterTitle;
