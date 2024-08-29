interface Company {

    name: string;
    location: string;
    position: number;
    icon: JSX.Element;
    logo?: JSX.Element;
    jobs_count?: number;
    address?: string;
    description?: string;
  }
export default function CompanyView ({ company }: { company: Company }) {
    return (
      <>
        <div className="relative bg-white text-black p-6  w-auto  rounded-lg border-2 shadow-[0px_2px_18px_0px_rgba(24,25,28,0.03)] border-[#E4E5E8] transition-all duration-300  hover:shadow-xl ">
          <div className="flex flex-col gap-[32px]">
            <div id="company" className="flex  gap-3">
              {company.icon}
              {/* <div className="w-[48px] h-[48px] overflow-hidden">
                <img src={`https://localsjob.com/storage/${company.logo}`} alt="company logo" className="w-full h-full object-cover "/>
              </div> */}
               <div className='w-[70px] h-[50px] overflow-hidden rounded '>
                      <img
                          // src="/f1soft.png"
                          src={`https://main.localsjob.com/storage/${company.logo}`}
                              alt="company logo"
                              className=" w-full h-full object-center object-scale-down"
                          />
                    </div>
              <div className="flex flex-col gap-2 ">
                <span className="mt-1 text-[18px] font-normal text-[#767F8C]">
                  {company.name}
                </span>
                            {
                                company.location || company.address && (
                                    <div className="flex gap-1 items-center justify-start">
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9 9.5625C10.2426 9.5625 11.25 8.55514 11.25 7.3125C11.25 6.06986 10.2426 5.0625 9 5.0625C7.75736 5.0625 6.75 6.06986 6.75 7.3125C6.75 8.55514 7.75736 9.5625 9 9.5625Z"
                                        stroke="#767F8C"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M14.625 7.3125C14.625 12.375 9 16.3125 9 16.3125C9 16.3125 3.375 12.375 3.375 7.3125C3.375 5.82066 3.96763 4.38992 5.02252 3.33502C6.07742 2.28013 7.50816 1.6875 9 1.6875C10.4918 1.6875 11.9226 2.28013 12.9775 3.33502C14.0324 4.38992 14.625 5.82066 14.625 7.3125V7.3125Z"
                                        stroke="#767F8C"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                    
                                    <span className="mt-1 text-[14px] font-normal text-[#767F8C]">
                                      {company.location || company.address}
                                    </span>
                                  </div>
                                )
               }
              </div>
                    </div>
                    
                    <div className="text-gray-500 text-[14px] text-left pl-3">
                        {company.description}
                    </div>
  
              
            <button className=" py-3 px-6 bg-mprimary font-semibold text-figma_red rounded-[4px] mx-auto">
              Open positions ({company.position || company.jobs_count})
            </button>
          
          </div>
        </div>
      </>
    );
  };
  