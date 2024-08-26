'use client';
import React from 'react'
import Image from 'next/image'
import RegistrationForm from './form'

const page = () => {
  return (
    <>
      <div className='flex  items-center justify-center w-full h-full pt-[96px] container mx-auto px-4' >
        <div className='flex  flex-col lg:flex-row-reverse justify-between grow '>
        <div className='mb-4 self-center'>
            <Image src='/register.jpg' alt='register image' width={500} height={500} />
          </div>    
          <div className='grow '>
            <h3 className=' text-lg font-semibold'>Create your free Employer Account</h3>
            <p className='text-sm'>
              Fill the basic information and start recruiting now!
            </p>
            <RegistrationForm />
          </div>
               
        </div>

      </div>
    </>
  )
}

export default page