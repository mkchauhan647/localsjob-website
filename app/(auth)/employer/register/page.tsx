'use client';
import React from 'react'
import Image from 'next/image'
import RegistrationForm from './form'

const page = () => {
  return (
    <>
      <div className='flex items-center justify-center w-full h-[120vh]k pt-[96px]'>
        <div className='flex h-[95%] w-[85%] '>
          <div className=' w-1/2 py-5 ml-12 md:ml-7'>
            <h3 className=' text-lg font-semibold'>Create your free Employer Account</h3>
            <p className='text-sm'>
              Fill the basic information and start recruiting now!
            </p>
            <RegistrationForm />
          </div>
          <div >
            <Image src='/register.jpg' alt='register image' width={500} height={500} />
          </div>         
        </div>

      </div>
    </>
  )
}

export default page