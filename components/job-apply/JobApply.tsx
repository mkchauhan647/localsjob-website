import React, { useState } from 'react';
import axios from 'axios';
import { applyJob } from '@/app/utils/api';
import { Button, message } from 'antd';

const JobApplication: React.FC<{showModel:any,jobData:any}> = ({ showModel , jobData }) => {
  const [formData, setFormData] = useState({
    job_id: jobData.id,
    job_type: jobData.apply_url.length > 0 ? 'external' : 'internal',
    email:  '',
    first_name:  '',
    last_name:  '',
    name: '',
    resume: null as File | null,
  });
    
    const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    };
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          setFormData({
            ...formData,
            resume: e.target.files[0],
          });
        }
      };

    const handleSubmit = async (e: React.FormEvent) => {
      
    e.preventDefault();
      try {
          setLoading(true);
          const data = new FormData();
          data.append('job_id', formData.job_id);
          data.append('job_type', formData.job_type);
          data.append('email', formData.email);
          data.append('first_name', formData.first_name);
          data.append('last_name', formData.last_name);
          
          const res = await applyJob(data);
          
          console.log('Application submitted:', res);
          if (res.status === 200) {
              
              message.success('Application submitted successfully');
          }
      } catch (error) {
          message.error('Error submitting application');
      console.error('Error submitting application:', error);
      } finally {
            setLoading(false);
          showModel(false);
          return;
    }
  };

    return (
      <div className='fixed  z-10 w-screen h-screen top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
      <div className=' mx-auto w-auto p-4 sm:w-[500px] lg:w-[650px] pt-12'>
          
          <div className='bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 right-0 bottom-0'></div>
          
          <form onSubmit={handleSubmit} className="relative p-4  bg-white shadow-md rounded-lg w-full">
              <button onClick={()=> showModel(false)} className='absolute top-2 right-2 mb-2 text-2xl'>&times;</button>
      <div className="mb-4">
        <label htmlFor="job_id" className="block text-sm font-medium text-gray-700">Job ID</label>
        <input
          type="text"
          name="job_id"
          id="job_id"
          value={formData.job_id}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          value={formData.first_name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          value={formData.last_name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
                    </div>
                    
        <div className="mb-4">
        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Upload Resume</label>
        <input
          type="file"
          name="resume"
          id="resume"
        //   value={formData.resume}
          onChange={handleFileChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        
        />
                    </div>
                     <Button type="primary" htmlType="submit" loading={loading} className="w-full">
            Apply
          </Button>
    </form>
            </div>
        </div>
  );
};

export default JobApplication;
