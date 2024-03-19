"use client"
import HotJobs from "./job-trend/HotJobs";
import TopJobs from "./job-trend/TopJobs";
import Image from "next/image";
import StartupJobs from "./job-trend/StartupJobs";

export interface dataProps {
  company: string;
  title: string;
  img: string;
}

const data: dataProps[] = [
  { company: "Google", title: "UX Designer", img: "/google.png" },
  { company: "Facebook", title: "Software Engineer", img: "/google.png" },
  { company: "Amazon", title: "Product Manager", img: "/google.png" },
  { company: "Netflix", title: "Data Scientist", img: "/netflix.png" },
  { company: "Google", title: "UX Designer", img: "/google.png" },
  { company: "Facebook", title: "Software Engineer", img: "/google.png" },
  { company: "Amazon", title: "Product Manager", img: "/google.png" },
  { company: "Netflix", title: "Data Scientist", img: "/netflix.png" },
  { company: "Google", title: "UX Designer", img: "/google.png" },
  { company: "Facebook", title: "Software Engineer", img: "/google.png" },
  { company: "Amazon", title: "Product Manager", img: "/google.png" },
  { company: "Netflix", title: "Data Scientist", img: "/netflix.png" },
];



const JobLeftSection = () => {
  return (
    <div className="basis-[75%] ">
      <TopJobs />
      {/* <Image src="/sample-banner.jpg" width={1000} height={1000} alt="banner" className="" /> */}
      <HotJobs />
      <StartupJobs />
    </div>
  );
};

export default JobLeftSection;
