import Link from "next/link";
import { navItems } from "../constants";
import Image from "next/image";
import MobileNavbar from "@/components/MobileNavbar";

const Navbar = () => {
  return (
    <header className="navbar">
    <div className="flex justify-between items-center px-5 py-3">
    <Image src='/logo.png' alt="logo" width={120} height={120}/>
    <nav>
      <ul className="hidden sm:flex gap-5">
        {
          navItems.map((item) => (
            <Link key={item.id} href={item.path} className="text-[#0060de] text-[18px] hover:text-gray-700">{item.name}</Link>
          ))
        }
      </ul>
      <div className="mobile block sm:hidden">
            <MobileNavbar/>
        </div>
    </nav> 
        </div>
      </header>    
  )
}

export default Navbar