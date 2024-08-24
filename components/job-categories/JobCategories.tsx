// 'use client'
import JobCategoryCard from './JobCategoryCard';
import { PiCode, PiMusicNotes,PiMonitorPlay,PiChartBarHorizontalDuotone,PiDatabase } from 'react-icons/pi';
import { LiaBriefcaseMedicalSolid } from "react-icons/lia";
import axios from '@/config/AxiosConfig'


interface JobCategoryType {
  name: string;
  total_positions: number;
}

interface Category {
  bgColor: string;
  icon: React.ReactElement;
  title: string;
  positions: number;

}



const JobCategories = async () => {

  let JobCategoryData;

  try {
  JobCategoryData = await axios.get('/popular-job-categories');

  } catch (error) {
    console.log("error",error);
  }

  const CategoryData = JobCategoryData?.data.data.popularJobCategories;



    
  const categories: Category[] = getCategories(CategoryData);
  
    return (
      <div className="bg-mprimary min-h-[529px] flex flex-col gap-[105px] sm:gap-[50px] pt-[50px] lg:pt-[110px] px-4 sm:px-[100px] top-[700px]">
        <div className="flex justify-between h-[48px] w-auto flex-col gap-12 sm:flex-row ">
          <h2 className="text-3xl sm:text-4xl font-semibold text-black">Popular <span className="sm:ml-3"> Job Categories</span></h2>
          <button className="text-figma_red border border-figma_red px-6 py-3 w-auto rounded-lg">View All <span className="ml-2">&rarr;</span></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 lg:grid-rows-2 gap-6 mb-4">
          {categories.map((category, index) => (
            <JobCategoryCard
              key={index}
              bgColor={category.bgColor}
              icon={category.icon}
              title={CategoryData[index].name}
              positions={CategoryData[index].total_positions}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default JobCategories;
  

function getCategories(JobCategoryData: JobCategoryType[]) {





  const categories:Category[] = [
    {
      bgColor: 'bg-pink-200',
      icon: (
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="68" height="68" rx="8" fill="#FFDEE6" />
          <path opacity="0.2" d="M42.9996 33.0007L40.2022 25.5411C40.1406 25.3768 40.0368 25.2316 39.9013 25.1201C39.7659 25.0086 39.6034 24.9347 39.4303 24.9059L21.9996 22.0007L24.9047 39.4315C24.9336 39.6045 25.0075 39.767 25.119 39.9025C25.2305 40.038 25.3757 40.1418 25.54 40.2034L32.9996 43.0007L42.9996 33.0007ZM30 32.5C30 32.0056 30.1466 31.5222 30.4213 31.1111C30.696 30.7 31.0865 30.3795 31.5433 30.1903C32.0001 30.0011 32.5028 29.9516 32.9877 30.048C33.4727 30.1445 33.9181 30.3826 34.2678 30.7322C34.6174 31.0819 34.8555 31.5273 34.952 32.0123C35.0484 32.4972 34.9989 32.9999 34.8097 33.4567C34.6205 33.9135 34.3 34.304 33.8889 34.5787C33.4778 34.8534 32.9945 35 32.5 35C32.1717 35 31.8466 34.9353 31.5433 34.8097C31.24 34.6841 30.9644 34.4999 30.7322 34.2678C30.5001 34.0356 30.3159 33.76 30.1903 33.4567C30.0647 33.1534 30 32.8283 30 32.5Z" fill="#BE123C" />
          <path d="M30 32.5C30 33.8807 31.1193 35 32.5 35C33.8807 35 35 33.8807 35 32.5C35 31.1193 33.8807 30 32.5 30C31.1193 30 30 31.1193 30 32.5Z" stroke="#BE123C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21.9996 22.0007L30.7322 30.7322" stroke="#BE123C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21.9996 22.0007L24.9048 39.4314C24.9336 39.6045 25.0075 39.767 25.119 39.9025C25.2305 40.038 25.3757 40.1418 25.54 40.2034L32.9996 43.0007L42.9996 33.0007L40.2023 25.5411C40.1407 25.3768 40.0369 25.2316 39.9014 25.1201C39.7659 25.0086 39.6034 24.9347 39.4303 24.9059L21.9996 22.0007Z" stroke="#BE123C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32.9995 43.0007L36.2924 46.2936C36.3853 46.3865 36.4955 46.4601 36.6169 46.5104C36.7382 46.5607 36.8682 46.5865 36.9995 46.5865C37.1309 46.5865 37.2609 46.5607 37.3822 46.5104C37.5035 46.4601 37.6138 46.3865 37.7066 46.2936L46.2924 37.7078C46.48 37.5203 46.5853 37.2659 46.5853 37.0007C46.5853 36.7355 46.48 36.4812 46.2924 36.2936L42.9995 33.0007" stroke="#BE123C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Graphics & Design',
      positions: 357
    },
    {
      bgColor: 'bg-primary',
      icon: (
        <div className='bg-mprimary h-[68px] w-[68px] flex justify-center items-center rounded-[12px]'>
          <PiCode className='text-[32px] text-figma_red'/>
        </div>
      ),
      title: 'Code & Programming',
      positions: 312
    },
    {
      bgColor: 'bg-pink-200',
      icon: (
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="68" height="68" rx="8" fill="#FFDEE6" />
          <g clipPath="url(#clip0_0_511)">
            <path opacity="0.2" d="M44.7207 23.3734C44.8698 23.3299 45.0269 23.3217 45.1796 23.3495C45.3324 23.3773 45.4765 23.4402 45.6007 23.5334C45.7249 23.6265 45.8257 23.7473 45.8952 23.8862C45.9646 24.025 46.0007 24.1781 46.0007 24.3334V41.6667C46.0007 41.8219 45.9646 41.9751 45.8952 42.1139C45.8257 42.2528 45.7249 42.3736 45.6007 42.4667C45.4765 42.5598 45.3324 42.6228 45.1796 42.6506C45.0269 42.6783 44.8698 42.6702 44.7207 42.6267L33 39.2082V26.7919L44.7207 23.3734Z" fill="#BE123C" />
            <path d="M46.0007 24.3334V41.6667C46.0007 41.8219 45.9646 41.9751 45.8952 42.1139C45.8257 42.2528 45.7249 42.3736 45.6007 42.4667C45.4765 42.5598 45.3324 42.6228 45.1796 42.6506C45.0269 42.6783 44.8698 42.6702 44.7207 42.6267L22.7207 36.21C22.513 36.1495 22.3306 36.0231 22.2007 35.85C22.0709 35.6769 22.0007 35.4664 22.0007 35.25V30.75C22.0007 30.5337 22.0709 30.3231 22.2007 30.15C22.3306 29.9769 22.513 29.8506 22.7207 29.79L44.7207 23.3734C44.8698 23.3299 45.0269 23.3217 45.1796 23.3495C45.3324 23.3773 45.4765 23.4402 45.6007 23.5334C45.7249 23.6265 45.8257 23.7473 45.8952 23.8862C45.9646 24.025 46.0007 24.1781 46.0007 24.3334V24.3334Z" stroke="#BE123C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M27 37.4581V42C27 42.2652 27.1054 42.5196 27.2929 42.7071C27.4804 42.8946 27.7348 43 28 43H32C32.2652 43 32.5196 42.8946 32.7071 42.7071C32.8946 42.5196 33 42.2652 33 42V26.7919" stroke="#BE123C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_0_511">
              <rect width="32" height="32" fill="white" transform="matrix(-1 0 0 1 50 18)" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: 'Digital & Marketing',
      positions: 297
    },
    {
      bgColor: 'bg-pink-200',
      icon: (
       <div className='bg-mprimary h-[68px] w-[68px] flex justify-center items-center rounded-[12px]'>
          <PiMonitorPlay className='text-[32px] text-figma_red' />
        </div>
      ),
      title: 'Video & Animation',
      positions: 247
    },
    {
      bgColor: 'bg-pink-200',
      icon: (
        <div className='bg-mprimary h-[68px] w-[68px] flex justify-center items-center rounded-[12px]'>
          <PiMusicNotes className='text-[32px] text-figma_red' />
        </div>
              
      ),
      title: 'Music & Audio',
      positions: 204
    },
    {
      bgColor: 'bg-pink-200',
      icon: (
      <div className='bg-mprimary h-[68px] w-[68px] flex justify-center items-center -rotate-90 rounded-[12px]'>
          <PiChartBarHorizontalDuotone className='text-[32px] text-figma_red' />
        </div>

      ),
      title: 'Account & Finance',
      positions: 167
    },
    {
      bgColor: 'bg-pink-200',
      icon: (
        <div className='bg-mprimary h-[68px] w-[68px] flex justify-center items-center rounded-[12px]'>
          <LiaBriefcaseMedicalSolid className='text-[32px] text-figma_red' />
        </div>
      ),
      title: 'Health & Care',
      positions: 125
    },
    {
      bgColor: 'bg-pink-200',
      icon: (
       
        <div className='bg-figma_red h-[68px] w-[68px] flex justify-center items-center rounded-[12px]'>
          <PiDatabase className='text-[32px] text-white' />
        </div>       

      ),
      title: 'Data & Science',
      positions: 57
    }
  ];

  return categories;
}