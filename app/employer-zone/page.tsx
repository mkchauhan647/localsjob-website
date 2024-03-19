import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <div className=' flex items-center justify-center w-full min-h-[70vh] bg-gray-300'>
        <div className='flex gap-14  w-[85%] '>
          <div className=' w-1/2 py-5 ml-12 md:ml-7 hidden md:block lg:block xl:block '>
            <h3 className=' text-lg font-semibold mb-10'>
              Welcome to StartUps Job, the largest locally focused employment website in the nation! Our mission is to lead the Internet employment industry in Nepal by providing innovative information, superior resume management software and a comprehensive selection of services.
              Startupsjobs.com offers services to the recruiting and job-seeking community in Nepal. We are the only recruitment service provider with 100% free service to all the jobseekers.
              It is our mission to bring the burgeoning Nepalese Internet and computing talent to bear on international Web development.
            </h3>
            <span className='font-semibold '>- Jai Nepal!</span>
          </div>
          <div className='xl:block lg:block md:block hidden' >
            <Image src='/employer.JPG' alt='register image' width={700} height={1000} />
          </div>
        </div>

      </div>
    </>
  )
}

export default page