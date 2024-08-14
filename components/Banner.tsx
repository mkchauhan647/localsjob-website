
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import BoxCards from "./BoxCard/BoxCards";
// import banner from '@/public/hero.jpeg';
const Banner = ({ banner,text,buttons,button_bg_color,bgColor,highlightColor,strokeColor }:{banner:string,text:React.ReactElement,buttons:boolean,button_bg_color:string,bgColor:string,highlightColor:string,strokeColor:string}) => {
    

    return (
        <>
        <div className="relative w-full bg-black ">
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <Image
                src={banner}
                width={1500}
                height={470}
                // height={100%}
                alt="person and urban landscape"
                className="z-0 min-h-[600px]   md:h-[600px] lg:h-[600px] xl:h-[700px] object-cover"
            />
            <div className="absolute flex items-center mt-12  md:m-0 justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg -[rgba(0,0,0,0.2)] sm:bg-transparent p- 3 rounded-md w-full flex-wrap lg:w-[795px]">
                <div className="flex flex-col justify-center items-center flex-wrap text-center  ">

                    {text}

                    <div className="bg-transparent p-2 w-full">
                        <div className="max-w-lg mx-auto bg-transparent shadow-md rounded-lg p-3">
                            <div className="flex flex-wrap md:flex-nowrap justify-center space-y-4 md:space-y-0 md:space-x-4">
                                <div className="relative mt-10 md:mt-auto flex items-center justify-center gap-1 md:gap-6 bg-white border border-gray-300 rounded px-3 py-2 w-full md:w-auto">
                                    <div className="absolute -top-16 w-full bg-white p-2 md:p-0 rounded-lg  md:static flex items-center border-r-2 border-gray-300">
                                        <FiSearch className="w-5 h-5 text-gray-500" />
                                        <input type="text" placeholder="Job Title" className="ml-2   outline-none p-1 md:w-auto" />
                                    </div>
                                    <div className="border-r-2 border-gray-300 pr-3 md:pr-5 ">
                                    <select className="outline-none text-gray-500 w-full md:w-auto bg-white  ">
                                        <option>Select Location</option>
                                    </select>
                                   </div>
                                    <div className="pl-3 md:pl-1">
                                    <select className="outline-none text-gray-500 w-full md:w-auto bg-white">
                                        <option>Companies</option>
                                    </select>
                                    </div>
                                </div>
                                <button className={`${button_bg_color}  text-white px-8 py-2 rounded w-full md:w-auto`}>Search</button>
                            </div>

                            {/* Buttons */}
                            <div className="relative flex flex-wrap  md:flex-nowrap justify-center gap-2 mt-8 w-full ">
                                <button className="border-2 border-gray-300 text-xs text-white px-2 py-1 tracking-wider rounded">Designer</button>
                                <button className="border-2 border-gray-300 text-xs text-white px-2 py-1 tracking-wider whitespace-nowrap rounded">Accounting</button>
                                <button className="border-2 border-gray-300 text-xs text-white px-2 py-1 tracking-wider whitespace-nowrap rounded">SEO Analyst</button>
                                <button className="border-2 border-gray-300 text-xs text-white px-2 py-1 tracking-wider whitespace-nowrap rounded">Front end developer</button>
                                <button className="border-2 border-gray-300 text-xs text-white px-2 py-1 tracking-wider whitespace-nowrap rounded">Digital Marketing</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <BoxCards bgColor={bgColor} highlightColor={highlightColor} strokeColor={strokeColor} />
        </>
    )
};

export default Banner;

