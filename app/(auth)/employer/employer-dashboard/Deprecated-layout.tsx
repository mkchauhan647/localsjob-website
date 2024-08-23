import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function EmployerDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
