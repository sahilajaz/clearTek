'use client'
import React, { useState } from 'react'
import { useToast } from "@/hooks/use-toast"
import emailjs from '@emailjs/browser'


const Contact = () => {

  const [loading, setLoading] = useState(false)
        const { toast } = useToast()
        const [form , setForm] = useState({
          firstName : '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: ''
        })
  
        const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          if (!form.firstName || !form.lastName || !form.email || !form.phoneNumber || !form.message) {
            toast({
              title: 'Details missing',
              description: 'Please fill all the details',
              className: 'bg-black text-white mb-16'
            })
            return
          }
          try {
            setLoading(true)
              await emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID as string , process.env.NEXT_PUBLIC_TEMPLATE_ID as string, {
                from_name: `${form.firstName} ${form.lastName}`,
                to_name: 'clearTek Systems', 
                to_email: 'sahil_2022bece049@nitsir.ac.in',
                message: form.message,
                from_email: form.email,
              } ,process.env.NEXT_PUBLIC_PUBLICK_KEY as string)
        
              setLoading(false)
              toast({
                title: 'Message sent successfully',
                description: 'Message have beeen sent successfully',
                className: 'bg-lime-500 text-white mb-16'
              })
              setForm({
                firstName : '',
                lastName: '',
                email: '',
                phoneNumber: '',
                message: ''
            })
          } catch (error) {
            setLoading(false)
            console.log(error)
            toast({
              title: 'Something Went Wrong',
              description: 'Please try again later',
              className: 'bg-red-500 text-white mb-16'
            })
          } 
        }

  return (
    <section className="form-section md:w-[1200px] mx-auto mt-20">
      <div className='py-4'>
        <h1 className='text-white text-2xl sm:text-5xl py-10 px-10 sm:px-0'>Get in Touch</h1>
        <p className='text-white leading-8 sm:leading-10 px-8 sm:px-2'>Discover our services and let us know how we can assist your business. Reach out and explore the possibilities with us. Don’t hesitate to choose ClearTek Systems for your technology needs. We are committed to delivering innovative solutions that drive growth and efficiency. Whether you’re a small startup or an established enterprise, our team is here to help you achieve your goals. Experience the ClearTek difference today and take your business to the next level.</p>
      </div>
        <div className='relative bg-[url("/contactimage.avif")] w-80 md:w-[1200px] mx-auto h-[610px] mt-10'>
          <div className="absolute inset-0 bg-black/40"/>
          <div className="w-full h-full z-30 flex flex-col sm:pl-[100px] lg:pl-[600px] pt-20 sm:pt-28 md:pt-20 lg:pt-32  gap-10">
            <h1 className="text-white z-30 font-semibold text-sm lg:text-4xl mx-5 md:mx-2 lg:mx-5">
              Get In Touch With Us!
            </h1>
             <form className="z-30 grid grid-cols-2 gap-9 md:gap-6 lg:gap-8 w-[250px] sm:w-full px-4 lg:px-5" onSubmit={handleSubmit}>
              <input className="z-30 inputFiled md:w-full lg:w-full py-3 px-1" placeholder="First Name" value={form.firstName}
              onChange={(e) => setForm({...form , firstName: e.target.value})}
              />
              <input className="z-30 inputFiled w-full py-3 px-1" placeholder="Last Name" value={form.lastName}
                onChange={(e) => setForm({...form , lastName : e.target.value})}
              />
              <input type="email"  required className="inputFiled w-full py-3 px-1" placeholder="Your Email" value={form.email}
                onChange={(e) => setForm({...form , email : e.target.value})}
              />
              <input className="inputFiled w-full py-3 px-1" placeholder="Your Phone Number" value={form.phoneNumber}
                onChange={(e) => setForm({...form , phoneNumber: e.target.value})}
              />
              <textarea
                className="z-30 inputFiled w-full py-3 px-1 col-span-2"
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({...form , message: e.target.value})}
              />
              <button type="submit" className="z-30 w-ful sm:w-1/2 bg-[#0d3e82] px-[16px] py-[10px] rounded-sm  sm:py-[8px] sm:rounded-xl">
              {loading ? 'Sending...' : 'Send'}
              </button>
             </form>
          </div>
        </div>
      </section>
      
  )
}

export default Contact
