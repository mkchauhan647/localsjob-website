import Banner from "@/components/Banner";
import BrowseByProfesions from "@/components/browse-by-professions/BrowseByProfesions";
import RelatedWorkers from '@/components/related-workers/RelatedWorkers';
const Page = () => {
  return (
    <div className="relative w-full">
    <div className=" bg-mprimary">
      {/* <h1>Skill Zone </h1> */}
      <Banner
        banner="/skillzonebanner.jpeg"
        text={getTextElement() }
        buttons={true}
        button_bg_color="bg-blue-500" 
        
        bgColor="#B9D9FF"
      
        // highlightColor="#BE123C" strokeColor="#BE123C"
        highlightColor="#0D64CC" strokeColor="#0D64CC"
      />
    </div>

      <BrowseByProfesions />
      <RelatedWorkers />
    
    </div>

  );
}

export default Page;


function getTextElement() {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl xl:leading-[79.2px] mt-7 mr px-[2px]  font-extrabold mb-10 sm:mb-4 text-center  text-white">
          Explore Top Skilled <br/> <span className="whitespace-wrap sm:whitespace-nowrap"> <span className="text-[#F7941D]">Professionals</span> for your work</span>
      </h1>
  )
}






















// import React from 'react';
// import Image from "next/image";
// import imageData from './imagedata';
// import HomeBanner from './homebanner';
// import MobileAppBanner from '@/components/MobileAppBanner';
// import { Button } from 'antd';
// import Skillreg from './skillreg';
// import {MoreOutlined } from '@ant-design/icons';
// import {ClockCircleOutlined } from '@ant-design/icons';
// import {EuroOutlined } from '@ant-design/icons';
// import { FaBriefcase } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";


// const Page = () => {
//   return (
//     <>
//       <HomeBanner />
//       <MobileAppBanner />
//       <div className="container mx-auto px-4 py-6"> 
//         <div className="pt-4 pb-4">
//           <h1 className="text-lg sm:text-xl text-left my-2 font-semibold text-gray-700">Top Skill (Profession categories)</h1>
//           <div className="grid   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4"> 
//             {imageData.map((image) => (
//              <div className=" card px-2 py-4 sm:py-4     bg-[#e7e8f6]  gap-4 hover:bg-[rgb(0,0,0,.1)] duration-500 ">
//              <div className="flex gap-x-2 items-center">
//                <Image alt="Job Image" src={image.src} width={40} height={40} className='jobimage' />
//                <div className="grid text-[rgb(0,0,0,.7)]"> 
              
//              <p className="font-medium"> {image.name}</p>
            
           
//              <p className="text-xs "> {image.position}</p>
          
//              </div>
            
//              </div>
//           <div className="  mt-2 ">
//           </div>
       
//           <div className="flex  justify-start gap-10 pl-4 pr-4">
//           <p className="profilebtn text-xs flex items-center justify-start  mt-2 ">
//           <Button className=' text-white'>Developer</Button>
//                                </p>
       
//                                <p className="text-xs  profilebtn  flex items-center   justify-start  mt-2 ">
//                                <Button className=' text-white'>Developer</Button>
//                                        </p>
       
//                                </div>
       
//                                <div className=" pl-4 pr-4 pt-4">
//           <p className="text-black text-xs   flex items-center justify-start gap-1 mt-2 ">
//                               EMP CODE: 0098273448
//                                </p>
       
//                                <p className="text-xs  text-black flex items-center   justify-start gap-1 mt-2 ">
//                               Joining Date: 2024/04/02
//                                        </p>
       
//                                </div>
//            </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto pb-10 flex justify-center"> 
//       <p className="text-xs  profilebtn  flex items-center   justify-start  mt-2 ">
//                                <Button className=' text-white'>View More</Button>
//                                        </p>
      
//       </div>
//       <Skillreg />
//     </>
//   );
// };

// export default Page;
