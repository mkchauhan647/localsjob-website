'use client'
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BreadCrumbComponent = () => {

    const router = usePathname();




    const [paths, setPaths] = useState<string[]>([]);


    const breadcrumbItems = paths.map((path, index) => {
        if (parseInt(path) && index === paths.length - 1) {
            return null;
        }
    
        if (index === 0) {
            return {
                title: (
                    <a href="/">
                        <HomeOutlined /> Home
                    </a>
                ),
                key: index,
            };
        } 
    
        return {
            title: path,
            key: index,
        };
    }).filter(item => item !== null);



    useEffect(() => {
        // const path = router.asPath.split("/").filter((p) => p);
       if(typeof window !== 'undefined'){
           const path = window.location.href.split("//").at(1)?.split('/').map(value => {
               if (value.includes("?")) {
               
                   return value.split("?")[1].split("=").join("-");
               }
               else {
                   return value;
            }
        }).map((p) => p.split('-').length > 1 ? p.split("-").map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(" / "): p.charAt(0).toUpperCase() + p.slice(1)) as string[];
        
           console.log("path", path);
           
           setPaths(path);
       }
    },[]);



    return (
        // <div className=" bg-gray-100 flex  flex-wrap justify-between items-center py-6 w-auto px-4 md:px-[100px] xl:px-[300px]">
        //     <h2 className="text-[18px] leading-[28px]  font-mediu text-[#18191C]">
        //         Jobs Details
        //     </h2>
        //     <div className="text-gray-500 flex gap-2 flex-wrap">
        //         <span className="">
        //             <a href="/" className="mr-2">
        //                 Home
        //             </a>{" "}
        //             /
        //         </span>
        //         <span>
        //             <a href="/" className="mr-2">
        //                 Find Job
        //             </a>{" "}
        //             /
        //         </span>
        //         <span>
        //             <a href="/" className="mr-2">
        //                 Graphics & Design
        //             </a>{" "}
        //             /
        //         </span>
        //         <span>
        //             <a href="#" className="mr-2 text-black">
        //                 Job Details
        //             </a>{" "}
        //         </span>
        //     </div>
        // </div>
        <div className="container mx-auto flex justify-between py-8 px-4">


            <div className="">
                <h2 className="text-[18px] leading-[28px]  font-mediu text-gray-500">
                    {
                        parseInt(paths[paths.length - 1]) ? "Job Details" : paths[paths.length - 1]
                    }

                    <div className="bg-green-500 h-[1px] w-full"></div>

                </h2>
            </div>

            <Breadcrumb className="mb-6">
                {
                    paths.map((path, index) => {

                        if (parseInt(path) && index === paths.length - 1) {
                            return (
                                ''
                            )
                        }
                     
                        if (index === 0) {
                            return (
                                <Breadcrumb.Item key={index} href="/">
                                    <HomeOutlined /> Home
                                </Breadcrumb.Item>
                            )
                        } else {
                            return <Breadcrumb.Item key={index}>{path}</Breadcrumb.Item>
                        }
                    })
                    
        }
      </Breadcrumb>
            {/* <Breadcrumb items={breadcrumbItems} /> */}
        </div>

    )
}

export default BreadCrumbComponent;