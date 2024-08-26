import { Inter } from "next/font/google";
// import Nav from "../../../../components/nav";
import Navbar from "@/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function RegistrationPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* <Navbar /> */}
            {children}
        </>
    );
}
