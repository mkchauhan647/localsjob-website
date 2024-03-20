import React from 'react';
import Image from "next/image";
import imageData from './imagedata';
import HomeBanner from './homebanner';
import MobileAppBanner from '@/components/MobileAppBanner';
import { Button } from 'antd';
import Skillreg from './skillreg';

const Page = () => {
  return (
    <>
      <HomeBanner />
      <MobileAppBanner />
      <div className="container mx-auto px-4 py-6"> 
        <div className="pt-4 pb-4">
          <h1 className="text-lg sm:text-xl text-left my-2 font-semibold text-gray-700">Top Skill (Profession categories)</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"> 
            {imageData.map((image) => (
              <div key={image.id}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                  <Image src={image.src} alt={image.alt} width={500} height={500} className="w-full" /> 
                </div>
                <div className="px-6 py-4">
                  <div className="font-semibold text-sm text-gray-900">{image.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto pb-10 flex justify-center"> 
        <Button className='bg-black text-white'>View More</Button>
      </div>
      <Skillreg />
    </>
  );
};

export default Page;
