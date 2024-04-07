import JobCard from "./JobCard";
import Title from "../Title";
import { useEffect, useState } from "react";
import axios from "../../../config/AxiosConfig";
import { dataProps } from "@/config/dataProps";

const StartupJobs = () => {
  const [popularJobs, setPopularJobs] = useState<dataProps[]>([]);
  const getHomeData = async () => {
    const { data } = await axios.get("/home");
    setPopularJobs(data.data.recent_jobs);
  };

  useEffect(() => {
    getHomeData();
  }, []);
  return (
    <div>
      <Title title="Startup Jobs" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-3  bg-[whitesmoke]  px-5 py-5">
        {popularJobs?.map((job) => (
          <section key={job.id} className="shadow bg-white">
            <JobCard job={job} />
          </section>
        ))}
        {/* {popularJobs?.map((job) => {
          <section key={job.id} className="shadow bg-white">
            <JobCard job={job} />
          </section>;
        })} */}
      </div>
    </div>
  );
};

export default StartupJobs;
