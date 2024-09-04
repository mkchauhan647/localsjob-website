import FeatureJobs from "@/components/featured-jobs/FeatureJobs";
import { FiSearch } from "react-icons/fi";
import JobSearchBar from "@/components/job-search-bar/JobSearchBar";
import JobDetails from "@/components/job-details/JobDetails";
import BreadCrumbComponent from "@/components/breadcrumb/BreadCrumbComponent";
import axios from "@/config/AxiosConfig"
import { cookies } from "next/headers";
import { Job } from "@/util/types";

const JobDetailsPage = async ({ params }: { params: { jobname: string, id: string } }) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  console.log("token", token);

  console.log("params", params);

  async function fetchJobById() {
    try {
      const res = await axios.get(`/jobs/${params.id}`);

      // return res.data.data.job;
      return res.data.data;
    }
    catch (error) {
      console.log(error);
    }


 }

  const JobData:Job = await fetchJobById();

  console.log("JobData", JobData);



  return (
    <>
      <div className="relative bg-black pt-[96px]">
        {/* Search Bar with country selection */}
        <JobSearchBar />
      </div>

      {/* BreadCrumb */}
     
     <BreadCrumbComponent/>

      {/* Job Details */}
      <JobDetails JobData={JobData} />
      <FeatureJobs relatedJob={true} viewAll={false} />
    </>
  );
};

export default JobDetailsPage;
