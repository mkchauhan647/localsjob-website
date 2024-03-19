import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import EmployeePageBanner from "@/components/EmployeePageBanner";
const inter = Inter({ subsets: ["latin"] });

export default function CandidateDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <EmployeePageBanner />
            {children}
        </>
    );
}
