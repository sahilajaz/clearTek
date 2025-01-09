import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
     <section className='sm:w-full mt-20'>
            <section className='w-full py-5 mb-7'>
                <div className='md:w-[1200px] mx-auto'>
                <h1 className='text-white text-xl sm:text-5xl py-5 ml-10'>Welcome to ClearTek</h1>
                <p className='text-white  leading-9 sm:text-justify ml-1 px-10'>where innovation meets excellence in software development. We are a team of passionate professionals dedicated to helping small technology businesses thrive in today&apos;s digital landscape.</p>
                </div>
            </section>
            <div className=' md:w-[1200px] mx-auto py-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
                    <div>
                    <section>
                        <h1 className='px-14 text-white text-xl sm:text-5xl font-extralight mb-4 text-wrap'>About Us</h1>
                        <p className='text-white mx-3 mr-8 px-10 leading-8 sm:text-justify text-sm'>Welcome to ClearTek, where innovation meets excellence in software development. 
                            We are a team of passionate professionals dedicated to helping small technology businesses thrive in today's digital 
                            landscape. </p>
                    </section>
                    <section className='mt-7'>
                        <h1 className='text-white px-14 text-xl sm:text-5xl font-extralight mb-4'>Our Mission</h1>
                        <p className='text-white mx-3 px-10 mr-8 leading-8 sm:text-justify mb-10 sm:mb-0'>At ClearTek Systems, our mission is simple: to provide top-notch software solutions that empower our clients to achieve their business goals. We believe in leveraging the latest technologies and best practices to deliver innovative and reliable solutions tailored to meet the unique needs of each client.</p>
                    </section>
                    </div>
                    <div className='image-div'>
                        <Image src="/abouthome.png" alt="home-img" width={900} height={900}/>
                    </div>
                </div>
            </div>
            <div className='w-full '>
              <div className='md:w-[1200px] mx-auto py-3'>
                <h1 className='text-white text-xl sm:text-5xl py-5 ml-10'>Ready To Partner With Us?</h1>
                <p className='text-white text-xl leading-10 sm:text-justify ml-1  px-10'>Whether you&apos;re a startup looking to build a groundbreaking application or an established business in need of digital transformation, we're here to help. Contact us today to learn more about how we can help your business succeed.</p>
              </div>
            </div>
        </section>
  )
}

export default About
