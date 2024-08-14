import React from "react";

const JobCategoryCard = ({ bgColor, icon, title, positions }:{bgColor:string,icon:React.ReactElement,title:string,positions:number}) => {
    return (
      <div className="bg-white text-black gap-6 p-6 h-[116px] w-auto xl:w-[312px] rounded-lg flex items-center justify-start">
        {/* <div className=" p-[18px]"> */}
          {icon}
        {/* </div> */}
        <div className="flex flex-col">
          <span className="text-[18px] font-medium">{title}</span>
          <span className="mt-1 font-normal text-[#767F8C]">{positions} Open Position</span>
        </div>
      </div>
    );
};
  
export default JobCategoryCard;
  