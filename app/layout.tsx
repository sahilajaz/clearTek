import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
  variable: '--roboto-font',
});

export const metadata: Metadata = {
  title: "ClearTek Systems",
  description: "ClearTek: Empowering small tech businesses with innovative and reliable software solutions. Your partner in thriving in the digital age.",
};

export const viewport = "width=device-width, initial-scale=1.0";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased w-screen`}>
        {children}
      </body>
    </html>
  );
}
