import React from 'react';
import { Button } from 'antd';
import Image from "next/image";
import profile from "@/public/profileimg.jpeg";

const Page = () => {
  return (
    <>
      <div className='container mx-auto py-auto pt-2 pb-2'>
        <div className='title pl-3'>
          <h1 className='font-bold text-[25px]'>Skill Profile</h1>
        </div>
      </div>
      <div className='container mx-auto py-auto '>
        <div className='profile-box flex flex-col sm:flex-row w-full bg-[whitesmoke] justify-between pt-2 pb-2'>
          <div className='left-box flex gap-3 py-4 px-4 sm:px-9'>
            <Image src={profile} alt="profile-logo" className="w-[100px] h-[100px] py-2 image-box" />
            <div className='profile-details  pt-[25px]'>
              <h1>Name</h1>
              <h1>Location</h1>
            </div>
          </div>
          <div className='right-box'>
            <div className='button flex gap-4 pt-2 sm:pt-[46px] px-4 sm:px-9'>
              <Button className='bg-black text-white'>Request Call</Button>
              <Button className='bg-black text-white'>Share</Button>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto py-auto pt-8 pb-2'>
        <div className='details flex flex-col sm:flex-row gap-[25px] mx-auto'>
          <div className='left-side py-4 px-4 sm:px-9'>
            <Button className='bg-black text-white'>View Profile</Button>
          </div>
          <div className='right-side px-4 sm:px-9'>
            <h1><strong>Skill Categories</strong> (Sr Graphic & UX/UI Product Designer)</h1>
            <h1><strong>Level: Experience | Professional | Beginner</strong></h1>
            <br />
            <p className='text-justify'>With the heart of an 🎨 artist and the mind of an 🛠️ engineer, I craft intuitive user experiences considering every detail. The most important thing for me is to 👂 listen carefully. This helps me identify different ways to solve complex problems and produce individual design solutions that meet clients’ expectations and help people achieve their goals through engaging experiences and a delicate user interface. I am passionate about converting my clients' ideas into visual realities through my strong creative knowledge and innovative concepts, as this helps me excel with my 🛠️.</p>
       
            <ul className='list-decimal px-4 py-4 '>
              <li>WordPress UI</li>
              <li>Graphics</li>
              <li>Front-End</li>
              <li>Development UI/UX Prototyping</li>
              <li>Design Concept UIKit Design Analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
