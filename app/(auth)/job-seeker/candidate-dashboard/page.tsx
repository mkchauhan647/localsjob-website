"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import Image from "next/image";
import { Card, Space } from "antd";
import JobMenu from "./components/jobMenu";
import { EditOutlined } from "@ant-design/icons";
import { IoIosHome } from "react-icons/io";
import { FaBirthdayCake } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "antd";
import Link from "next/link";
import { headersWithToken, withAuth } from "@/app/utils/auth";
import Cookies from "js-cookie";
import { AccountSettings,JobApplication } from "@/util/types";
import { getAccountSettings, getExperiences } from "@/app/utils/api";
import axios from "axios";

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const page = () => {


  const [accountData, setAccountData] = useState<AccountSettings>();


  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [experiences, setExperiences] = useState<any[]>([]);

  const transformApplicationsData = (applicationsData: any[]): JobApplication[] => {
    return applicationsData.map((application) => ({
      id: application.id,
      firstName: application.first_name,
      lastName: application.last_name,
      email: application.email,
      jobName: application.job.name,
      companyName: application.job.company.name,
      appliedDate: application.created_at,
      status: application.status.label,
    }));
  };

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          'https://main.localsjob.com/api/v1/account/applied-jobs',
          {
            headers: headersWithToken(),
          }
        );
        const transformedData = transformApplicationsData(response.data?.data?.applications?.data || []);
        setApplications(transformedData);
      } catch (error) {
        console.error('Error fetching applied jobs:', error);
      }
    };

    fetchApplications();
  }, []);

  useEffect(() => {
    
    async function getData() {
      try {
        const res = await getAccountSettings();
        console.log('Settings Data:', res);
        setAccountData(res.data);
      }
      catch (err) {
        console.log('Error:', err);
      }
    }

    async function getExp() {
      try {
        const res = await getExperiences();
        console.log('Experience Data:', res);
        if (res.data) {
          console.log(res.data.experiences);

          setExperiences(res.data.experiences);

        }
      }
      catch (err) {
        console.log('Error:', err);
      }
    }

   

    getData();


  },[])

  


  return (
    <>
    { accountData && 

    <div className="flex items-center justify-center w-full min-h-[90vh] ">
      <div className="flex flex-col min-h-[95%] w-[85%] m-5 items-start lg:flex-row md:flex-row">
       
        
      <div className="md:w-1/3 lg:w-1/3 xl:w-1/3 w-full">
          <div className="pb-3">
            <h1 className="pt-4 pl-12">Need Help To Get Job ?</h1>

            <Button type="primary" className="mt-4 w-[50%] ml-12" href="/jobs">
              Find Job For Me
            </Button>
          </div>
          <div className="flex flex-col items-start  p-8 shadow-md">
            <div className="flex items-start gap-4">
              <Image
                src={"/tavatar1.png"}
                width={100}
                height={100}
                className="border-black rounded-full border-2"
                alt="profilepic"
              />
                  <span className="font-semibold mt-4">{accountData.account.first_name + " " + accountData.account.last_name}</span>
            </div>
            <div className="flex flex-col items-start gap-2 mt-4">
              <div className="flex items-center gap-4">
                <IoIosHome />
                    <span>{accountData.account.address || "Address :Devchuli-16, Nawalpur"}</span>
              </div>
              <div className="flex items-center gap-4">
                <FaBirthdayCake />
                    <span>{accountData.account.dob || "Age: 25 Years"}</span>
              </div>
              <div className="flex items-center gap-4">
                <FaRegMoneyBillAlt />
                <span>Expected salary :Rs.35000 - Rs.65000</span>
              </div>
              <div className="flex items-center gap-4">
                <FaLocationDot />
                <span>Preffered job location :Kathmandu,Nepal</span>
              </div>
            </div>
          </div>
              <Link href="/settings" className="">
              <div className="flex  items-center justify-around gap-5 p-3 my-3 rounded-md shadow-md bg-black text-white hover:bg-blue-500">
            <span>Complete your profile</span>
            <EditOutlined className=""  />
          </div>
              </Link>
          <Button type="primary" className="mt-4 w-[100%]">
            Convert into resume in pdf format
          </Button>

          <div className=" border-black  border  mt-4"></div>
          <h1 className="pt-4 pl-12">Register your skill on Skill Zone</h1>

          <Button type="primary" className="mt-4 w-[50%] ml-12" href="/skill-registration">
            SKill Registration
          </Button>
          <div className="flex flex-col items-start justify-center gap-2 p-8 shadow-md  mt-2">
            <div>
              <Switch defaultChecked onChange={()=>{}} />
              <span className="ml-4">Actively seeking for a job ?</span>
            </div>
                            <p className="text-xs">Expires on: Feb. 28, 2024</p>
                            

          </div>       
                    </div>


        <div className="w-full md:2/3 lg:2/3 xl:2/3 mt-5">
          <h3 className="font-semibold ml-5 text-xl">Biography</h3>
          <div className="flex flex-col  items-center justify-between  gap-4 p-8 shadow-md ">
            <p>
             {accountData.account.bio || " I've been passionate about graphic design and digital art from an\
              early age with a keen interest in Website and Mobile Application\
              User Interfaces. I can create high-quality and aesthetically\
              pleasing designs in a quick turnaround time. Check out the\
              portfolio section of my profile to see samples of my work and feel\
              free to discuss your designing needs. I mostly use Adobe\
              Photoshop, Illustrator, XD and Figma. *Website User Experience and\
              Interface (UI/UX) Design - for all kinds of Professional and\
              Personal websites. *Mobile Application User Experience and\
              Interface Design - for all kinds of IOS/Android and Hybrid Mobile\
              Applications. *Wireframe Designs. *Logo Design. *Banner Design."}
            </p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between  gap-4 p-8 shadow-md ">
            <Card className="w-52 bg-blue-200">
                  <p className="font-bold text-xl">{applications.length || '0'}</p>
          <p>Applied jobs</p>
            </Card>
            <Card className="w-52 bg-yellow-200">
              <p className="font-bold text-xl">0 </p>
              <p>Favourite jobs</p>
            </Card>
            <Card className="w-52 bg-green-200">
              <p className="font-bold text-xl">0</p>
              <p>Job alerts</p>
            </Card>
          </div>
          <div className="flex flex-col  items-start justify-between p-8 shadow-md">
            <JobMenu applications={applications} />
          </div>
          {/* <div className="flex flex-col  items-start  p-8 shadow-md">
            <span className="font-semibold mb-7">Blog post</span>
            <div className="flex flex-col md:flex-row lg:flex-row items-center justify-around  w-full">
              <Card
                title="Blog title"
                extra={<a href="#">More</a>}
                style={{ width: 200 }}
              >
                <p>blog content content</p>
                <p>blog content content</p>
                <p>blog content content</p>
              </Card>
              <Card
                title="Blog title"
                extra={<a href="#">More</a>}
                style={{ width: 200 }}
              >
                <p>blog content content</p>
                <p>blog content content</p>
                <p>blog content content</p>
              </Card>
              <Card
                title="Blog title"
                extra={<a href="#">More</a>}
                style={{ width: 200 }}
              >
                <p>blog content content</p>
                <p>blog content content</p>
                <p>blog content content</p>
              </Card>
            </div>
            <Link href="/" className="ml-auto mt-4">
              <span className="text-blue-500 text-xs cursor-pointer">
                View more
              </span>
            </Link>
          </div>
          <div className="flex flex-col  items-start  p-8 shadow-md">
            <h3 className="font-semibold mb-4">Jobs by category</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
              <div className="bg-gray-300 p-4 w-64 cursor-pointer hover:bg-gray-200 ">
                Column 1
              </div>
              <div className="bg-gray-400 p-4 w-64 cursor-pointer hover:bg-gray-200 ">
                Column 2
              </div>
              <div className="bg-gray-300 p-4 w-64 cursor-pointer hover:bg-gray-200 ">
                Column 3
              </div>
              <div className="bg-gray-300 p-4 w-64 cursor-pointer hover:bg-gray-200 ">
                Column 1
              </div>
              <div className="bg-gray-400 p-4 w-64 cursor-pointer hover:bg-gray-200 ">
                Column 2
              </div>
              <div className="bg-gray-300 p-4 w-64 cursor-pointer hover:bg-gray-200 ">
                Column 3
              </div>
              <div className="bg-gray-300 p-4 w-64 cursor-pointer hover:bg-gray-200 ">
                Column 1
              </div>
              <div className="bg-gray-400 p-4 w-64 cursor-pointer hover:bg-gray-200 ">
                Column 2
              </div>
              <div className="bg-gray-300 p-4 w-64 cursor-pointer hover:bg-gray-200 ">
                Column 3
              </div>
              <div className="bg-gray-300 p-4 w-64 cursor-pointer hover:bg-gray-200 ">
                Column 1
              </div>
              <div className="bg-gray-400 p-4 w-64 cursor-pointer hover:bg-gray-200 ">
                Column 2
              </div>
              <div className="bg-gray-300 p-4 w-64 cursor-pointer hover:bg-gray-200 ">
                Column 3
              </div>
            </div>
          </div> */}
        </div>
       </div>
        </div>
      }
    </>
  );
};

export default withAuth(page);
