"use client"
import { FC } from "react"
import Image from "next/image"
import { Button } from "./ui/button"
import { Separator } from "@/components/ui/separator"

interface FooterProps {
  showContactUs?: Boolean
}
const Footer : FC<FooterProps> = ({ showContactUs = true }) => {
  return (
    <>
    { showContactUs && (<footer className=" mt-16"> 
    
      <section className="form-section md:w-[1200px] mx-auto">
        <div className='bg-[url("/formimg.png")] w-80 md:w-[1200px] mx-auto h-[610px] '>
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
              <Button type="submit" className="w-ful sm:w-1/3 bg-[#0d3e82] px-[20px] py-[10px] rounded-sm sm:px-[9px] sm:py-[17px] sm:rounded-xl">Send</Button>
             </form>
          </div>
        </div>
      </section>
      
            <section className="w-full mt-10 border-t-2 border-b-2">
        <div className="w-[400px] md:w-[1200px] mx-auto grid grid-col-1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 gap-10 py-16 px-10 sm:px-0 items-center">
          {/* Column 1: Social Media */}
          <div className="social-media">
            <Image src="/logo.png" alt="pic" width={200} height={200} />
            {/* <p className="text-3xl font-thin">Follow us</p>
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
            </div> */}
          </div>

          {/* Column 2 and 3: Explore Section */}
          <div className="col-span-2">
            <h1 className="text-white text-3xl font-thin">Explore</h1>
            <div className="w-1/2 sm:w-full grid grid-col-1 sm:grid-cols-2 gap-10 mt-6">
              {/* Column 2 Left */}
              <div className="mt-5 flex flex-col gap-3">
                <p className="flex gap-4 sm:gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400 text-white leading-6">Custom Software Development</span>
                </p>
                <p className="flex gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400 text-white leading-6">Data Migrations & Cloud Solutions</span>
                </p>
                <p className="flex gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400 text-wrap sm:whitespace-nowrap text-white leading-6">
                  ETL Pipelines Design & Implementation
                  </span>
                </p>
              </div>
              {/* Column 3 Right */}
              <div className="mt-5 flex flex-col gap-3">
              <p className="flex gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400 text-white leading-6">Microservices Architecture</span>
                </p>
                <p className="flex gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400 text-wrap sm:whitespace-nowrap text-white leading-6">
                  DevOps Consulting
                  </span>
                </p>
                <p className="flex gap-2 items-center cursor-pointer">
                  <Image src="/right.png" alt="right" width={7} height={7} />
                  <span className="text-sm hover:text-blue-400 text-wrap sm:whitespace-nowrap text-white leading-6">
                  Dashboard Development
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="w-full flex flex-col">
            <h1 className="text-3xl text-white">Contact Us</h1>
            <div className="mt-10 w-full flex  sm:mx-0 flex-col gap-y-4">
              <p className="flex gap-2 items-center cursor-pointer">
                <Image src="/phone.png" alt="phone" width={10} height={10} />
                <span className="text-sm cursor-default text-white">(123) 456-7890</span>
              </p>
              <Separator className="w-[120%] bg-white  mt-2" />
              <p className="flex gap-2 items-center cursor-pointer">
                <Image src="/email.png" alt="email" width={10} height={10} />
                <span className="text-sm cursor-default whitespace-nowrap text-white">info@clearteksystems.com</span>
              </p>
              <Separator className="w-[120%] bg-white ml-auto mt-2" />
            </div>
          </div>
        </div>
      </section>

          <p className="md:w-[1200px] w-[400px] mx-auto sm:text-center py-4 text-sm sm:text-xl px-6 sm:px-0"><span className="font-extralight text-white">Copyright &copy;2025 by</span> <strong className="text-white">ClearTek Systems</strong></p>
        </footer> 
   ) }
   </>
  )
}

export default Footer