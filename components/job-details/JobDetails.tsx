
import JobOverview from "./JobOverview";
import JobSidebar from "./JobSidebar";
import JobDescription from "./JobDescription";
import JobHeader from "./JobHeader";
const JobDetails = () => {

    return (
        
        <div className=" py-10 min-h-[1723px] px-4 md:px-[50px] lg:px-[130px]">
            <div className="flex flex-col gap-8 ">
                {/* Header */}
               
                <JobHeader/>

                {/* JOb Description */}

                <div className="flex justify-between gap-8 flex-col xl:flex-row">
                    {/* description */}
                    <JobDescription/>

                    {/* sidebar for jobs description */}
                    <div className="flex flex-col gap-8  grow">
                        {/* Salary & Location */}
                       <JobSidebar/>

                        {/* Job Information */}
                    <JobOverview/>
                    </div>
                </div>

            </div>
        </div>
    )

};

export default JobDetails;