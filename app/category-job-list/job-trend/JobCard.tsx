import React from "react";
import Image from "next/image";

import { FaLocationDot } from "react-icons/fa6";
import { EyeOutlined } from "@ant-design/icons";
import { ClockCircleOutlined } from "@ant-design/icons";

import { BulbOutlined } from "@ant-design/icons";
import { JobDataProps } from "@/config/dataProps";
import Link from "next/link";

interface JobCardProps {
  job: JobDataProps;
}
const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Link
      href={{
        pathname: "/category-job-details",
        query: {
          slug: job.slugable.key,
        },
      }}
    >
      <div className=" card  py-4 cursor-pointer  gap-6 hover:bg-[rgb(0,0,0,.1)] duration-500">
        <div className="lg:flex detailstitle  md:grid gap-x-2 items-center  lg:pl-14 md:p-6 sm:p-6">
          {/* <Image alt="Job Image" src={job.img} width={80} height={80} /> */}
          <div className="grid ">
            <div className="flex justify-between text-[#0d64cc]">
              <p className=" font-[800]"> {job.name}</p>
            </div>
            <p className="text-[16px] font[600] mt-2 "> {job.company.name}</p>

            <p className="text-[14px] text-gray-500 flex items-center justify-start gap-1 mt-2">
              <FaLocationDot /> {job.state.name} {job.state.abbreviation}
              {/* Include location here */}
            </p>

            <p className="text-[14px] text-gray-500 flex items-center justify-start gap-1 mt-2">
              <BulbOutlined /> {job.skills.map((skill) => skill.name)}{" "}
              {/* Include location here */}
            </p>

            <p>{job.company.description}</p>
          </div>
        </div>
        <div className=" border mt-2 hover:border"></div>

        <div className="lg:flex   md:grid justify-between pl-4 pr-4">
          <p className="text-gray-500 text-[14px] flex items-center justify-start gap-1 mt-2 ">
            <ClockCircleOutlined />
            Apply Before : 1 weak from now
          </p>

          <p className="text-[14px]  text-gray-500 flex items-center   justify-start gap-1 mt-2 ">
            <EyeOutlined />
            View : {job.views}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
