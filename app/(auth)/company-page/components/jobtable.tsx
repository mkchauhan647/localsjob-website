import React from 'react'
import { Divider } from 'antd'

const jobtable = () => {
    return (
        <div>
            <Divider className="bg-gray-300" />
            <div className='flex items-center justify-start w-[50%] mx-auto'>
                <div className='flex items-center justify-between w-[30%]'>
                    <span>Job level</span>
                    <span>:</span>
                </div>
                <span className='ml-5 text-primary'>Mid level</span>
            </div>
            <Divider className="bg-gray-300" />
            <div className='flex items-center justify-start w-[50%] mx-auto'>
                <div className='flex items-center justify-between w-[30%] '>
                    <span>No. of vaccancies</span>
                    <span>:</span>
                </div>
                <span className='ml-5 text-primary'>[2]</span>
            </div>
            <Divider className="bg-gray-300" />
            <div className='flex items-center justify-start w-[50%] mx-auto'>
                <div className='flex items-center justify-between w-[30%]'>
                    <span>Employment type</span>
                    <span>:</span>
                </div>
                <span className='ml-5 text-primary'>Full time</span>
            </div>
            <Divider className="bg-gray-300" />
            <div className='flex items-center justify-start w-[50%] mx-auto'>
                <div className='flex items-center justify-between w-[30%]'>
                    <span>Job location</span>
                    <span>:</span>
                </div>
                <span className='ml-5 text-primary'>Kathmandu</span>
            </div>
            <Divider className="bg-gray-300" />
            <div className='flex items-center justify-start w-[50%] mx-auto'>
                <div className='flex items-center justify-between w-[30%]'>
                    <span>Offered salary</span>
                    <span>:</span>
                </div>
                <span className='ml-5 text-primary'>75k</span>
            </div>
            <Divider className="bg-gray-300" />
            <div className='flex items-center justify-start w-[50%] mx-auto'>
                <div className='flex items-center justify-between w-[30%]'>
                    <span>Educational level</span>
                    <span>:</span>
                </div>
                <span className='ml-5 text-primary'>Bachelors</span>
            </div>
            <Divider className="bg-gray-300" />
            <div className='flex items-center justify-start w-[50%] mx-auto'>
                <div className='flex items-center justify-between w-[30%]'>
                    <span>Experience required</span>
                    <span>:</span>
                </div>
                <span className='ml-5 text-primary'>2 year</span>
            </div>
            <Divider className="bg-gray-300" />
            <div className='flex items-center justify-start w-[50%] mx-auto'>
                <div className='flex items-center justify-between w-[30%]'>
                    <span>Professional skill required</span>
                    <span>:</span>
                </div>
                <span className='ml-5 text-primary font-semibold text-sm'>Good communication skill</span>
            </div>
            <Divider className="bg-gray-300" />

        </div>
    )
}

export default jobtable