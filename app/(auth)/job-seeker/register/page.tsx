'use client';
import React from 'react'
import Image from 'next/image'
import RegistrationForm from './form'

const page = () => {
  return (
    <>
      <div className='flex items-center justify-center w-full min-h-[90vh]'>
        <div className='flex h-[95%] w-[85%] '>
          <div className='hidden md:block lg:block xl:block' >
            <Image src='/register.jpg' alt='register image' width={600} height={600} className='object-cover' />
          </div>
          <div className='w-full py-5 lg:ml-12  md:ml-7 sm:ml-0 xs:ml-0 md:w-1/2 lg:w-1/2'>
            <h3 className=' text-lg font-semibold'>Create your free Job seeker Account</h3>
            <p className='text-sm'>
              Register with basic information, Complete your profile and start applying for the job for free!
            </p>
            <RegistrationForm/>
          </div>
        </div>

      </div>
    </>
  )
}

export default page