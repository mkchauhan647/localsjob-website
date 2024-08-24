
import { FaFacebook,FaLinkedin,FaTwitter,FaInbox } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { PiStack, PiTimer, PiBriefcase, PiWallet, PiCalendarBlank } from "react-icons/pi";


interface JobOverviewType {
    jobPosted: string;
    jobExpire: string;
    jobLevel: string;
    experience: string;
    education: string;
}


const JobOverview = (jobOverViewData:JobOverviewType) => {
    return (
        <div className="flex p-6 xl:p-8 gap-8  border-2 border-[#E7F0FA] min-h-[428px] rounded-lg">

        <div className="flex flex-col gap-6">


            <div className="flex flex-col gap-5">
                <h2 className="font-medium text-[18px]">Job Overview</h2>
                <div className="flex flex-wrap gap-3">
                    <div className="flex flex-col gap-2 w-[100px] md:w-[147px]">
                        <PiCalendarBlank className="text-figma_red text-[32px]"/>

                            <p className="text-gray-500 uppercase text-[12px] leading-[18px]">Job Posted: <br /><span className="text-black text-[14px] leading-[20px]">{new Date(jobOverViewData.jobPosted || "14 Jun, 2024").toLocaleString('en-US',{'year':'numeric' , "month":"short","day":"2-digit"})}</span></p>
                    </div>
                    <div className="flex flex-col gap-2 w-[100px] md:w-[147px]">
                    <PiTimer className="text-figma_red text-[32px]"/>

                            <p className="text-gray-500 uppercase text-[12px] leading-[18px]">Job Expire In: <br /><span className="text-black text-[14px] leading-[20px]">{ new Date(jobOverViewData.jobExpire || "14 Aug, 2025").toLocaleString('en-US',{'year':'numeric' , "month":"short","day":"2-digit"})}</span></p>
                    </div>
                    <div className="flex flex-col gap-2 w-[100px] md:w-[147px]">
                            <PiStack className="text-figma_red text-[32px]"/>

                            <p className="text-gray-500 uppercase text-[12px] leading-[18px]">Job Level: <br /><span className="text-black text-[14px] leading-[20px]">{jobOverViewData.jobLevel || "Entry Level"}</span></p>
                    </div>
                    <div className="flex flex-col gap-2 w-[100px] md:w-[147px]">
                            <PiWallet className="text-figma_red text-[32px]"/>

                            <p className="text-gray-500 uppercase text-[12px] leading-[18px]">Experience: <br /><span className="text-black text-[14px] leading-[20px]">{jobOverViewData.experience || " 0 years"}</span></p>
                    </div>
                    <div className="flex flex-col gap-2 w-[100px] md:w-[147px]">
                    
                            <PiBriefcase className="text-figma_red text-[32px]"/>
                            {/* <HiOutlineBriefcase className="text-figma_red text-[32px]"/> */}

                            <p className="text-gray-500 uppercase text-[12px] leading-[18px]">Education: <br /><span className="text-black text-[14px] leading-[20px]">{jobOverViewData.education || "Graduate"}</span></p>
                    </div>
                </div>
            </div>

            {/* <svg width="537" height="2" viewBox="0 0 537 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.593994" y1="1" x2="536.594" y2="1" stroke="#E7F0FA" stroke-width="2"/>
</svg> */}                        <hr className=""/>

            <div className="flex flex-col gap-4">
                <h2 className="font-medium text-[18px]">Share this job:</h2>
                <div className=" h-[40px] text-xl flex flex-col md:flex-row items-start gap-2 justify-start md:items-center py- rounded">
                    <a className="cursor-pointer text-figma_red bg-mprimary flex gap-2 items-center py-2 px-4 rounded"> <AiOutlineLink/>  <span>Copy Links</span></a>
                    <ul className="flex gap-2 flex-wrap  ">
                        <li className="p-[12px] rounded bg-mprimary "><FaLinkedin className="text-figma_red"/></li>
                        <li className="p-[12px] rounded bg-figma_red "><FaFacebook className="text-white"/></li>
                        <li className="p-[12px] rounded bg-mprimary "><FaTwitter className="text-figma_red"/></li>
                        <li className="p-[12px] rounded bg-mprimary"><FaInbox className="text-figma_red"/></li>
                    </ul>

                </div>
            </div>


            </div>



    </div>
    )
}

export default JobOverview;