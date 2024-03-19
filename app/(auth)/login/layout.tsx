import { Inter } from "next/font/google";
import Nav from "@/components/nav";
const inter = Inter({ subsets: ["latin"] });

export default function LoginPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Nav />
            {children}
        </>
    );
}
