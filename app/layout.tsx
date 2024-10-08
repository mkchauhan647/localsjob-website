import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { Header } from "antd/es/layout/layout";
import Head from "next/head";
import NewFooter from "@/components/NewFooter";
import BreadCrumbComponent from "@/components/breadcrumb/BreadCrumbComponent";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Startup Jobs | Explore Jobs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className=" font-roboto">
        {children}
        {/* <Footer /> */}
        <NewFooter/>
        <Toaster />
      </body>
    </html>
  );
}
