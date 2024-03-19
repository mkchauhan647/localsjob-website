"use client"
import React from 'react'
import Image from 'next/image'
import { Button, Card } from 'antd'
import { CiStar } from "react-icons/ci";
import Jobtable from './components/jobtable';
import Link from 'next/link';

const page = () => {
    return (
        <div className='w-[85%] min-h-[60vh] mx-auto'>
            <div className='min-h-[25vh] my-5 flex items-center justify-between border-2 border-black'>
                <div className='mx-5 self-end mb-5'>
                    <Image src='/avatar.png' height={70} width={70} alt='companyimage'
                    />
                    <div className='flex flex-col'>
                        <span className='font-bold'>Company name</span>
                        <span className='font-bold'>Company Type(IT)</span>
                    </div>
                </div>
                <div className='mx-5 self-end mb-5'>
                    <Button color='primary' className='text-white'>Follow</Button>
                </div>
            </div>
            <div>
                <span className='font-bold'>About company</span>
                <p className='text-sm'>A company description is an overview or summary of a business.
                    It's an important part of a business plan that often briefly describes
                    an organization's history, location, mission statement, management personnel
                    and, when appropriate, legal structure.Whether you're writing the company
                    description for the biography of your organization's website and social
                    media pages or seeking support from investors, an interesting business
                    description is helpful for promoting your business.</p>
            </div>
            <div className='w-[98%] flex items-center justify-between mt-4 mx-auto'>
                <span className='font-bold'>(Postion) :Manager</span>
                <div className='flex items-center justify-center gap-2'>
                    <Button className='!bg-white flex items-center justify-center gap-2'>
                        <CiStar /><span>Save job</span>
                    </Button>
                    <Button color='primary' className='text-white'>Apply now</Button>
                </div>
            </div>
            <div className='w-[98%] mx-auto mt-4'>
                <span className='font-bold'>Job status</span>
            </div>
            <div className='w-[98%] mx-auto mt-4'>
                <Jobtable />
            </div>
            <div className='w-[98%] mx-auto mt-4'>
                <span className='font-bold'>Other specification</span>
                <ul style={{ listStyleType: 'circle', marginLeft: '30px' }}>
                    <li className='text-sm'>Must be a Bachelor degree holder in any computer science related field</li>
                    <li className='text-sm'>Computer skills and prodificent in react.js and node.js</li>
                    <li className='text-sm'>Attention to details</li>
                    <li className='text-sm'>Programming skills</li>
                    <li className='text-sm'>Attention to details</li>
                </ul>
            </div>
            <div className='w-[98%] mx-auto mt-5'>
                <span className='font-bold block'>You have gone incongnito</span>
                <span className='font-bold block'>Now your can browse privately.Other people who use this device cant see your activity.</span>
                <Button color='primary' className='text-white mt-4'>Apply now</Button>
                <div className='mt-8 flex items-center justify-between'>
                    <Button className='!bg-white flex items-center justify-center gap-2'>
                        <CiStar />
                        <span>Save job</span>
                    </Button>
                    <div>
                        <Link href="">fb</Link>
                        <Link href="">messenger</Link>
                        <Link href="">linkedin</Link>
                        <Link href="">whatsapp</Link>
                        <Link href="">share</Link>
                    </div>
                </div>
            </div>

            <div className='w-[94%] mx-auto  py-10 '>
                <h3 className='font-bold my-4'>Similar jobs</h3>
                <div className='flex item-center justify-start gap-4 mx-5'>
                    <Card title="Postion:(Manager)" className='w-[200px] h-[200px] cursor-pointer border-2 border-black'>
                        Job 1 description  here
                    </Card>
                    <Card title="Postion:(Accountant)" className='w-[200px] h-[200px] cursor-pointer border-2 border-black'>
                        Job 2 description  here
                    </Card>
                    <Card title="Postion:(Teacher)" className='w-[200px] h-[200px] cursor-pointer border-2 border-black'>
                        Job 3 description  here
                    </Card>
                    <Card title="Postion:(Solution architect)" className='w-[200px] h-[200px] cursor-pointer border-2 border-black'>
                        Job 4 description  here
                    </Card>
                    <Card title="Postion:(Web developer)" className='w-[200px] h-[200px] cursor-pointer border-2 border-black'>
                        Job 5 description  here
                    </Card>
                    <Card title="Postion:(Vehicle driver)" className='w-[200px] h-[200px] cursor-pointer border-2 border-black'>
                        Job 6 description  here
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default page