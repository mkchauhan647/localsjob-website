
import Image from 'next/image';
const WebBanner = () => {

    return (
        <>
           <div className="relative bg-white    sm:overflow-hidden min-h-[556px] sm:min-h-[430px] mx-[1px] sm:mx-9 my-1 sm:my-14 rounded-[20px] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer">
      <img
        src="/webbanner.png" 
        alt="Promo Banner"
        // layout="fill"
                    // objectFit="cover"
                    // objectFit=''
        
        className="absolute w-full h-[500px] object-cover transform scale-x-[-1]"
      />
      <div className="absolute sm:top-[48px] pl-[38px] pt-[62px] pb-[38px] min-h-[335px] sm:left-[54px]  bg-[#00000040] backdrop-blur-[10px] flex items-center justify-start sm:w-[766px] rounded-2xl border-l-2 border-figma_red">
      {/* <div className="absolute inset-0  flex items-center justify-center"> */}
        <div className=" md:w-[600px]">
          <h2 className="text-2xl md:text-2xl font-extrabold  text-white mb-4 leading-[27. 6px] tracking-[1.5%] uppercase line-clamp-3">
                {/* MASTER THE ART OF FRONTEND DEVELOPMENT WITH CODECRAFT ACADEMY'S ONLINE COURSE! */}
                To connect local talent with opportunities, helping skills and professions grow from local to global recognition.

            
          </h2>
          <p className="text-white mb-10 line-clamp-5">
            {/* Unlock your potential as a frontend developer with CodeCraft Academy's comprehensive online course. Whether you're a beginner or looking to enhance your skills, our expert instructors will guide you through the intricacies of frontend development. From HTML and CSS fundamentals to advanced JavaScript techniques, our curriculum covers it all. */}
         
            LocalsJob was created with a purpose to provide more opportunities in your local area, so you don’t have to search for them elsewhere. Every day, people face the challenge of finding work that aligns with their skills without having to leave their homes. LocalsJob is a platform that addresses this issue, connecting talents to opportunities right within their local areas. We understand the value of staying close to family, friends, and culture, and we are here to support that by making sure local talents are utilized and recognized where they are needed the most.

              </p>
          <a
            href="#"
            className="bg-[#A20000] text-white px-4 py-[10px]  text-[14px] leading-[15.84px] tracking-[1.5%] font-lg hover:bg-red-700 transition duration-300"
          >
            CHOOSE A COURSE
          </a>
        </div>
      </div>
    </div>
        </>
    )
}

export default WebBanner;