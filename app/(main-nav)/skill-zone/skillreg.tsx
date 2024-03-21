import React from 'react';
import { Button } from 'antd';
const SkillReg = () => {
  // Example data array
  const data = [
    { 
      title: "John Doe", 
      skill: "Developer  ",
      location : "Location:",
      image:  "/employer.jpg",

      content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
    },
    { 
      title: "John Doe", 
      skill: "Developer  ",
      location : "Location:",
      image:  "/employer.jpg",
      content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
        },
    { 
      title: "John Doe", 
      skill: "Developer  ",
      location : "Location:",
      image:  "/employer.jpg",
      content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
        },
    { 
      title: "John Doe", 
      skill: "Developer  ",
      location : "Location:",
      image:  "/employer.jpg",
      content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
        },
    { 
      title: "John Doe", 
      skill: "Developer  ",
      location : "Location:",
      image:  "/employer.jpg",
      content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
        },
    { 
      title: "John Doe", 
      skill: "Developer  ",
      location : "Location:",
      image:  "/employer.jpg",
      content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
        },

        { 
          title: "John Doe", 
          skill: "Developer  ",
          location : "Location:",
          image:  "/employer.jpg",
          content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
            },
            { 
              title: "John Doe", 
              skill: "Developer  ",
              location : "Location:",
              image:  "/employer.jpg",
              content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
                },
                { 
                  title: "John Doe", 
                  skill: "Developer  ",
                  location : "Location:",
                  image:  "/employer.jpg",
                  content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
                    },
                    { 
                      title: "John Doe", 
                      skill: "Developer  ",
                      location : "Location:",
                      image:  "/employer.jpg",
                      content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
                        },
                        { 
                          title: "John Doe", 
                          skill: "Developer  ",
                          location : "Location:",
                          image:  "/employer.jpg",
                          content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
                            },
                            { 
                              title: "John Doe", 
                              skill: "Developer  ",
                              location : "Location:",
                              image:  "/employer.jpg",
                              content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
                                },
  ];

  return (
    <div>
      <div className="container mx-auto mt-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {data.map((item, index) => (

            

            
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col">

              <div className='flex   gap-3'>
                  <img src={item.image} alt={item.title} width={150} height={150}  className="mb-4 rounded-lg "/>
                  <div className="mt-5"> 
          <h2 className="text-[18px]  font-bold">{item.title}</h2>
            
              <p className=' text-[14px] font-bold '>{item.skill}</p>
              <p className=' text-[14px] font-bold '>{item.location}</p>
            
            
              </div>
              </div>
           
              <p className="profilebtn text-xs flex items-center justify-start  mt-2  mb-2">
          <Button className=' text-white'>Request Call</Button>
                               </p>
                           
              <p className='font-[600]'>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillReg;
