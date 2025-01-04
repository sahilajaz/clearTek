"use client"
import Image from "next/image"
import { Button } from "./ui/button"
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { Separator } from "@/components/ui/separator"


const Footer = () => {
  return (
    <footer className="w-full mt-16">
      <section className="form-section  lg:mx-28">
        <div className='bg-[url("/formimg.png")] w-[700px] lg:min-w-[80%] xl:w-[200px] h-[610px]'>
          <div className="w-full h-full flex flex-col sm:pl-[100px] lg:pl-[600px] pt-20 sm:pt-28 md:pt-20 lg:pt-32  gap-10">
            <h1 className="text-white font-semibold text-sm lg:text-4xl mx-5 md:mx-2 lg:mx-5">
              Get In Touch With Us!
            </h1>
             <form className="grid grid-cols-2 gap-9 md:gap-6 lg:gap-8 w-[250px] sm:w-full px-4 lg:px-5">
              <input className="inputFiled md:w-full lg:w-full py-3 px-1" placeholder="First Name"/>
              <input className="inputFiled w-full py-3 px-1" placeholder="Last Name"/>
              <input className="inputFiled w-full py-3 px-1" placeholder="Your Email"/>
              <input className="inputFiled w-full py-3 px-1" placeholder="Your Phone Number"/>
              <textarea
                className="inputFiled w-full py-3 px-1 col-span-2"
                placeholder="Your Message"
              />
              <Button type="submit" className="w-1/3 bg-[#0d3e82] px-[20px] py-[10px] rounded-sm sm:px-[9px] sm:py-[17px] sm:rounded-xl">Send</Button>
             </form>
          </div>
        </div>
      </section>
            <section className="w-full mt-10 border-t-2 border-b-2">
        <div className="grid grid-col-1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 gap-10 py-16  sm:px-16">
          {/* Column 1: Social Media */}
          <div className="social-media flex flex-col gap-5">
            <Image src="/logo.png" alt="pic" width={200} height={200} />
            <p className="text-3xl font-thin">Follow us</p>
            <div className="flex gap-2">
              <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                <FaInstagram className="text-white w-4 h-4" />
              </div>
              <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                <FiFacebook className="text-white w-4 h-4" />
              </div>
              <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                <RiLinkedinLine className="text-white w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Column 2 and 3: Explore Section */}
          <div className="col-span-2">
            <h1 className=" text-3xl font-thin">Explore</h1>
            <div className="w-1/2 sm:w-full grid grid-col-1 sm:grid-cols-2 gap-10 mt-6">
              {/* Column 2 Left */}
              <div className="mt-5 flex flex-col gap-3">
                <p className="flex gap-4 sm:gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400">Home</span>
                </p>
                <p className="flex gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400">Services</span>
                </p>
                <p className="flex gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400 text-wrap sm:whitespace-nowrap">
                    Municipal Technologies
                  </span>
                </p>
                <p className="flex gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400">VOIP Solutions</span>
                </p>
                <p className="flex gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400 text-wrap sm:whitespace-nowrap">
                    Router & Firewall Installations
                  </span>
                </p>
                <p className="flex gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400 text-wrap sm:whitespace-nowrap">
                    Server Maintenance & Monitoring
                  </span>
                </p>
              </div>
              {/* Column 3 Right */}
              <div className="mt-5 flex flex-col gap-3">
                <p className="flex gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400">About Us</span>
                </p>
                <p className="flex gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400">Cloud Hosting</span>
                </p>
                <p className="flex gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400 text-wrap sm:whitespace-nowrap">
                    Cloud Video Surveillance
                  </span>
                </p>
                <p className="flex gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400 whitespace-nowrap">
                    Network Design & Cabling
                  </span>
                </p>
                <p className="flex gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400 whitespace-nowrap">
                    Desktop Maintenance
                  </span>
                </p>
                <p className="flex gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400 whitespace-nowrap">
                    Data Center Management
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl sm:mr-36">Contact Us</h1>
            <div className="mt-10 w-full flex mx-10 sm:mx-0 flex-col gap-y-4">
              <p className="flex gap-2 items-center cursor-pointer">
                <Image src="/phone.png" alt="phone" width={10} height={10} />
                <span className="text-sm cursor-default">(123) 456-7890</span>
              </p>
              <Separator className="w-[120%] bg-black/20 ml-auto mt-2" />
              <p className="flex gap-2 items-center cursor-pointer">
                <Image src="/email.png" alt="email" width={10} height={10} />
                <span className="text-sm cursor-default whitespace-nowrap">info@clearteksystems.com</span>
              </p>
              <Separator className="w-[120%] bg-black/20 ml-auto mt-2" />
              <p className="flex gap-2 items-center cursor-pointer">
                <Image src="/location.png" alt="location" width={10} height={10} />
                <span className="text-sm cursor-default whitespace-nowrap line-clamp-2">5001 State Highway 23, Suite 3 #112, Oneonta, NY 13820</span>
              </p>
              <Separator className="w-[120%] bg-black/20 ml-auto mt-2" />
            </div>
          </div>
        </div>
      </section>

          <p className="w-full  sm:text-center py-4 text-sm sm:text-1xl"><span className="font-extralight">Copyright &copy;2025 by</span> <strong>ClearTek Systems</strong></p>
        </footer>
  )
}

export default Footer