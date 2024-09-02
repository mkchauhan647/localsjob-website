'use client'
import Link from "next/link";
import { PiBookmarkSimple } from "react-icons/pi";
import { useState } from "react";
import JobApplication from "../job-apply/JobApply";
interface JobHeaderType{
    name: string,
    company: string,
    featured: Number,
    type?: string,
    apply_url: string,
    logo: string
    id?: number
    
    
}


const JobHeader = ({ jobHeader }: { jobHeader: JobHeaderType }) => {
    console.log("jobHeader", jobHeader);
    
    const [jobApplyModel, setJobApplyModel] = useState(false);




    return (
        <>
        <div className="flex justify-between items-center xl:h-[96px] gap-8 flex-wrap ">
            <div className="flex justify-between items-center gap-4">
                {/* <div className="w-[85px] md:w-[96px] h-[85px] md:h-[96px] rounded-full overflow-hidden"> */}
                <img
                    // src="/f1soft.png"
                    src={`${jobHeader.logo ? `https://main.localsjob.com/storage/${jobHeader.logo}` : "/f1soft.png"}`}

                    alt="company logo"
                    className="w-[85px] md:w-[96px] h-[85px] md:h-[96px] rounded-full object-scale-down"
                />
               {/* </div> */}

                <div className="flex flex-col gap-3 mb-3">
                    {/* <h2 className="text-2xl font-medium whitespace-nowrap">Senior UX Designer</h2> */}
                    <h2 className=" text-[20px] lg:text-2xl font-medium whitespace-nowrap">{jobHeader.name}</h2>
                    <div className="flex gap-2 h-[28px] justify-center items-center fl ex-wrap">
                        <p className="text-gray-500 text-[14px] md:text-[18px]">at {jobHeader.company}</p>
                        <p className="text-white uppercase text-[14px] md:text[16px] bg-green-600 py- 1 px-2  md:px-3 rounded whitespace-nowrap">
                            Full-Time
                        </p>
                        {
                            jobHeader.featured === 1 && ( <p className="text-figma_red text-[14px] md:text[16px] bg-mprimary rounded-[52px] py-1 px-2 md:px-3">
                                Featured
                            </p>)
                       }
                    </div>
                </div>
            </div>

            <div className="flex gap-3">
               
                <div className="min-h-[56px] bg-mprimary w-[57px] flex justify-center items-center cursor-pointer">
                <PiBookmarkSimple className="text-figma_red text-[32px]  "/>
                </div>
                {/* <Link href={`${jobHeader.apply_url}`}> */}
                
                    <button className="bg-figma_red text-white px-8 py-2  rounded  md:w-[248px] text-center " onClick={()=> setJobApplyModel(true)}>
                {/* <button className="bg-figma_red text-white px-8 py-2  rounded  md:w-[248px] text-center hover:bg-green-600 hover:border hover:border- figma_red  transition-all duration-300"> */}
                        
                    Apply Now{" "}
                    <span className="ml-2 text-[24px] text-center"> &rarr;</span>
                </button>
                {/* </Link> */}
                {/* <button className="bg-gray-200 text-black px-4 py-2 rounded-lg">Save Job</button> */}
            </div>
        </div>
           <div>
           {
                jobApplyModel && <JobApplication showModel={setJobApplyModel} jobData={jobHeader} />
       }
           </div>
        </>
    )
};

export default JobHeader;