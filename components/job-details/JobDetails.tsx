'use client'
import JobOverview from "./JobOverview";
import JobSidebar from "./JobSidebar";
import JobDescription from "./JobDescription";
import JobHeader from "./JobHeader";
import { useEffect } from "react";
import { Job } from "@/util/types"

const JobDetails = ({ JobData }: { JobData: Job }) => {

    
    


    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const res = await fetch(`https://localsjob.com/v1/jobs/search-job?title=${search}`);
    //             const data = await res.json();
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // })

    return (
        <>
        
        {
          JobData && 
        < div className = " py-10 max-h-[1723px] px-4 md:px-[50px] lg:px-[130px]" >
            <div className="flex flex-col gap-8 ">
                {/* Header */}
               
                <JobHeader jobHeader={
                    {
                        name: JobData.name,
                        company: JobData.company.name,
                        apply_url: JobData.company.website,
                        featured:JobData.company.is_featured
                        
                        }
                } />

                {/* JOb Description */}

                <div className="flex justify-between gap-8 flex-col xl:flex-row">
                    {/* description */}
                                <JobDescription
                                    desc={
                                        {
                                            description: JobData.description,
                                            content: JobData.content
                                        }
                                }
                                />

                    {/* sidebar for jobs description */}
                    <div className="flex flex-col gap-8  grow">
                        {/* Salary & Location */}
                                    <JobSidebar
                                    
                                        salary_from={JobData.salary_from || 0}
                                        salary_to={JobData.salary_to || 0}
                                        location={JobData.address}
                                        salaryType="Monthly"
                                        
                                    />

                        {/* Job Information */}
                                    <JobOverview
                                    
                                        jobPosted={JobData.company.created_at}
                                        jobExpire={JobData.expired_date}
                                        jobLevel={JobData.job_level}
                                        experience={JobData.job_experience.name}
                                        education = {JobData.degree_level.name}
                                    
                                    />
                    </div>
                </div>

            </div>
        </div>
    }
        </>

    )

};

export default JobDetails;
