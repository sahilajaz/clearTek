import type { Metadata } from "next";
import {Raleway} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const raleway = Raleway({
    subsets: ['latin'],
    variable: '--raleway-font'
})



export const metadata: Metadata = {
  title: "Cleartek System",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${raleway.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
