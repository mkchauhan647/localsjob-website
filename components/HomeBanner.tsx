// 'use client'
import React from "react";
import Image from "next/image";
import banner from "@/public/hero.jpeg";
import { FiSearch } from "react-icons/fi";
import JobCategories from '@/components/job-categories/JobCategories';
import FeatureJobs from '@/components/featured-jobs/FeatureJobs';
import TopCompanies from '@/components/top-companies/TopCompanies';
import WebBanner from '@/components/WebBanner';
import Testimonials from '@/components/testimonials/Testimonials';
import BoxCards from '@/components/BoxCard/BoxCards';
import Banner from './Banner'
const HomeBanner = () => {

  return (
    <>
      

      {/* homebanner */}

      <Banner banner="/hero.jpeg" text={<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-10 sm:mb-4 text-white">
        Find the best Available <br />Jobs for you
      </h1>} buttons={true} button_bg_color="bg-figma_red"
        
      // bgColor="#B9D9FF"
      bgColor="#FFDEE6"
        
      
        highlightColor="#BE123C" strokeColor="#BE123C"
        // highlightColor="#0D64CC" strokeColor="#0D64CC"
      
      />

      {/* Box Cards */}
      {/* <BoxCards /> */}

      {/* First Category */}
      <JobCategories viewAll={false} />

      {/* Second Category */}
      <FeatureJobs relatedJob={false} viewAll={false} />

      {/* Third Category Top Companies */}
      <TopCompanies viewAll={false} />

      {/* Web Banner */}
      <WebBanner />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
};

export default HomeBanner;


// import React from "react";
// import Image from "next/image";
// import banner from "@/public/hero.jpeg";
// import { FiSearch } from "react-icons/fi";
// import JobCategories from '@/components/JobCategories';
// import FeatureJobs from '@/components/featured-jobs/FeatureJobs';
// import TopCompanies from '@/components/TopCompanies';
// import WebBanner from '@/components/WebBanner';
// import Testimonials from '@/components/Testimonials/Testimonials';
// import BoxCards from '@/components/BoxCard/BoxCards';
// const HomeBanner = () => {
//   return (
//     <>
//       <div className="relative w-full">
//         <div className="absolute inset-0 bg-black opacity-70"></div>

//         <Image
//           src={banner}
//           alt="person and urban landscape"
//           // className="z-0 h-[250px] sm:h-full   object-cover "
//           className="z-0 min-h-[700px] sm:h-full lg:h-[700px]  object-cover "
//         />
//         <div className="absolute flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgb(0,0,0,.2)] sm:bg-transparent p-3 rounded-md w-full flex-wrap md:w-[795px]">
//         {/* <div className="absolute inset-[210px]" >  */}
//         <div className="flex flex-col justify-center items-center flex-wrap">

//             <h1 className="text-7xl font-extrabold mb-4 text-white text-center">Find the best Available <br />Jobs for you</h1>

//             <div className=" bg-transparent p-1">
//               <div className="max-w-lg mx-auto bg-transparent shadow-md rounded-lg p-3 ">
//                 <div className="flex justify-center space-x-4 flex-wrap md:flex-nowrap space-y-4 md:space-y-0">
//                   <div className="flex items-center  gap-1 md:gap-6  bg-white border border-gray-300 rounded px-3 py-1">
//                     <div className="flex items-center ">
//                       <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                         <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.415-1.414l4.284 4.284a1 1 0 11-1.415 1.415l-4.284-4.284zM8 14A6 6 0 108 2a6 6 0 000 12z" clipRule="evenodd"></path>
//                       </svg>
//                       <input type="text" placeholder="Job Title" className="ml-2 outline-none p-1" />
//                     </div>
//                     <select className="outline-none  text-gray-500">
//                       <option className=" ">Select Location</option>
//                     </select>
//                     <select className="outline-none text-gray-500">
//                       <option className=" ">Companies</option>
//                     </select>
//                   </div>

//                   <button className="bg-red-600 text-white px-8 py-2 rounded">Search</button>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex justify-center gap-[8px]  mt-8  flex-wrap md:flex-nowrap">
//                   <button className=" border-2  border-gray-300 text-xs text-white px-[8px]  whitespace-nowrap py-1  rounded">Designer</button>
//                   <button className=" border-2 border-gray-300 text-xs text-white px-[8px] whitespace-nowrap py-2 rounded">Front end developer</button>
//                   <button className=" border-2 border-gray-300 text-xs text-white px-[8px] whitespace-nowrap py-1 rounded">Digital Marketing</button>
//                   <button className=" border-2 border-gray-300 text-xs text-white px-[8px] whitespace-nowrap py-1 rounded">SEO Analyst</button>
//                   <button className=" border-2 border-gray-300 text-xs text-white px-[8px] whitespace-nowrap py-1 rounded">Accounting</button>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>




       
//       {/* Box Cards */}
      
//       <BoxCards/>

//       {/* First Category */}
//       <JobCategories />
      
//       {/* Second Category */}

//       <FeatureJobs />
      
//       {/* Third Category Top Companies */}

//       <TopCompanies />
      
//       {/* Web Banner */}

//       <WebBanner />
      
//       {/* Testimonials  */}

//       <Testimonials/>

//     </>
  
//   );
// };

// export default HomeBanner;





