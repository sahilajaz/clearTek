import Image from 'next/image'
import React from 'react'


const AboutUsOnHome = () => {
  return (
    <section className='w-[500px] sm:w-full mt-16'>
        <div className='bg-[url("/bgyellow.webp")] py-4 mx-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
                <div>
                <section>
                    <h1 className='text-4xl font-extralight ml-16 mb-4 text-wrap'>About Us</h1>
                    <p className=' mx-16 leading-8 text-justify'>Welcome to ClearTek, where innovation meets excellence in software development. 
                        We are a team of passionate professionals dedicated to helping small technology businesses thrive in today's digital 
                        landscape. </p>
                </section>
                <section className='mt-7'>
                    <h1 className='text-4xl font-extralight ml-16 mb-4'>Our Mission</h1>
                    <p className=' mx-16 leading-8 text-justify'>At ClearTek Systems, our mission is simple: to provide top-notch software solutions that empower our clients to achieve their business goals. We believe in leveraging the latest technologies and best practices to deliver innovative and reliable solutions tailored to meet the unique needs of each client.</p>
                </section>
                </div>
                <div className='image-div'>
                    <Image src="/abouthome.png" alt="home-img" width={900} height={900}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUsOnHome
