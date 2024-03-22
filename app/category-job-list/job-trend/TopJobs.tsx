import JobCard from "./JobCard";


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

const TopJobs = () => {
  return (<div>

    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-3 gap-x-3  bg-[whitesmoke]  px-5 py-5  mt-11 mb-11">
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
