'use client';
import Navbar from '@/components/navbar/Navbar';
import React, { FormEvent, useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

    const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission like sending to an API
  };

  return (
    <>
    <Navbar/>
    <div className="bg-white p-4 flex flex-col lg:flex-row justify-around items- center container mx-auto pb-[60px] min-h-[90vh] items-center">
      <div className="space-y-3 pb-8 flex flex-col items-start">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <div className="flex items-center space-x-4">
          <i className="fas fa-map-marker-alt text-blue-600 text-lg"></i>
          <p className="text-base">Wise House & Pinewood Drive<br/>Potters Bar, Hertfordshire<br/>United Kingdom</p>
        </div>
        <div className="flex items-center space-x-4">
          <i className="fas fa-envelope text-blue-600 text-lg"></i>
          <p className="text-base">contact@localsjob.com</p>
        </div>
      </div>
      <div className="w-auto lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your email address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} required />
          <textarea name="message" placeholder="Write your message..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} required></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Send Message</button>
        </form>
      </div>
      </div>
    </>
      
  );
};

export default ContactUs;
