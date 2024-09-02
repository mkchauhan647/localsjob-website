import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { DashboardLayout } from "./components/dashboardLayout";
const inter = Inter({ subsets: ["latin"] });

export default function CandidateDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {/* <DashboardLayout> */}
                {children}
            {/* </DashboardLayout> */}
        </>
    );
}
