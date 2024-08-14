
import { PiBookmarkSimple} from "react-icons/pi";
const JobHeader = () => {
    return (
        <div className="flex justify-between items-center xl:h-[96px] gap-8 flex-wrap ">
            <div className="flex justify-between items-center gap-4">
                <img
                    src="/f1soft.png"
                    alt="company logo"
                    className=" w-[85px] md:w-[96px] h-[85px] md:h-[96px] rounded-full object-cover"
                />

                <div className="flex flex-col gap-3 mb-3">
                    <h2 className="text-2xl font-medium whitespace-nowrap">Senior UX Designer</h2>
                    <div className="flex gap-2 h-[28px] justify-center items-center fl ex-wrap">
                        <p className="text-gray-500 text-[14px] md:text-[18px]">at f1soft</p>
                        <p className="text-white uppercase text-[14px] md:text[16px] bg-green-600 py- 1 px-2  md:px-3 rounded whitespace-nowrap">
                            Full-Time
                        </p>
                        <p className="text-figma_red text-[14px] md:text[16px] bg-mprimary rounded-[52px] py-1 px-2 md:px-3">
                            Featured
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex gap-3">
               
                <div className="min-h-[56px] bg-mprimary w-[57px] flex justify-center items-center cursor-pointer">
                <PiBookmarkSimple className="text-figma_red text-[32px]  "/>
                </div>
                <button className="bg-figma_red text-white px-8 py-2  rounded  md:w-[248px] text-center ">
                    Apply Now{" "}
                    <span className="ml-2 text-[24px] text-center"> &rarr;</span>
                </button>
                {/* <button className="bg-gray-200 text-black px-4 py-2 rounded-lg">Save Job</button> */}
            </div>
        </div>
    )
};

export default JobHeader;