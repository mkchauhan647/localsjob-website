import React from "react";
import Title from "../Title";
import JobCard from "./JobCard";

export interface Job {
  company: string;
  title: string;
  img: string;
}
export interface TitleProps {
  title: string;
}

const data: Job[] = [
  { company: "Siddhartha Bussiness Group..", title: "Receptionist", img: "/company1.jpg" },
  { company: "Siddhartha Bussiness Group..", title: "Receptionist", img: "/company1.jpg" },
  { company: "Siddhartha Bussiness Group..", title: "Receptionist", img: "/company1.jpg" },
  { company: "Siddhartha Bussiness Group..", title: "Receptionist", img: "/company1.jpg" },
  { company: "Siddhartha Bussiness Group..", title: "Receptionist", img: "/company1.jpg" },
  { company: "Siddhartha Bussiness Group..", title: "Receptionist", img: "/company1.jpg" },
];

const HotJobs: React.FC = () => {
  return (
    <div>
      <Title title="Hot Jobs" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-3  bg-[whitesmoke]  px-5 py-5">
        {data.map((job, index) => (
          <section key={index} className="shadow bg-white">
            <JobCard job={job} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
