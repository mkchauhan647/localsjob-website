import { JobDataProps } from "@/config/dataProps";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios from "@/config/AxiosConfig";

const TopJobs = () => {
  const [jobData, setJobData] = useState<JobDataProps[]>();
  const fetchJobDetails = async () => {
    try {
      const { data } = await axios.get("/jobs");
      setJobData(data.data.data);
      console.log(data.data.data, "JobDatas");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobDetails();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-3 gap-x-3  bg-[whitesmoke]  px-5 py-5  mt-11 mb-11">
        {jobData?.map((job) => (
          <section key={job.id} className="shadow bg-white">
            <JobCard job={job} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default TopJobs;
