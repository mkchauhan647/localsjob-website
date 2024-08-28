import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const NewFooter = () => {
  return (
    <footer className="relative bg-[#18191C] text-gray-300 p-12 min-h-[452px] flex flex-col justify-between">
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between md:gap-20  items-cen ter pt-12 pr-8 pb-4">
        <div className=" md:w-1/4 mb-6 md:mb-0 ">
          <div className="flex items-center  ">
            <img src="/localjobimg.png" alt="LocalsJob Logo" className="h-12" />
            {/* <span className="text-xl font-bold text-white">LocalsJob</span> */}
          </div>
          <div className='flex flex-col gap-3'>
          <p className="mt-4 text-xl text-gray-400">
            Call now: <a href="tel:+977061345296" className="text-white text-[17px] inline hover:underline">(+977) 01234567890</a>
          </p>
          {/* <p className='text-gray-400 '>Talchowk, Kaski-12, Pokhara Kathmandu, Nepal</p> */}
          <p className='text-gray-400 '>Kathmandu, Nepal</p>
          </div>
        </div>
        {/* <div className="w-full md:w-auto grow flex justify-between gap-4 flex-wrap "> */}
        <div className="w-full md:w-auto grow grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h4 className="text-white mb-4 text-[20px]">Quick Link</h4>
            <ul className='space-y-4'>
              <li><a href="/about" className="hover:underline text-gray-400 py-[6px]">About</a></li>
              <li><a href="/contact-us" className="hover:underline text-gray-400">Contact</ a></li>
              <li><a href="#" className="hover:underline text-gray-400 ">Pricing</a></li>
              <li><a href="#" className="hover:underline text-gray-400">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-4 text-[20px]">Candidate</h4>
            <ul className='space-y-4'>
              <li><a href="/jobs" className="hover:underline text-gray-400">Browse Jobs</a></li>
              <li><a href="#" className="hover:underline text-gray-400">Browse Employers</a></li>
              <li><a href="#" className="hover:underline text-gray-400" >Candidate Dashboard</a></li>
              <li><a href="#" className="hover:underline text-gray-400">Saved Jobs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-4 text-[20px]">Employers</h4>
            <ul className='space-y-4'>
              <li><a href="#" className="hover:underline hover:underline-offset-3 text-gray-400">Post a Job</a></li>
              <li><a href="#" className="hover:underline text-gray-400">Browse Candidates</a></li>
              <li><a href="#" className="hover:underline text-gray-400">Employers Dashboard</a></li>
              <li><a href="#" className="hover:underline text-gray-400">Applications</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-4 text-[20px]">Support</h4>
            <ul className='space-y-4'>
              <li><a href="#" className="hover:underline text-gray-400">Faqs</a></li>
              <li><a href="/privacy-policy" className="hover:underline text-gray-400">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline text-gray-400">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-0 right-0 left-0 px-4 md:px-[100px] py-10  border-t border-gray-700  flex justify-between  gap-4  items-center">
        <p className="text-sm  text-gray-400 ">&copy; 2024 LocalsJob - All rights Reserved</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 text-[20px] hover:text-white"><FaFacebookF /></a>
          <a href="#" className="text-gray-400  text-[20px] hover:text-white"><FaTwitter /></a>
          <a href="#" className="text-gray-400  text-[20px] hover:text-white"><FaInstagram /></a>
          <a href="#" className="text-gray-400  text-[20px] hover:text-white"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
