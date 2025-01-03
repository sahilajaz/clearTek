import React from 'react'
import ServiceCard from './ServiceCard'

const OurServiceSection = () => {
  return (
    <section className='w-[600px] sm:w-full 2xl:w-[100%] border-t-4 border-[#0060de]'>
        <div className='w-full text-center mt-10'>
        <h1 className='text-[#1b2635] text-[30px]  sm:text-[47px] mr-12 sm:mr-0'>Our Services</h1>
        <div className='cards  sm:mr-52 md:mr-32 lg:mr-1 2xl:mr-0 2xl:ml-72 px-24'>
          <ServiceCard/>
        </div>
        </div>
       </section>
  )
}

export default OurServiceSection
