'use client'
import { FiSearch } from "react-icons/fi";
import { useEffect, useRef } from "react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
const JobSearchBar = () => {

    const searchInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const handleJobSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const searchValue = searchInputRef.current!.value;
        // if (searchValue.length > 0) {
        //     setJobs([...jobs, searchValue]);
        // }

        router.push(`/jobs/search-jobs?search=${searchValue}`);
    }

    useEffect(() => {
        async function fetchCountryData() {
            try {
                const res = await fetch(`https://main.localsjob.com/api/v1/countries`);
                const data = await res.json();
                console.log("dataContry", data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchCountryData();
    },[])



    return (
        
        <div className="p-4">
        <div className="xl:absolute z-[50] top-[27px] h-[55px] left-[635px] xl:w-[480px] border-2 rounded-[5px]  xl:border-[#E4E5E8] container mx-auto my-5 xl:my-auto bg-white">

            <div className="flex gap-6 xl:gap-8 justify-center items-center bg-white ">
                <div className="relative text-center w-auto bg-white flex gap-2 items-center justify-center px-2 cursor-pointer after:content-[''] after:h-[65%] after:w-[1px] after:bg-gray-200 after:absolute after:-right-2">
                    {/* <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.796 19L8 5V31H27.796L15.918 19H27.796Z" fill="#22408B" />
                        <path d="M25 18L9 7.19604V30H25L13.574 18H25Z" fill="#DD2F45" />
                        <path d="M14.2911 24.0409L14.8771 23.2249L13.8771 23.3229L13.9771 22.3229L13.1601 22.9089L12.7461 21.9929L12.3321 22.9089L11.5151 22.3229L11.6141 23.3229L10.6141 23.2249L11.2001 24.0409L10.2841 24.4549L11.2001 24.8689L10.6141 25.6849L11.6141 25.5869L11.5151 26.5869L12.3321 26.0009L12.7461 26.9169L13.1601 26.0009L13.9771 26.5869L13.8771 25.5869L14.8771 25.6849L14.2911 24.8689L15.2071 24.4549L14.2911 24.0409ZM12.7451 16.8939L12.7461 16.8959L12.7471 16.8939L12.7651 16.8959C14.2331 16.8959 15.4251 15.7659 15.5491 14.3289C15.1996 14.9792 14.6361 15.4886 13.9541 15.7709L13.7791 15.5269L14.3901 15.2509L13.7791 14.9749L14.1701 14.4299L13.5021 14.4959L13.5691 13.8279L13.0231 14.2189L12.7471 13.6069L12.4711 14.2189L11.9251 13.8279L11.9921 14.4959L11.3241 14.4299L11.7151 14.9749L11.1041 15.2509L11.7151 15.5269L11.5481 15.7599C10.8787 15.4747 10.3264 14.97 9.98206 14.3289C10.0394 15.0242 10.3547 15.6728 10.866 16.1474C11.3772 16.622 12.0475 16.8883 12.7451 16.8939Z" fill="white" />
                    </svg> */}
                        {/* <span>Nepal</span> */}
                        
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 6L8 11L3 6" stroke="#9199A3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>
                {/* <div className="bg-white">|</div> */}
                <form onSubmit={handleJobSearch} className="flex gap-2 bg-white grow justify-center items-center">
                    <FiSearch size={25} className=" text-blue-500 bg-white font-thin" />
                    <input ref={searchInputRef} type="text" placeholder="Job title, keyword, company" className="bg-white w-full h-[40px] p-6" />

                </form>

            </div>
        </div>
        </div>
    )

}

export default JobSearchBar;