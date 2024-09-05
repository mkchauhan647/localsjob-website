'use client'
import axios from '@/config/AxiosConfig'
import { Job } from '@/util/types';
import Link from 'next/link';
import AllJobCard from './AllJobCard';
import { useState } from 'react';
const AllJobs =  ({ categories }:{categories:Job[]}) => {


    const [sliceNumber, setSliceNumber] = useState(10);
    
   const  handleViewMore = () => {
        setSliceNumber(sliceNumber + 10);
    }


    return (
        
        <>
        
            {
                categories && 
                <div className="bg-white  flex flex-col border-b border-[#E4E5E8] shadow-custom gap-[50px] p-4 py-[20px] sm:px-[100px] top-[1229px] pb-14">
                        
                                <div className="flex justify-between h-[48px] flex-col sm:flex-row gap-10">
                                <h2 className="text-4xl font-semibold text-black">Jobs</h2>
                                    </div>
                            
               
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6 w-full mb- 5">
                {/* <div className="flex flex-col gap-5 grow"> */}
                        
        
                  {categories.slice(0,sliceNumber).map((category:Job, index) => (
                      <Link href={`/jobs/${category.name.split(" ").map(value => value.toLocaleLowerCase()).join('-')}/${category.slugable.key}`} key={index}>
                          {/* <SearchJobCard job={category} />   */}
                          <AllJobCard job={category} />
                      </Link>
                  ))}
                    </div>
                    <button onClick={handleViewMore} className='border rounded-md border-figma_red text-figma_red hover:bg-figma_red hover:text-white transition-all duration-300 p-2 mx-auto'>View more &rarr;</button>
              </div>
            }

        </>
    );
}
    

export default AllJobs;

