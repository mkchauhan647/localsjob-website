import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import LoginForm from "./form";

export const metadata: Metadata = {
  title: "Login | Startup Jobs",
};

const Page = () => {
  return (
    <div className="min-h-screen flex items- center  justify-center">
      <div className="container mx-auto px-4 lg:max-w-3xl">
        <div className="bg-white p-6 shadow-lg rounded-lg lg:flex lg:items-center lg:justify-between ">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              Unlock Local Opportunities!
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Join LocalsJob and connect with local businesses. Highlight your skills, get noticed by employers, and grow within your community.
            </p>
            <p className="text-xs text-gray-500 mb-4">
              Sign in now to boost your career!
            </p>
            <LoginForm />
          </div>
          <div className="hidden lg:block lg:w-1/2 lg:pl-8">
            <Image src="/register.jpg" alt="register image" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
