import React from "react";
import Image from "next/image";
import { FaBriefcase } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MoreOutlined } from "@ant-design/icons";
import { ClockCircleOutlined } from "@ant-design/icons";
import { EuroOutlined } from "@ant-design/icons";
import { dataProps } from "@/config/dataProps";
import Link from "next/link";
interface JobCardProps {
  job: dataProps;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Link
      href={{
        pathname: "/category-job-details",
        query: {
          slug: job.slugable?.key,
        },
      }}
    >
      <div className=" card px-1  py-4 sm:py-4  gap-3 hover:bg-[rgb(0,0,0,.1)] duration-500 ">
        <div className="flex gap-x-2 items-center">
          {/* <Image alt="Job Image" src={job.company.logo} width={40} height={40} /> */}
          <div className="grid text-[rgb(0,0,0,.7)]">
            <div className="flex justify-between">
              <p className="font-medium min-w-full">
                {job.name?.slice(0, 30)}...
              </p>
              <div className="pl-[4.25rem]">
                <MoreOutlined />
              </div>
            </div>
            <p className="text-xs "> {job.company?.name}</p>
          </div>
        </div>
        <div className=" border mt-2 hover:border"></div>

        <div className="flex justify-between pl-4 pr-4">
          <p className="text-gray-500 text-xs flex items-center justify-start gap-1 mt-2 ">
            <FaBriefcase />
            {job.job_time || "6 months"}
          </p>

          <p className="text-xs  text-gray-500 flex items-center   justify-start gap-1 mt-2 ">
            <FaLocationDot /> {job.city?.name}
          </p>
        </div>

        <div className="flex justify-between ">
          <p className="text-gray-500 text-xs flex items-center justify-start gap-1 mt-2">
            <EuroOutlined />
            NRS ({job.salary_from} - {job.salary_to}){/* NRS (30K-40k) */}
          </p>

          <p className="text-xs text-gray-500 flex items-center   justify-start gap-1 mt-2 ">
            <ClockCircleOutlined /> 15 days left
          </p>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
