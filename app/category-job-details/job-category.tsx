"use client"
import React from "react";
import JobLeftSection from "./JobLeftSection";
import JobRightSection from "./JobRightSection";





const JobMain = () => {
  return (
    <div>
      <div className=" container  mx-auto md:flex gap-4 items-start px-4    ">
      <JobLeftSection />
        <JobRightSection />
      </div>
     
    </div>

  );
};

export default JobMain;
