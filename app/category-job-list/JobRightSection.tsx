"use client";
import React, { useEffect, useState } from "react";
import axios from "@/config/AxiosConfig";
import Image from "next/image";
import rightbanner from "@/public/rightbanner2.gif";
import rightbanner3 from "@/public/rightbanner3.gif";
import { JobCategories } from "@/config/dataProps";
import Loader from "@/components/loader/Loader";
import Link from "next/link";

const renderByCategory = () => {
  const [categories, setCategories] = useState<JobCategories[]>();
  const [isLoading, setIsLoading] = useState(false);
  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("/job-categories");
      setCategories(data?.data);
      console.log(data.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    categories?.map((item) => (
      <Link
        className="w-full"
        // href={`/category-job-details`}
        href={{
          pathname: "category-all-job-details",
          query: { slug: item.slugable.key },
        }}
      >
        <div
          className="flex justify-between items-center mb-2 p-2 w-full rounded-md  bg-[whitesmoke] hover:bg-slate-400"
          key={item.id}
        >
          <div>
            <span className="text-sm text-black">{item.name}</span>
          </div>
          <div className="text-[#f08c38] text-[13px] font-bold">
            <span>{item.active_jobs_count}</span>
          </div>
        </div>
      </Link>
    ))
  );
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
