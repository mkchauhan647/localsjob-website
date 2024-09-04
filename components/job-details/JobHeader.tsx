'use client'
import Link from "next/link";
import { PiBookmarkSimple } from "react-icons/pi";
import { useState } from "react";
import JobApplication from "../job-apply/JobApply";
import { applyJob } from "@/app/utils/api";
import { message, notification } from "antd";
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation";
interface JobHeaderType{
    name: string,
    company: string,
    featured: Number,
    type?: string,
    apply_url: string,
    logo: string
    id?: number
}


const JobHeader = ({ jobHeaderData }: { jobHeaderData: JobHeaderType }) => {
    console.log("jobHeader", jobHeaderData);
    
    const [jobApplyModel, setJobApplyModel] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

 

    const handleApplyJob = async (e: React.FormEvent) => {
      
        e.preventDefault();

        const token = Cookies.get('token') || null;
        if (!token) {
            message.error('Please login to apply for this job');

            const popCurrentUrl = window.location.href;
            localStorage.setItem('backUrl', popCurrentUrl);
            router.push('/login');
          return;
        }

        try {
              const formData = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData") as string) : {};
              setLoading(true);
              const data = new FormData();
            data.append('job_id', jobHeaderData.id?.toString() ?? '');
            //   data.append('job_type',  jobHeaderData.apply_url.length > 0 ? 'external' : 'internal');
              data.append('job_type',  'internal');
              data.append('email', formData.email);
              data.append('first_name', formData.first_name);
            data.append('last_name', formData.last_name);
            console.log("data", data);
              
              const res = await applyJob(data);
              
              console.log('Application submitted:', res);
              if (res.status === 200) {
                  
                // message.success(res.message || 'Application submitted successfully');
                notification.success({ message: 'Success', description: 'Application submitted successfully' });
            }
              else {
                // message.error(res.message || 'Error submitting application');
                notification.error({ message: 'Error', description: res.message ||  'Error submitting application' });
            }
        } catch (error) {
          notification.error({ message: 'Error', description: 'Error submitting application' });
          console.error('Error submitting application:', error);
          } finally {
                setLoading(false);
              return;
        }
      };

  
      const handleSaveButton = () => {

        notification.success({
          message: "Job Saved",
          description: "You have successfully saved the job",
          placement: "topRight",
        });
      }
    
    


    return (
        <>
            {
                jobHeaderData && (
                    <>
                         <div className="flex justify-between items-center xl:h-[96px] gap-8 flex-wrap ">
            <div className="flex justify-between items-center gap-4">
                <img
                    // src="/f1soft.png"
                    src={`${jobHeaderData.logo ? `https://main.localsjob.com/storage/${jobHeaderData.logo}` : "/f1soft.png"}`}

                    alt="company logo"
                    className="w-[85px] md:w-[96px] h-[85px] md:h-[96px] rounded-full object-scale-down"
                />

                <div className="flex flex-col gap-3 mb-3">
                    <h2 className=" text-[20px] lg:text-2xl font-medium whitespace-nowrap">{jobHeaderData.name}</h2>
                    <div className="flex gap-2 h-[28px] justify-center items-center fl ex-wrap">
                        <p className="text-gray-500 text-[14px] md:text-[18px]">at {jobHeaderData.company}</p>
                        <p className="text-white uppercase text-[14px] md:text[16px] bg-green-600 py- 1 px-2  md:px-3 rounded whitespace-nowrap">
                            Full-Time
                        </p>
                        {
                            jobHeaderData.featured === 1 && ( <p className="text-figma_red text-[14px] md:text[16px] bg-mprimary rounded-[52px] py-1 px-2 md:px-3">
                                Featured
                            </p>)
                       }
                    </div>
                </div>
            </div>

            <div className="flex gap-3">
               
                <div className="min-h-[56px] bg-mprimary w-[57px] flex justify-center items-center cursor-pointer" onClick={handleSaveButton}>
                <PiBookmarkSimple className="text-figma_red text-[32px]  "/>
                </div>
    <button
      className={`bg-figma_red text-white px-8 py-2 rounded md:w-[248px] text-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={handleApplyJob}
      disabled={loading}
    >
      {loading ? (
        <span>Applying...</span> 
      ) : (
        <>
          Apply Now <span className="ml-2 text-[24px] text-center"> &rarr;</span>
        </>
      )}
    </button>
                
            </div>
        </div>
           <div>
           {
                // jobApplyModel && <JobApplication showModel={setJobApplyModel} jobData={jobHeader} />
       }
           </div>
                        </>
                )
        }
        </>
    )
};

export default JobHeader;