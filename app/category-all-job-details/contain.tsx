import React, { useEffect, useState } from "react";
import { FcNook } from "react-icons/fc";
import { useSearchParams } from "next/navigation";
import axios from "@/config/AxiosConfig";
import {
  ClockCircleOutlined,
  EuroOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { FaBriefcase } from "react-icons/fa";
import Link from "next/link";
import { CategoryDetails } from "@/config/dataProps";
import Loader from "@/components/loader/Loader";

const contain = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const [isLoading, setIsLoading] = useState(false);
  const [categoryDetails, setCategoryDetails] = useState<
    CategoryDetails | undefined
  >({
    category: {
      id: 1,
      name: "",
      description: "",
      status: {
        label: "",
        value: "",
      },
    },
    jobs: {
      data: [],
    },
  });

  const fetchCategorySingleDetails = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/job-categories/${slug}`);
      setCategoryDetails(data?.data);
      setIsLoading(false);
      console.log(data.data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCategorySingleDetails();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="w-[90vw] container p-2">
      <div className="flex flex-col pb-4 border-b-2">
        <div className="flex justify-between w-full items-center ">
          <h1 className="text-center text-2xl font-semibold">
            Job Category :{" "}
            <span className="font-sm font-medium">
              {categoryDetails?.category.name}
            </span>
          </h1>
          <p>
            <span className="font-bold uppercase">Job: </span>
            {categoryDetails?.category.status.label}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <p>Views: </p>
            <span>{categoryDetails?.category.id}</span>
          </div>
          <p>{categoryDetails?.category.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 ">
        {categoryDetails?.jobs.data.map((job) => (
          <Link
            href={{
              pathname: "/category-job-details",
              query: {
                slug: job.slugable.key,
              },
            }}
            key={job.id}
          >
            <div className=" border-slate-400 rounded-sm  shadow-md py-4 sm:py-4  hover:bg-[rgb(0,0,0,.1)] duration-500">
              <div className="flex gap-x-2 items-center">
                <div className="grid text-[rgb(0,0,0,.7)]">
                  <div className="flex justify-between">
                    <p className="font-medium min-w-full">
                      {job.name.length < 30
                        ? job.name
                        : job.name.slice(0, 25) + " ..."}
                    </p>
                    <div className="pl-[4.25rem]">
                      <MoreOutlined />
                    </div>
                  </div>
                  <p className="text-xs "> {job.company.name}</p>
                </div>
              </div>
              <div className=" border mt-2 hover:border"></div>

              <div className="flex justify-between pl-4 pr-4">
                <p className="text-gray-500 text-xs flex items-center justify-start gap-1 mt-2 ">
                  <FaBriefcase />
                  {job.job_experience.name || "6 months"}
                </p>

                <p className="text-xs  text-gray-500 flex items-center   justify-start gap-1 mt-2 ">
                  <FcNook />
                  {job.job_types.map((type) => type.name)}
                </p>
              </div>

              <div className="flex justify-between ">
                <p className="text-gray-500 text-[10px] flex items-center justify-start px-4 gap-1 mt-2">
                  <EuroOutlined />
                  NRS ({job.salary_from} - {job.salary_to}){/* NRS (30K-40k) */}
                </p>

                <p className="text-[10px] text-gray-500 flex items-center  px-4 justify-start gap-1 mt-2 ">
                  <ClockCircleOutlined /> 15 days left
                </p>
              </div>
              <div className="flex mt-5 text-xs justify-between  items-center gap-3 px-2">
                <div className="flex items-center ">
                  <p className=" font-semibold">Skills:</p>
                  {job.tags.map((tag) => (
                    <span className="font-light">{tag.name}</span>
                  ))}
                </div>

                <div>Views:{job.views}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default contain;
