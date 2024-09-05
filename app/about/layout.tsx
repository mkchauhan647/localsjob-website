import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Banner from "@/components/Banner";
const inter = Inter({ subsets: ["latin"] });

export default function CandidateDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar home={true} />
            <Banner boxCard={false} banner="/hero.jpeg" text={<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-10 sm:mb-4 text-white">
        Find the best Available <br />Jobs for you
      </h1>} buttons={true} button_bg_color="bg-figma_red"
        
      // bgColor="#B9D9FF"
      bgColor="#FFDEE6"
        
      
        highlightColor="#BE123C" strokeColor="#BE123C"
        // highlightColor="#0D64CC" strokeColor="#0D64CC"
      
      />

        
            {children}
        </>
    );
}
