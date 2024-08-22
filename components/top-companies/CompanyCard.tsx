
interface Company {
  name: string;
  location: string;
  position: number;
  icon: JSX.Element;
}

const CompanyCard = ({ company }: { company: Company }) => {
  return (
    <>
      <div className="relative bg-white text-black p-6 min-h-[702x] w-auto xl:w-[424px] rounded-lg border-2 shadow-[0px_2px_18px_0px_rgba(24,25,28,0.03)] border-[#E4E5E8] ">
        <div className="flex flex-col gap-[20px]">
          <div id="company" className="flex  gap-2">
            {company.icon}
            <div className="flex flex-col ">
              <span className="mt-1 text-[16px] font-medium text-[#767F8C]">
                {company.name}
              </span>
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
                  {company.location}
                </span>
              </div>
            </div>
          </div>

          <button className=" py-3 px-6 bg-mprimary font-semibold text-figma_red rounded-[4px]">
            Open positions ({company.position})
          </button>
        </div>
      </div>
    </>
  );
};

export default CompanyCard;