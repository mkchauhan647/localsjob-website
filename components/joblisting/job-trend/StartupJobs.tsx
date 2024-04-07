import JobCard from "./JobCard";
import Title from "../Title";
import { useEffect } from "react";
import axios from "axios";
export interface dataProps {
  company: string;
  title: string;
  img: string;
}

const data: dataProps[] = [
  {
    company: "Siddhartha Bussiness Group..",
    title: "Receptionist",
    img: "/company1.jpg",
  },
  {
    company: "Siddhartha Bussiness Group..",
    title: "Receptionist",
    img: "/company1.jpg",
  },
  {
    company: "Siddhartha Bussiness Group..",
    title: "Receptionist",
    img: "/company1.jpg",
  },
  {
    company: "Siddhartha Bussiness Group..",
    title: "Receptionist",
    img: "/company1.jpg",
  },
  {
    company: "Siddhartha Bussiness Group..",
    title: "Receptionist",
    img: "/company1.jpg",
  },
  {
    company: "Siddhartha Bussiness Group..",
    title: "Receptionist",
    img: "/company1.jpg",
  },
  {
    company: "Siddhartha Bussiness Group..",
    title: "Receptionist",
    img: "/company1.jpg",
  },
  {
    company: "Siddhartha Bussiness Group..",
    title: "Receptionist",
    img: "/company1.jpg",
  },
  {
    company: "Siddhartha Bussiness Group..",
    title: "Receptionist",
    img: "/company1.jpg",
  },
  {
    company: "Siddhartha Bussiness Group..",
    title: "Receptionist",
    img: "/company1.jpg",
  },
  {
    company: "Siddhartha Bussiness Group..",
    title: "Receptionist",
    img: "/company1.jpg",
  },
  {
    company: "Siddhartha Bussiness Group..",
    title: "Receptionist",
    img: "/company1.jpg",
  },
];

const StartupJobs = () => {
  const getHomeData = async () => {
    const url = "https://localsjob.heartlandcomputer.net/api/v1/home";
    const { data } = await axios.get(url);
    console.log(data);
  };

  useEffect(() => {
    // getHomeData();
  }, []);
  return (
    <div>
      <Title title="Startup Jobs" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-3  bg-[whitesmoke]  px-5 py-5">
        {data.map((job, index) => (
          <section key={index} className="shadow bg-white">
            <JobCard job={job} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default StartupJobs;
