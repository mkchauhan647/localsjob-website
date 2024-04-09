"use client";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import Image from "next/image";

import rightbanner from "@/public/rightbanner2.gif";
import rightbanner3 from "@/public/rightbanner3.gif";
import axios from "../../config/AxiosConfig";
import Link from "next/link";

interface categoryData {
  id: number;
  name: string;
  active_jobs_count: number;
  slugable: {
    key: string;
  };
}

const renderByCategory = () => {
  const [categoryData, setCategoryData] = useState<categoryData[]>([]);

  const jobByCategory = async () => {
    try {
      const { data } = await axios.get("/home");
      setCategoryData(data.data.featured_categories);
    } catch (error) {
      console.log("Error:-", error);
    }
  };

  useEffect(() => {
    jobByCategory();
  }, [categoryData]);

  return categoryData?.map((item) => (
    <Link
      className="w-full"
      href={{
        pathname: "category-all-job-details",
        query: {
          slug: item.slugable.key,
        },
      }}
      key={item.id}
    >
      <div className="flex justify-between items-center mb-2 p-2 w-full rounded-md  bg-[whitesmoke]">
        <div>
          <span className="text-sm text-black">{item.name}</span>
        </div>
        <div className="text-[#f08c38] text-[13px] font-bold">
          <span>{item.active_jobs_count}</span>
        </div>
      </div>
    </Link>
  ));
};

const JobRightSection = () => {
  return (
    <div className="basis-[25%] flex flex-col text-[rgb(0,0,0,.7)] pt-11">
      <div className="shadow-xl">
        <div className="border-gray-200 border-b-2 border-t-2 px-2 py-4 min-h-[200px]">
          <Title title="Jobs by categories" />
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
