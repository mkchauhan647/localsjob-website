'use client'
import React from 'react';

// Predefined fallback images related to content
const contentRelatedFallbackImages: { [key: string]: string } = {
  "Job Posting and Searching": "https://via.placeholder.com/960x720?text=Job+Posting",
  "Direct Candidate Requests": "https://via.placeholder.com/960x720?text=Candidate+Requests",
  "Skill-Based Search": "https://via.placeholder.com/960x720?text=Skill-Based+Search",
  "Service Provider Registration": "https://via.placeholder.com/960x720?text=Service+Provider+Registration",
  "Service Booking": "https://via.placeholder.com/960x720?text=Service+Booking",
};

// Service data
const services = [
  {
    title: "Job Posting and Searching",
    description: "Businesses can post job openings, and individuals can search for and apply to these opportunities within their local area. This service helps streamline the recruitment process, connecting employers with potential candidates who are nearby and ready to work.",
    imageUrl: "/employer.jpg",
    alt: "Job Posting and Searching"
  },
  {
    title: "Direct Candidate Requests",
    description: "Users can directly request candidates who have created work profiles on the app. This feature simplifies the hiring process by allowing businesses to find and connect with suitable candidates without navigating through numerous applications.",
    imageUrl: "https://cdn.pixabay.com/photo/2016/11/29/03/46/recruitment-1866140_960_720.jpg",
    alt: "Direct Candidate Requests"
  },
  {
    title: "Skill-Based Search",
    description: "The Skill Zone feature enables users to search for specific skills, such as drivers, painters, and electricians, in their vicinity. This service helps businesses and individuals find the exact expertise they need locally, ensuring efficient and effective service delivery.",
    imageUrl: "/employer.jpg", // Empty or incorrect URL to test fallback
    alt: "Skill-Based Search"
  },
  {
    title: "Service Provider Registration",
    description: "Users can register as service providers by completing a form, with profiles tagged as 'LocalsPros.' This service highlights their offerings and makes it easier for businesses and individuals to book and hire local professionals for various needs.",
    imageUrl: "/employer.jpg",
    alt: "Service Provider Registration"
  },
  {
    title: "Service Booking",
    description: "Users can quickly book services from registered providers directly on the LocalsJob platform. This feature makes it easy to find and connect with local professionals, ensuring fast and hassle-free service when you need it.",
    imageUrl: "", // Empty or incorrect URL to test fallback
    alt: "Service Booking"
  }
];

const OurServices = () => {
  return (
    <div className="container mx-auto p-4 bg-white shadow-lg">
          <h2 className="text-2xl font-bold mb-8">Our Services
              <div className="h-1 w-20 bg-green-500 mt-1"></div>
      </h2>

      {services.map((service, index) => (
        <div
          key={index}
          className={`section flex flex-col md:flex-row items-center mb-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
        >
          <div className="content flex-1 p-4">
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            <p className="mt-4 text-gray-600">{service.description}</p>
          </div>
          <div className="image flex-1 p-4">
            <img
              src={service.imageUrl || contentRelatedFallbackImages[service?.title]}
              alt={service.alt}
              className="w-full rounded-lg shadow-lg"
              onError={(e:any) => { 
                e.target.onerror = null; 
                e.target.src = contentRelatedFallbackImages[service.title];
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurServices;
