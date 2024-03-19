import React from "react";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
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
    <div className="container mx-auto ">
      <div className="grid  gap-y-8 md:flex justify-between py-12">
       
       

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
