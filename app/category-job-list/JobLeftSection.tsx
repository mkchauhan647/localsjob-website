"use client"

import TopJobs from "./job-trend/TopJobs";
import Image from "next/image";


export interface dataProps {
  company: string;
  title: string;
  img: string;
  location:string;
  skill:string;
}

const data: dataProps[] = [
  { company: "Digital Home International", title: "Service Technicial (Home Applia....", img: "/company1.jpg", location: "Balkumari , Lalitpur", skill:"Key Skill: Communication Time Management Flexibility "},
  { company: "Digital Home International", title: "Service Technicial (Home Applia....", img: "/company1.jpg", location: "Balkumari , Lalitpur", skill:"Key Skill: Communication Time Management Flexibility "},
  { company: "Digital Home International", title: "Service Technicial (Home Applia....", img: "/company1.jpg", location: "Balkumari , Lalitpur",skill:"Key Skill: Communication Time Management Flexibility "}, 
  { company: "Digital Home International", title: "Service Technicial (Home Applia....", img: "/company1.jpg" , location: "Balkumari , Lalitpur",skill:"Key Skill: Communication Time Management Flexibility "}, 
  { company: "Digital Home International", title: "Service Technicial (Home Applia....", img: "/company1.jpg", location: "Balkumari , Lalitpur",skill:"Key Skill: Communication Time Management Flexibility "},
  { company: "Digital Home International", title: "Service Technicial (Home Applia....", img: "/company1.jpg" , location: "Balkumari , Lalitpur",skill:"Key Skill: Communication Time Management Flexibility "},
  { company: "Digital Home International", title: "Service Technicial (Home Applia....", img: "/company1.jpg", location: "Balkumari , Lalitpur",skill:"Key Skill: Communication Time Management Flexibility "}, 
  { company: "Digital Home International", title: "Service Technicial (Home Applia....", img: "/company1.jpg", location: "Balkumari , Lalitpur",skill:"Key Skill: Communication Time Management Flexibility "}, 
  { company: "Digital Home International", title: "Service Technicial (Home Applia....", img: "/company1.jpg", location: "Balkumari , Lalitpur",skill:"Key Skill: Communication Time Management Flexibility "}, 
  { company: "SDigital Home International", title: "Service Technicial (Home Applia....", img: "/company1.jpg", location: "Balkumari , Lalitpur",skill:"Key Skill: Communication Time Management Flexibility "}, 
  { company: "Digital Home International", title: "Service Technicial (Home Applia....", img: "/company1.jpg", location: "Balkumari , Lalitpur",skill:"Key Skill: Communication Time Management Flexibility "},
  { company: "Digital Home International", title: "Service Technicial (Home Applia....", img: "/company1.jpg" , location: "Balkumari , Lalitpur",skill:"Key Skill: Communication Time Management Flexibility "}, 
 
 
];



const JobLeftSection = () => {
  return (
    <div className="basis-[75%]  ">
      <TopJobs />
     
    
    </div>
  );
};

export default JobLeftSection;
