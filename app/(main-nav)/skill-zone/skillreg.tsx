import React from 'react';
import { Button } from 'antd';
const SkillReg = () => {
  // Example data array
  const data = [
    { 
      title: "Name: Narayan Acharya", 
      skill: "Skill | Skill Experience  ",
      location : "Location:",
      image:  "/employer.jpg",

      content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
    },
    { 
      title: "Name: Narayan Acharya", 
      skill: "Skill | Skill Experience  ",
      location : "Location:",
      image:  "/employer.jpg",
      content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
        },
    { 
      title: "Name: Narayan Acharya", 
      skill: "Skill | Skill Experience  ",
      location : "Location:",
      image:  "/employer.jpg",
      content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
        },
    { 
      title: "Name: Narayan Acharya", 
      skill: "Skill | Skill Experience  ",
      location : "Location:",
      image:  "/employer.jpg",
      content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
        },
    { 
      title: "Name: Narayan Acharya", 
      skill: "Skill | Skill Experience  ",
      location : "Location:",
      image:  "/employer.jpg",
      content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
        },
    { 
      title: "Name: Narayan Acharya", 
      skill: "Skill | Skill Experience  ",
      location : "Location:",
      image:  "/employer.jpg",
      content:"I’m painting from 5 year, and i do the best on my work , really enjoy my painting. "
        },
  ];

  return (
    <div>
      <div className="container mx-auto mt-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {data.map((item, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col">
              <img src={item.image} alt={item.title}  className="mb-4 rounded-lg "/>
              <div className='flex justify-between'>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <Button className=' bg-black text-white'>Request Call</Button>
              </div>
              <p className='font-[600]'>{item.skill}</p>
              <p className='font-[600]'>{item.location}</p>
              <p className='font-[600]'>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillReg;
