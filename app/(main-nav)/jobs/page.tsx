import FeatureJobs from "@/components/featured-jobs/FeatureJobs";
import { FiSearch } from "react-icons/fi";
import JobSearchBar from "@/components/job-search-bar/JobSearchBar";
import JobDetails from "@/components/job-details/JobDetails";
import BreadCrumbComponent from "@/components/breadcrumb/BreadCrumbComponent";
import Link from "next/link";
const Jobs = () => {
  
  // console.log("search", search.get("search"));
  return (
    <>
      <div className="relative bg-black pt-[96px]">
        {/* Search Bar with country selection */}
        <JobSearchBar />
      </div>

      {/* BreadCrumb */}
     
      <BreadCrumbComponent />
      
      <Link href='/companies'>Intercepting routers</Link>

     
      {/* Job Details */}
      {/* <JobDetails search={search} /> */}
      <FeatureJobs relatedJob={true} />
    </>
  );
};

export default Jobs;
