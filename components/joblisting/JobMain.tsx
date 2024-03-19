"use client"
import React from "react";
import JobLeftSection from "./JobLeftSection";
import JobRightSection from "./JobRightSection";
import FeaturedCompaniesGrid from "./FeaturedCompanies";
import Title from "./Title";

const featuredCompanies = [
  { id: 1, name: 'Teacher', logo: '/company1.jpg', jobs: 4, location: 'Kavya School' },
  { id: 2, name: 'Senior Program Officer', logo: '/company2.jpg', jobs: 12, location: 'Samadhan Dainik' },
  { id: 3, name: 'Teaching', logo: '/company3.png', jobs: 8, location: 'Health Incurance Board of Nepal' },
  { id: 4, name: 'Marketing Officer', logo: '/company4.png', jobs: 24, location: 'Kavya School' },
  { id: 5, name: 'Developer', logo: '/company6.png', jobs: 9, location: 'Samadhan Dainik' },
  { id: 6, name: 'IT Assistant', logo: '/company7.png', jobs: 32, location: 'Health Incurance Board of Nepal' },
  { id: 1, name: 'Teacher', logo: '/company1.jpg', jobs: 4, location: 'Kavya School' },
  { id: 2, name: 'Senior Program Officer', logo: '/company2.jpg', jobs: 12, location: 'Samadhan Dainik' },
  { id: 3, name: 'Teaching', logo: '/company3.png', jobs: 8, location: 'Health Incurance Board of Nepal' },
  { id: 4, name: 'Marketing Officer', logo: '/company4.png', jobs: 24, location: 'Kavya School' },
  { id: 5, name: 'Developer', logo: '/company6.png', jobs: 9, location: 'Samadhan Dainik' },
  { id: 6, name: 'IT Assistant', logo: '/company7.png', jobs: 32, location: 'Health Incurance Board of Nepal' },
  { id: 1, name: 'Teacher', logo: '/company1.jpg', jobs: 4, location: 'Kavya School' },
  { id: 2, name: 'Senior Program Officer', logo: '/company2.jpg', jobs: 12, location: 'Samadhan Dainik' },
  { id: 3, name: 'Teaching', logo: '/company3.png', jobs: 8, location: 'Health Incurance Board of Nepal' },
  { id: 4, name: 'Marketing Officer', logo: '/company4.png', jobs: 24, location: 'Kavya School' },
  { id: 5, name: 'Developer', logo: '/company6.png', jobs: 9, location: 'Samadhan Dainik' },
  { id: 6, name: 'IT Assistant', logo: '/company7.png', jobs: 32, location: 'Health Incurance Board of Nepal' },
  // Add more companies as needed
];

const JobMain = () => {
  return (
    <div>
      <div className=" container  mx-auto md:flex gap-4 items-start px-4    ">
      <JobLeftSection />
        <JobRightSection />
      </div>
      <div className=" container  mx-auto md:flex gap-4 items-start px-4 pb-10  ">
      <div className="w-[75%] jobcontainer  ">
        <Title title="Recent Jobs" />
        <FeaturedCompaniesGrid featuredCompanies={featuredCompanies} />
      </div>
    </div>
    </div>

  );
};

export default JobMain;
