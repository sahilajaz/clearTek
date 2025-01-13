import { FC } from "react"
import Image from "next/image"
import Link from "next/link"


interface FooterProps {
  showContactUs?: boolean
}
const Footer : FC<FooterProps> = ({ showContactUs = true }) => {
      

  return (
    <>
    { showContactUs && (<footer className=" mt-16"> 
    
      
            <section className="w-full mt-10 border-t-2 border-b-2">
        <div className="w-[400px] md:w-[1200px] mx-auto grid grid-col-1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 gap-10 py-16 px-10 sm:px-0 items-center">
          {/* Column 1: Social Media */}
          <div className="social-media">
            <Image src="/logo1.png" alt="pic" width={190} height={190} className="rounded-xl"/>
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
            <h1 className="text-3xl sm:-mt-20 text-white">Contact Us</h1>
              <Link href="contact" className="text-white  font-bold mt-10 w-full">Get In Touch With Us</Link>
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