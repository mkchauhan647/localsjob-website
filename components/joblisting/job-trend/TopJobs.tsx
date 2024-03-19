import JobCard from "./JobCard";
import Title from "../Title";
export interface dataProps {
  company: string;
  title: string;
  img: string;
}

const data: dataProps[] = [
  { company: "Siddhartha Bussiness Group..", title: "Receptionist", img: "/company1.jpg" },
  { company: "Siddhartha Bussiness Group..", title: "Receptionist", img: "/company1.jpg" },
  { company: "Siddhartha Bussiness Group..", title: "Receptionist", img: "/company1.jpg" },
  { company: "Siddhartha Bussiness Group..", title: "Receptionist", img: "/company1.jpg" },
  { company: "Siddhartha Bussiness Group..", title: "Receptionist", img: "/company1.jpg" },
  { company: "Siddhartha Bussiness Group..", title: "Receptionist", img: "/company1.jpg" },
 
 
];

const TopJobs = () => {
  return (<div>
    <Title title="Top Jobs" />
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

export default TopJobs;
