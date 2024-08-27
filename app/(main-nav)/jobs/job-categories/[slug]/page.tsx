import FeatureJobs from "@/components/featured-jobs/FeatureJobs";
import { FiSearch } from "react-icons/fi";
import JobSearchBar from "@/components/job-search-bar/JobSearchBar";
import JobDetails from "@/components/job-details/JobDetails";
import BreadCrumbComponent from "@/components/breadcrumb/BreadCrumbComponent";
import { useSearchParams } from "next/navigation";
import JobSearch from "@/components/search-jobs/JobSearch";
import axios from "@/config/AxiosConfig";
const Jobs = async ({ params }: { params: { slug: string } }) => {
  
  const search = params.slug.trim();
  console.log("search", search);
  async function fetchData() {
    try {
        const res = await axios.get(`/job-categories/${search}`);
        // const data = await res.data
        return res.data.data.data;
    } catch (error) {
        console.log(error);
    }
  }

  const data = await fetchData();
  console.log("data",data);



  



  return (
    <>
      <div className="relative bg-black pt-[96px]">
        {/* Search Bar with country selection */}
        <JobSearchBar />
      </div>

      {/* BreadCrumb */}
     
     <BreadCrumbComponent/>

      {/* Job Details */}
      {/* <JobDetails search={search} /> */}
      <JobSearch searchData={data} />
      <FeatureJobs relatedJob={true} />
    </>
  );
};

export default Jobs;
