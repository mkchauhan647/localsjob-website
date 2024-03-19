"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/localsjob-logo.png";
import Link from "next/link";
import NavElements from "./NavElements";
import NavBrowse from "./NavBrowse";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import RegisterDropDown from "../register-modal/RegisterDropDown";
import NavMenuUser from "@/app/(auth)/job-seeker/candidate-dashboard/components/navMenu";
import NavMenuEmployer from "@/app/(auth)/employer/components/navMenu";



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=" sticky top-0 border-b-2  z-50 bg-[#0d64cc]">
      {/* a................bigger screens.................. */}
      <div className=" flex items-center justify-between  container mx-auto navbar ">
        {/*........ logo......... */}
        <Link href="/">
          <Image src={logo} alt="job logo" className="max-w-[150px] h-[55px] py-2" />
        </Link>
        {/* ...........Hamburger Menu.......... */}
        <div
          className="text-2xl text-[white] block md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          <RxHamburgerMenu />
        </div>
        {/* .........nav elements........*/}
        <ul className=" hidden md:flex items-center gap-8 text-white">
          <NavBrowse text="Browse Jobs" link="/"  />
          <NavElements link="/skill-zone" text="Skill Zone" />
        <NavElements link="/service" text="Services" />
        <NavElements link="/blogs" text="Blogs" />
        </ul>

        {/* ......Registration and Login... */}
        {true ?
          <div className="hidden md:flex gap-x-3 ">
            
            <Link href={"/login"}>
              <button className="bg-transparent min-w-[100px] border rounded-md text-xs py-2 border-[#3596dd] text-[white] ">
                Login
              </button>
            </Link>

            <RegisterDropDown />

            <div className="border-l border-[rgba(0,0,0,.2)]"></div>

            {/* .......Employer Zone........ */}
            {/* <Link href={"/employer-zone"}>
              <button className=" text-[rgba(0,0,0,.5)] rounded-md min-w-[100px] py-2 text-xs font-semibold">
                Employer Zone
              </button>
            </Link> */}
          </div>

          : false ?
            <>
              <div className=" hidden md:flex gap-x-3">
                <div>
                  <NavMenuUser />
                </div>
              </div>
            </>
            :
            <>
              <div className=" hidden md:flex gap-x-3">
                <div>
                  <NavMenuEmployer />
              </div>
            </div>
          </>
        }

      </div>

      {/* b............smaller screens............... */}
      <div
        className={`md:hidden flex flex-col items-center justify-center gap-y-4 bg-white py-4 absolute w-full shadow-md ${
          showMenu ? "scale-y-100" : "scale-y-0"
        }`}
        style={{
          transition: "transform 0.1s ease-out",
          transformOrigin: "top",
        }}
      >
        <NavBrowse text="Browse Jobs" link="/" />
        <NavElements link="/skill-zone" text="Skill Zone" />
        <NavElements link="/service" text="Services" />
        <NavElements link="/blogs" text="Blogs" />

        {/* Registration and login  */}
        {true &&
          <>
          <button className="bg-transparent min-w-[100px] border rounded-md text-xs py-2 border-[#3596dd] text-[#3596dd] ">
            Login
          </button>
          <button className="bg-[#f08c38] text-white rounded-md min-w-[100px] py-2 text-xs">
            Register
          </button>
          {/* <button className=" text-[rgba(0,0,0,.5)] rounded-md min-w-[100px] py-2 text-xs font-semibold">
            Employer Zone
          </button> */}
          </>

        }

      </div>
    </div>
  );
};

export default Navbar;
