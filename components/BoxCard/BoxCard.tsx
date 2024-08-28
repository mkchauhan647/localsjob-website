import Link from "next/link";

const BoxCard = ({ icon, number, description,link }:{icon:React.ReactElement,number:string,description:string,link:string}) => {
    return (
      <Link href={link} className="bg-white text-black gap-6 p-4 h- [112px] xl:w- [312px] rounded-lg flex flex-col lg:flex-row items-center justify-start border w-full shadow-sm border-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        
        {icon}

        <div className="flex lg:flex-col gap-2">
          <span className="text-[20px] lg:text-2xl font-medium">{number}</span>
          <span className="mt-1 font-normal text-[#767F8C]">{description}</span>
        </div>
      </Link>
    );
  };
  
  export default BoxCard;
  