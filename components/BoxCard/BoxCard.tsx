
const BoxCard = ({ icon, number, description }:{icon:React.ReactElement,number:string,description:string}) => {
    return (
      <div className="bg-white text-black gap-6 p-4 h-[112px] xl:w-[312px] rounded-lg flex items-center justify-start border w-full shadow-sm border-gray-200">
        
        {icon}

        <div className="flex flex-col">
          <span className="text-2xl font-medium">{number}</span>
          <span className="mt-1 font-normal text-[#767F8C]">{description}</span>
        </div>
      </div>
    );
  };
  
  export default BoxCard;
  