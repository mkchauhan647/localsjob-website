"use client";
import HotJobs from "./job-trend/HotJobs";
import StartupJobs from "./job-trend/StartupJobs";
import TopJobs from "./job-trend/TopJobs";

export interface dataProps {
  company: string;
  title: string;
  img: string;
}

const JobLeftSection = () => {
  return (
    <div className="basis-[75%] ">
      <TopJobs />
      <StartupJobs />
      <HotJobs />
      {/* <Image src="/sample-banner.jpg" width={1000} height={1000} alt="banner" className="" /> */}
    </div>
  );
};

export default JobLeftSection;
