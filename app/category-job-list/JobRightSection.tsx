"use client";
import React, { useEffect, useState } from "react";
import axios from "@/config/AxiosConfig";
import Image from "next/image";

import rightbanner from "@/public/rightbanner2.gif";
import rightbanner3 from "@/public/rightbanner3.gif";
const data = [
  {
    category: "Education",
    jobs: "12 Jobs",
  },
  {
    category: "NGO/INGO",
    jobs: "30 Jobs",
  },
  {
    category: "Accounting/Finance",
    jobs: "70 Jobs",
  },
  {
    category: "Front Desk",
    jobs: "120 Jobs",
  },
  {
    category: "Front Desk",
    jobs: "65 Jobs",
  },
  {
    category: "Front Desk",
    jobs: "32 Jobs",
  },
  {
    category: "Front Desk",
    jobs: "42 Jobs",
  },
  {
    category: "Front Desk",
    jobs: "92 Jobs",
  },
  {
    category: "Front Desk",
    jobs: "102 Jobs",
  },
  {
    category: "Front Desk",
    jobs: "400 Jobs",
  },
];

const renderByCategory = () => {
  const [categories, setCategories] = useState();
  const fetchCategories = async () => {
    const { data } = await axios.get("/categories");
    console.log(data);
  };
  useEffect(() => {
    fetchCategories();
  }, [categories]);
  return data.map((item, index) => (
    <div
      className="flex justify-between items-center mb-2 p-2 w-full rounded-md  bg-[whitesmoke]"
      key={index}
    >
      <div>
        <span className="text-sm text-black">{item.category}</span>
      </div>
      <div className="text-[#f08c38] text-[13px] font-bold">
        <span>{item.jobs}</span>
      </div>
    </div>
  ));
};

const JobRightSection = () => {
  return (
    <div className="basis-[25%] flex flex-col text-[rgb(0,0,0,.7)] pt-11">
      <div className="shadow-xl">
        <div className="border-gray-200 border-b-2 border-t-2 px-2 py-4 min-h-[200px]">
          <div className="flex flex-col">
            <div className="flex flex-col items-start mx-4">
              {renderByCategory()}
            </div>
          </div>
        </div>
      </div>

      <div className=" container mx-auto  py-6">
        <Image src={rightbanner3} alt="mobile" className="w-full h-[auto]  " />
        <Image src={rightbanner} alt="mobile" className="w-full h-[auto]  " />
        <Image src={rightbanner} alt="mobile" className="w-full h-[auto]  " />
        <Image src={rightbanner3} alt="mobile" className="w-full h-[auto]  " />
        <Image src={rightbanner} alt="mobile" className="w-full h-[auto]  " />
        <Image src={rightbanner3} alt="mobile" className="w-full h-[auto]  " />
      </div>
    </div>
  );
};

export default JobRightSection;
