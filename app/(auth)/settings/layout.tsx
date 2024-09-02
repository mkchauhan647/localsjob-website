import Navbar from "@/components/navbar/Navbar";
import React from "react";

export default function SettingsLayout({ children }:{children:React.ReactNode}) {


    return (
       
        <>
        
            <Navbar/>
            <div className="container mx-auto">
                {children}
            </div>
        
        </>
    )


}