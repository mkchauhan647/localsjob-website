'use client';
import React from 'react';
import Image from 'next/image';
import RegistrationForm from './form';

const Page = () => {
  return (
    <div className=" flex items-center justify-center ">
      <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between flex-row-reverse">
        <div className="lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 self-start">
          <Image src="/register.jpg" alt="register image" width={500} height={500} />
        </div>
        <div className=" bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
            Join LocalsJob Today!
          </h3>
          <p className="text-lg text-center text-gray-600 mb-6">
            Sign Up for LocalsJob – Where Your Talent Meets Opportunity.
          </p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>Showcase Your Skills and get direct requests from businesses.</li>
            <li>Apply for Jobs in your area with just a click.</li>
            <li>Be Part of a Vibrant Community sharing experiences and growth.</li>
          </ul>
          <p className="text-xs text-center text-gray-500">
            Your Future Starts Here – Sign Up Today!
            <br />
            Be Seen. Be Hired. Be Local.
          </p>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
