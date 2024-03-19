import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function CandidateDashboardLayout({
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
