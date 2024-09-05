'use client'
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import BoxCards from "./BoxCard/BoxCards";
import React, { FormEvent, useRef, useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import banner from '@/public/hero.jpeg';
import axios from '@/config/AxiosConfig';


interface BoxCardData {
    totalLiveJobs: string;
    totalCompanies: string;
    totalApplicants: string;
    totalResume: string;
    popularJobCategories: any;
}

const Banner = ({ banner,text,buttons,button_bg_color,bgColor,highlightColor,strokeColor,boxCard }:{banner:string,text:React.ReactElement,buttons:boolean,button_bg_color:string,bgColor:string,highlightColor:string,strokeColor:string,boxCard:boolean}) => {
    
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [jobs, setJobs] = useState<string[]>([]);
    const router = useRouter();
    const [boxCardData, setBoxCardData] = useState<BoxCardData>({
        totalLiveJobs: '',
        totalCompanies: '',
        totalApplicants: '',
        totalResume: '',
        popularJobCategories: null
    });


    const handleSuggestionClick = (suggestion: string) => {
        searchInputRef.current!.value = suggestion;
        setSuggestions([]);
    }

    const handleJobSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const searchValue = searchInputRef.current!.value;

        if (searchValue.length == 0) {
            searchInputRef.current!.focus();
            searchInputRef.current!.placeholder = "Please enter a job title";
            return;
        }
        // if (searchValue.length > 0) {
        //     setJobs([...jobs, searchValue]);
        // }

        router.push(`/jobs/search-jobs?search=${searchValue}`);
    }

    useEffect(() => {
        async function fetchBoxData() {
            const boxCards = ['total-live-jobs', 'total-companies', 'total-applicants', 'total-resume',"popular-job-categories"];
            try {
                boxCards.map(async (boxCard,index) => {
                    const res = await axios(`https://main.localsjob.com/api/v1/${boxCard}`);
                    // const data = await res.json();
                    const attr = boxCards[index].split('-').map((value, index) => {
                        
                        if (index === 0) { return value; }
                        return value[0].toUpperCase() + value.slice(1);
                    }
                    ).join('');
                    setBoxCardData((prevData) => ({ ...prevData, [attr]: res.data.data[attr] }));
                });
            } catch (error) {
                console.log(error);
            }
        }   
        fetchBoxData();
    },[])


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
                            <form onSubmit={(e)=> handleJobSearch(e)} className="flex flex-wrap md:flex-nowrap justify-center space-y-4 md:space-y-0 md:space-x-4">
                                <div className="relative mt-10 md:mt-auto flex items-center justify-center gap-1 md:gap-6 bg-white border border-gray-300 rounded px-3 md:py-2 w-full md:w-auto grow">
                                    <div className=" -top-16 w-full bg-white p-2 md:p-0 rounded-lg  md:static flex items-center  grow">
                                        <FiSearch className="w-5 h-5 text-gray-500" />
                                        <input ref={searchInputRef} type="text" placeholder="Job Title" className="ml-2   outline-none p-1 md:w-auto" />
                                        </div>
                                        

                                        {
                                            suggestions && suggestions.length > 0 && (
                                                    
                                                    <div className="absolute top-10 bg-white w-full md:w-auto rounded-lg shadow-md z-10">
                                                        <ul className="w-full">
                                                            {suggestions.map((suggestion, index) => (
                                                                <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                            )
                                        }


                                    {/* <div className="border-r-2 border-gray-300 pr-3 md:pr-5 ">
                                    <select className="outline-none text-gray-500 w-full md:w-auto bg-white  ">
                                        <option>Select Location</option>
                                    </select>
                                   </div>
                                    <div className="pl-3 md:pl-1">
                                    <select className="outline-none text-gray-500 w-full md:w-auto bg-white">
                                        <option>Companies</option>
                                    </select>
                                    </div> */}
                                </div>
                                <button type="submit" className={`${button_bg_color}  text-white px-8 py-2 rounded w-full md:w-auto`}>Search</button>
                            </form>

                            {/* Buttons */}
                            <div className="relative flex flex-wrap  md:flex-nowrap justify-center gap-2 mt-8 w-full ">

                                    <a href="/jobs/search-jobs?search=designer">
                                <button className="border-2 border-gray-300 text-xs text-white px-2 py-1 tracking-wider rounded">Designer</button>
                                    
                                    </a>
                                    
                                    <a href="/jobs/search-jobs?search=accountant">
                                    <button className="border-2 border-gray-300 text-xs text-white px-2 py-1 tracking-wider whitespace-nowrap rounded">Accounting</button>
                                    </a>
                                    <a href="/jobs/search-jobs?search=seo-analyst">
                                        
                                    <button className="border-2 border-gray-300 text-xs text-white px-2 py-1 tracking-wider whitespace-nowrap rounded">SEO Analyst</button>
                                    </a>
                                    <a href="/jobs/search-jobs?search=frontend-developer">

                                <button className="border-2 border-gray-300 text-xs text-white px-2 py-1 tracking-wider whitespace-nowrap rounded">Front end developer</button>
                                    </a>
                                    <a href="/jobs/search-jobs?search=digital-marketing">

                                <button className="border-2 border-gray-300 text-xs text-white px-2 py-1 tracking-wider whitespace-nowrap rounded">Digital Marketing</button>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            {
            
            boxCard && boxCardData && 
            <BoxCards bgColor={bgColor} highlightColor={highlightColor} strokeColor={strokeColor} boxCardData={boxCardData} />
            }
        </>
    )
};

export default Banner;

