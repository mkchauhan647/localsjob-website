import React from 'react'
import Image from "next/image";
import banner from "@/public/employer.jpg";
const about = () => {

    const dummyData = [
        {
          id: 1,
          name: "John Doe",
          position: "Financial Advisor",
          image: "https://via.placeholder.com/250", // Placeholder image URL
        },
        {
          id: 2,
          name: "Jane Smith",
          position: "Investment Consultant",
          image: "https://via.placeholder.com/250", // Placeholder image URL
        },
        {
          id: 3,
          name: "Mike Johnson",
          position: "Wealth Manager",
          image: "https://via.placeholder.com/250", // Placeholder image URL
        },
        {
            id: 3,
            name: "Mike Johnson",
            position: "Wealth Manager",
            image: "https://via.placeholder.com/250", // Placeholder image URL
          },
          {
            id: 1,
            name: "John Doe",
            position: "Financial Advisor",
            image: "https://via.placeholder.com/250", // Placeholder image URL
          },
          {
            id: 2,
            name: "Jane Smith",
            position: "Investment Consultant",
            image: "https://via.placeholder.com/250", // Placeholder image URL
          },
          {
            id: 3,
            name: "Mike Johnson",
            position: "Wealth Manager",
            image: "https://via.placeholder.com/250", // Placeholder image URL
          },
          {
              id: 3,
              name: "Mike Johnson",
              position: "Wealth Manager",
              image: "https://via.placeholder.com/250", // Placeholder image URL
            },
      ];
  return (


    
    <>
            <section className="container mx-auto px-4 pt-24 text-card lg:mt-10">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                        <div className="titlecard">
                            <h2 className="text-black pb-3">Find Your Dream Job Now</h2>
                            <div className="media natural rounded-corners">
                                <Image
                                    width="1056"
                                    height="692"
                                    src={banner}
                                    className="image"
                                    alt=""
                                    style={{ objectPosition: '50% 50%' }}
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="text-card-inner">
                            <h2>Why we do this?</h2>
                            <p className="text-black text-justify pt-2">"<i>Since our inception, Locals Job has been dedicated to connecting local talent with meaningful employment opportunities. Our mission is to empower individuals, support local businesses, and foster economic growth within communities across Nepal. With a commitment to inclusivity, innovation, and collaboration, we have become a trusted partner for job seekers and employers alike. Join us in shaping a brighter future for Nepal.</i></p>
                          
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 pt-24 md:flex md:justify-between">
                <div className="md:w-1/2">
                    <div className="media natural ">
                        <Image
                            width="519"
                            height="700"
                            src={banner}
                            className="image"
                            alt=""
                            style={{objectPosition: '50% 50%'}}
                            decoding="async"
                         
                            sizes="(max-width: 519px) 100vw, 519px"
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="flow text-content text-card-inner">
                        <h2 className="font-bold pb-3 ">Integrella Snapshot</h2>
                        <ul className="icon-list color-dark-neutral">
                            <li>
                             
                                Privately owned &amp; funded
                            </li>
                            <li>
                             
                                Established in 2007
                            </li>
                            <li>
                               
                                UK-led, distributed global talent team with India center of excellence
                            </li>
                            <li>
                                
                                100+ full-time employees and growing
                            </li>
                            <li>
                               
                                Diverse workforce (41% India, 28% UK female), best talent anywhere
                            </li>

                            <li>
                               
                               Diverse workforce (41% India, 28% UK female), best talent anywhere
                           </li>
                           <li>
                               
                               Diverse workforce (41% India, 28% UK female), best talent anywhere
                           </li>
                      
                        
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mx-auto pt-24 px-4 lg:mb-10">
                <h1 className="text-[#0d64cc] border-l-[3px] border-[#17476D] pl-1 font-lato cursor-pointer text-xl font-bold leading-[60.24px] md:text-3xl">
                    Our Team
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5">
                    {dummyData.map((val) => (
                        <div
                            className="w-full lg:w-full  md:w-[30%] mb-4 rounded-md shadow-md p-3"
                            key={val.id}
                        >
                            <div className="flex items-center justify-center">
                                <div className="w-[250px] h-[250px] overflow-full rounded-md">
                                    <img
                                        src={val.image}
                                        alt="image of advisor"
                                        className="w-full h-full object-cover rounded-full "
                                    />
                                </div>
                            </div>

                            <h3 className="pt-4 font-semibold text-base text-center">
                                {val.name}
                            </h3>
                            <p className="pt-2 font-normal text-base text-center">
                                {val.position}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
  )
}

export default about
