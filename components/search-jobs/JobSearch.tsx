'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';



const JobSearch = ({ searchData }: { searchData: Job[] }) => {

    console.log("searchData", searchData);

    return (

      <div className='container mx-auto pt-[60px] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {/* // <div className='container mx-auto flex pt-[60px]  gap-4 flex-col lg:flex-row justify -center items -center'> */}
            {searchData?.map((job: Job) => (
                <Link href={`/jobs/${job.name.split(" ").map(value=> value.toLocaleLowerCase()).join('-')}/${job.id}`} key={job.id}>
                        <SearchJobCard job={job} />
                </Link>
            ))}
        </div>




        
    )
}


export default JobSearch;


export const SearchJobCard = ({ job }: { job: Job }) => {
    
    console.log("job",job.job_types);
    const salary = job.salary_from || job.salary_to ?( `Rs.${job.salary_from} ${job.salary_to ? ` - Rs.${job.salary_to}`:''}` ) : null;
    return (
        <div className="relative bg-white text-black p-5 h- [17 0px] w-auto xl:w-[424px] rounded-lg border-2 shadow-[0px_2px_18px_0px_rgba(24,25,28,0.03)] border-[#E4E5E8] ">
            {/* <div className=" p-[18px]"> */}
            {/* box-shadow: 0px 2px 18px 0px #18191C08; */}

          {/* {icon} */}
        {/* </div> */}
        <div className="flex flex-col gap-[20px]">
               
                <div id='heading' className=" flex gap-[4px] flex-col">
                    <span className="text-[18px] font-medium  text-[#18191C] leading-7 font-roboto  ">{job.name}</span>
                    <div className="flex items-center justify-cente">
                        <div className="mt-1 text-[12px] rounded font-semibold text-[#0BA02C] bg-[#E7F6EA] py-1 px-2  uppercase">{job.job_types && job.job_types.length > 0 ? job.job_types[0].name.split(" ").join('-'): 'Not provided'}</div>
                        {/* <div className="mt-1 ml-2 text-[14px] font-normal text-[#767f8c]">Salary:{' '  + "Rs." +  parseInt(job?.salary_from).toFixed() ?? '' + " - " + "Rs." + parseInt(job?.salary_to).toFixed() ?? ''}</div> */}
                        {
                        salary &&    <div className="mt-1 ml-2 text-[14px] font-normal text-[#767f8c]">Salary: {salary}</div>
                        }
                    </div>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-4 right-6">
<path d="M18 21L11.9993 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V21Z" stroke="#C8CCD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
               
                <div id='company' className='flex  gap-2'>
                    

                    {/* <Image src={`/${job.icon}`} alt="company logo" width={48} height={48} className='rounded-[4px] object-cover ' /> */}
                    <div className='w-[70px] h-[60px] overflow-hidden rounded '>
                    <img
                        // src="/f1soft.png"
                        src={`https://localsjob.com/storage/${job.company?.logo}`}
                            alt="company logo"
                            className=" w-full h-full object-center object-scale-down"
                        />
                  </div>

                    <div className="flex flex-col ">
                        <span className="mt-1 text-[16px] font-medium text-[#767F8C]">{job.company?.name}</span>
                        <div className='flex gap-1 items-center justify-start'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9.5625C10.2426 9.5625 11.25 8.55514 11.25 7.3125C11.25 6.06986 10.2426 5.0625 9 5.0625C7.75736 5.0625 6.75 6.06986 6.75 7.3125C6.75 8.55514 7.75736 9.5625 9 9.5625Z" stroke="#767F8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.625 7.3125C14.625 12.375 9 16.3125 9 16.3125C9 16.3125 3.375 12.375 3.375 7.3125C3.375 5.82066 3.96763 4.38992 5.02252 3.33502C6.07742 2.28013 7.50816 1.6875 9 1.6875C10.4918 1.6875 11.9226 2.28013 12.9775 3.33502C14.0324 4.38992 14.625 5.82066 14.625 7.3125V7.3125Z" stroke="#767F8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                        <span className="mt-1 text-[14px] font-normal text-[#767F8C]">{job.address.charAt(0).toUpperCase() + job.address.slice(1)}</span>
                       </div>
                    </div>
                    
                </div>
                
        </div>
      </div>
    );
}


interface Status {
    value: string;
    label: string;
  }
  
  interface Company {
    id: number;
    name: string;
    email: string;
    description: string;
    content: string;
    website: string;
    logo: string;
    latitude: number | null;
    longitude: number | null;
    address: string;
    country_id: number;
    state_id: number;
    city_id: number;
    postal_code: string | null;
    phone: string | null;
    year_founded: number;
    ceo: string;
    number_of_offices: number | null;
    number_of_employees: number;
    annual_revenue: string;
    cover_image: string | null;
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    is_featured: number;
    status: Status;
    views: number;
    created_at: string;
    updated_at: string;
    tax_id: string | null;
  }
  
  interface JobType {
    id: number;
    name: string;
    order: number;
    is_default: number;
    status: Status;
    created_at: string;
    updated_at: string;
    pivot: Record<string, any>; // Adjust the pivot structure based on the actual structure
  }
  
  interface Job {
    id: number;
    name: string;
    salary_from: number | null;
    salary_to: number | null;
    address: string;
    company_id: number;
    is_featured: number;
    company: Company;
      job_types: JobType[];
}
  