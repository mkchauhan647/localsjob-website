"use client";

import { useEffect, useState } from "react";
import TopJobs from "./job-trend/TopJobs";
import Image from "next/image";
import axios from "axios";

export interface dataProps {
  company: string;
  title: string;
  img: string;
  location: string;
  skill: string;
}

const data: dataProps[] = [
  {
    company: "Digital Home International",
    title: "Service Technicial (Home Applia....",
    img: "/company1.jpg",
    location: "Balkumari , Lalitpur",
    skill: "Key Skill: Communication Time Management Flexibility ",
  },
  {
    company: "Digital Home International",
    title: "Service Technicial (Home Applia....",
    img: "/company1.jpg",
    location: "Balkumari , Lalitpur",
    skill: "Key Skill: Communication Time Management Flexibility ",
  },
  {
    company: "Digital Home International",
    title: "Service Technicial (Home Applia....",
    img: "/company1.jpg",
    location: "Balkumari , Lalitpur",
    skill: "Key Skill: Communication Time Management Flexibility ",
  },
  {
    company: "Digital Home International",
    title: "Service Technicial (Home Applia....",
    img: "/company1.jpg",
    location: "Balkumari , Lalitpur",
    skill: "Key Skill: Communication Time Management Flexibility ",
  },
  {
    company: "Digital Home International",
    title: "Service Technicial (Home Applia....",
    img: "/company1.jpg",
    location: "Balkumari , Lalitpur",
    skill: "Key Skill: Communication Time Management Flexibility ",
  },
  {
    company: "Digital Home International",
    title: "Service Technicial (Home Applia....",
    img: "/company1.jpg",
    location: "Balkumari , Lalitpur",
    skill: "Key Skill: Communication Time Management Flexibility ",
  },
  {
    company: "Digital Home International",
    title: "Service Technicial (Home Applia....",
    img: "/company1.jpg",
    location: "Balkumari , Lalitpur",
    skill: "Key Skill: Communication Time Management Flexibility ",
  },
  {
    company: "Digital Home International",
    title: "Service Technicial (Home Applia....",
    img: "/company1.jpg",
    location: "Balkumari , Lalitpur",
    skill: "Key Skill: Communication Time Management Flexibility ",
  },
  {
    company: "Digital Home International",
    title: "Service Technicial (Home Applia....",
    img: "/company1.jpg",
    location: "Balkumari , Lalitpur",
    skill: "Key Skill: Communication Time Management Flexibility ",
  },
  {
    company: "SDigital Home International",
    title: "Service Technicial (Home Applia....",
    img: "/company1.jpg",
    location: "Balkumari , Lalitpur",
    skill: "Key Skill: Communication Time Management Flexibility ",
  },
  {
    company: "Digital Home International",
    title: "Service Technicial (Home Applia....",
    img: "/company1.jpg",
    location: "Balkumari , Lalitpur",
    skill: "Key Skill: Communication Time Management Flexibility ",
  },
  {
    company: "Digital Home International",
    title: "Service Technicial (Home Applia....",
    img: "/company1.jpg",
    location: "Balkumari , Lalitpur",
    skill: "Key Skill: Communication Time Management Flexibility ",
  },
];

const JobLeftSection = () => {
  const [data, setData] = useState<dataProps>();
  const fetchJobDetails = async () => {
    const url = "https://localsjob.heartlandcomputer.net/api/v1/jobs";
    try {
      const { data } = await axios.get(url);
      // setData(data.data)
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobDetails();
  }, []);
  return (
    <div className="basis-[75%]  ">
      <TopJobs />
    </div>
  );
};

export default JobLeftSection;
