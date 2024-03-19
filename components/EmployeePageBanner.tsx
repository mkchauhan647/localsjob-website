import React from "react";
import Image from "next/image";
import banner from "@/public/banner.jpg";
import { Button, Flex } from 'antd';
import { Card, Space } from 'antd';
import Link from "next/link";

const EmployeePageBanner = () => {
    return (
        <div className="relative z-10">
            <Image src={banner} alt="person and urban landscape" className="z-0 h-[150px] sm:h-full xl:h-[500px] " />
            <div className=" h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgb(0,0,0,.2)] sm:bg-transparent p-3 rounded-md">
                <div className="flex flex-col justify-center items-center ">
                    <h1 className="text-xl text-center  md:text-3xl xl:text-5xl font-bold text-white">
                        Unlock Your Hiring Potential: StartUps Job Portals Welcomes
                        Employers to Connect with Top Talent
                    </h1>
                    <div className=" mt-5">
                        <Space direction="horizontal" size={16} className="flex flex-col  md:flex-row lg:flex-row xl:flex-row">
                            <Card style={{ width: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <p className="font-bold text-xl">56,000+ </p> <span className="font-semibold">Employeers</span>
                            </Card>
                            <Card style={{ width: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <p className="font-bold text-xl">884,000+ </p> <span className="font-semibold">Jobs</span>
                            </Card>
                            <Card style={{ width: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <p className="font-bold text-xl">56,000+  </p> <span className="font-semibold">Employeers</span>
                            </Card>
                            <Card style={{ width: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <p className="font-bold text-xl">132,500 </p> <span className="font-semibold">Job seekers</span>
                            </Card>
                        </Space>
                    </div>

                </div>
                <div className="mt-5 md:mt-8 xl:mt-10">
                    <Flex gap="small" wrap="wrap" className="flex items-center justify-center gap-8">
                        <Link href='/employer/register'>
                            <Button type="primary" className="w-52">Register</Button>
                        </Link>
                        <Link href=''>
                            <Button type="primary" className="w-52">Login</Button>                            
                        </Link>

                    </Flex>
                </div>
            </div>
        </div>
    );
};

export default EmployeePageBanner;
