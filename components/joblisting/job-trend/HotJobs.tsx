import React, { useEffect, useState } from "react";
import Title from "../Title";
import JobCard from "./JobCard";
import { dataProps } from "@/config/dataProps";
import axios from "@/config/AxiosConfig";

const HotJobs: React.FC = () => {
  const [hotJobsData, setHotJobsData] = useState<dataProps[]>([]);
  const hotJobs = async () => {
    const { data } = await axios.get("/home");
    setHotJobsData(data.data.featured_jobs);
  };
  useEffect(() => {
    hotJobs();
  }, []);
  return (
    <div>
      <Title title="Hot Jobs" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-3  bg-[whitesmoke]  px-5 py-5">
        {hotJobsData?.map((job) => (
          <section key={job.id} className="shadow bg-white">
            <JobCard job={job} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
