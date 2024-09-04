import {Job} from '@/util/types'
import { notification } from 'antd';
export default function AllJobCard({ job }: { job: Job }) {
    

     let salary = job.salary_from || job.salary_to ? (`Rs.${job.salary_from} ${job.salary_to ? ` - Rs.${job.salary_to}` : ''}`) : null;
  if (job.salary_from == 0) {
    salary = "Negotiable";
}

      
  const handleSaveButton = () => {

    notification.success({
      message: "Job Saved",
      description: "You have successfully saved the job",
      placement: "topRight",
    });
  }



    return (
      <>
        <div className="relative bg-white text-black p-6  w-auto  rounded-lg border-2 shadow-[0px_2px_18px_0px_rgba(24,25,28,0.03)] border-[#E4E5E8] transition-all duration-300  hover:shadow-xl ">
          <div className="flex flex-col gap-[32px]">
            <div id="job" className="flex  gap-3">
              {/* {job.icon} */}
              {/* <div className="w-[48px] h-[48px] overflow-hidden">
                <img src={`https://localsjob.com/storage/${job.logo}`} alt="job logo" className="w-full h-full object-cover "/>
              </div> */}
                         


            <div className="absolute top-4 right-6" onClick={handleSaveButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M18 21L11.9993 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V21Z" stroke="#C8CCD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
              </div>
             
              

                        

               <div className='w-[70px] h-[50px] overflow-hidden rounded '>
                      <img
                          // src="/f1soft.png"
                          src={`https://main.localsjob.com/storage/${job.company.logo}`}
                              alt="job logo"
                              className=" w-full h-full object-center object-scale-down"
                          />
                    </div>
              <div className="flex flex-col gap-2 ">
                <span className="mt-1 text-[18px] font-normal text-gray-600">
                  {job.name}
                </span>
                            {
                                 job.address && (
                                    <div className="flex gap-1 items-center justify-start">
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9 9.5625C10.2426 9.5625 11.25 8.55514 11.25 7.3125C11.25 6.06986 10.2426 5.0625 9 5.0625C7.75736 5.0625 6.75 6.06986 6.75 7.3125C6.75 8.55514 7.75736 9.5625 9 9.5625Z"
                                        stroke="#767F8C"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M14.625 7.3125C14.625 12.375 9 16.3125 9 16.3125C9 16.3125 3.375 12.375 3.375 7.3125C3.375 5.82066 3.96763 4.38992 5.02252 3.33502C6.07742 2.28013 7.50816 1.6875 9 1.6875C10.4918 1.6875 11.9226 2.28013 12.9775 3.33502C14.0324 4.38992 14.625 5.82066 14.625 7.3125V7.3125Z"
                                        stroke="#767F8C"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                    
                                    <span className="mt-1 text-[14px] font-normal text-[#767F8C]">
                                      { job.address}
                                    </span>
                                  </div>
                                )
               }
              </div>

           
                    </div>
                    <div className="flex items-center justify-cente">
                        {job.job_types && job.job_types.length > 0 &&
                            (

                                <div className="mt-1 text-[12px] rounded font-semibold text-[#0BA02C] bg-[#E7F6EA] py-1 px-2  uppercase">{job.job_types && job.job_types.length > 0 ? job.job_types[0].name.split(" ").join('-') : 'Not provided'}</div>
                            )
                        }
                        {/* <div className="mt-1 ml-2 text-[14px] font-normal text-[#767f8c]">Salary:{' '  + "Rs." +  parseInt(job?.salary_from).toFixed() ?? '' + " - " + "Rs." + parseInt(job?.salary_to).toFixed() ?? ''}</div> */}
                        {
                        salary &&    <div className="mt-1 ml-2 text-[14px] font-normal text-[#767f8c]">Salary: {salary}</div>
                        }
                    </div>
                    
                    <div className="text-gray-600 text-[14px] text-left pl-3">
                        {job.description}
            </div>
            
            
  
              
            {/* <button className=" py-3 px-6 bg-mprimary font-semibold text-figma_red rounded-[4px] mx-auto">
              Open positions ({job.position || job.jobs_count})
            </button> */}
            <div className='flex  gap-2 mt-2  justify-center items-center  flex-wrap'>
            { job?.tags  && job.tags.length > 0 &&  <span>Tags:</span>}
              {
                
                 job?.tags &&  job.tags.map((tag, index) => (
                      <div key={index} className="text-[14px] font-normal text-[#767F8C] bg-[#E7F6EA] py-2 px-2 rounded ">{tag.name}</div>
                  ))
            }
            </div>
          
          </div>
        </div>
      </>
    );
  };
  