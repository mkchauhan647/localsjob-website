"use client"
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Statistic, Progress } from 'antd';
import avatar from '../../../../public/avatar.png'
import Link from 'next/link';
import Image from 'next/image';
import { EditOutlined } from '@ant-design/icons';
import { IoIosHome } from "react-icons/io";
import { FaBirthdayCake } from "react-icons/fa";
import { Button } from 'antd';
import jobmarket from '../../../../public/jobmarket.jpg'
import JobseekerGraph from './Charts';
import Cookies from 'js-cookie';
import axios from '@/config/AxiosConfig'


interface CountsType {
    jobCount: string,
    companyCount: string,
    applicantCount: string,

}


const CompanyDashboard: React.FC = () => {
    // Placeholder data for statistics
    const totalJobs = 50;
    const filledJobs = 30;
    const expiredJobs = 0;
    const revenue = 50000;



    // Placeholder data for progress bars
    const applicationsProgress = 60; // Percentage
    const revenueProgress = 75; // Percentage

    const [counts, setCounts] = useState<any>({
        jobCount: "0",
        companiesCount: "0",
        applicantCount: "0",
    });
    const [applicants, setApplicants] = useState<any>([]);


    useEffect(() => {


        async function getCounts() {

            const countsEndpoint = ['jobs/count','companies/count','applicants/count']

            try {
                const token = Cookies.get("token") || null;
                const headers = {
                  Authorization: `Bearer ${token}`,
                  "Api-Version": "v1",
                  Accept: "application/json",
                };

                

                const responses = countsEndpoint.map(async(value) => {
                    const response = await axios.get(`/${value}`, {
                       headers
                    });

                    return response.data;
                })

                

                setCounts(responses);

                const response = await axios.get('/applicants', {
                    headers
                })

                setApplicants(response.data.data.data);

                
            } catch (error) {
                console.log("Error occured", error);
            }
            
        }

        getCounts();
        

    },[])

    return (
        <div>
            <h2>Company Dashboard</h2>
            <Row gutter={16} className='flex flex-col gap-2 lg:gap-0 xl:gap-0 md:flex-row lg:flex-row xl:flex-row'>
                <Col className='w-full lg:w-1/4 xl:w-1/4'>
                    <Card className='bg-blue-200'>
                        <Statistic title="Jobs" value={counts.jobCount} />
                    </Card>
                </Col>
                <Col className='w-full lg:w-1/4 xl:w-1/4'>
                    <Card className='bg-green-200'>
                        <Statistic title="Companies" value={counts.companiesCount} />
                    </Card>
                </Col>
                <Col className='w-full lg:w-1/4 xl:w-1/4'>
                    <Card className='bg-red-200'>
                        <Statistic title="Applicants" value={counts.applicantCount} />
                    </Card>
                </Col>
                {/* <Col className='w-full lg:w-1/4 xl:w-1/4'>
                    <Card className='bg-yellow-200'>
                        <Statistic title="Revenue" value={revenue} prefix="$" />
                    </Card>
                </Col> */}
            </Row>
            <Row gutter={16} style={{ marginTop: '16px' }}>
                <Col span={12}>
                    <Card title="New Applicants">
                        {/* <Progress percent={applicationsProgress} /> */}
                        {
                            applicants.map(value => {
                                 
                                return (
                                    <div className='flex justify-between items-center'>
                                          <Link href="#">Applicant name </Link>  
                                          <Link href="#">Edit</Link>  
                                    </div>
                                )
                             })
                        }


                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Recent Activities">
                        {/* <Progress percent={revenueProgress} /> */}
                        <p className=''>Recent Activities is created at {new Date().toLocaleDateString()} { new Date().toLocaleTimeString()}</p>
                    </Card>
                </Col>
            </Row>
            {/* Add more cards and components as needed for the dashboard */}

            {/* <div className='flex items-center justify-center w-full min-h-[90vh]'>
                <div className='flex min-h-[95%] w-full m-5 items-start justify-between flex-col lg:flex-row xl:flex-row'>
                    <div className='w-full lg:w-1/3  xl:w-1/3 '>
                        <div className='flex flex-col items-start  p-8 shadow-md'>
                            <div className='flex items-start gap-4'>
                                <Image src='/avatar.png' width={100} height={100} className='border-black rounded-full border-2' alt='profilepic' />
                                <span className='font-semibold mt-4 text-2xl'>StartUp jobs</span>
                            </div>
                            <div className='flex flex-col items-start gap-2 mt-4'>
                                <div className='flex items-center gap-4'>
                                    <IoIosHome />
                                    <span>Address :Durbar marg, kathmandu</span>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <FaBirthdayCake />
                                    <span>Founded :2018</span>
                                </div>

                            </div>

                        </div>
                        <div className='flex  items-center justify-start gap-5 p-8 shadow-md'>
                            <span>
                                Complete your profile
                            </span>
                            <EditOutlined className='text-blue-500' />
                        </div>
                        <div>

                        </div>

                    </div>
                    <div className='w-full lg:w-2/3 xl:w-2/3 mt-4'>
                        <h3 className='font-semibold ml-5 text-xl'>About us</h3>
                        <div className='flex flex-col  items-center justify-between  gap-4 p-8 shadow-md'>
                            <p>
                                - How are we Different ?
                                We Bridge the Gap between Technology and Business
                                We are highly concerned about the alignment of technology and business to effectively target 	potential people. We analyze to identify the potentiality of our client's business to create a 	digital market and define their unique brand strategy by injecting technological tools.
                                We Comprise Versatile and Passionate Team
                                We are multifaceted team of website designers, Mobile App developers and marketers who pursue a 	common goal. Our passion is distinctly shown in our work through creation of innovative ideas and thrives to excel our self.
                                We Cater Easily Accessible Products
                                We compose products that are firm and precise in additional to our artistic abilities. We provide 	everything within our reach to allow your business site easily accessible.
                            </p>
                        </div>
                        <div className='flex flex-col lg:flex-row xl:flex-row gap-4 items-start p-8 shadow-md'>
                            <div>
                                <Image src={jobmarket} height={500} width={500} alt='jobmarket' />
                                <span className='text-sm mt-5 text-blue-500'>
                                    Hire the best fit
                                </span>
                            </div>
                            <div className='lg:self-end xl:self-end'>
                                <JobseekerGraph />
                            </div>
                        </div>


                        <div className='flex flex-col  items-start  p-8 shadow-md'>
                            <span className='font-semibold mb-7'>HR INSIDER</span>
                            <div className='flex flex-col lg:flex-row xl:flex-row items-center justify-around  w-full'>
                                <Card title="Blog post" extra={<a href="#">More</a>} className='w-full lg:w-[200px] xl:w-[200px]'>
                                    <p>blog content content</p>
                                    <p>blog content content</p>
                                    <p>blog content content</p>
                                </Card>
                                <Card title="Blog title" extra={<a href="#">More</a>} className='w-full lg:w-[200px] xl:w-[200px]'>
                                    <p>blog content content</p>
                                    <p>blog content content</p>
                                    <p>blog content content</p>
                                </Card>
                                <Card title="Blog title" extra={<a href="#">More</a>} className='w-full lg:w-[200px] xl:w-[200px]'>
                                    <p>blog content content</p>
                                    <p>blog content content</p>
                                    <p>blog content content</p>
                                </Card>
                            </div>
                            <Link href="/" className='ml-auto mt-4'>
                                <span className='text-blue-500 text-xs cursor-pointer' >View more</span>
                            </Link>

                        </div>
                        <div className='flex flex-col  items-start  p-8 shadow-md'>
                            <h3 className='font-semibold mb-4'>Post Job</h3>
                            <div className='flex gap-4 items-center'>
                                <span>Announce a new job vaccancy</span>
                                <Button type='primary'>
                                    Post a job
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default CompanyDashboard;
