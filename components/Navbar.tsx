import Link from "next/link";
import { navItems } from "../constants";
import Image from "next/image";
import MobileNavbar from "@/components/MobileNavbar";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className=" flex justify-between items-center bg-white px-10 py-1 rounded-3xl">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <nav>
          <ul className="hidden sm:flex w-full gap-5 justify-end">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className="text-black text-[18px] hover:text-blue-700 lg:pl-0 sm:pl-4"
              >
                {item.name}
              </Link>
            ))}
          </ul>
         
          <div className="mobile block sm:hidden">
            <MobileNavbar />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
