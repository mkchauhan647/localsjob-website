'use client'
import { EditOutlined, SettingOutlined } from "@ant-design/icons"
import { Button, Switch, } from "antd"
import { FaBirthdayCake, FaRegMoneyBillAlt } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { IoIosHome } from "react-icons/io"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { headersWithToken } from "@/app/utils/auth"
import { getAccountSettings } from "@/app/utils/api"
import { useState } from "react"

export const DashboardLayout = ({children}:{
    children: React.ReactNode;
}) => {

  const [data, setData] = useState(null);


  useEffect(() => {
    
    async function getData() {
      try {
        const res = await getAccountSettings();
        console.log('Settings Data:', res);
        setData(res.data);
      }
      catch (err) {
        console.log('Error:', err);
      }
   }


  },[])

    return (
        <>
        
        <div className="flex items-center justify-center  w-full min-h-[90vh]">
      <div className="flex flex-col min-h-[95%] w-[85%] m-5 items-start lg:flex-row md:flex-row gap-7">
       
    
                    
                    {children}

      </div>
    </div>
        
        </>
    )
}
// 'use client';

// import { EditOutlined, SettingOutlined } from "@ant-design/icons";
// import { Button, Switch } from "antd";
// import { FaBirthdayCake, FaRegMoneyBillAlt } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoIosHome } from "react-icons/io";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export const DashboardLayout = ({children}: {
//     children: React.ReactNode;
// }) => {
//     const [userProfile, setUserProfile] = useState<any>(null);

//     useEffect(() => {
//         const fetchUserProfile = async () => {
//             try {
//                 const response = await axios.get('/api/user-profile'); // Example API endpoint
//                 setUserProfile(response.data);
//             } catch (error) {
//                 console.error("Error fetching user profile", error);
//             }
//         };

//         fetchUserProfile();
//     }, []);

//     return (
//         <div className="flex items-center justify-center w-full min-h-[90vh]">
//             <div className="flex flex-col min-h-[95%] w-[85%] m-5 items-start lg:flex-row md:flex-row">
//                 <div className="md:w-1/3 lg:w-1/3 xl:w-1/3 w-full">
//                     <div className="pb-3">
//                         <h1 className="pt-4 pl-12">Need Help To Get Job?</h1>
//                         <Button type="primary" className="mt-4 w-[50%] ml-12">
//                             Find Job For Me
//                         </Button>
//                     </div>
//                     <div className="flex flex-col items-start p-8 shadow-md">
//                         <div className="flex items-start gap-4">
//                             <Image
//                                 src={userProfile?.avatar || "/avatar.png"}
//                                 width={100}
//                                 height={100}
//                                 className="border-black rounded-full border-2"
//                                 alt="profilepic"
//                             />
//                             <span className="font-semibold mt-4">{userProfile?.name || "Mr. Binod Bastola"}</span>
//                         </div>
//                         <div className="flex flex-col items-start gap-2 mt-4">
//                             <div className="flex items-center gap-4">
//                                 <IoIosHome />
//                                 <span>Address: {userProfile?.address || "Devchuli-16, Nawalpur"}</span>
//                             </div>
//                             <div className="flex items-center gap-4">
//                                 <FaBirthdayCake />
//                                 <span>Age: {userProfile?.age || "25"} yrs</span>
//                             </div>
//                             <div className="flex items-center gap-4">
//                                 <FaRegMoneyBillAlt />
//                                 <span>Expected salary: {userProfile?.salary || "Rs.35000 - Rs.65000"}</span>
//                             </div>
//                             <div className="flex items-center gap-4">
//                                 <FaLocationDot />
//                                 <span>Preferred job location: {userProfile?.jobLocation || "Kathmandu, Nepal"}</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-start gap-5 p-8 shadow-md">
//                         <span>Complete your profile</span>
//                         <EditOutlined className="text-blue-500" />
//                     </div>
//                     <Button type="primary" className="mt-4 w-[100%]">
//                         Convert into resume in pdf format
//                     </Button>
//                     <div className="border-black border mt-4"></div>
//                     <h1 className="pt-4 pl-12">Register your skill on Skill Zone</h1>
//                     <Button type="primary" className="mt-4 w-[50%] ml-12">
//                         Skill Registration
//                     </Button>
//                     <div className="flex flex-col items-start justify-center gap-2 p-8 shadow-md mt-2">
//                         <div>
//                             <Switch defaultChecked={userProfile?.seekingJob} onChange={() => {}} />
//                             <span className="ml-4">Actively seeking for a job?</span>
//                         </div>
//                         <p className="text-xs">Expires on: {userProfile?.expires || "Feb. 28, 2024"}</p>
//                     </div>
//                     <div className="flex items-center px-[8px] py-[10px] hover:bg-gray-300 text-gray-600 rounded-md my-3">
//                         <SettingOutlined style={{ fontSize: '24px', color: 'rgba(0,0,0,.5)', marginRight: '8px' }} />
//                         <a className="font-semibold !text-gray-600" href="/job-seeker/candidate-dashboard/settings">
//                             Settings
//                         </a>
//                     </div>
//                 </div>
//                 <div className="flex-grow">{children}</div>
//             </div>
//         </div>
//     );
// };


// export default DashboardLayout;