import { Inter } from "next/font/google";
// import Nav from "@/components/nav";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/navbar/Navbar";

export default function LoginPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* <Nav /> */}
            <Navbar/>
            {children}
        </>
    );
}
