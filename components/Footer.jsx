"use client"

import { Button } from "./ui/button"



const Footer = () => {
  
 
  return (
    <footer className="mt-16">
      <section className="form-section mx-20">
        <div className='bg-[url("/formimg.png")] w-full h-[610px] '>
          <div className="w-full h-full flex flex-col items-center pl-80 pt-32  gap-10">
            <h1 className="text-white font-semibold text-4xl mr-20">
              Get In Touch With Us!
            </h1>
             <form className="grid grid-cols-2 gap-8 full">
              <input className="inputFiled w-full py-3 px-1" placeholder="First Name"/>
              <input className="inputFiled w-full py-3 px-1" placeholder="Last Name"/>
              <input className="inputFiled w-full py-3 px-1" placeholder="Your Email"/>
              <input className="inputFiled w-full py-3 px-1" placeholder="Your Phone Number"/>
              <textarea
                className="inputFiled w-full py-3 px-1 col-span-2"
                placeholder="Your Message"
              />
              <Button>Send</Button>
             </form>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
