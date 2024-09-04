import FeatureJobs from "@/components/featured-jobs/FeatureJobs";
import { FiSearch } from "react-icons/fi";
import JobSearchBar from "@/components/job-search-bar/JobSearchBar";
import JobDetails from "@/components/job-details/JobDetails";
import BreadCrumbComponent from "@/components/breadcrumb/BreadCrumbComponent";
import Link from "next/link";
import AllJobs from "@/components/all-jobs/AllJobs";
import axios from "@/config/AxiosConfig";
import { Job } from "@/util/types";
const Jobs = async () => {
  
  // console.log("search", search.get("search"));

  async function getCategories() {


    try {
        const res = await axios.get('/all-jobs');
  
  
        return res.data.data.data;
    }
    catch (error) {
        console.log(error);
    }
  
    return;
  }

  const categories: Job[] = await getCategories();



  return (
    <>
      <div className="relative bg-black pt-[96px]">
        {/* Search Bar with country selection */}
        <JobSearchBar />
      </div>

      {/* BreadCrumb */}
     
      <BreadCrumbComponent />
      

     
      {/* Job Details */}
      {/* <JobDetails search={search} /> */}
      {/* <FeatureJobs relatedJob={true} viewAll={true} /> */}
      <AllJobs categories={categories}/>
    </>
  );
};

export default Jobs;


