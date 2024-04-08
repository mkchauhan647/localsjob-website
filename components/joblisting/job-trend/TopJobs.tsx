import JobCard from "./JobCard";
import Title from "../Title";
import { useEffect, useState } from "react";
import { dataProps } from "@/config/dataProps";
import axios from "@/config/AxiosConfig";

const TopJobs = () => {
  const [topJobs, setTopJobs] = useState<dataProps[]>([]);
  const fetchTopJobs = async () => {
    try {
      const { data } = await axios.get("/home");
      setTopJobs(data.data.popular_jobs);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetchTopJobs();
  }, []);
  return (
    <div>
      <Title title="Top Jobs" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-3  bg-[whitesmoke]  px-5 py-5">
        {topJobs?.map((job) => (
          <section key={job.id} className="shadow bg-white">
            <JobCard job={job} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default TopJobs;
