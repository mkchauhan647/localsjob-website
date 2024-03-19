
import React from "react";
import Link from "next/link";


const footerData = [

 
 
  {
    title: "FOR JOBSEEKER",
    links: [
    { text: "Register", href: "/register" },
    { text: "Search Jobs", href: "/jobs" },
    { text: "Login", href: "/login" },
    { text: "Find Job For Me", href: "/find-job" },
    { text: "Blog", href: "/blog" },
    ],
    },
    {
      title: "FOR EMPLOYER",
      links: [
      { text: "Post a Job", href: "/post-job" },
      { text: "Register", href: "/register" },
      { text: "Login", href: "/login" },
      { text: "Direct Recruitment", href: "/direct-recruitment" },
      { text: "HR Service", href: "/hr-service" },
      ],
      },
      {
        title: "ABOUT US",
        links: [
        { text: "About Locals Job", href: "/about" },
        { text: "Our Philosophy", href: "/philosophy" },
        { text: "FAQ", href: "/faq" },
        { text: "Facebook", href: "/companyprofile" },
        { text: "Twitter", href: "/twitter" },
        { text: "LinkedIn", href: "/linkedin" },
        { text: "Feedback", href: "/feedback" },
        ],
        },


      

        {
          title: "CONTACT US",
          links: [
          { text: "Naybazar, Kathmandu", href: "#" },
          { text: "Sorakhutte, Nepal", href: "#" },
          { text: "+977-970-688XXXX", href: "#" },
          { text: "contact@localsjobnepal.com", href: "#" },

          ],
          
          }
          
];

const FooterMain = () => {
  return (
    <div className="container mx-auto   footer-bg">
      <div className="grid  gap-y-8 md:flex justify-between py-12 footer">
     
       
          <div className="w-[17.5rem] footercol">
            <p className=" text-justify text-white">
              Since our inception, Locals Job has been dedicated to connecting
              local talent with meaningful employment opportunities. Our
              mission is to empower individuals, support local businesses, and
              foster economic growth within communities across Nepal. With a
              commitment to inclusivity, innovation, and collaboration, we have
              become a trusted partner for job seekers and employers alike.
              Join us in shaping a brighter future for Nepal.
            </p>
          </div>
      
      
       

        {footerData.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h1 className="text-white text-[16px] font-semibold">
              {section.title}
            </h1>
            {section.links.map((link, linkIndex) => (
              <div key={linkIndex}>
                <Link href={link.href}>
                  <h2 className="text-[white]  transition-colors duration-150 ease-out text-[14px] leading-[24px] font-normal cursor-pointer">
                    {link.text}
                  </h2>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterMain;