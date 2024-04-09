import { JobDataProps } from "@/config/dataProps";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios from "@/config/AxiosConfig";
import Loader from "@/components/loader/Loader";

const TopJobs = () => {
  const [jobData, setJobData] = useState<JobDataProps[]>();
  const [isLoading, setIsLoading] = useState(false);
  const fetchJobDetails = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("/jobs");
      setJobData(data.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJobDetails();
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-3 gap-x-3  bg-[whitesmoke]  px-5 py-5  mt-11 mb-11">
          {jobData?.map((job) => (
            <section key={job.id} className="shadow bg-white">
              <JobCard job={job} />
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopJobs;
