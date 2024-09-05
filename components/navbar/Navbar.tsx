"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/localjobimg.png";
import Link from "next/link";
import NavElements from "./NavElements";
import NavBrowse from "./NavBrowse";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import RegisterDropDown from "../register-modal/RegisterDropDown";
import NavMenuUser from "@/app/(auth)/job-seeker/candidate-dashboard/components/navMenu";
import NavMenuEmployer from "@/app/(auth)/employer/components/navMenu";
import axios from "@/config/AxiosConfig";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import BreadCrumbComponent from "../breadcrumb/BreadCrumbComponent";
import DashboardDropDown from "./DashboardDropDown";
import { useRouter } from "next/navigation";

const Navbar = ({ home=false }:{home?:boolean}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("token"));
  const router = useRouter();
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogout = async () => {
    const token = Cookies.get("token") || null;
    const headers = {
      Authorization: `Bearer ${token}`,
      "Api-Version": "v1",
      Accept: "application/json",
    };
    console.log("headers", headers);
    try {
      const { data } = await axios.post("/logout", {}, {
        headers: headers,
      });
      Cookies.remove("token");
      localStorage.removeItem('userData')
      setIsLoggedIn(false);
      router.push("/");
      toast.success(data?.message, {
        duration: 5000,
        position: "top-left",
      });
    } catch (error) {
      toast.error("something went wrong", {
        position: "top-left",
        duration: 5000,
      });
    }
  };
  return (
    <>
    <div className={home ? " absolute sm:py-[24px] sm:px[80px]  w-full  z-50 bg-transparent sm:h-[96px]":" relative sm:py-[24px] sm:px[80px]  w-full  z-50 bg-[#18191c] sm:h-[96px]"}>
      {/* a................bigger screens.................. */}
      <div className=" flex items-center justify-between  container mx-auto navbar ">
        <div className="flex gap-6 lg:gap-10  text-3xl items-center justify-center">
          {/*........ logo......... */}
        <Link href="/" className="">
          <Image
            src={logo}
            alt="job logo"
            className="max-w-[150px] h-[85px] md:h-[55px] py-4 md:py-2"
          />
        </Link>
         {/* .........nav elements........*/}
         <ul className=" hidden md:flex items-center gap-10 lg:gap-12 text-white  ">
          {/* <NavBrowse text="Browse Jobs" link="/" /> */}
          <NavElements text="Jobs" link="/jobs"/>
          <NavElements link="/skill-zone" text="Skill Zone" />
          <NavElements link="/service" text="Services" />
          {/* <NavElements link="/blogs" text="Blogs" /> */}
        </ul>
        </div>

        {/* ...........Hamburger Menu.......... */}
        <div
            className={`text-2xl text-white block md:hidden`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <RxHamburgerMenu className="text-4xl"/>
        </div>
       
        {/* ......Registration and Login... */}
        {true ? (
          <div className="hidden md:flex gap-x-3 ">
            {isLoggedIn ? (
                <div className="flex items-center justify-between gap-4">
                <div
                className={`bg-transparent min-w-[100px] border rounded-md text-xs py-2 text-center hover:bg-[#3596dd] border-purple-900 text-white`}
                onClick={handleLogout}
              >
                Logout
                  </div>
                  
                  <DashboardDropDown home={home} handleLogout={handleLogout} />
                  
                
                </div>
            ) : (
              <div className="flex items-center justify-between gap-4">
                <Link href={"/login"}>
                  {/* <button className="bg-transparent min-w-[100px] border rounded-md text-xs py-2 border-[#3596dd] text-[white] "> */}
                    <button className={`bg-transparent min-w-[100px] border-[3px] text-[16px] py-2 border-[white] text-white h-[48px] rounded-full  hover:text-blue-500 hover:border-blue-500 transition-all duration-300`}>
                    Log In
                  </button>
                </Link>
                    <RegisterDropDown home={home} />
              </div>
            )}
            

            <div className="border-l border-[rgba(0,0,0,.2)]"></div>

            {/* .......Employer Zone........ */}
            {/* <Link href={"/employer-zone"}>
              <button className=" text-[rgba(0,0,0,.5)] rounded-md min-w-[100px] py-2 text-xs font-semibold">
                Employer Zone
              </button>
            </Link> */}
          </div>
        ) : false ? (
          <>
            <div className=" hidden md:flex gap-x-3">
              <div>
                <NavMenuUser />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className=" hidden md:flex gap-x-3">
              <div>
                <NavMenuEmployer />
              </div>
            </div>
          </>
        )}
      </div>

      {/* b............smaller screens............... */}
      <div
        className={`md:hidden flex flex-col items-center justify-center gap-y-4  bg-white py-4 absolute w-full shadow-md ${
          showMenu ? "scale-y-100" : "scale-y-0"
        }`}
        style={{
          transition: "transform 0.1s ease-out",
          transformOrigin: "top",
        }}
      >
        {/* <NavBrowse text="Browse Jobs" link="/" /> */}
        <NavElements link="/jobs" text="Jobs" />
        <NavElements link="/skill-zone" text="Skill Zone" />
        <NavElements link="/service" text="Services" />
        {/* <NavElements link="/blogs" text="Blogs" /> */}

        {/* Registration and login  */}
          {isLoggedIn ? (
              <div className="flex items-center justify-between gap-4">
              <Link
              href="/"
              className={`bg-transparent min-w-[100px] border rounded-md text-xs py-2 text-center hover:bg-[#3596dd] border-purple-900 ${home ? "text- [white]" : "text-black"}`}
              onClick={handleLogout}
            >
              Logout
                </Link>
                
                <DashboardDropDown home={home} handleLogout={handleLogout} />
                
              
              </div>
          ):
            (
          <>
                {/* <Link href={"/login"}>
                <button className="bg-transparent min-w-[100px] border rounded-md text-xs py-2 border-[#3596dd] text-[#3596dd] ">
              Login
                  </button>
                </Link>
            <button className="bg-[#f08c38] text-white rounded-md min-w-[100px] py-2 text-xs">
              Get Started
            </button> */}
                <div className="flex items-center justify-between gap-4">
                <Link href={"/login"}>
                  {/* <button className="bg-transparent min-w-[100px] border rounded-md text-xs py-2 border-[#3596dd] text-[white] "> */}
                    <button className={`bg-transparent min-w-[100px] border- [3px] text-[16px] py-2 border- [white] text-black !border border-black  h-[48px] rounded-full  hover:text-blue-500 hover:border-blue-500 transition-all duration-300`}>
                    Log In
                  </button>
                </Link>
                    <RegisterDropDown home={false} />
              </div>

            {/* <button className=" text-[rgba(0,0,0,.5)] rounded-md min-w-[100px] py-2 text-xs font-semibold">
            Employer Zone
          </button> */}
          </>
        )}
      </div>
      
    </div>
 
      <div className="bg-white">
      { 
      !home && <BreadCrumbComponent/>
  }
      </div>
  </>
  );
};

export default Navbar;
