import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import LoginForm from "./form";

export const metadata: Metadata = {
  title: "Login | Startup Jobs ",
};
const page = () => {
  return (
    <>
      <div className='flex items-center  justify-center w-full h-full container mx-auto px-4'>
        <div className='flex flex-col justify-between lg:flex-row-reverse grow gap-4  '>
        <div className="mb-4 self-center">
            <Image src='/register.jpg' alt='register image' width={500} height={500} />
          </div>
          <div className=' grow'>
            <h3 className=' text-lg font-semibold mb-2'>Login to explore startUpjobs</h3>
            <span className="className=' text-2xl font-semibold mb-1">
              Welcome back to StartUpsjob!
            </span>
            <p className='text-sm mb-8'>
              Login with your registered Email & Password.
            </p>
            <LoginForm />
          </div>
         
        </div>

      </div>
    </>
  )
};

export default page;
