import { PiMapPin } from "react-icons/pi";

const JobSidebar = () => {
    return (
        // {/* Salary & Location */}
        <div className="flex p-6 xl:p-8 gap-3 xl:gap-8  border-2 border-[#E7F0FA] min-h-[160px] rounded-lg">

        <div className="flex flex-col gap-2">
                <h2 className="font-medium">Salary (NPR)</h2>
                <h2 className=" text-sm font-[500] text-green-600 xl:text-2xl md:whitespace-nowrap">Rs 100,000 - Rs 120,000</h2>
                <p className="text-gray-500 whitespace-nowrap text-[14px] md:text-[16px]">Yearly salary</p>
            </div>
            <svg width="3" height="96" viewBox="0 0 3 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1.59399" y1="4.37114e-08" x2="1.59399" y2="96" stroke="#E7F0FA" strokeWidth="2"/>
            </svg>
            <div className="flex flex-col gap-2">
            <PiMapPin className="text-figma_red text-[32px]"/>
                <h2 className="font-medium"> Job Location</h2>
                <p className="text-gray-500 whitespace-nowrap text-[14px] md:text-[16px]">Kathmandu, Nepal</p>
            </div>


        </div>
    )
}

export default JobSidebar;