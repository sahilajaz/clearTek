import type { Metadata } from "next";
import {Raleway} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer'

const raleway = Raleway({
    subsets: ['latin'],
    variable: '--raleway-font'
})



export const metadata: Metadata = {
  title: "ClearTek Systems",
  description: "Generated by create next app",
   viewport: "width=device-width, initial-scale=1"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable}  antialiased `}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
